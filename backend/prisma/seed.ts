import { PrismaClient, Role, PropertyType, PropertyStatus, ContractStatus, InvoiceStatus, MaintenanceStatus } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting database seeding...');

  // 1. Data Clean-up (Delete dependent tables before parent tables)
  console.log('🧹 Cleaning up old data...');
  await prisma.invoice.deleteMany();
  await prisma.maintenanceRequest.deleteMany();
  await prisma.meterReading.deleteMany();
  await prisma.review.deleteMany();
  await prisma.contract.deleteMany();
  await prisma.propertyImage.deleteMany();
  await prisma.property.deleteMany();
  await prisma.tenantProfile.deleteMany();
  await prisma.user.deleteMany();

  // 2. Password Hashing
  const defaultPassword = 'password123';
  const hashedPassword = await bcrypt.hash(defaultPassword, 10);

  // 3. Create Users
  console.log('👤 Creating users...');

  // ADMIN
  const admin = await prisma.user.create({
    data: {
      email: 'admin@troso.com',
      password: hashedPassword,
      fullName: 'Admin Hệ Thống',
      role: Role.ADMIN,
      phone: '0988000000',
    },
  });

  // LANDLORDS
  const landlord1 = await prisma.user.create({
    data: {
      email: 'chunha_vip@gmail.com',
      password: hashedPassword,
      fullName: 'Đại gia Bất Động Sản',
      role: Role.LANDLORD,
      phone: '0988111111',
      isKycVerified: true,
    },
  });

  const landlord2 = await prisma.user.create({
    data: {
      email: 'chunha_bancoban@gmail.com',
      password: hashedPassword,
      fullName: 'Bà Bán Phở',
      role: Role.LANDLORD,
      phone: '0988222222',
      isKycVerified: true,
    },
  });

  // TENANTS
  const tenant1 = await prisma.user.create({
    data: {
      email: 'khachthue_ngoan@gmail.com',
      password: hashedPassword,
      fullName: 'Sinh Viên Chăm Chỉ',
      role: Role.TENANT,
      phone: '0988333333',
    },
  });

  const tenant2 = await prisma.user.create({
    data: {
      email: 'cong_nhan_1@gmail.com',
      password: hashedPassword,
      fullName: 'Anh Công Nhân',
      role: Role.TENANT,
      phone: '0988444444',
    },
  });

  const tenant3 = await prisma.user.create({
    data: {
      email: 'nvvp_thanhlich@gmail.com',
      password: hashedPassword,
      fullName: 'Chị NVVP',
      role: Role.TENANT,
      phone: '0988555555',
    },
  });

  // 4. Create Properties (Phòng trọ)
  console.log('🏠 Creating properties...');

  const cgdProperty1 = await prisma.property.create({
    data: {
      landlordId: landlord1.id,
      title: 'Phòng trọ cao cấp Xuân Thủy',
      description: 'Phòng mới xây, full đồ, mặt ngõ rộng, ô tô đỗ cửa.',
      type: PropertyType.MINI_APARTMENT,
      status: PropertyStatus.RENTED,
      price: 5500000,
      area: 30.5,
      depositAmount: 5500000,
      address: '175 Xuân Thủy, Cầu Giấy, Hà Nội',
      latitude: 21.0377,
      longitude: 105.7836,
      amenities: ['Điều hòa', 'Bình nóng lạnh', 'Tủ lạnh', 'Máy giặt', 'Thang máy'],
    },
  });

  const cgdProperty2 = await prisma.property.create({
    data: {
      landlordId: landlord1.id,
      title: 'Phòng gác lửng Cầu Giấy',
      description: 'Phòng thiết kế hiện đại, có gác lửng, sạch sẽ.',
      type: PropertyType.ROOM,
      status: PropertyStatus.AVAILABLE,
      price: 3500000,
      area: 25.0,
      depositAmount: 3500000,
      address: '233 Tô Hiệu, Cầu Giấy, Hà Nội',
      latitude: 21.0425,
      longitude: 105.7925,
      amenities: ['Điều hòa', 'Tủ quần áo', 'Bãi để xe'],
    },
  });

  const btlProperty1 = await prisma.property.create({
    data: {
      landlordId: landlord1.id,
      title: 'Nhà nguyên căn Bắc Từ Liêm',
      description: 'Phù hợp cho hộ gia đình hoặc nhóm sinh viên thuê chung.',
      type: PropertyType.WHOLE_HOUSE,
      status: PropertyStatus.AVAILABLE,
      price: 6000000,
      area: 50.0,
      depositAmount: 6000000,
      address: '15 Phú Diễn, Bắc Từ Liêm, Hà Nội',
      latitude: 21.0543,
      longitude: 105.7654,
      amenities: ['Điều hòa', 'Nóng lạnh', 'Giường tủ', 'Tủ bếp', 'Ban công'],
    },
  });

  const ddProperty1 = await prisma.property.create({
    data: {
      landlordId: landlord2.id,
      title: 'Phòng đẹp Đống Đa',
      description: 'Gần nhiều trường Đại học (Thủy Lợi, Công Đoàn, Ngân Hàng).',
      type: PropertyType.ROOM,
      status: PropertyStatus.AVAILABLE,
      price: 4500000,
      area: 28.0,
      depositAmount: 4500000,
      address: 'Ngõ 2 Tây Sơn, Đống Đa, Hà Nội',
      latitude: 21.0116,
      longitude: 105.8239,
      amenities: ['Giường', 'Tủ', 'Điều hòa', 'Camera an ninh'],
    },
  });

  const hbmProperty1 = await prisma.property.create({
    data: {
      landlordId: landlord2.id,
      title: 'Chung cư mini Hai Bà Trưng',
      description: 'Gần Bách Bách Khoa, Kinh Tế, Xây Dựng.',
      type: PropertyType.MINI_APARTMENT,
      status: PropertyStatus.RENTED,
      price: 5200000,
      area: 32.0,
      depositAmount: 5200000,
      address: 'Đường Tạ Quang Bửu, Hai Bà Trưng, Hà Nội',
      latitude: 21.0041,
      longitude: 105.8451,
      amenities: ['Máy giặt riêng', 'Tủ lạnh', 'Điều hòa', 'Phòng cháy chữa cháy'],
    },
  });

  const txProperty1 = await prisma.property.create({
    data: {
      landlordId: landlord2.id,
      title: 'Phòng sinh viên Thanh Xuân',
      description: 'Phòng trọ giá rẻ, thoáng mát.',
      type: PropertyType.ROOM,
      status: PropertyStatus.AVAILABLE,
      price: 3000000,
      area: 20.0,
      depositAmount: 3000000,
      address: 'Khương Đình, Thanh Xuân, Hà Nội',
      latitude: 20.9922,
      longitude: 105.8153,
      amenities: ['Nóng lạnh', 'Chỗ để xe free'],
    },
  });

  // 5. Create Contracts
  console.log('📜 Creating contracts...');

  const today = new Date();
  const nextYear = new Date(today);
  nextYear.setFullYear(today.getFullYear() + 1);

  // Active Contract for "Sinh Viên Chăm Chỉ" <-> "Đại gia Bất Động Sản"
  const activeContract1 = await prisma.contract.create({
    data: {
      tenantId: tenant1.id,
      landlordId: landlord1.id,
      propertyId: cgdProperty1.id,
      startDate: today,
      endDate: nextYear,
      monthlyPrice: cgdProperty1.price,
      depositAmount: cgdProperty1.depositAmount,
      status: ContractStatus.ACTIVE,
    },
  });

  // Active Contract for tenant2 <-> landlord2
  const activeContract2 = await prisma.contract.create({
    data: {
      tenantId: tenant2.id,
      landlordId: landlord2.id,
      propertyId: hbmProperty1.id,
      startDate: new Date(today.setMonth(today.getMonth() - 2)), // started 2 months ago
      endDate: new Date(nextYear.setMonth(nextYear.getMonth() - 2)),
      monthlyPrice: hbmProperty1.price,
      depositAmount: hbmProperty1.depositAmount,
      status: ContractStatus.ACTIVE,
    },
  });

  // Pending Contract for tenant3 <-> landlord1
  const pendingContract = await prisma.contract.create({
    data: {
      tenantId: tenant3.id,
      landlordId: landlord1.id,
      propertyId: btlProperty1.id,
      startDate: new Date(new Date().setMonth(new Date().getMonth() + 1)), // starts next month
      endDate: new Date(new Date().setFullYear(new Date().getFullYear() + 1)),
      monthlyPrice: btlProperty1.price,
      depositAmount: btlProperty1.depositAmount,
      status: ContractStatus.PENDING,
    },
  });

  // 6. Create Invoices
  console.log('💰 Creating invoices...');

  // Paid invoice for Sinh Vien Cham Chi
  await prisma.invoice.create({
    data: {
      contractId: activeContract1.id,
      title: 'Hóa đơn tiền nhà tháng ' + (today.getMonth()),
      rentAmount: activeContract1.monthlyPrice,
      electricityAmount: 400000,
      waterAmount: 100000,
      serviceAmount: 150000,
      totalAmount: activeContract1.monthlyPrice + 400000 + 100000 + 150000,
      issueDate: new Date(new Date().setDate(1)),
      dueDate: new Date(new Date().setDate(5)),
      status: InvoiceStatus.PAID,
      paymentMethod: 'Chuyển khoản',
      paidAt: new Date(new Date().setDate(3)),
    },
  });

  // Unpaid current invoice for Sinh Vien Cham Chi
  await prisma.invoice.create({
    data: {
      contractId: activeContract1.id,
      title: 'Hóa đơn tiền nhà tháng ' + (today.getMonth() + 1),
      rentAmount: activeContract1.monthlyPrice,
      electricityAmount: 450000,
      waterAmount: 100000,
      serviceAmount: 150000,
      totalAmount: activeContract1.monthlyPrice + 450000 + 100000 + 150000,
      issueDate: today,
      dueDate: new Date(new Date().setDate(today.getDate() + 5)),
      status: InvoiceStatus.UNPAID,
    },
  });

  // Unpaid current invoice for Anh Cong Nhan
  await prisma.invoice.create({
    data: {
      contractId: activeContract2.id,
      title: 'Hóa đơn tiền nhà tháng ' + (today.getMonth() + 1),
      rentAmount: activeContract2.monthlyPrice,
      electricityAmount: 320000,
      waterAmount: 80000,
      serviceAmount: 100000,
      totalAmount: activeContract2.monthlyPrice + 320000 + 80000 + 100000,
      issueDate: today,
      dueDate: new Date(new Date().setDate(today.getDate() + 5)),
      status: InvoiceStatus.UNPAID,
    },
  });

  // 7. Create Maintenance Requests
  console.log('🔧 Creating maintenance requests...');

  await prisma.maintenanceRequest.create({
    data: {
      tenantId: tenant1.id,
      propertyId: activeContract1.propertyId,
      title: 'Hỏng điều hòa',
      description: 'Điều hòa không mát, chỉ thổi ra gió từ hôm qua.',
      status: MaintenanceStatus.PENDING,
    },
  });

  await prisma.maintenanceRequest.create({
    data: {
      tenantId: tenant2.id,
      propertyId: activeContract2.propertyId,
      title: 'Tắc cống thoát nước',
      description: 'Nước ở bồn rửa mặt chảy cực kỳ chậm, mong chủ nhà cho người lên xem giúp.',
      status: MaintenanceStatus.IN_PROGRESS,
    },
  });

  console.log('✅ Seeding completely finished!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });