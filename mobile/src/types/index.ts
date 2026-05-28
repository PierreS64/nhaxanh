// Định nghĩa các kiểu dữ liệu sử dụng trong ứng dụng Nhà Xanh

// 1. Vai trò của người dùng
export type UserRole = 'tenant' | 'landlord' | 'admin';

// 2. Định nghĩa thông tin người dùng
export interface User {
  id: string;
  email: string;
  name: string;
  phone: string;
  role: UserRole;
  avatar?: string;
  idCardNumber?: string; // eKYC CCCD
  isVerified?: boolean; // Trạng thái xác thực eKYC
  createdAt: string;
}

// 3. Loại phòng trọ/nhà cho thuê
export type PropertyType = 'motel' | 'apartment' | 'house' | 'shared';

// 4. Trạng thái phòng trọ
export type PropertyStatus = 'available' | 'rented' | 'maintaining';

// 5. Định nghĩa thông tin phòng trọ
export interface Property {
  id: string;
  title: string;
  description: string;
  price: number; // Giá thuê theo tháng (VND)
  area: number; // Diện tích (m2)
  address: string;
  district: string; // Quận/Huyện (dùng cho bộ lọc nhanh)
  city: string; // Thành phố
  images: string[]; // Danh sách link ảnh phòng trọ
  utilities: string[]; // Các tiện ích (Wifi, Điều hòa, Nóng lạnh, Tủ lạnh, Máy giặt, Giờ giấc tự do, Ban công, Thang máy, Máy sấy, v.v.)
  roomType: PropertyType;
  status: PropertyStatus;
  lat?: number; // Vĩ độ (bản đồ)
  lng?: number; // Kinh độ (bản đồ)
  vibeScore?: number; // Điểm an ninh, tiện ích khu vực (0 - 100)
  ownerId: string;
  ownerName: string;
  ownerPhone: string;
  ownerAvatar?: string;
  createdAt: string;
}

// 6. Định nghĩa tin nhắn chat
export interface Message {
  id: string;
  chatId: string;
  senderId: string; // 'bot' đại diện cho AI RentBot
  text: string;
  isVoice?: boolean; // Tin nhắn thoại hay text
  createdAt: string;
}

// 7. Định nghĩa cuộc hội thoại
export interface Chat {
  id: string;
  participantId: string; // ID đối tác (Chủ nhà hoặc Khách thuê)
  participantName: string;
  participantAvatar?: string;
  lastMessage?: string;
  updatedAt: string;
}

// 8. Hóa đơn hàng tháng
export interface Invoice {
  id: string;
  propertyId: string;
  propertyName: string;
  month: number;
  year: number;
  electricityBill: number; // Tiền điện
  waterBill: number; // Tiền nước
  serviceBill: number; // Tiền dịch vụ (wifi, rác,...)
  rentBill: number; // Tiền phòng
  totalAmount: number; // Tổng tiền
  status: 'paid' | 'unpaid' | 'overdue';
  dueDate: string;
  paymentDate?: string;
  electricityReading?: {
    oldValue: number;
    newValue: number;
    imageUrl?: string; // Minh chứng quét OCR
  };
  waterReading?: {
    oldValue: number;
    newValue: number;
    imageUrl?: string; // Minh chứng quét OCR
  };
}

// 9. Hợp đồng điện tử (E-Contract)
export interface Contract {
  id: string;
  propertyId: string;
  propertyName: string;
  tenantId: string;
  tenantName: string;
  landlordId: string;
  landlordName: string;
  startDate: string;
  endDate: string;
  deposit: number; // Tiền đặt cọc
  monthlyRent: number; // Giá thuê hàng tháng
  terms: string; // Các điều khoản hợp đồng
  status: 'active' | 'expired' | 'terminated';
  signedUrl?: string; // Đường dẫn file hợp đồng đã ký
}

// 10. Yêu cầu bảo trì (Maintenance Request)
export interface MaintenanceRequest {
  id: string;
  propertyId: string;
  propertyName: string;
  title: string;
  description: string;
  images?: string[];
  status: 'pending' | 'processing' | 'resolved';
  createdAt: string;
}
