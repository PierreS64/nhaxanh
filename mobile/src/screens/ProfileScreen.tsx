import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  Alert,
  Switch
} from 'react-native';
import { User, UserRole } from '../types';

// Mock thông tin người dùng ban đầu
const INITIAL_USER: User = {
  id: 'user-001',
  email: 'khachthue@nhaxanh.vn',
  name: 'Lê Hoài Nam',
  phone: '0988776655',
  role: 'tenant',
  avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80',
  isVerified: true,
  createdAt: '2026-01-10'
};

import { useAuthStore } from '../store/useAuthStore';

export default function ProfileScreen({ navigation }: any) {
  const [user, setUser] = useState<User>(INITIAL_USER);
  const logout = useAuthStore((state) => state.logout);

  // Toggle role giả lập giữa Khách thuê (Tenant) và Chủ trọ (Landlord) để xem sự thay đổi UI
  const handleToggleRole = (value: boolean) => {
    const nextRole: UserRole = value ? 'landlord' : 'tenant';
    setUser(prev => ({
      ...prev,
      role: nextRole,
      email: nextRole === 'landlord' ? 'chunha@nhaxanh.vn' : 'khachthue@nhaxanh.vn',
      name: nextRole === 'landlord' ? 'Trần Văn Thiết (Chủ nhà)' : 'Lê Hoài Nam',
    }));
    Alert.alert('Chuyển đổi phân hệ', `Đã chuyển sang giao diện của ${nextRole === 'landlord' ? 'Chủ trọ / Nhà quản lý' : 'Khách đi thuê'}`);
  };

  const handleLogout = () => {
    Alert.alert('Đăng xuất', 'Bạn có chắc chắn muốn đăng xuất?', [
      { text: 'Hủy', style: 'cancel' },
      { text: 'Đăng xuất', style: 'destructive', onPress: () => logout() }
    ]);
  };

  const triggerFeatureAlert = (featureName: string) => {
    Alert.alert('Tính năng', `Bạn vừa nhấn vào tính năng: ${featureName}. Bản demo đang kết nối mock data.`);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Profile Card */}
        <View style={styles.profileHeader}>
          <Image source={{ uri: user.avatar }} style={styles.avatar} />
          <Text style={styles.nameText}>{user.name}</Text>
          <Text style={styles.phoneText}>📞 {user.phone} • {user.email}</Text>

          <View style={styles.badgeRow}>
            {user.isVerified && (
              <View style={styles.verifiedBadge}>
                <Text style={styles.verifiedText}>🛡️ Đã xác thực eKYC</Text>
              </View>
            )}
            <View style={[styles.roleBadge, user.role === 'landlord' ? styles.roleLandlord : styles.roleTenant]}>
              <Text style={styles.roleText}>
                {user.role === 'landlord' ? '💼 Chủ Trọ' : '🔑 Khách Thuê'}
              </Text>
            </View>
          </View>
        </View>

        {/* Giả lập chuyển đổi vai trò */}
        <View style={styles.roleSwitchCard}>
          <View>
            <Text style={styles.switchTitle}>Giao diện Chủ trọ</Text>
            <Text style={styles.switchDesc}>Gạt nút để xem các chức năng dành cho Chủ nhà</Text>
          </View>
          <Switch
            value={user.role === 'landlord'}
            onValueChange={handleToggleRole}
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            thumbColor={user.role === 'landlord' ? '#2B8A3E' : '#f4f3f4'}
          />
        </View>

        {/* ---------------- CÁC CHỨC NĂNG DÀNH CHO KHÁCH THUÊ ---------------- */}
        {user.role === 'tenant' && (
          <View style={styles.menuSection}>
            <Text style={styles.sectionTitle}>Quản lý thuê nhà</Text>

            <TouchableOpacity style={styles.menuItem} onPress={() => triggerFeatureAlert('Hóa đơn của tôi')}>
              <View style={styles.menuItemLeft}>
                <Text style={styles.menuIcon}>💵</Text>
                <Text style={styles.menuLabel}>Hóa đơn tiền phòng & điện nước</Text>
              </View>
              <View style={styles.menuItemRight}>
                <Text style={styles.notificationBadge}>1 mới</Text>
                <Text style={styles.arrowIcon}>chevron-right</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.menuItem} onPress={() => triggerFeatureAlert('Hợp đồng của tôi')}>
              <View style={styles.menuItemLeft}>
                <Text style={styles.menuIcon}>📄</Text>
                <Text style={styles.menuLabel}>Hợp đồng thuê nhà điện tử</Text>
              </View>
              <View style={styles.menuItemRight}>
                <Text style={styles.badgeActive}>Đang hiệu lực</Text>
                <Text style={styles.arrowIcon}>chevron-right</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.menuItem} onPress={() => triggerFeatureAlert('Báo cáo sự cố')}>
              <View style={styles.menuItemLeft}>
                <Text style={styles.menuIcon}>🛠️</Text>
                <Text style={styles.menuLabel}>Báo cáo sự cố hỏng hóc (Bảo trì)</Text>
              </View>
              <View style={styles.menuItemRight}>
                <Text style={styles.arrowIcon}>chevron-right</Text>
              </View>
            </TouchableOpacity>
          </View>
        )}

        {/* ---------------- CÁC CHỨC NĂNG DÀNH CHO CHỦ TRỌ ---------------- */}
        {user.role === 'landlord' && (
          <View style={styles.menuSection}>
            <Text style={styles.sectionTitle}>Quản lý của chủ trọ</Text>

            <TouchableOpacity style={styles.menuItem} onPress={() => triggerFeatureAlert('Quản lý phòng trọ')}>
              <View style={styles.menuItemLeft}>
                <Text style={styles.menuIcon}>🏘️</Text>
                <Text style={styles.menuLabel}>Quản lý danh sách phòng cho thuê</Text>
              </View>
              <View style={styles.menuItemRight}>
                <Text style={styles.arrowIcon}>chevron-right</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.menuItem} onPress={() => triggerFeatureAlert('Smart Meter OCR - Quét chỉ số điện nước')}>
              <View style={styles.menuItemLeft}>
                <Text style={styles.menuIcon}>📸</Text>
                <Text style={styles.menuLabel}>Smart Meter OCR (Quét đồng hồ số)</Text>
              </View>
              <View style={styles.menuItemRight}>
                <Text style={styles.aiTag}>AI OCR</Text>
                <Text style={styles.arrowIcon}>chevron-right</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.menuItem} onPress={() => triggerFeatureAlert('Tạo Hợp đồng mới')}>
              <View style={styles.menuItemLeft}>
                <Text style={styles.menuIcon}>✍️</Text>
                <Text style={styles.menuLabel}>Tạo hợp đồng điện tử mới (E-Contract)</Text>
              </View>
              <View style={styles.menuItemRight}>
                <Text style={styles.arrowIcon}>chevron-right</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.menuItem} onPress={() => triggerFeatureAlert('Thống kê thu chi')}>
              <View style={styles.menuItemLeft}>
                <Text style={styles.menuIcon}>📊</Text>
                <Text style={styles.menuLabel}>Dashboard thống kê thu chi, doanh thu</Text>
              </View>
              <View style={styles.menuItemRight}>
                <Text style={styles.arrowIcon}>chevron-right</Text>
              </View>
            </TouchableOpacity>
          </View>
        )}

        {/* Tiện ích chung */}
        <View style={styles.menuSection}>
          <Text style={styles.sectionTitle}>Cài đặt hệ thống</Text>

          <TouchableOpacity style={styles.menuItem} onPress={() => triggerFeatureAlert('Thiết lập eKYC')}>
            <View style={styles.menuItemLeft}>
              <Text style={styles.menuIcon}>🛡️</Text>
              <Text style={styles.menuLabel}>Xác thực căn cước công dân (eKYC)</Text>
            </View>
            <View style={styles.menuItemRight}>
              <Text style={styles.greenCheck}>✓ Đã duyệt</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem} onPress={() => triggerFeatureAlert('Cài đặt thông báo')}>
            <View style={styles.menuItemLeft}>
              <Text style={styles.menuIcon}>🔔</Text>
              <Text style={styles.menuLabel}>Cấu hình nhận thông báo (Push)</Text>
            </View>
            <View style={styles.menuItemRight}>
              <Text style={styles.arrowIcon}>chevron-right</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem} onPress={handleLogout}>
            <View style={styles.menuItemLeft}>
              <Text style={styles.menuIcon}>🚪</Text>
              <Text style={[styles.menuLabel, styles.logoutLabel]}>Đăng xuất tài khoản</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  profileHeader: {
    alignItems: 'center',
    paddingVertical: 30,
    backgroundColor: '#FFFFFF',
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.04,
    shadowRadius: 8,
    elevation: 3,
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    borderWidth: 3,
    borderColor: '#E8F5E9',
    backgroundColor: '#E9ECEF',
    marginBottom: 12,
  },
  nameText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#212529',
    marginBottom: 4,
  },
  phoneText: {
    fontSize: 13,
    color: '#868E96',
    marginBottom: 12,
  },
  badgeRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  verifiedBadge: {
    backgroundColor: '#EBFBEE',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 4,
    marginRight: 8,
  },
  verifiedText: {
    fontSize: 11,
    color: '#2B8A3E',
    fontWeight: '600',
  },
  roleBadge: {
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  roleTenant: {
    backgroundColor: '#E8F4FD',
  },
  roleLandlord: {
    backgroundColor: '#FFF9DB',
  },
  roleText: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#1C7ED6',
  },
  roleSwitchCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    marginTop: 20,
    padding: 16,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.03,
    shadowRadius: 6,
    elevation: 1,
  },
  switchTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#343A40',
    marginBottom: 2,
  },
  switchDesc: {
    fontSize: 11,
    color: '#868E96',
  },
  menuSection: {
    backgroundColor: '#FFFFFF',
    marginTop: 20,
    marginHorizontal: 20,
    borderRadius: 16,
    paddingVertical: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.03,
    shadowRadius: 6,
    elevation: 1,
  },
  sectionTitle: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#ADB5BD',
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 8,
    textTransform: 'uppercase',
  },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F1F3F5',
  },
  menuItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuIcon: {
    fontSize: 18,
    marginRight: 12,
  },
  menuLabel: {
    fontSize: 14,
    color: '#495057',
    fontWeight: '500',
  },
  logoutLabel: {
    color: '#E03131',
    fontWeight: '600',
  },
  menuItemRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  notificationBadge: {
    backgroundColor: '#FA5252',
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: 'bold',
    borderRadius: 10,
    paddingHorizontal: 6,
    paddingVertical: 2,
    marginRight: 8,
  },
  badgeActive: {
    backgroundColor: '#EBFBEE',
    color: '#2B8A3E',
    fontSize: 10,
    fontWeight: 'bold',
    borderRadius: 4,
    paddingHorizontal: 6,
    paddingVertical: 2,
    marginRight: 8,
  },
  aiTag: {
    backgroundColor: '#EBFBEE',
    color: '#2B8A3E',
    fontSize: 9,
    fontWeight: 'bold',
    borderRadius: 4,
    paddingHorizontal: 6,
    paddingVertical: 2,
    marginRight: 8,
    borderWidth: 1,
    borderColor: '#D3F9D8',
  },
  greenCheck: {
    color: '#2B8A3E',
    fontSize: 12,
    fontWeight: '600',
  },
  arrowIcon: {
    color: '#ADB5BD',
    fontSize: 12,
  },
});
