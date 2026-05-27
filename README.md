# 🏢 Smart Renting Hub - Mobile App

![Platform](https://img.shields.io/badge/Platform-iOS%20%7C%20Android-blue)
![Tech Stack](https://img.shields.io/badge/Framework-React%20Native-61DAFB)
![Backend](https://img.shields.io/badge/Backend-Node.js%20%7C%20Python-43853D)
![Status](https://img.shields.io/badge/Status-In%20Development-orange)

## 📖 Giới thiệu (Introduction)
**Nhà Xanh** là ứng dụng di động "All-in-One" hỗ trợ Tìm kiếm và Quản lý các loại hình nhà cho thuê. Khác với các nền tảng rao vặt truyền thống, ứng dụng tập trung vào trải nghiệm người dùng bằng cách tích hợp Trí tuệ nhân tạo (AI), Tự động hóa và Dịch vụ định vị để giải quyết triệt để các "nỗi đau" (pain-points) của cả người đi thuê và chủ nhà.

---

## 🌟 Tính năng Nổi bật (Unique Selling Points)

* **🤖 AI Voice RentBot (Trợ lý ảo hỗ trợ Giọng nói & Text):** Tích hợp công nghệ Speech-to-Text (STT) và Xử lý ngôn ngữ tự nhiên (NLP). Người dùng không cần gõ phím, chỉ cần giữ nút Micro và nói: *"Tìm cho mình chung cư mini ở Cầu Giấy dưới 4 triệu, có ban công"*. Hệ thống sẽ tự động chuyển giọng nói thành văn bản, trích xuất chính xác các từ khóa (Vị trí, Giá, Tiện ích, Loại phòng) và trả về danh sách kết quả ngay lập tức.
* **📸 Smart Meter OCR (Quét đồng hồ điện/nước):** Tận dụng camera điện thoại và AI để tự động đọc chỉ số điện/nước, tự động tính tiền và xuất hóa đơn gửi cho người thuê.
* **📍 Smart Commute:** Tìm nhà dựa trên bán kính thời gian di chuyển thực tế trên bản đồ (VD: Cách công ty 15 phút đi xe máy), thay vì tìm theo địa giới hành chính.
* **🤝 Roommate Tinder:** Vuốt để ghép đôi tìm người ở ghép dựa trên thuật toán so khớp thói quen sinh hoạt (giờ giấc, mức độ sạch sẽ, thú cưng).

---

## 📱 Phân hệ Chức năng (Features by Modules)

### 1. Phân hệ Người đi thuê (Tenant)
- **Tìm kiếm & Lọc:** Bộ lọc đa dạng (Giá, diện tích, tiện ích, loại phòng).
- **Chatbot AI:** Tìm kiếm nhanh qua trợ lý ảo thông minh.
- **Bản đồ Vibe Score:** Bản đồ nhiệt đánh giá mức độ an ninh, nguy cơ ngập lụt và tiện ích khu vực.
- **Quản lý Hợp đồng & Hóa đơn:** Xem hợp đồng điện tử, nhận thông báo nhắc nợ (Push Notifications) và thanh toán hóa đơn hàng tháng.
- **Báo cáo sự cố:** Chụp ảnh gửi yêu cầu sửa chữa (bóng đèn hỏng, rò nước) trực tiếp đến chủ nhà.

### 2. Phân hệ Chủ nhà / Quản lý (Landlord)
- **Quản lý Phòng & Khách thuê:** Theo dõi trạng thái phòng (trống, đang thuê, nợ tiền).
- **Chốt điện nước bằng Camera (AI OCR):** Quét và lưu trữ hình ảnh đồng hồ làm bằng chứng, hệ thống tự xuất hóa đơn.
- **Ký Hợp đồng Điện tử (E-Contract):** Tạo và ký hợp đồng ngay trên điện thoại di động.
- **Quản lý Thu/Chi:** Dashboard thống kê doanh thu, tỷ lệ lấp đầy phòng.

### 3. Phân hệ Quản trị viên (Admin - Thường thao tác trên Web/Dashboard)
- **Kiểm duyệt Tin đăng & eKYC:** Xác thực danh tính chủ nhà qua Căn cước công dân.
- **AI Anti-Scam:** Tự động phát hiện và cảnh báo tin đăng lừa đảo, ảnh giả mạo.

### 4. Tiện ích dùng chung (Utilities)
- **Real-time Chat:** Nhắn tin trực tiếp giữa khách thuê và chủ nhà.
- **Review & Rating 2 chiều:** Đánh giá chất lượng phòng và ý thức người thuê.
- **Push Notification:** Nhận thông báo đẩy (Firebase) cho mọi hoạt động quan trọng (có tin nhắn, hóa đơn mới, lịch xem phòng).

---

## 🛠️ Công nghệ sử dụng (Tech Stack)

### Mobile App (Frontend)
- **Framework:** `React Native` (Expo) - Code 1 lần chạy trên cả iOS và Android.
- **State Management:** `Redux Toolkit` hoặc `Zustand`.
- **UI Components:** `React Native Paper` / `NativeWind` (Tailwind for RN).
- **Voice Recognition:** Dùng thư viện `@react-native-voice/voice` hoặc `expo-av` để thu âm trực tiếp trên thiết bị.

### Backend & API
- **Main Server:** `Node.js` + `NestJS` (RESTful API).
- **AI, OCR & Voice Microservice:** `Python` + `FastAPI`.
- **Real-time:** `Socket.io` (Dành cho Chat).

### Cơ sở dữ liệu (Database)
- **Primary DB:** `PostgreSQL` (Tích hợp PostGIS cho truy vấn bản đồ).
- **Caching:** `Redis`.

### Dịch vụ Cloud & API bên thứ 3 (3rd-Party)
- **Bản đồ:** `Google Maps API` / `Mapbox`.
- **Chatbot & Speech-to-Text:** `OpenAI API (Whisper cho nhận diện giọng nói & GPT-4 cho Chatbot)` hoặc `Google Cloud Speech-to-Text`.
- **Lưu trữ đa phương tiện:** `Cloudinary` / `AWS S3`.
- **Push Notification:** `Firebase Cloud Messaging (FCM)`.

---