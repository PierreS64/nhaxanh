# Review & Next Issue

## 1. Đánh giá thay đổi

### Web frontend (`frontend/`)
- Bạn đã thêm badge tin cậy (`trust-badges`) vào `frontend/assets/js/app.js` và `frontend/assets/css/styles.css`.
- `cardTemplate` hiện hiển thị badge trust trên listing homepage.
- `renderDetail()` đã được mở rộng với panel `Thông tin đáng tin cậy`, tăng tính minh bạch cho trang chi tiết.
- Logic badge hiện tại dựa trên tag/amenity và `deposit > 0` để suy luận `Hợp đồng điện tử`.
- CSS đã thêm style cho badge và panel, giúp khả năng đọc tốt hơn.

### Mobile app (`frontend_app/`)
- `AppNavigator.tsx` đã định nghĩa luồng xác thực với `token` và `isGuest`.
- `LoginScreen.tsx` hỗ trợ login backend và chế độ xem demo không đăng nhập.
- `HomeScreen.tsx` đã có danh sách property, tìm kiếm đơn giản và badge trust.
- `PropertyDetailScreen.tsx` mới hiện có panel chi phí tách riêng, badge trust và thông tin mô tả.
- `api.ts` đã thêm interceptor JWT và logout tự động khi nhận 401.
- `useAuthStore.ts` tạo store xác thực cơ bản bằng `zustand`.

## 2. Những điểm cần cải thiện

- Badge trust trên web vẫn dựa trên suy luận, chưa dùng dữ liệu trạng thái chính thức từ backend.
- `Hợp đồng điện tử` đang được hiển thị chỉ vì `deposit > 0`, nên nên đổi thành chỉ ra trạng thái hợp đồng rõ ràng hơn.
- `PropertyDetailScreen.tsx` mobile chỉ dùng `sampleProperties`, chưa hỗ trợ lấy chi tiết từ backend theo `propertyId`.
- `api.ts` dùng `useAuthStore.getState()` trong interceptor; nên kiểm tra kỹ nếu muốn giữ hành vi này.
- Chưa có đồng bộ hóa logic trust giữa web tĩnh và app React Native.

## 3. Issue cho bước tiếp theo (2 giờ)

### Tiêu đề issue
Hoàn thiện dữ liệu tin cậy và chi tiết phòng trong web + mobile

### Mô tả
1. Đổi logic badge trust từ suy luận tag/amenity sang trường dữ liệu cụ thể:
   - `isVerified`, `hasPccc`, `hasSecurity`, `isFlexibleHours`, `hasDigitalContract`, `costBreakdown`
   - Áp dụng cho `frontend/assets/js/app.js` và `frontend_app/src/screens/*`.
2. Hoàn thiện `PropertyDetailScreen.tsx` để lấy chi tiết phòng qua API nếu có `propertyId`, không chỉ dùng `sampleProperties`.
3. Cập nhật `frontend/assets/js/app.js` để badge `Hợp đồng điện tử` và `Chi phí tách riêng` chỉ hiển thị khi đúng dữ liệu rõ ràng.
4. Thêm cảnh báo fallback rõ ràng nếu API backend mobile không phản hồi và vẫn cho phép xem demo.

### Files cần sửa
- `frontend/assets/js/app.js`
- `frontend/assets/css/styles.css`
- `frontend_app/src/screens/HomeScreen.tsx`
- `frontend_app/src/screens/PropertyDetailScreen.tsx`
- `frontend_app/src/services/api.ts`
- `frontend_app/src/store/useAuthStore.ts`

### Tiêu chí hoàn thành
- Web hiển thị badge trust dựa trên dữ liệu rõ ràng thay vì chỉ tag.
- Mobile có chi tiết phòng chuẩn theo `propertyId` và không chỉ dùng sample data.
- Nếu backend không sẵn sàng, vẫn có fallback demo không lỗi.
- UI badge/thông tin đáng tin cậy nhất quán giữa trang chủ và trang chi tiết.
