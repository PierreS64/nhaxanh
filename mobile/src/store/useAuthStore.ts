import { create } from 'zustand';
import { User } from '../types';
import apiClient, { registerOnTokenExpired, tokenStorage } from '../services/api';

// Định nghĩa kiểu dữ liệu cho Auth State
interface AuthState {
  user: User | null;
  token: string | null;
  isLoading: boolean;
  isLoggedIn: boolean;
  login: (user: User, token: string) => Promise<void>;
  logout: () => Promise<void>;
  initializeAuth: () => Promise<void>;
}

// Khởi tạo Zustand store
export const useAuthStore = create<AuthState>((set) => {
  
  // Đăng ký callback xử lý khi token hết hạn (401) từ file api.ts
  registerOnTokenExpired(() => {
    // Khi nhận thông báo lỗi 401, tự động xóa auth state về null để quay lại màn hình Login
    set({ user: null, token: null, isLoggedIn: false });
  });

  return {
    user: null,
    token: null,
    isLoading: true,
    isLoggedIn: false,

    // Hàm lưu trạng thái đăng nhập sau khi call API thành công
    login: async (user: User, token: string) => {
      try {
        await tokenStorage.setToken(token);
        set({ user, token, isLoggedIn: true });
      } catch (error) {
        console.error('Lỗi lưu token khi login:', error);
      }
    },

    // Hàm đăng xuất
    logout: async () => {
      try {
        await tokenStorage.clearToken();
        set({ user: null, token: null, isLoggedIn: false });
      } catch (error) {
        console.error('Lỗi khi logout:', error);
      }
    },

    // Hàm tự động tải lại thông tin đăng nhập khi mở app
    initializeAuth: async () => {
      set({ isLoading: true });
      try {
        const token = await tokenStorage.getToken();
        if (token) {
          // Thực hiện cuộc gọi API để lấy thông tin User hiện tại dựa vào token (được interceptor tự chèn)
          // Ở đây giả lập lấy thông tin user thành công
          const mockUser: User = {
            id: 'user-001',
            email: 'khachthue@nhaxanh.vn',
            name: 'Lê Hoài Nam',
            phone: '0988776655',
            role: 'tenant',
            avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80',
            isVerified: true,
            createdAt: '2026-01-10'
          };
          
          set({ user: mockUser, token, isLoggedIn: true });
        } else {
          set({ user: null, token: null, isLoggedIn: false });
        }
      } catch (error) {
        console.error('Lỗi khôi phục session đăng nhập:', error);
        set({ user: null, token: null, isLoggedIn: false });
      } finally {
        set({ isLoading: false });
      }
    }
  };
});
