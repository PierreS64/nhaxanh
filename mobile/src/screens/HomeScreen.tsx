import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
  Dimensions,
  SafeAreaView,
  StatusBar
} from 'react-native';
import { Property } from '../types';

const { width } = Dimensions.get('window');

// Mock data phòng trọ nổi bật
const FEATURED_PROPERTIES: Property[] = [
  {
    id: 'prop-1',
    title: 'Căn hộ Studio dịch vụ Full đồ cực đẹp Cầu Giấy',
    description: 'Căn hộ Studio ban công rộng thoáng, đầy đủ giường tủ, tủ lạnh, máy giặt riêng, điều hòa inverter tiết kiệm điện. Khu vực an ninh tốt, giờ giấc tự do, khóa vân tay, camera giám sát 24/7.',
    price: 4500000,
    area: 30,
    address: 'Số 15 Ngõ 102 Trần Duy Hưng, Cầu Giấy, Hà Nội',
    district: 'Cầu Giấy',
    city: 'Hà Nội',
    images: ['https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=500&q=80'],
    utilities: ['Wifi', 'Điều hòa', 'Tủ lạnh', 'Máy giặt', 'Ban công', 'Khóa vân tay', 'Thang máy'],
    roomType: 'apartment',
    status: 'available',
    vibeScore: 92,
    ownerId: 'owner-101',
    ownerName: 'Nguyễn Văn Hùng',
    ownerPhone: '0987654321',
    createdAt: '2026-05-20'
  },
  {
    id: 'prop-2',
    title: 'Chung cư mini cao cấp Đống Đa - Gần đại học Y',
    description: 'Chung cư mini mới xây, thang máy tốc độ cao, bảo vệ 24/24. Phòng đầy đủ tiện nghi, thiết kế hiện đại, tối ưu không gian sống. Thích hợp cho hộ gia đình trẻ hoặc sinh viên ở ghép.',
    price: 6000000,
    area: 45,
    address: 'Số 8 Ngõ 26 Chùa Bộc, Đống Đa, Hà Nội',
    district: 'Đống Đa',
    city: 'Hà Nội',
    images: ['https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=500&q=80'],
    utilities: ['Wifi', 'Điều hòa', 'Tủ lạnh', 'Máy giặt', 'Thang máy', 'Giờ tự do', 'Bảo vệ'],
    roomType: 'apartment',
    status: 'available',
    vibeScore: 88,
    ownerId: 'owner-102',
    ownerName: 'Trần Thị Mai',
    ownerPhone: '0912345678',
    createdAt: '2026-05-22'
  }
];

// Mock data phòng trọ mới nhất
const RECENT_PROPERTIES: Property[] = [
  ...FEATURED_PROPERTIES,
  {
    id: 'prop-3',
    title: 'Phòng trọ giá rẻ cho sinh viên gần ĐH Bách Khoa',
    description: 'Phòng trọ khép kín sạch sẽ, gần các trường Bách Khoa, Kinh Tế, Xây Dựng. Có sẵn giường, tủ quần áo, điều hòa. Điện nước giá dân, khu trọ tự quản an ninh tốt.',
    price: 2500000,
    area: 20,
    address: 'Ngõ 40 Tạ Quang Bửu, Hai Bà Trưng, Hà Nội',
    district: 'Hai Bà Trưng',
    city: 'Hà Nội',
    images: ['https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=500&q=80'],
    utilities: ['Wifi', 'Điều hòa', 'Giờ tự do'],
    roomType: 'motel',
    status: 'available',
    vibeScore: 85,
    ownerId: 'owner-103',
    ownerName: 'Phạm Đức Long',
    ownerPhone: '0966778899',
    createdAt: '2026-05-24'
  },
  {
    id: 'prop-4',
    title: 'Tìm bạn ở ghép chung cư Times City - Tiện ích đẳng cấp',
    description: 'Cần tìm 1 bạn nam ở ghép căn hộ 2 phòng ngủ tại Times City. Đầy đủ tiện ích nội khu: bể bơi, phòng gym, siêu thị, bệnh viện, trường học. Phòng ngủ riêng tư, sạch sẽ, lối sống văn minh.',
    price: 3500000,
    area: 75,
    address: 'Tòa T5 Times City, Minh Khai, Hai Bà Trưng, Hà Nội',
    district: 'Hai Bà Trưng',
    city: 'Hà Nội',
    images: ['https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=500&q=80'],
    utilities: ['Wifi', 'Điều hòa', 'Tủ lạnh', 'Máy giặt', 'Thang máy', 'Bể bơi', 'Phòng Gym', 'Bảo vệ'],
    roomType: 'shared',
    status: 'available',
    vibeScore: 95,
    ownerId: 'owner-104',
    ownerName: 'Hoàng Anh Tuấn',
    ownerPhone: '0977889900',
    createdAt: '2026-05-25'
  }
];

export default function HomeScreen({ navigation }: any) {
  const [searchQuery, setSearchQuery] = useState('');

  // Định dạng tiền tệ VND
  const formatPrice = (price: number) => {
    return price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' }).replace('₫', 'đ/tháng');
  };

  const renderFeaturedItem = ({ item }: { item: Property }) => (
    <TouchableOpacity
      style={styles.featuredCard}
      activeOpacity={0.9}
      onPress={() => navigation.navigate('PropertyDetail', { propertyId: item.id })}
    >
      <Image source={{ uri: item.images[0] }} style={styles.featuredImage} />
      <View style={styles.vibeTag}>
        <Text style={styles.vibeText}>⭐️ {item.vibeScore} Vibe</Text>
      </View>
      <View style={styles.featuredInfo}>
        <Text style={styles.featuredTitle} numberOfLines={1}>{item.title}</Text>
        <Text style={styles.featuredAddress} numberOfLines={1}>📍 {item.address}</Text>
        <View style={styles.featuredMeta}>
          <Text style={styles.featuredPrice}>{formatPrice(item.price)}</Text>
          <Text style={styles.featuredArea}>{item.area} m²</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  const renderRecentItem = ({ item }: { item: Property }) => (
    <TouchableOpacity
      style={styles.recentCard}
      activeOpacity={0.9}
      onPress={() => navigation.navigate('PropertyDetail', { propertyId: item.id })}
    >
      <Image source={{ uri: item.images[0] }} style={styles.recentImage} />
      <View style={styles.recentInfo}>
        <Text style={styles.recentType}>{item.roomType === 'apartment' ? 'Chung cư/Căn hộ' : item.roomType === 'motel' ? 'Phòng trọ' : 'Ở ghép'}</Text>
        <Text style={styles.recentTitle} numberOfLines={1}>{item.title}</Text>
        <Text style={styles.recentAddress} numberOfLines={1}>📍 {item.address}</Text>
        <View style={styles.recentMeta}>
          <Text style={styles.recentPrice}>{formatPrice(item.price)}</Text>
          <Text style={styles.recentArea}>{item.area} m²</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.welcomeText}>Xin chào,</Text>
          <Text style={styles.userNameText}>Người dùng Nhà Xanh 👋</Text>
        </View>
        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=80' }}
          style={styles.avatar}
        />
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        {/* Thanh tìm kiếm & Nút Giọng nói AI */}
        <View style={styles.searchContainer}>
          <View style={styles.searchBar}>
            <Text style={styles.searchIcon}>🔍</Text>
            <TextInput
              placeholder="Tìm kiếm: Cầu Giấy dưới 4 triệu..."
              value={searchQuery}
              onChangeText={setSearchQuery}
              style={styles.searchInput}
              onFocus={() => navigation.navigate('Search')}
            />
          </View>
          <TouchableOpacity
            style={styles.voiceBtn}
            onPress={() => navigation.navigate('Messages', { startVoiceBot: true })}
          >
            <Text style={styles.voiceBtnIcon}>🎙️</Text>
          </TouchableOpacity>
        </View>

        {/* Banner giới thiệu AI Voice RentBot */}
        <TouchableOpacity
          style={styles.aiBanner}
          activeOpacity={0.9}
          onPress={() => navigation.navigate('Messages', { startVoiceBot: true })}
        >
          <View style={styles.aiBannerLeft}>
            <Text style={styles.aiBannerTitle}>🤖 Trợ lý AI RentBot</Text>
            <Text style={styles.aiBannerDesc}>Giữ mic nói: "Tìm phòng trọ Đống Đa dưới 3tr có điều hòa"</Text>
          </View>
          <View style={styles.aiBannerRight}>
            <Text style={styles.aiBannerEmoji}>🎙️✨</Text>
          </View>
        </TouchableOpacity>

        {/* Danh mục nhanh */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Danh mục nổi bật</Text>
        </View>
        <View style={styles.categoriesContainer}>
          {[
            { label: 'Phòng trọ', icon: '🏠', type: 'motel' },
            { label: 'Căn hộ', icon: '🏢', type: 'apartment' },
            { label: 'Nhà nguyên căn', icon: '🏡', type: 'house' },
            { label: 'Ở ghép', icon: '🤝', type: 'shared' }
          ].map((cat, idx) => (
            <TouchableOpacity
              key={idx}
              style={styles.categoryItem}
              onPress={() => navigation.navigate('Search', { initialType: cat.type })}
            >
              <View style={styles.categoryIconBg}>
                <Text style={styles.categoryIcon}>{cat.icon}</Text>
              </View>
              <Text style={styles.categoryLabel}>{cat.label}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Phòng trọ nổi bật */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Phòng trọ nổi bật</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Search')}>
            <Text style={styles.seeAllText}>Xem tất cả</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={FEATURED_PROPERTIES}
          renderItem={renderFeaturedItem}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToInterval={width * 0.75 + 16}
          decelerationRate="fast"
          contentContainerStyle={styles.featuredList}
        />

        {/* Phòng trọ mới nhất */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Phòng trọ mới nhất</Text>
        </View>
        <View style={styles.recentContainer}>
          {RECENT_PROPERTIES.map((item) => (
            <React.Fragment key={item.id}>
              {renderRecentItem({ item })}
            </React.Fragment>
          ))}
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 15,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#F1F3F5',
  },
  welcomeText: {
    fontSize: 14,
    color: '#868E96',
    fontWeight: '500',
  },
  userNameText: {
    fontSize: 18,
    color: '#212529',
    fontWeight: 'bold',
    marginTop: 2,
  },
  avatar: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
    backgroundColor: '#E9ECEF',
  },
  scrollContent: {
    paddingBottom: 30,
  },
  searchContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginTop: 15,
    alignItems: 'center',
  },
  searchBar: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    paddingHorizontal: 12,
    height: 48,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  searchIcon: {
    fontSize: 16,
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    color: '#495057',
  },
  voiceBtn: {
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: '#2B8A3E', // Green brand color
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    shadowColor: '#2B8A3E',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 3,
  },
  voiceBtnIcon: {
    fontSize: 20,
  },
  aiBanner: {
    marginHorizontal: 20,
    marginTop: 15,
    padding: 16,
    backgroundColor: '#EBFBEE', // Light green bg
    borderRadius: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#D3F9D8',
  },
  aiBannerLeft: {
    flex: 1,
    marginRight: 10,
  },
  aiBannerTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2B8A3E',
    marginBottom: 4,
  },
  aiBannerDesc: {
    fontSize: 12,
    color: '#40C057',
    fontWeight: '500',
    lineHeight: 16,
  },
  aiBannerEmoji: {
    fontSize: 28,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 25,
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#212529',
  },
  seeAllText: {
    fontSize: 14,
    color: '#2B8A3E',
    fontWeight: '600',
  },
  categoriesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  categoryItem: {
    alignItems: 'center',
    width: (width - 40 - 24) / 4,
  },
  categoryIconBg: {
    width: 56,
    height: 56,
    borderRadius: 16,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 2,
    marginBottom: 8,
  },
  categoryIcon: {
    fontSize: 24,
  },
  categoryLabel: {
    fontSize: 11,
    color: '#495057',
    fontWeight: '600',
    textAlign: 'center',
  },
  featuredList: {
    paddingLeft: 20,
    paddingRight: 4,
  },
  featuredCard: {
    width: width * 0.75,
    marginRight: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.06,
    shadowRadius: 10,
    elevation: 3,
    marginVertical: 5,
  },
  featuredImage: {
    width: '100%',
    height: 160,
    backgroundColor: '#E9ECEF',
  },
  vibeTag: {
    position: 'absolute',
    top: 12,
    left: 12,
    backgroundColor: 'rgba(33, 37, 41, 0.85)',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  vibeText: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: 'bold',
  },
  featuredInfo: {
    padding: 14,
  },
  featuredTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#212529',
    marginBottom: 6,
  },
  featuredAddress: {
    fontSize: 12,
    color: '#868E96',
    marginBottom: 10,
  },
  featuredMeta: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  featuredPrice: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#2B8A3E',
  },
  featuredArea: {
    fontSize: 13,
    color: '#495057',
    fontWeight: '500',
  },
  recentContainer: {
    paddingHorizontal: 20,
  },
  recentCard: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    marginBottom: 12,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.04,
    shadowRadius: 6,
    elevation: 2,
  },
  recentImage: {
    width: 100,
    height: 100,
    backgroundColor: '#E9ECEF',
  },
  recentInfo: {
    flex: 1,
    padding: 12,
    justifyContent: 'center',
  },
  recentType: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#2B8A3E',
    textTransform: 'uppercase',
    marginBottom: 4,
  },
  recentTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#212529',
    marginBottom: 4,
  },
  recentAddress: {
    fontSize: 11,
    color: '#868E96',
    marginBottom: 8,
  },
  recentMeta: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  recentPrice: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#2B8A3E',
  },
  recentArea: {
    fontSize: 11,
    color: '#495057',
    fontWeight: '500',
  },
});
