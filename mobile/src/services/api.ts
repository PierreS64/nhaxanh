import axios, { AxiosError, InternalAxiosRequestConfig } from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

// 1. Cấu hình BASE URL cho NestJS Backend
// Lưu ý: Khi chạy trên Emulator Android, sử dụng '10.0.2.2' thay cho 'localhost'.
// Khi chạy trên thiết bị thật (Expo Go), sử dụng IP cục bộ của máy tính của bạn (ví dụ: '192.168.1.x').
const API_BASE_URL = 'http://10.0.2.2:3000/api'; // Thay đổi URL tương ứng với môi trường chạy backend

// Khởi tạo instance Axios
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Định nghĩa key lưu trữ Token JWT trong AsyncStorage
const TOKEN_KEY = 'NHAXANH_ACCESS_TOKEN';

// 2. Request Interceptor: Tự động đính kèm JWT Token vào Header của mọi request gửi đi
apiClient.interceptors.request.use(
  async (config: InternalAxiosRequestConfig) => {
    try {
      // Lấy token từ AsyncStorage
      const token = await AsyncStorage.getItem(TOKEN_KEY);
      if (token) {
        // Đính kèm Token vào Header Authorization
        config.headers.Authorization = `Bearer ${token}`;
      }
    } catch (error) {
      console.error('Lỗi khi lấy JWT token từ AsyncStorage:', error);
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Khai báo callback dùng để xử lý khi xảy ra lỗi 401 hết hạn token (sẽ được gán từ State Manager hoặc Navigation)
let onTokenExpiredCallback: (() => void) | null = null;

export const registerOnTokenExpired = (callback: () => void) => {
  onTokenExpiredCallback = callback;
};

// 3. Response Interceptor: Xử lý tập trung kết quả trả về và bắt lỗi 401 Unauthorized
apiClient.interceptors.response.use(
  (response) => {
    // Trả về dữ liệu trực tiếp từ response nếu thành công
    return response;
  },
  async (error: AxiosError) => {
    const originalRequest = error.config;

    // Kiểm tra nếu mã lỗi là 401 Unauthorized (Hết hạn Token hoặc Token không hợp lệ)
    if (error.response && error.response.status === 401) {
      console.warn('Nhận lỗi 401 Unauthorized - Đang xử lý đăng xuất...');
      
      try {
        // 1. Xóa token đã hết hạn khỏi bộ nhớ thiết bị
        await AsyncStorage.removeItem(TOKEN_KEY);
        
        // 2. Gọi callback thông báo cho ứng dụng để điều hướng người dùng về màn hình Login
        if (onTokenExpiredCallback) {
          onTokenExpiredCallback();
        }
      } catch (storageError) {
        console.error('Lỗi khi xóa token hết hạn từ AsyncStorage:', storageError);
      }
    }

    return Promise.reject(error);
  }
);

// Các helper function quản lý token tiện dụng
export const tokenStorage = {
  setToken: async (token: string) => {
    await AsyncStorage.setItem(TOKEN_KEY, token);
  },
  getToken: async () => {
    return await AsyncStorage.getItem(TOKEN_KEY);
  },
  clearToken: async () => {
    await AsyncStorage.removeItem(TOKEN_KEY);
  }
};

export default apiClient;
