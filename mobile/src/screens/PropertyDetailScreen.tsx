import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  Dimensions,
  Share,
  Alert
} from 'react-native';
import { Property } from '../types';

const { width } = Dimensions.get('window');

// Mock data lấy thông tin chi tiết dựa vào id
const ALL_PROPERTIES: { [key: string]: Property } = {
  'prop-1': {
    id: 'prop-1',
    title: 'Căn hộ Studio dịch vụ Full đồ cực đẹp Cầu Giấy',
    description: 'Căn hộ Studio thiết kế thông minh kiểu Tây Âu vô cùng ấm cúng. Phòng có ban công thoáng mát đón ánh sáng tự nhiên. Trang bị sẵn giường đệm cao cấp, tủ quần áo kịch trần, tủ lạnh 2 cánh, điều hòa Inverter thế hệ mới, máy giặt dùng riêng, bếp điện từ không khói.\n\nKhu trọ an ninh tuyệt đối với cổng vân tay khóa kép, camera ghi hình 24/7, chỗ để xe rộng rãi miễn phí tầng 1. Vị trí trung tâm cực kỳ thuận tiện di chuyển tới các trường ĐH lớn và khu văn phòng Duy Tân.',
    price: 4500000,
    area: 30,
    address: 'Số 15 Ngõ 102 Trần Duy Hưng, Cầu Giấy, Hà Nội',
    district: 'Cầu Giấy',
    city: 'Hà Nội',
    images: [
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80'
    ],
    utilities: ['Wifi', 'Điều hòa', 'Tủ lạnh', 'Máy giặt', 'Ban công', 'Khóa vân tay', 'Thang máy', 'Giờ tự do'],
    roomType: 'apartment',
    status: 'available',
    vibeScore: 92,
    ownerId: 'owner-101',
    ownerName: 'Nguyễn Văn Hùng',
    ownerPhone: '0987654321',
    ownerAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&q=80',
    createdAt: '2026-05-20'
  },
  'prop-2': {
    id: 'prop-2',
    title: 'Chung cư mini cao cấp Đống Đa - Gần đại học Y',
    description: 'Chung cư mini mới xây, bàn giao phòng ngay. Thang máy tốc độ cao bảo dưỡng định kỳ, bảo vệ túc trực ngày đêm hỗ trợ nhận hàng hóa bưu phẩm. Phòng vệ sinh khép kín sạch sẽ vách kính cường lực. Nội thất nhập khẩu tinh tế lịch sự thích hợp hộ gia đình nhỏ hoặc người đi làm văn phòng.',
    price: 6000000,
    area: 45,
    address: 'Số 8 Ngõ 26 Chùa Bộc, Đống Đa, Hà Nội',
    district: 'Đống Đa',
    city: 'Hà Nội',
    images: [
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=800&q=80'
    ],
    utilities: ['Wifi', 'Điều hòa', 'Tủ lạnh', 'Máy giặt', 'Thang máy', 'Giờ tự do', 'Bảo vệ', 'Ban công'],
    roomType: 'apartment',
    status: 'available',
    vibeScore: 88,
    ownerId: 'owner-102',
    ownerName: 'Trần Thị Mai',
    ownerPhone: '0912345678',
    ownerAvatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&q=80',
    createdAt: '2026-05-22'
  },
  'prop-3': {
    id: 'prop-3',
    title: 'Phòng trọ giá rẻ cho sinh viên gần ĐH Bách Khoa',
    description: 'Phòng khép kín diện tích trung bình, chi phí cực kỳ tiết kiệm cho sinh viên các trường đại học lớn khu vực Bách-Kinh-Xây. Có sẵn giường đơn, tủ quần áo vải, điều hòa 1 chiều mát nhanh. Có sân phơi chung rộng tầng thượng, để xe an toàn tầng 1.',
    price: 2500000,
    area: 20,
    address: 'Ngõ 40 Tạ Quang Bửu, Hai Bà Trưng, Hà Nội',
    district: 'Hai Bà Trưng',
    city: 'Hà Nội',
    images: ['https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=800&q=80'],
    utilities: ['Wifi', 'Điều hòa', 'Giờ tự do'],
    roomType: 'motel',
    status: 'available',
    vibeScore: 85,
    ownerId: 'owner-103',
    ownerName: 'Phạm Đức Long',
    ownerPhone: '0966778899',
    ownerAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80',
    createdAt: '2026-05-24'
  },
  'prop-4': {
    id: 'prop-4',
    title: 'Tìm bạn ở ghép chung cư Times City - Tiện ích đẳng cấp',
    description: 'Tìm nam ở ghép căn hộ 2 phòng ngủ 2 WC full đồ tại Times City. Mình là lập trình viên hiền lành, sạch sẽ, giờ giấc hành chính. Cần tìm bạn ở cùng văn minh, tôn trọng không gian chung. Bạn vào ở chỉ việc xách vali đến, có phòng ngủ riêng tư.',
    price: 3500000,
    area: 75,
    address: 'Tòa T5 Times City, Minh Khai, Hai Bà Trưng, Hà Nội',
    district: 'Hai Bà Trưng',
    city: 'Hà Nội',
    images: ['https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80'],
    utilities: ['Wifi', 'Điều hòa', 'Tủ lạnh', 'Máy giặt', 'Thang máy', 'Bể bơi', 'Phòng Gym', 'Bảo vệ'],
    roomType: 'shared',
    status: 'available',
    vibeScore: 95,
    ownerId: 'owner-104',
    ownerName: 'Hoàng Anh Tuấn',
    ownerPhone: '0977889900',
    ownerAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80',
    createdAt: '2026-05-25'
  }
};

export default function PropertyDetailScreen({ route, navigation }: any) {
  const propertyId = route.params?.propertyId || 'prop-1';
  const property = ALL_PROPERTIES[propertyId] || ALL_PROPERTIES['prop-1'];

  const formatPrice = (price: number) => {
    return price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' }).replace('₫', 'đ/tháng');
  };

  const handleShare = async () => {
    try {
      await Share.share({
        message: `Xem phòng trọ cực đẹp trên Nhà Xanh: ${property.title} - Giá ${formatPrice(property.price)} - Địa chỉ: ${property.address}`,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleCall = () => {
    Alert.alert('Gọi chủ nhà', `Bạn muốn gọi số ${property.ownerPhone} của ${property.ownerName}?`, [
      { text: 'Hủy', style: 'cancel' },
      { text: 'Gọi điện', onPress: () => Alert.alert('Đang kết nối cuộc gọi...', 'Giả lập tính năng gọi điện thoại.') }
    ]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />

      {/* Header tùy chỉnh nổi trên ảnh */}
      <View style={styles.floatingHeader}>
        <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
          <Text style={styles.backIcon}>⬅️</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.shareBtn} onPress={handleShare}>
          <Text style={styles.shareIcon}>📤</Text>
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        {/* Ảnh phòng trọ */}
        <Image source={{ uri: property.images[0] }} style={styles.mainImage} />

        {/* Thông tin cơ bản */}
        <View style={styles.mainInfoCard}>
          <View style={styles.priceRow}>
            <Text style={styles.priceText}>{formatPrice(property.price)}</Text>
            <View style={styles.vibeScoreBadge}>
              <Text style={styles.vibeText}>⭐️ {property.vibeScore} Vibe Score</Text>
            </View>
          </View>
          <Text style={styles.titleText}>{property.title}</Text>
          <Text style={styles.addressText}>📍 {property.address}</Text>

          {/* Grid diện tích & loại hình */}
          <View style={styles.metaGrid}>
            <View style={styles.metaCol}>
              <Text style={styles.metaLabel}>Diện tích</Text>
              <Text style={styles.metaVal}>{property.area} m²</Text>
            </View>
            <View style={styles.metaColDivider} />
            <View style={styles.metaCol}>
              <Text style={styles.metaLabel}>Loại hình</Text>
              <Text style={styles.metaVal}>
                {property.roomType === 'apartment' ? 'Chung cư/Căn hộ' : property.roomType === 'motel' ? 'Phòng trọ' : 'Ở ghép'}
              </Text>
            </View>
            <View style={styles.metaColDivider} />
            <View style={styles.metaCol}>
              <Text style={styles.metaLabel}>Trạng thái</Text>
              <Text style={[styles.metaVal, { color: '#2B8A3E' }]}>Trống</Text>
            </View>
          </View>
        </View>

        {/* Mô tả chi tiết */}
        <View style={styles.sectionCard}>
          <Text style={styles.sectionTitle}>Mô tả chi tiết</Text>
          <Text style={styles.descText}>{property.description}</Text>
        </View>

        {/* Danh sách tiện ích */}
        <View style={styles.sectionCard}>
          <Text style={styles.sectionTitle}>Tiện ích nổi bật</Text>
          <View style={styles.utilityGrid}>
            {property.utilities.map((util, index) => (
              <View key={index} style={styles.utilityItem}>
                <Text style={styles.utilityIcon}>✅</Text>
                <Text style={styles.utilityName}>{util}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Bản đồ đánh giá Vibe Score */}
        <View style={styles.sectionCard}>
          <Text style={styles.sectionTitle}>Đánh giá khu vực (Vibe Score)</Text>
          <View style={styles.vibeStats}>
            <View style={styles.vibeStatRow}>
              <Text style={styles.vibeStatLabel}>👮 An ninh & Trật tự</Text>
              <Text style={styles.vibeStatVal}>95/100</Text>
            </View>
            <View style={styles.vibeStatRow}>
              <Text style={styles.vibeStatLabel}>🌊 Nguy cơ ngập lụt</Text>
              <Text style={[styles.vibeStatVal, { color: '#2B8A3E' }]}>Không ngập</Text>
            </View>
            <View style={styles.vibeStatRow}>
              <Text style={styles.vibeStatLabel}>🛒 Tiện ích mua sắm (chợ/siêu thị)</Text>
              <Text style={styles.vibeStatVal}>90/100</Text>
            </View>
            <View style={styles.vibeStatRow}>
              <Text style={styles.vibeStatLabel}>🚴 Khoảng cách di chuyển</Text>
              <Text style={styles.vibeStatVal}>Tiện lợi</Text>
            </View>
          </View>
        </View>

        {/* Thông tin chủ nhà */}
        <View style={styles.ownerCard}>
          <Image
            source={{ uri: property.ownerAvatar || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=80' }}
            style={styles.ownerAvatar}
          />
          <View style={styles.ownerInfo}>
            <Text style={styles.ownerTitle}>Liên hệ Chủ nhà</Text>
            <Text style={styles.ownerName}>{property.ownerName}</Text>
            <Text style={styles.ownerPhoneText}>SĐT: {property.ownerPhone}</Text>
          </View>
        </View>
      </ScrollView>

      {/* Thanh Call-to-Action dưới cùng */}
      <View style={styles.bottomCtaBar}>
        <TouchableOpacity
          style={styles.chatCtaBtn}
          onPress={() => navigation.navigate('Messages', { startVoiceBot: false })}
        >
          <Text style={styles.chatCtaText}>💬 Nhắn tin</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.callCtaBtn} onPress={handleCall}>
          <Text style={styles.callCtaText}>📞 Gọi điện ngay</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  floatingHeader: {
    position: 'absolute',
    top: 45,
    left: 20,
    right: 20,
    zIndex: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  backBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(33, 37, 41, 0.6)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backIcon: {
    fontSize: 16,
  },
  shareBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(33, 37, 41, 0.6)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  shareIcon: {
    fontSize: 16,
  },
  scrollContent: {
    paddingBottom: 100,
  },
  mainImage: {
    width: '100%',
    height: 250,
    backgroundColor: '#E9ECEF',
  },
  mainInfoCard: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.04,
    shadowRadius: 6,
    elevation: 2,
  },
  priceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  priceText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2B8A3E',
  },
  vibeScoreBadge: {
    backgroundColor: '#EBFBEE',
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 5,
  },
  vibeText: {
    fontSize: 12,
    color: '#2B8A3E',
    fontWeight: 'bold',
  },
  titleText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#212529',
    lineHeight: 24,
    marginBottom: 8,
  },
  addressText: {
    fontSize: 13,
    color: '#868E96',
    marginBottom: 16,
  },
  metaGrid: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: '#F1F3F5',
    paddingTop: 16,
    justifyContent: 'space-between',
  },
  metaCol: {
    flex: 1,
    alignItems: 'center',
  },
  metaColDivider: {
    width: 1,
    height: '80%',
    backgroundColor: '#E9ECEF',
    alignSelf: 'center',
  },
  metaLabel: {
    fontSize: 11,
    color: '#868E96',
    marginBottom: 4,
  },
  metaVal: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#343A40',
  },
  sectionCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    marginTop: 15,
    marginHorizontal: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.03,
    shadowRadius: 6,
    elevation: 1,
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#212529',
    marginBottom: 12,
  },
  descText: {
    fontSize: 13,
    lineHeight: 20,
    color: '#495057',
  },
  utilityGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  utilityItem: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '50%',
    marginBottom: 10,
  },
  utilityIcon: {
    fontSize: 12,
    marginRight: 6,
  },
  utilityName: {
    fontSize: 13,
    color: '#495057',
  },
  vibeStats: {
    marginTop: 4,
  },
  vibeStatRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#F1F3F5',
  },
  vibeStatLabel: {
    fontSize: 13,
    color: '#495057',
  },
  vibeStatVal: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#212529',
  },
  ownerCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    marginTop: 15,
    marginHorizontal: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.03,
    shadowRadius: 6,
    elevation: 1,
  },
  ownerAvatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#E9ECEF',
  },
  ownerInfo: {
    flex: 1,
    marginLeft: 14,
  },
  ownerTitle: {
    fontSize: 11,
    color: '#868E96',
    fontWeight: '500',
    marginBottom: 2,
  },
  ownerName: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#212529',
    marginBottom: 2,
  },
  ownerPhoneText: {
    fontSize: 13,
    color: '#495057',
  },
  bottomCtaBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 75,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#E9ECEF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingBottom: Platform.OS === 'ios' ? 15 : 0,
  },
  chatCtaBtn: {
    flex: 0.4,
    height: 46,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#2B8A3E',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  chatCtaText: {
    color: '#2B8A3E',
    fontSize: 14,
    fontWeight: 'bold',
  },
  callCtaBtn: {
    flex: 0.56,
    height: 46,
    borderRadius: 10,
    backgroundColor: '#2B8A3E',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#2B8A3E',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 3,
  },
  callCtaText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
