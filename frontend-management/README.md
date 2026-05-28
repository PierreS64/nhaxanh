# 🏢 Nhà Xanh - Management Frontend Dashboard

Giao diện quản lý dịch vụ thuê nhà Nhà Xanh hỗ trợ đầy đủ các thao tác CRUD dành cho:
- **Người dùng (Users)**: Xem, thêm, sửa đổi vai trò (Tenant, Landlord, Admin), cập nhật trạng thái xác thực danh tính KYC.
- **Phòng trọ / Căn hộ (Rooms / Properties)**: Quản lý phòng trống, phòng đã thuê, chỉnh sửa thông tin phòng, giá thuê, tiền cọc, toạ độ địa lý và tiện ích.
- **Hợp đồng thuê nhà (Contracts)**: Thiết lập hợp đồng điện tử giữa Khách thuê và Phòng trọ, quản lý thời hạn và giá thuê.
- **Hóa đơn hàng tháng (Invoices)**: Lập hóa đơn dịch vụ (tiền nhà, điện, nước, dịch vụ chung) và cổng thanh toán giả lập với các phương thức Bank Transfer, MoMo, VNPay, v.v.
- **Báo cáo sự cố (Maintenance)**: Tiếp nhận yêu cầu báo lỗi từ khách thuê, thay đổi trạng thái tiến trình sửa chữa (Pending -> In Progress -> Resolved).

---

## 🛠️ Hướng dẫn Khởi chạy (How to Run)

### Bước 1: Khởi chạy NestJS Backend
1. Mở terminal tại thư mục `backend/`:
   ```bash
   cd backend
   ```
2. Cài đặt các gói phụ thuộc:
   ```bash
   npm install
   ```
3. Tạo file cấu hình `.env` dựa theo file `.env.example` và nhập thông tin kết nối cơ sở dữ liệu PostgreSQL của bạn:
   ```bash
   cp .env.example .env
   ```
4. Đẩy schema Prisma lên Database của bạn:
   ```bash
   npx prisma db push
   ```
5. Khởi chạy server phát triển backend (chạy trên cổng `3000`):
   ```bash
   npm run start:dev
   ```

### Bước 2: Khởi chạy Management Frontend
1. Mở terminal thứ hai tại thư mục này `frontend-management/`:
   ```bash
   cd frontend-management
   ```
2. Khởi chạy máy chủ proxy tĩnh (không cần cài thêm `node_modules`):
   ```bash
   node server.js
   ```
3. Mở trình duyệt và truy cập:
   👉 **[http://localhost:5000](http://localhost:5000)**

---

## 🔄 Giải pháp Tránh lỗi CORS (CORS Bypass)

Vì bạn muốn tương tác trực tiếp với API của backend mà **không cần chỉnh sửa code backend** (như thêm `app.enableCors()`), máy chủ `server.js` trong thư mục này được cấu hình như một **Reverse Proxy**:
- Mọi yêu cầu tĩnh (`index.html`, `index.css`, `index.js`) đều chạy trực tiếp từ origin `http://localhost:5000`.
- Mọi cuộc gọi API dạng `fetch('/api/...')` từ trình duyệt của bạn sẽ được proxy server gửi tiếp đến `http://localhost:3000` của NestJS ở phía backend.
- Việc này giúp trình duyệt nhìn nhận mọi request đều có chung một nguồn gốc (Same-Origin), qua đó **bỏ qua hoàn toàn cơ chế hạn chế CORS** của trình duyệt một cách mượt mà và an toàn.
