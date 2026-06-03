import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import * as SecureStore from 'expo-secure-store';
import api from '../services/api';
import { useAuthStore } from '../store/useAuthStore';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const setToken = useAuthStore((state) => state.setToken);
  const setUser = useAuthStore((state) => state.setUser);
  const setGuest = useAuthStore((state) => state.setGuest);

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Thiếu thông tin', 'Vui lòng nhập email và mật khẩu.');
      return;
    }

    try {
      setLoading(true);
      const response = await api.post('/auth/login', {
        email: email.trim(),
        password,
      });

      const { accessToken, user } = response.data;

      await SecureStore.setItemAsync('token', accessToken);
      await SecureStore.setItemAsync('user', JSON.stringify(user));

      setUser(user);
      setToken(accessToken);
      setGuest(false);
    } catch (error: any) {
      const errorMessage =
        error.response?.data?.message || 'Không thể kết nối máy chủ. Vui lòng kiểm tra API_URL.';
      Alert.alert('Đăng nhập thất bại', Array.isArray(errorMessage) ? errorMessage.join('\n') : errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <View style={styles.formContainer}>
        <Text style={styles.title}>Nhà Xanh</Text>
        <Text style={styles.subtitle}>Smart Renting Hub</Text>

        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#7B8B83"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
        />

        <TextInput
          style={styles.input}
          placeholder="Mật khẩu"
          placeholderTextColor="#7B8B83"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <TouchableOpacity style={styles.button} onPress={handleLogin} disabled={loading}>
          {loading ? (
            <ActivityIndicator color="#FFFFFF" />
          ) : (
            <Text style={styles.buttonText}>Đăng nhập</Text>
          )}
        </TouchableOpacity>

        <TouchableOpacity style={styles.secondaryButton} onPress={() => setGuest(true)} disabled={loading}>
          <Text style={styles.secondaryButtonText}>Xem demo không đăng nhập</Text>
        </TouchableOpacity>

        <Text style={styles.helperText}>
          Chế độ demo dùng dữ liệu mẫu để người thuê xem chi phí, kiểm duyệt và chi tiết phòng trước khi tạo tài khoản.
        </Text>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F7F2',
  },
  formContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 42,
    fontWeight: '900',
    color: '#0D7A55',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#617068',
    textAlign: 'center',
    marginBottom: 42,
  },
  input: {
    backgroundColor: '#FFFFFF',
    height: 54,
    borderRadius: 12,
    paddingHorizontal: 16,
    fontSize: 16,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: '#DCE5DF',
    color: '#17201C',
  },
  button: {
    backgroundColor: '#0D7A55',
    height: 54,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '900',
  },
  secondaryButton: {
    height: 50,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 12,
    borderWidth: 1,
    borderColor: '#0D7A55',
    backgroundColor: '#FFFFFF',
  },
  secondaryButtonText: {
    color: '#0D7A55',
    fontSize: 16,
    fontWeight: '900',
  },
  helperText: {
    color: '#617068',
    textAlign: 'center',
    lineHeight: 20,
    marginTop: 20,
  },
});

export default LoginScreen;
