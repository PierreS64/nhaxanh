import { create } from 'zustand';

interface User {
  id: string;
  email: string;
  fullName: string;
  role: string;
}

interface AuthState {
  token: string | null;
  user: User | null;
  isGuest: boolean;
  setToken: (token: string | null) => void;
  setUser: (user: User | null) => void;
  setGuest: (isGuest: boolean) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  token: null,
  user: null,
  isGuest: false,
  setToken: (token) => set({ token }),
  setUser: (user) => set({ user }),
  setGuest: (isGuest) => set({ isGuest }),
  logout: () => set({ token: null, user: null, isGuest: false }),
}));
