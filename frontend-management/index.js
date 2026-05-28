/* ==========================================================================
   APP ENGINE & INTERACTION LOGIC (NHÀ XANH MANAGEMENT DASHBOARD)
   ========================================================================== */

const API_BASE = '/api'; // Proxied to localhost:3000 by server.js

// Global State
let currentUser = null;
let allUsers = [];
let allRooms = [];
let allContracts = [];
let allInvoices = [];
let allMaintenance = [];

// Init on load
document.addEventListener('DOMContentLoaded', () => {
  initAuth();
  initNavigation();
  initFormCalculations();
  setupModalHandlers();
  
  // Refresh button click
  document.getElementById('refresh-data-btn').addEventListener('click', () => {
    refreshAllData();
  });
});

/* ==================== TOAST NOTIFICATION ==================== */
function showToast(message, isError = false) {
  const toast = document.getElementById('global-toast');
  const icon = toast.querySelector('.toast-icon');
  const msgEl = toast.querySelector('.toast-message');

  msgEl.textContent = message;
  if (isError) {
    toast.classList.add('toast-error');
    icon.className = 'toast-icon fa-solid fa-circle-exclamation';
  } else {
    toast.classList.remove('toast-error');
    icon.className = 'toast-icon fa-solid fa-circle-check';
  }

  toast.classList.add('active');
  setTimeout(() => {
    toast.classList.remove('active');
  }, 3500);
}

/* ==================== API HELPER WITH AUTH ==================== */
async function apiCall(endpoint, options = {}) {
  const token = localStorage.getItem('token');
  const headers = {
    'Content-Type': 'application/json',
    ...(token ? { 'Authorization': `Bearer ${token}` } : {}),
    ...options.headers
  };

  const response = await fetch(`${API_BASE}${endpoint}`, {
    ...options,
    headers
  });

  if (response.status === 401) {
    // Session expired or unauthenticated
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    initAuth();
    throw new Error('Phiên đăng nhập đã hết hạn. Vui lòng đăng nhập lại.');
  }

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || 'Có lỗi xảy ra khi gọi API.');
  }
  return data;
}

/* ==================== AUTHENTICATION ==================== */
function initAuth() {
  const token = localStorage.getItem('token');
  const userJson = localStorage.getItem('user');

  const portal = document.getElementById('auth-portal');
  const layout = document.getElementById('app-layout');

  if (token && userJson) {
    currentUser = JSON.parse(userJson);
    portal.style.display = 'none';
    layout.style.display = 'grid';
    
    // Set profile sidebar info
    document.getElementById('sidebar-username').textContent = currentUser.fullName || currentUser.email;
    const roleBadge = document.getElementById('sidebar-role');
    roleBadge.textContent = currentUser.role;
    roleBadge.className = `badge badge-${currentUser.role.toLowerCase()}`;
    document.getElementById('sidebar-avatar').textContent = (currentUser.fullName || currentUser.email).substring(0, 2).toUpperCase();

    // Populate dashboard role details
    document.getElementById('dash-curr-role').textContent = currentUser.role;
    document.getElementById('dash-curr-id').textContent = currentUser.id;
    document.getElementById('dash-curr-kyc').className = currentUser.isKycVerified ? 'badge badge-success' : 'badge badge-danger';
    document.getElementById('dash-curr-kyc').textContent = currentUser.isKycVerified ? 'Đã xác minh' : 'Chưa xác minh';
    
    refreshAllData();
  } else {
    portal.style.display = 'flex';
    layout.style.display = 'none';
    currentUser = null;
  }
}

// Switch between Register and Login tabs
document.getElementById('tab-login-btn').addEventListener('click', () => {
  document.getElementById('tab-login-btn').classList.add('active');
  document.getElementById('tab-register-btn').classList.remove('active');
  document.getElementById('login-form').classList.add('active-form');
  document.getElementById('register-form').classList.remove('active-form');
  document.getElementById('auth-alert').style.display = 'none';
});

document.getElementById('tab-register-btn').addEventListener('click', () => {
  document.getElementById('tab-register-btn').classList.add('active');
  document.getElementById('tab-login-btn').classList.remove('active');
  document.getElementById('register-form').classList.add('active-form');
  document.getElementById('login-form').classList.remove('active-form');
  document.getElementById('auth-alert').style.display = 'none';
});

// Login Form Submit
document.getElementById('login-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;
  const alertEl = document.getElementById('auth-alert');

  try {
    const data = await apiCall('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password })
    });

    localStorage.setItem('token', data.access_token);
    // Fetch current user details since login only returns token
    const users = await apiCall('/users');
    const matchingUser = users.find(u => u.email.toLowerCase() === email.toLowerCase());
    
    if (matchingUser) {
      localStorage.setItem('user', JSON.stringify(matchingUser));
    } else {
      // Fallback details if not found (or user matches default info)
      localStorage.setItem('user', JSON.stringify({ email, role: 'ADMIN', fullName: 'Quản trị viên', id: 'unknown-uuid', isKycVerified: true }));
    }

    alertEl.style.display = 'none';
    showToast('Đăng nhập thành công!');
    initAuth();
  } catch (err) {
    alertEl.textContent = err.message;
    alertEl.style.display = 'block';
  }
});

// Register Form Submit
document.getElementById('register-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const alertEl = document.getElementById('auth-alert');
  
  const payload = {
    fullName: document.getElementById('reg-fullName').value,
    email: document.getElementById('reg-email').value,
    phone: document.getElementById('reg-phone').value || undefined,
    password: document.getElementById('reg-password').value,
    role: document.getElementById('reg-role').value
  };

  try {
    await apiCall('/auth/register', {
      method: 'POST',
      body: JSON.stringify(payload)
    });

    showToast('Đăng ký tài khoản thành công! Hãy đăng nhập.');
    document.getElementById('tab-login-btn').click();
    document.getElementById('login-email').value = payload.email;
    document.getElementById('login-password').value = '';
  } catch (err) {
    alertEl.textContent = err.message;
    alertEl.style.display = 'block';
  }
});

// Logout Action
document.getElementById('logout-btn').addEventListener('click', () => {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
  showToast('Đã đăng xuất khỏi hệ thống.');
  initAuth();
});

/* ==================== NAVIGATION ==================== */
function initNavigation() {
  const navItems = document.querySelectorAll('.nav-item');
  const sections = document.querySelectorAll('.page-section');

  navItems.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      
      const targetId = item.getAttribute('data-target');
      
      // Update sidebar state
      navItems.forEach(nav => nav.classList.remove('active'));
      item.classList.add('active');

      // Update section display
      sections.forEach(sec => sec.classList.remove('active'));
      const activeSec = document.getElementById(targetId);
      activeSec.classList.add('active');

      // Update headers
      const title = item.querySelector('span').textContent;
      document.getElementById('current-page-title').textContent = title;
      document.getElementById('current-page-subtitle').textContent = `Quản lý dữ liệu phân hệ ${title}`;

      // Refresh page specific data on open
      refreshSpecificPageData(targetId);
    });
  });
}

function refreshSpecificPageData(pageId) {
  if (pageId === 'page-dashboard') {
    refreshAllData();
  } else if (pageId === 'page-users') {
    fetchUsers();
  } else if (pageId === 'page-rooms') {
    fetchRooms();
  } else if (pageId === 'page-contracts') {
    fetchContracts();
  } else if (pageId === 'page-invoices') {
    fetchInvoices();
  } else if (pageId === 'page-maintenance') {
    fetchMaintenance();
  }
}

/* ==================== GLOBAL DATA SYNCHRONIZATION ==================== */
async function refreshAllData() {
  try {
    const connIndicator = document.querySelector('.status-indicator');
    connIndicator.className = 'status-indicator online';

    // Parallel fetch to accelerate dashboard initialization
    const [users, rooms, contracts, invoices, maintenance] = await Promise.all([
      apiCall('/users').catch(() => []),
      apiCall('/properties').catch(() => []),
      apiCall('/contracts').catch(() => []),
      apiCall('/invoices').catch(() => []),
      apiCall('/maintenance-requests').catch(() => [])
    ]);

    allUsers = users;
    allRooms = rooms;
    allContracts = contracts;
    allInvoices = invoices;
    allMaintenance = maintenance;

    // Render Stats
    document.getElementById('stat-users').textContent = users.length;
    document.getElementById('stat-rooms').textContent = rooms.length;
    document.getElementById('stat-contracts').textContent = contracts.length;
    document.getElementById('stat-invoices').textContent = invoices.filter(i => i.status === 'UNPAID' || i.status === 'OVERDUE').length;
    document.getElementById('stat-maintenance').textContent = maintenance.filter(m => m.status === 'PENDING').length;

    // Update details status
    const availableRooms = rooms.filter(r => r.status === 'AVAILABLE').length;
    const rentedRooms = rooms.filter(r => r.status === 'RENTED').length;
    document.getElementById('stat-rooms-detail').textContent = `${availableRooms} trống | ${rentedRooms} đã thuê`;

    const activeContracts = contracts.filter(c => c.status === 'ACTIVE').length;
    document.getElementById('stat-contracts-detail').textContent = `${activeContracts} Đang hoạt động`;

    const totalUnpaid = invoices
      .filter(i => i.status === 'UNPAID' || i.status === 'OVERDUE')
      .reduce((sum, inv) => sum + inv.totalAmount, 0);
    document.getElementById('stat-invoices-detail').textContent = `Tổng nợ: ${formatCurrency(totalUnpaid)}`;

    const pendingMaint = maintenance.filter(m => m.status === 'PENDING').length;
    const inProgressMaint = maintenance.filter(m => m.status === 'IN_PROGRESS').length;
    document.getElementById('stat-maintenance-detail').textContent = `${pendingMaint} yêu cầu mới | ${inProgressMaint} đang sửa`;

    // Render Type distributions
    calculateRoomDistribution(rooms);

    // Refresh dynamic dropdown options in modals
    populateModalSelectors();

  } catch (err) {
    const connIndicator = document.querySelector('.status-indicator');
    connIndicator.className = 'status-indicator offline';
    showToast(`Không thể kết nối đến backend: ${err.message}`, true);
  }
}

// Helpers
function formatCurrency(amount) {
  return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount);
}

function formatDate(dateString) {
  if (!dateString) return '-';
  const d = new Date(dateString);
  return d.toLocaleDateString('vi-VN');
}

function calculateRoomDistribution(rooms) {
  const total = rooms.length;
  if (total === 0) return;

  const countType = (type) => rooms.filter(r => r.type === type).length;

  const roomCount = countType('ROOM');
  const miniCount = countType('MINI_APARTMENT');
  const houseCount = countType('WHOLE_HOUSE');
  const dormCount = countType('DORMITORY');

  const getPercent = (count) => Math.round((count / total) * 100);

  // Update texts
  document.getElementById('dist-room-percent').textContent = `${getPercent(roomCount)}% (${roomCount})`;
  document.getElementById('dist-mini-percent').textContent = `${getPercent(miniCount)}% (${miniCount})`;
  document.getElementById('dist-house-percent').textContent = `${getPercent(houseCount)}% (${houseCount})`;
  document.getElementById('dist-dorm-percent').textContent = `${getPercent(dormCount)}% (${dormCount})`;

  // Update bars
  document.getElementById('dist-room-bar').style.width = `${getPercent(roomCount)}%`;
  document.getElementById('dist-mini-bar').style.width = `${getPercent(miniCount)}%`;
  document.getElementById('dist-house-bar').style.width = `${getPercent(houseCount)}%`;
  document.getElementById('dist-dorm-bar').style.width = `${getPercent(dormCount)}%`;
}

function populateModalSelectors() {
  const tenantSelect = document.getElementById('contract-tenantId');
  const propertySelect = document.getElementById('contract-propertyId');
  const invoiceContractSelect = document.getElementById('invoice-contractId');
  const maintPropertySelect = document.getElementById('maintenance-propertyId');

  // Filter users with TENANT role
  const tenants = allUsers.filter(u => u.role === 'TENANT');
  tenantSelect.innerHTML = tenants.map(t => `<option value="${t.id}">${t.fullName} (${t.email})</option>`).join('');

  // Filter properties
  propertySelect.innerHTML = allRooms.map(r => `<option value="${r.id}">${r.title} - ${r.address} (${formatCurrency(r.price)})</option>`).join('');
  maintPropertySelect.innerHTML = allRooms.map(r => `<option value="${r.id}">${r.title} - ${r.address}</option>`).join('');

  // Filter contracts
  invoiceContractSelect.innerHTML = allContracts.map(c => {
    const tenant = allUsers.find(u => u.id === c.tenantId);
    const room = allRooms.find(r => r.id === c.propertyId);
    return `<option value="${c.id}">${room ? room.title : 'Phòng'} - ${tenant ? tenant.fullName : 'Khách'} (HĐ: ${c.id.substring(0,8)})</option>`;
  }).join('');
}

/* ==================== USERS CRUD ==================== */
async function fetchUsers() {
  try {
    const users = await apiCall('/users');
    allUsers = users;
    renderUsersTable(users);
  } catch (err) {
    showToast(err.message, true);
  }
}

function renderUsersTable(users) {
  const tbody = document.getElementById('users-table-body');
  tbody.innerHTML = '';

  if (users.length === 0) {
    tbody.innerHTML = `<tr><td colspan="7" style="text-align: center; color: var(--text-muted);">Không có dữ liệu người dùng nào.</td></tr>`;
    return;
  }

  users.forEach(u => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td><strong>${u.fullName || '-'}</strong></td>
      <td>${u.email}</td>
      <td>${u.phone || '-'}</td>
      <td><span class="badge badge-${u.role.toLowerCase()}">${u.role}</span></td>
      <td>
        <span class="badge ${u.isKycVerified ? 'badge-success' : 'badge-danger'}">
          ${u.isKycVerified ? 'Đã xác minh' : 'Chưa'}
        </span>
      </td>
      <td>${formatDate(u.createdAt)}</td>
      <td>
        <div class="actions-cell">
          <button class="btn btn-outline btn-circle btn-xs edit-user-btn" data-id="${u.id}" title="Sửa">
            <i class="fa-solid fa-pen"></i>
          </button>
          <button class="btn btn-danger-outline btn-circle btn-xs delete-user-btn" data-id="${u.id}" title="Xóa">
            <i class="fa-solid fa-trash"></i>
          </button>
        </div>
      </td>
    `;
    tbody.appendChild(tr);
  });

  // Attach button triggers
  tbody.querySelectorAll('.edit-user-btn').forEach(btn => {
    btn.addEventListener('click', () => openUserModal(btn.getAttribute('data-id')));
  });
  tbody.querySelectorAll('.delete-user-btn').forEach(btn => {
    btn.addEventListener('click', () => deleteUser(btn.getAttribute('data-id')));
  });
}

// User modal operations
function openUserModal(userId = null) {
  const modal = document.getElementById('modal-user');
  const form = document.getElementById('user-form');
  const title = document.getElementById('user-modal-title');
  const passContainer = document.getElementById('user-password-container');
  const idHidden = document.getElementById('user-id-hidden');

  form.reset();

  if (userId) {
    // Edit Mode
    title.textContent = 'Chỉnh sửa thông tin người dùng';
    passContainer.style.display = 'none'; // Backend update-user dto typically omits password or handles it elsewhere
    document.getElementById('user-password').removeAttribute('required');

    const u = allUsers.find(user => user.id === userId);
    if (u) {
      idHidden.value = u.id;
      document.getElementById('user-fullName').value = u.fullName;
      document.getElementById('user-email').value = u.email;
      document.getElementById('user-phone').value = u.phone || '';
      document.getElementById('user-role').value = u.role;
      document.getElementById('user-kyc').checked = u.isKycVerified;
    }
  } else {
    // Create Mode
    title.textContent = 'Thêm người dùng mới';
    passContainer.style.display = 'block';
    document.getElementById('user-password').setAttribute('required', 'true');
    idHidden.value = '';
  }

  modal.classList.add('active');
}

document.getElementById('add-user-btn').addEventListener('click', () => openUserModal());

document.getElementById('user-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const id = document.getElementById('user-id-hidden').value;

  const payload = {
    fullName: document.getElementById('user-fullName').value,
    email: document.getElementById('user-email').value,
    phone: document.getElementById('user-phone').value || null,
    role: document.getElementById('user-role').value,
    isKycVerified: document.getElementById('user-kyc').checked
  };

  const isEdit = id !== '';
  if (!isEdit) {
    payload.password = document.getElementById('user-password').value;
  }

  try {
    if (isEdit) {
      await apiCall(`/users/${id}`, {
        method: 'PATCH',
        body: JSON.stringify(payload)
      });
      showToast('Đã cập nhật thông tin người dùng thành công!');
    } else {
      await apiCall('/users', {
        method: 'POST',
        body: JSON.stringify(payload)
      });
      showToast('Đã tạo người dùng mới thành công!');
    }

    closeActiveModal();
    fetchUsers();
    refreshAllData();
  } catch (err) {
    showToast(err.message, true);
  }
});

async function deleteUser(id) {
  if (!confirm('Bạn có chắc chắn muốn xóa người dùng này?')) return;
  try {
    await apiCall(`/users/${id}`, { method: 'DELETE' });
    showToast('Đã xóa người dùng thành công.');
    fetchUsers();
    refreshAllData();
  } catch (err) {
    showToast(err.message, true);
  }
}

// User filtering search box
document.getElementById('search-users-input').addEventListener('input', (e) => {
  const query = e.target.value.toLowerCase();
  const filtered = allUsers.filter(u => 
    (u.fullName && u.fullName.toLowerCase().includes(query)) ||
    u.email.toLowerCase().includes(query) ||
    (u.phone && u.phone.includes(query))
  );
  renderUsersTable(filtered);
});


/* ==================== PROPERTIES (ROOMS) CRUD ==================== */
async function fetchRooms() {
  try {
    const rooms = await apiCall('/properties');
    allRooms = rooms;
    renderRoomsTable(rooms);
  } catch (err) {
    showToast(err.message, true);
  }
}

function renderRoomsTable(rooms) {
  const tbody = document.getElementById('rooms-table-body');
  tbody.innerHTML = '';

  if (rooms.length === 0) {
    tbody.innerHTML = `<tr><td colspan="8" style="text-align: center; color: var(--text-muted);">Không có dữ liệu phòng trọ nào.</td></tr>`;
    return;
  }

  rooms.forEach(r => {
    let statusClass = 'badge-success';
    if (r.status === 'RENTED') statusClass = 'badge-tenant';
    if (r.status === 'MAINTENANCE') statusClass = 'badge-warn';

    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td><strong>${r.title}</strong></td>
      <td><span class="font-sm" style="max-width: 200px; display: inline-block; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${r.address}</span></td>
      <td><span class="badge badge-muted">${r.type}</span></td>
      <td class="font-bold text-emerald">${formatCurrency(r.price)}</td>
      <td>${r.area} m²</td>
      <td>${formatCurrency(r.depositAmount)}</td>
      <td><span class="badge ${statusClass}">${r.status}</span></td>
      <td>
        <div class="actions-cell">
          <button class="btn btn-outline btn-circle btn-xs edit-room-btn" data-id="${r.id}" title="Sửa">
            <i class="fa-solid fa-pen"></i>
          </button>
          <button class="btn btn-danger-outline btn-circle btn-xs delete-room-btn" data-id="${r.id}" title="Xóa">
            <i class="fa-solid fa-trash"></i>
          </button>
        </div>
      </td>
    `;
    tbody.appendChild(tr);
  });

  tbody.querySelectorAll('.edit-room-btn').forEach(btn => {
    btn.addEventListener('click', () => openRoomModal(btn.getAttribute('data-id')));
  });
  tbody.querySelectorAll('.delete-room-btn').forEach(btn => {
    btn.addEventListener('click', () => deleteRoom(btn.getAttribute('data-id')));
  });
}

function openRoomModal(roomId = null) {
  const modal = document.getElementById('modal-room');
  const form = document.getElementById('room-form');
  const title = document.getElementById('room-modal-title');
  const idHidden = document.getElementById('room-id-hidden');

  form.reset();

  if (roomId) {
    title.textContent = 'Chỉnh sửa phòng trọ';
    const r = allRooms.find(room => room.id === roomId);
    if (r) {
      idHidden.value = r.id;
      document.getElementById('room-title').value = r.title;
      document.getElementById('room-description').value = r.description || '';
      document.getElementById('room-address').value = r.address;
      document.getElementById('room-type').value = r.type;
      document.getElementById('room-status').value = r.status;
      document.getElementById('room-price').value = r.price;
      document.getElementById('room-deposit').value = r.depositAmount;
      document.getElementById('room-area').value = r.area;
      document.getElementById('room-lat').value = r.latitude;
      document.getElementById('room-lng').value = r.longitude;
      document.getElementById('room-amenities').value = r.amenities ? r.amenities.join(', ') : '';
    }
  } else {
    title.textContent = 'Thêm phòng trọ mới';
    idHidden.value = '';
    // Prefill coordinates for easier mock insertion
    document.getElementById('room-lat').value = 10.7626;
    document.getElementById('room-lng').value = 106.6601;
  }

  modal.classList.add('active');
}

document.getElementById('add-room-btn').addEventListener('click', () => openRoomModal());

document.getElementById('room-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const id = document.getElementById('room-id-hidden').value;

  const rawAmenities = document.getElementById('room-amenities').value;
  const amenitiesList = rawAmenities ? rawAmenities.split(',').map(item => item.trim()).filter(Boolean) : [];

  // Parse fields explicitly to float numbers to avoid NestJS validation errors
  const payload = {
    title: document.getElementById('room-title').value,
    description: document.getElementById('room-description').value,
    address: document.getElementById('room-address').value,
    type: document.getElementById('room-type').value,
    status: document.getElementById('room-status').value,
    price: parseFloat(document.getElementById('room-price').value),
    depositAmount: parseFloat(document.getElementById('room-deposit').value),
    area: parseFloat(document.getElementById('room-area').value),
    latitude: parseFloat(document.getElementById('room-lat').value),
    longitude: parseFloat(document.getElementById('room-lng').value),
    amenities: amenitiesList
  };

  const isEdit = id !== '';

  try {
    if (isEdit) {
      await apiCall(`/properties/${id}`, {
        method: 'PATCH',
        body: JSON.stringify(payload)
      });
      showToast('Đã lưu phòng trọ thành công!');
    } else {
      await apiCall('/properties', {
        method: 'POST',
        body: JSON.stringify(payload)
      });
      showToast('Đã thêm phòng trọ mới thành công!');
    }

    closeActiveModal();
    fetchRooms();
    refreshAllData();
  } catch (err) {
    showToast(err.message, true);
  }
});

async function deleteRoom(id) {
  if (!confirm('Bạn có chắc muốn xóa phòng này?')) return;
  try {
    await apiCall(`/properties/${id}`, { method: 'DELETE' });
    showToast('Đã xóa phòng thành công.');
    fetchRooms();
    refreshAllData();
  } catch (err) {
    showToast(err.message, true);
  }
}

// Room list search and filter changes
function applyRoomFilters() {
  const query = document.getElementById('search-rooms-input').value.toLowerCase();
  const typeFilter = document.getElementById('filter-room-type').value;
  const statusFilter = document.getElementById('filter-room-status').value;

  const filtered = allRooms.filter(r => {
    const matchQuery = r.title.toLowerCase().includes(query) || r.address.toLowerCase().includes(query);
    const matchType = typeFilter === 'ALL' || r.type === typeFilter;
    const matchStatus = statusFilter === 'ALL' || r.status === statusFilter;
    return matchQuery && matchType && matchStatus;
  });

  renderRoomsTable(filtered);
}

document.getElementById('search-rooms-input').addEventListener('input', applyRoomFilters);
document.getElementById('filter-room-type').addEventListener('change', applyRoomFilters);
document.getElementById('filter-room-status').addEventListener('change', applyRoomFilters);


/* ==================== CONTRACTS CRUD ==================== */
async function fetchContracts() {
  try {
    const contracts = await apiCall('/contracts');
    allContracts = contracts;
    renderContractsTable(contracts);
  } catch (err) {
    showToast(err.message, true);
  }
}

function renderContractsTable(contracts) {
  const tbody = document.getElementById('contracts-table-body');
  tbody.innerHTML = '';

  if (contracts.length === 0) {
    tbody.innerHTML = `<tr><td colspan="9" style="text-align: center; color: var(--text-muted);">Không có dữ liệu hợp đồng nào.</td></tr>`;
    return;
  }

  contracts.forEach(c => {
    let statusClass = 'badge-warn';
    if (c.status === 'ACTIVE') statusClass = 'badge-success';
    if (c.status === 'EXPIRED') statusClass = 'badge-muted';
    if (c.status === 'TERMINATED') statusClass = 'badge-danger';

    // Resolve tenant and property names from local states if present
    const tenantUser = allUsers.find(u => u.id === c.tenantId);
    const propertyRoom = allRooms.find(r => r.id === c.propertyId);

    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td class="font-mono font-xs">#${c.id.substring(0, 8)}</td>
      <td><strong>${propertyRoom ? propertyRoom.title : 'Mã phòng: ' + c.propertyId.substring(0,8)}</strong></td>
      <td>${tenantUser ? tenantUser.fullName : 'Mã khách: ' + c.tenantId.substring(0,8)}</td>
      <td>${formatDate(c.startDate)}</td>
      <td>${formatDate(c.endDate)}</td>
      <td class="font-bold">${formatCurrency(c.monthlyPrice)}</td>
      <td>${formatCurrency(c.depositAmount)}</td>
      <td><span class="badge ${statusClass}">${c.status}</span></td>
      <td>
        <div class="actions-cell">
          <button class="btn btn-outline btn-circle btn-xs edit-contract-btn" data-id="${c.id}" title="Sửa">
            <i class="fa-solid fa-pen"></i>
          </button>
          <button class="btn btn-danger-outline btn-circle btn-xs delete-contract-btn" data-id="${c.id}" title="Xóa">
            <i class="fa-solid fa-trash"></i>
          </button>
        </div>
      </td>
    `;
    tbody.appendChild(tr);
  });

  tbody.querySelectorAll('.edit-contract-btn').forEach(btn => {
    btn.addEventListener('click', () => openContractModal(btn.getAttribute('data-id')));
  });
  tbody.querySelectorAll('.delete-contract-btn').forEach(btn => {
    btn.addEventListener('click', () => deleteContract(btn.getAttribute('data-id')));
  });
}

function openContractModal(contractId = null) {
  const modal = document.getElementById('modal-contract');
  const form = document.getElementById('contract-form');
  const title = document.getElementById('contract-modal-title');
  const statusContainer = document.getElementById('contract-status-container');
  const idHidden = document.getElementById('contract-id-hidden');

  form.reset();
  
  // Fill property details dynamically if select option changes (set defaults)
  const roomSelector = document.getElementById('contract-propertyId');
  roomSelector.addEventListener('change', () => {
    const selectedRoomId = roomSelector.value;
    const room = allRooms.find(r => r.id === selectedRoomId);
    if (room) {
      document.getElementById('contract-price').value = room.price;
      document.getElementById('contract-deposit').value = room.depositAmount;
    }
  });

  if (contractId) {
    title.textContent = 'Chỉnh sửa hợp đồng';
    statusContainer.style.display = 'block';
    const c = allContracts.find(con => con.id === contractId);
    if (c) {
      idHidden.value = c.id;
      document.getElementById('contract-tenantId').value = c.tenantId;
      document.getElementById('contract-propertyId').value = c.propertyId;
      document.getElementById('contract-startDate').value = c.startDate.split('T')[0];
      document.getElementById('contract-endDate').value = c.endDate.split('T')[0];
      document.getElementById('contract-price').value = c.monthlyPrice;
      document.getElementById('contract-deposit').value = c.depositAmount;
      document.getElementById('contract-status').value = c.status;
      document.getElementById('contract-esign').value = c.eSignatureUrl || '';
    }
  } else {
    title.textContent = 'Lập hợp đồng thuê mới';
    statusContainer.style.display = 'none';
    idHidden.value = '';
    
    // Auto-trigger change on first item
    if (roomSelector.options.length > 0) {
      roomSelector.dispatchEvent(new Event('change'));
    }
  }

  modal.classList.add('active');
}

document.getElementById('add-contract-btn').addEventListener('click', () => openContractModal());

document.getElementById('contract-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const id = document.getElementById('contract-id-hidden').value;

  const payload = {
    tenantId: document.getElementById('contract-tenantId').value,
    propertyId: document.getElementById('contract-propertyId').value,
    startDate: new Date(document.getElementById('contract-startDate').value).toISOString(),
    endDate: new Date(document.getElementById('contract-endDate').value).toISOString(),
    monthlyPrice: parseFloat(document.getElementById('contract-price').value),
    depositAmount: parseFloat(document.getElementById('contract-deposit').value),
    eSignatureUrl: document.getElementById('contract-esign').value || undefined
  };

  const isEdit = id !== '';
  if (isEdit) {
    payload.status = document.getElementById('contract-status').value;
  }

  try {
    if (isEdit) {
      await apiCall(`/contracts/${id}`, {
        method: 'PATCH',
        body: JSON.stringify(payload)
      });
      showToast('Đã lưu hợp đồng thành công!');
    } else {
      await apiCall('/contracts', {
        method: 'POST',
        body: JSON.stringify(payload)
      });
      showToast('Đã tạo hợp đồng thuê mới thành công!');
    }

    closeActiveModal();
    fetchContracts();
    refreshAllData();
  } catch (err) {
    showToast(err.message, true);
  }
});

async function deleteContract(id) {
  if (!confirm('Bạn có chắc chắn muốn xóa hợp đồng này?')) return;
  try {
    await apiCall(`/contracts/${id}`, { method: 'DELETE' });
    showToast('Đã xóa hợp đồng thành công.');
    fetchContracts();
    refreshAllData();
  } catch (err) {
    showToast(err.message, true);
  }
}

// Contract Search
document.getElementById('search-contracts-input').addEventListener('input', (e) => {
  const query = e.target.value.toLowerCase();
  const filtered = allContracts.filter(c => {
    const tenant = allUsers.find(u => u.id === c.tenantId);
    const room = allRooms.find(r => r.id === c.propertyId);
    return c.id.toLowerCase().includes(query) ||
      (tenant && tenant.fullName.toLowerCase().includes(query)) ||
      (room && room.title.toLowerCase().includes(query));
  });
  renderContractsTable(filtered);
});


/* ==================== INVOICES CRUD ==================== */
async function fetchInvoices() {
  try {
    const invoices = await apiCall('/invoices');
    allInvoices = invoices;
    renderInvoicesTable(invoices);
  } catch (err) {
    showToast(err.message, true);
  }
}

function renderInvoicesTable(invoices) {
  const tbody = document.getElementById('invoices-table-body');
  tbody.innerHTML = '';

  if (invoices.length === 0) {
    tbody.innerHTML = `<tr><td colspan="10" style="text-align: center; color: var(--text-muted);">Không có dữ liệu hóa đơn nào.</td></tr>`;
    return;
  }

  invoices.forEach(inv => {
    let statusClass = 'badge-danger';
    if (inv.status === 'PAID') statusClass = 'badge-success';
    if (inv.status === 'OVERDUE') statusClass = 'badge-warn';

    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td class="font-mono font-xs">#${inv.contractId.substring(0,8)}</td>
      <td><strong>${inv.title}</strong></td>
      <td>${formatCurrency(inv.rentAmount)}</td>
      <td>${formatCurrency(inv.electricityAmount)}</td>
      <td>${formatCurrency(inv.waterAmount)}</td>
      <td>${formatCurrency(inv.serviceAmount)}</td>
      <td class="font-bold text-emerald">${formatCurrency(inv.totalAmount)}</td>
      <td>${formatDate(inv.dueDate)}</td>
      <td><span class="badge ${statusClass}">${inv.status}</span></td>
      <td>
        <div class="actions-cell" style="flex-wrap: nowrap;">
          ${inv.status !== 'PAID' ? `
            <button class="btn btn-success btn-xs pay-invoice-trigger-btn" data-id="${inv.id}" data-code="${inv.title}" data-amount="${inv.totalAmount}">
              <i class="fa-solid fa-wallet"></i> Thanh toán
            </button>
          ` : ''}
          <button class="btn btn-outline btn-circle btn-xs edit-invoice-btn" data-id="${inv.id}" title="Sửa">
            <i class="fa-solid fa-pen"></i>
          </button>
          <button class="btn btn-danger-outline btn-circle btn-xs delete-invoice-btn" data-id="${inv.id}" title="Xóa">
            <i class="fa-solid fa-trash"></i>
          </button>
        </div>
      </td>
    `;
    tbody.appendChild(tr);
  });

  tbody.querySelectorAll('.pay-invoice-trigger-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      openPayInvoiceModal(
        btn.getAttribute('data-id'),
        btn.getAttribute('data-code'),
        btn.getAttribute('data-amount')
      );
    });
  });
  
  tbody.querySelectorAll('.edit-invoice-btn').forEach(btn => {
    btn.addEventListener('click', () => openInvoiceModal(btn.getAttribute('data-id')));
  });
  tbody.querySelectorAll('.delete-invoice-btn').forEach(btn => {
    btn.addEventListener('click', () => deleteInvoice(btn.getAttribute('data-id')));
  });
}

// Invoices input calculations
function initFormCalculations() {
  const calculateTotal = () => {
    const rent = parseFloat(document.getElementById('invoice-rent').value) || 0;
    const elec = parseFloat(document.getElementById('invoice-electricity').value) || 0;
    const water = parseFloat(document.getElementById('invoice-water').value) || 0;
    const service = parseFloat(document.getElementById('invoice-service').value) || 0;

    const total = rent + elec + water + service;
    document.getElementById('invoice-total').value = total;
  };

  document.getElementById('invoice-rent').addEventListener('input', calculateTotal);
  document.getElementById('invoice-electricity').addEventListener('input', calculateTotal);
  document.getElementById('invoice-water').addEventListener('input', calculateTotal);
  document.getElementById('invoice-service').addEventListener('input', calculateTotal);
}

function openInvoiceModal(invoiceId = null) {
  const modal = document.getElementById('modal-invoice');
  const form = document.getElementById('invoice-form');
  const title = document.getElementById('invoice-modal-title');
  const statusContainer = document.getElementById('invoice-status-container');
  const idHidden = document.getElementById('invoice-id-hidden');

  form.reset();

  // Populate rent amount dynamically from contract settings
  const contractSelector = document.getElementById('invoice-contractId');
  contractSelector.addEventListener('change', () => {
    const selectedContractId = contractSelector.value;
    const contract = allContracts.find(c => c.id === selectedContractId);
    if (contract) {
      document.getElementById('invoice-rent').value = contract.monthlyPrice;
      // Trigger calculation
      document.getElementById('invoice-rent').dispatchEvent(new Event('input'));
    }
  });

  if (invoiceId) {
    title.textContent = 'Chỉnh sửa hóa đơn';
    statusContainer.style.display = 'block';
    const inv = allInvoices.find(invoice => invoice.id === invoiceId);
    if (inv) {
      idHidden.value = inv.id;
      document.getElementById('invoice-contractId').value = inv.contractId;
      document.getElementById('invoice-title').value = inv.title;
      document.getElementById('invoice-rent').value = inv.rentAmount;
      document.getElementById('invoice-electricity').value = inv.electricityAmount;
      document.getElementById('invoice-water').value = inv.waterAmount;
      document.getElementById('invoice-service').value = inv.serviceAmount;
      document.getElementById('invoice-total').value = inv.totalAmount;
      document.getElementById('invoice-dueDate').value = inv.dueDate.split('T')[0];
      document.getElementById('invoice-status').value = inv.status;
    }
  } else {
    title.textContent = 'Tạo hóa đơn mới';
    statusContainer.style.display = 'none';
    idHidden.value = '';
    
    // Set default month text in title
    const currentMonth = new Date().getMonth() + 1;
    const currentYear = new Date().getFullYear();
    document.getElementById('invoice-title').value = `Hóa đơn tiền nhà tháng ${currentMonth}/${currentYear}`;
    document.getElementById('invoice-electricity').value = 0;
    document.getElementById('invoice-water').value = 0;
    document.getElementById('invoice-service').value = 0;

    // Trigger change on first contract
    if (contractSelector.options.length > 0) {
      contractSelector.dispatchEvent(new Event('change'));
    }
  }

  modal.classList.add('active');
}

document.getElementById('add-invoice-btn').addEventListener('click', () => openInvoiceModal());

document.getElementById('invoice-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const id = document.getElementById('invoice-id-hidden').value;

  const payload = {
    contractId: document.getElementById('invoice-contractId').value,
    title: document.getElementById('invoice-title').value,
    rentAmount: parseFloat(document.getElementById('invoice-rent').value),
    electricityAmount: parseFloat(document.getElementById('invoice-electricity').value),
    waterAmount: parseFloat(document.getElementById('invoice-water').value),
    serviceAmount: parseFloat(document.getElementById('invoice-service').value),
    totalAmount: parseFloat(document.getElementById('invoice-total').value),
    dueDate: new Date(document.getElementById('invoice-dueDate').value).toISOString()
  };

  const isEdit = id !== '';
  if (isEdit) {
    payload.status = document.getElementById('invoice-status').value;
  }

  try {
    if (isEdit) {
      await apiCall(`/invoices/${id}`, {
        method: 'PATCH',
        body: JSON.stringify(payload)
      });
      showToast('Đã lưu hóa đơn thành công!');
    } else {
      await apiCall('/invoices', {
        method: 'POST',
        body: JSON.stringify(payload)
      });
      showToast('Đã tạo hóa đơn mới thành công!');
    }

    closeActiveModal();
    fetchInvoices();
    refreshAllData();
  } catch (err) {
    showToast(err.message, true);
  }
});

async function deleteInvoice(id) {
  if (!confirm('Bạn có chắc chắn muốn xóa hóa đơn này?')) return;
  try {
    await apiCall(`/invoices/${id}`, { method: 'DELETE' });
    showToast('Đã xóa hóa đơn thành công.');
    fetchInvoices();
    refreshAllData();
  } catch (err) {
    showToast(err.message, true);
  }
}

// Pay invoice processing
function openPayInvoiceModal(id, code, amount) {
  const modal = document.getElementById('modal-pay-invoice');
  document.getElementById('pay-invoice-id').value = id;
  document.getElementById('pay-invoice-code').value = code;
  document.getElementById('pay-invoice-amount').textContent = formatCurrency(parseFloat(amount));
  modal.classList.add('active');
}

document.getElementById('pay-invoice-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const id = document.getElementById('pay-invoice-id').value;
  const paymentMethod = document.getElementById('pay-method').value;

  try {
    await apiCall(`/invoices/${id}/pay`, {
      method: 'PATCH',
      body: JSON.stringify({ paymentMethod })
    });

    showToast('Đã thanh toán hóa đơn thành công!');
    closeActiveModal();
    fetchInvoices();
    refreshAllData();
  } catch (err) {
    showToast(err.message, true);
  }
});

// Search Invoice
document.getElementById('search-invoices-input').addEventListener('input', (e) => {
  const query = e.target.value.toLowerCase();
  const filtered = allInvoices.filter(i => 
    i.title.toLowerCase().includes(query) || i.status.toLowerCase().includes(query)
  );
  renderInvoicesTable(filtered);
});


/* ==================== MAINTENANCE REQUESTS CRUD ==================== */
async function fetchMaintenance() {
  try {
    const maintenance = await apiCall('/maintenance-requests');
    allMaintenance = maintenance;
    renderMaintenanceTable(maintenance);
  } catch (err) {
    showToast(err.message, true);
  }
}

function renderMaintenanceTable(maintenance) {
  const tbody = document.getElementById('maintenance-table-body');
  tbody.innerHTML = '';

  if (maintenance.length === 0) {
    tbody.innerHTML = `<tr><td colspan="7" style="text-align: center; color: var(--text-muted);">Không có báo cáo sự cố nào được tìm thấy.</td></tr>`;
    return;
  }

  maintenance.forEach(m => {
    let statusClass = 'badge-danger';
    if (m.status === 'IN_PROGRESS') statusClass = 'badge-tenant';
    if (m.status === 'RESOLVED') statusClass = 'badge-success';

    const propertyRoom = allRooms.find(r => r.id === m.propertyId);

    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td class="font-mono font-xs">#${m.id.substring(0,8)}</td>
      <td><strong>${m.title}</strong></td>
      <td>${propertyRoom ? propertyRoom.title : 'Phòng ID: ' + m.propertyId.substring(0,8)}</td>
      <td><span class="font-sm" style="max-width: 200px; display: inline-block; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${m.description}</span></td>
      <td><span class="badge ${statusClass}">${m.status}</span></td>
      <td>${formatDate(m.createdAt)}</td>
      <td>
        <div class="actions-cell">
          <button class="btn btn-outline btn-xs update-maint-status-btn" data-id="${m.id}" data-code="${m.title}" data-desc="${m.description}" data-status="${m.status}">
            <i class="fa-solid fa-arrows-spin"></i> Cập nhật tiến độ
          </button>
          <button class="btn btn-danger-outline btn-circle btn-xs delete-maint-btn" data-id="${m.id}" title="Xóa">
            <i class="fa-solid fa-trash"></i>
          </button>
        </div>
      </td>
    `;
    tbody.appendChild(tr);
  });

  tbody.querySelectorAll('.update-maint-status-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      openMaintStatusModal(
        btn.getAttribute('data-id'),
        btn.getAttribute('data-code'),
        btn.getAttribute('data-desc'),
        btn.getAttribute('data-status')
      );
    });
  });

  tbody.querySelectorAll('.delete-maint-btn').forEach(btn => {
    btn.addEventListener('click', () => deleteMaintenance(btn.getAttribute('data-id')));
  });
}

function openMaintenanceModal() {
  const modal = document.getElementById('modal-maintenance');
  const form = document.getElementById('maintenance-form');
  form.reset();
  modal.classList.add('active');
}

document.getElementById('add-maintenance-btn').addEventListener('click', () => openMaintenanceModal());

document.getElementById('maintenance-form').addEventListener('submit', async (e) => {
  e.preventDefault();

  const payload = {
    propertyId: document.getElementById('maintenance-propertyId').value,
    title: document.getElementById('maintenance-title').value,
    description: document.getElementById('maintenance-description').value,
    imageUrl: document.getElementById('maintenance-imageUrl').value || undefined
  };

  try {
    await apiCall('/maintenance-requests', {
      method: 'POST',
      body: JSON.stringify(payload)
    });

    showToast('Đã gửi báo cáo sự cố thành công!');
    closeActiveModal();
    fetchMaintenance();
    refreshAllData();
  } catch (err) {
    showToast(err.message, true);
  }
});

async function deleteMaintenance(id) {
  if (!confirm('Bạn có chắc chắn muốn xóa yêu cầu sửa chữa này?')) return;
  try {
    await apiCall(`/maintenance-requests/${id}`, { method: 'DELETE' });
    showToast('Đã xóa yêu cầu sửa chữa thành công.');
    fetchMaintenance();
    refreshAllData();
  } catch (err) {
    showToast(err.message, true);
  }
}

// Update status details for landlord/admin
function openMaintStatusModal(id, code, desc, status) {
  const modal = document.getElementById('modal-maintenance-status');
  document.getElementById('maint-status-id').value = id;
  document.getElementById('maint-status-code').value = code;
  document.getElementById('maint-status-desc').textContent = desc;
  document.getElementById('maint-status-select').value = status;
  modal.classList.add('active');
}

document.getElementById('maintenance-status-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const id = document.getElementById('maint-status-id').value;
  const status = document.getElementById('maint-status-select').value;

  try {
    await apiCall(`/maintenance-requests/${id}/status`, {
      method: 'PATCH',
      body: JSON.stringify({ status })
    });

    showToast('Cập nhật trạng thái xử lý sự cố thành công!');
    closeActiveModal();
    fetchMaintenance();
    refreshAllData();
  } catch (err) {
    showToast(err.message, true);
  }
});

// Search maintenance requests
document.getElementById('search-maintenance-input').addEventListener('input', (e) => {
  const query = e.target.value.toLowerCase();
  const filtered = allMaintenance.filter(m => 
    m.title.toLowerCase().includes(query) || m.description.toLowerCase().includes(query)
  );
  renderMaintenanceTable(filtered);
});


/* ==================== GLOBAL MODAL MANAGEMENT ==================== */
function setupModalHandlers() {
  const overlays = document.querySelectorAll('.modal-overlay');
  
  // Close buttons inside modals
  document.querySelectorAll('.modal-close-btn, .modal-cancel-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      closeActiveModal();
    });
  });

  // Clicking overlay closes modal
  overlays.forEach(overlay => {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        closeActiveModal();
      }
    });
  });

  // ESC key closes modal
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeActiveModal();
    }
  });
}

function closeActiveModal() {
  const activeModal = document.querySelector('.modal-overlay.active');
  if (activeModal) {
    activeModal.classList.remove('active');
  }
}
