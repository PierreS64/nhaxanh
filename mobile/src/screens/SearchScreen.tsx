import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Image,
  SafeAreaView,
  StatusBar,
  Dimensions
} from 'react-native';
import { Property, PropertyType } from '../types';

const { width } = Dimensions.get('window');

// Mock data toàn bộ phòng trọ để thực hiện tìm kiếm
const ALL_PROPERTIES: Property[] = [
  {
    id: 'prop-1',
    title: 'Căn hộ Studio dịch vụ Full đồ cực đẹp Cầu Giấy',
    description: 'Căn hộ Studio dịch vụ cực đẹp...',
    price: 4500000,
    area: 30,
    address: 'Số 15 Ngõ 102 Trần Duy Hưng, Cầu Giấy, Hà Nội',
    district: 'Cầu Giấy',
    city: 'Hà Nội',
    images: ['https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=500&q=80'],
    utilities: ['Wifi', 'Điều hòa', 'Tủ lạnh', 'Máy giặt', 'Ban công', 'Thang máy'],
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
    description: 'Chung cư mini mới xây...',
    price: 6000000,
    area: 45,
    address: 'Số 8 Ngõ 26 Chùa Bộc, Đống Đa, Hà Nội',
    district: 'Đống Đa',
    city: 'Hà Nội',
    images: ['https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=500&q=80'],
    utilities: ['Wifi', 'Điều hòa', 'Tủ lạnh', 'Máy giặt', 'Thang máy', 'Bảo vệ'],
    roomType: 'apartment',
    status: 'available',
    vibeScore: 88,
    ownerId: 'owner-102',
    ownerName: 'Trần Thị Mai',
    ownerPhone: '0912345678',
    createdAt: '2026-05-22'
  },
  {
    id: 'prop-3',
    title: 'Phòng trọ giá rẻ cho sinh viên gần ĐH Bách Khoa',
    description: 'Phòng trọ khép kín sạch sẽ...',
    price: 2500000,
    area: 20,
    address: 'Ngõ 40 Tạ Quang Bửu, Hai Bà Trưng, Hà Nội',
    district: 'Hai Bà Trưng',
    city: 'Hà Nội',
    images: ['https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=500&q=80'],
    utilities: ['Wifi', 'Điều hòa'],
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
    description: 'Cần tìm bạn nam ở ghép...',
    price: 3500000,
    area: 75,
    address: 'Tòa T5 Times City, Minh Khai, Hai Bà Trưng, Hà Nội',
    district: 'Hai Bà Trưng',
    city: 'Hà Nội',
    images: ['https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=500&q=80'],
    utilities: ['Wifi', 'Điều hòa', 'Tủ lạnh', 'Máy giặt', 'Bể bơi', 'Gym'],
    roomType: 'shared',
    status: 'available',
    vibeScore: 95,
    ownerId: 'owner-104',
    ownerName: 'Hoàng Anh Tuấn',
    ownerPhone: '0977889900',
    createdAt: '2026-05-25'
  }
];

const UTILITIES_LIST = ['Wifi', 'Điều hòa', 'Tủ lạnh', 'Máy giặt', 'Thang máy', 'Ban công', 'Bảo vệ', 'Bể bơi'];
const DISTRICTS = ['Tất cả', 'Cầu Giấy', 'Đống Đa', 'Hai Bà Trưng', 'Thanh Xuân', 'Hoàn Kiếm'];

export default function SearchScreen({ route, navigation }: any) {
  // Lấy các tham số truyền sang (nếu có)
  const initialType = route.params?.initialType as PropertyType | undefined;

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState<PropertyType | 'all'>(initialType || 'all');
  const [selectedDistrict, setSelectedDistrict] = useState('Tất cả');
  const [selectedUtilities, setSelectedUtilities] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<'all' | 'under_3' | '3_to_5' | 'over_5'>('all');
  const [showFilters, setShowFilters] = useState(false);
  const [results, setResults] = useState<Property[]>(ALL_PROPERTIES);

  // Kích hoạt khi thay đổi bộ lọc
  useEffect(() => {
    let filtered = ALL_PROPERTIES;

    // Lọc theo text tìm kiếm
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (p) =>
          p.title.toLowerCase().includes(query) ||
          p.address.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query)
      );
    }

    // Lọc theo loại phòng
    if (selectedType !== 'all') {
      filtered = filtered.filter((p) => p.roomType === selectedType);
    }

    // Lọc theo quận
    if (selectedDistrict !== 'Tất cả') {
      filtered = filtered.filter((p) => p.district === selectedDistrict);
    }

    // Lọc theo khoảng giá
    if (priceRange === 'under_3') {
      filtered = filtered.filter((p) => p.price < 3000000);
    } else if (priceRange === '3_to_5') {
      filtered = filtered.filter((p) => p.price >= 3000000 && p.price <= 5000000);
    } else if (priceRange === 'over_5') {
      filtered = filtered.filter((p) => p.price > 5000000);
    }

    // Lọc theo tiện ích
    if (selectedUtilities.length > 0) {
      filtered = filtered.filter((p) =>
        selectedUtilities.every((util) => p.utilities.includes(util))
      );
    }

    setResults(filtered);
  }, [searchQuery, selectedType, selectedDistrict, priceRange, selectedUtilities]);

  const toggleUtility = (utility: string) => {
    if (selectedUtilities.includes(utility)) {
      setSelectedUtilities(selectedUtilities.filter((u) => u !== utility));
    } else {
      setSelectedUtilities([...selectedUtilities, utility]);
    }
  };

  const resetFilters = () => {
    setSelectedType('all');
    setSelectedDistrict('Tất cả');
    setSelectedUtilities([]);
    setPriceRange('all');
    setSearchQuery('');
  };

  const formatPrice = (price: number) => {
    return price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' }).replace('₫', 'đ/tháng');
  };

  const renderPropertyItem = ({ item }: { item: Property }) => (
    <TouchableOpacity
      style={styles.card}
      activeOpacity={0.9}
      onPress={() => navigation.navigate('PropertyDetail', { propertyId: item.id })}
    >
      <Image source={{ uri: item.images[0] }} style={styles.cardImage} />
      <View style={styles.cardContent}>
        <View style={styles.typeBadge}>
          <Text style={styles.typeText}>
            {item.roomType === 'apartment' ? 'Chung cư' : item.roomType === 'motel' ? 'Phòng trọ' : 'Ở ghép'}
          </Text>
        </View>
        <Text style={styles.cardTitle} numberOfLines={1}>{item.title}</Text>
        <Text style={styles.cardAddress} numberOfLines={1}>📍 {item.address}</Text>
        <View style={styles.cardMeta}>
          <Text style={styles.cardPrice}>{formatPrice(item.price)}</Text>
          <Text style={styles.cardArea}>{item.area} m²</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      {/* Khối Tìm kiếm */}
      <View style={styles.searchHeader}>
        <View style={styles.searchRow}>
          <View style={styles.inputContainer}>
            <Text style={styles.searchIcon}>🔍</Text>
            <TextInput
              placeholder="Nhập khu vực, tên đường..."
              value={searchQuery}
              onChangeText={setSearchQuery}
              style={styles.input}
            />
            {searchQuery.length > 0 && (
              <TouchableOpacity onPress={() => setSearchQuery('')}>
                <Text style={styles.clearIcon}>✖️</Text>
              </TouchableOpacity>
            )}
          </View>
          <TouchableOpacity
            style={[styles.filterToggle, showFilters && styles.filterToggleActive]}
            onPress={() => setShowFilters(!showFilters)}
          >
            <Text style={[styles.filterToggleText, showFilters && styles.filterToggleTextActive]}>
              {showFilters ? 'Đóng bộ lọc' : 'Bộ lọc ⚙️'}
            </Text>
          </TouchableOpacity>
        </View>

        {/* Bộ lọc mở rộng */}
        {showFilters && (
          <ScrollView style={styles.filtersScroll} showsVerticalScrollIndicator={false}>
            {/* Loại phòng */}
            <Text style={styles.filterTitle}>Loại hình cho thuê</Text>
            <View style={styles.typesRow}>
              {[
                { label: 'Tất cả', val: 'all' },
                { label: 'Phòng trọ', val: 'motel' },
                { label: 'Căn hộ', val: 'apartment' },
                { label: 'Ở ghép', val: 'shared' }
              ].map((t) => (
                <TouchableOpacity
                  key={t.val}
                  style={[styles.typeButton, selectedType === t.val && styles.activeButton]}
                  onPress={() => setSelectedType(t.val as any)}
                >
                  <Text style={[styles.buttonText, selectedType === t.val && styles.activeButtonText]}>
                    {t.label}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>

            {/* Quận Huyện */}
            <Text style={styles.filterTitle}>Khu vực (Quận)</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.districtsRow}>
              {DISTRICTS.map((d) => (
                <TouchableOpacity
                  key={d}
                  style={[styles.districtButton, selectedDistrict === d && styles.activeButton]}
                  onPress={() => setSelectedDistrict(d)}
                >
                  <Text style={[styles.buttonText, selectedDistrict === d && styles.activeButtonText]}>
                    {d}
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>

            {/* Khoảng giá */}
            <Text style={styles.filterTitle}>Khoảng giá thuê</Text>
            <View style={styles.typesRow}>
              {[
                { label: 'Tất cả', val: 'all' },
                { label: 'Dưới 3tr', val: 'under_3' },
                { label: '3tr - 5tr', val: '3_to_5' },
                { label: 'Trên 5tr', val: 'over_5' }
              ].map((p) => (
                <TouchableOpacity
                  key={p.val}
                  style={[styles.priceButton, priceRange === p.val && styles.activeButton]}
                  onPress={() => setPriceRange(p.val as any)}
                >
                  <Text style={[styles.buttonText, priceRange === p.val && styles.activeButtonText]}>
                    {p.label}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>

            {/* Tiện ích */}
            <Text style={styles.filterTitle}>Tiện ích phòng</Text>
            <View style={styles.utilitiesGrid}>
              {UTILITIES_LIST.map((util) => {
                const isSelected = selectedUtilities.includes(util);
                return (
                  <TouchableOpacity
                    key={util}
                    style={[styles.utilityTag, isSelected && styles.activeUtilityTag]}
                    onPress={() => toggleUtility(util)}
                  >
                    <Text style={[styles.utilityText, isSelected && styles.activeUtilityText]}>
                      {isSelected ? '✓ ' : ''}{util}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>

            {/* Nút reset */}
            <TouchableOpacity style={styles.resetBtn} onPress={resetFilters}>
              <Text style={styles.resetBtnText}>Đặt lại bộ lọc</Text>
            </TouchableOpacity>
          </ScrollView>
        )}
      </View>

      {/* Danh sách kết quả */}
      <View style={styles.resultsHeader}>
        <Text style={styles.resultsCount}>Đang hiển thị {results.length} kết quả</Text>
      </View>

      <FlatList
        data={results}
        renderItem={renderPropertyItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyIcon}>🔍</Text>
            <Text style={styles.emptyText}>Không tìm thấy phòng trọ phù hợp</Text>
            <TouchableOpacity style={styles.resetSearchBtn} onPress={resetFilters}>
              <Text style={styles.resetSearchBtnText}>Xóa bộ lọc để tìm lại</Text>
            </TouchableOpacity>
          </View>
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  searchHeader: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#E9ECEF',
  },
  searchRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#F1F3F5',
    borderRadius: 10,
    paddingHorizontal: 12,
    height: 44,
    alignItems: 'center',
  },
  searchIcon: {
    fontSize: 16,
    marginRight: 6,
    color: '#868E96',
  },
  input: {
    flex: 1,
    fontSize: 14,
    color: '#495057',
  },
  clearIcon: {
    fontSize: 12,
    color: '#ADB5BD',
    marginLeft: 6,
  },
  filterToggle: {
    marginLeft: 12,
    paddingHorizontal: 12,
    height: 44,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#CED4DA',
    justifyContent: 'center',
    alignItems: 'center',
  },
  filterToggleActive: {
    backgroundColor: '#EBFBEE',
    borderColor: '#2B8A3E',
  },
  filterToggleText: {
    fontSize: 13,
    color: '#495057',
    fontWeight: '600',
  },
  filterToggleTextActive: {
    color: '#2B8A3E',
  },
  filtersScroll: {
    maxHeight: 300,
    marginTop: 15,
  },
  filterTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#343A40',
    marginTop: 12,
    marginBottom: 8,
  },
  typesRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  districtsRow: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  typeButton: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 8,
    backgroundColor: '#F1F3F5',
    marginRight: 8,
    marginBottom: 8,
  },
  districtButton: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 8,
    backgroundColor: '#F1F3F5',
    marginRight: 8,
    height: 35,
  },
  priceButton: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 8,
    backgroundColor: '#F1F3F5',
    marginRight: 8,
    marginBottom: 8,
  },
  activeButton: {
    backgroundColor: '#2B8A3E',
  },
  buttonText: {
    fontSize: 12,
    color: '#495057',
    fontWeight: '500',
  },
  activeButtonText: {
    color: '#FFFFFF',
    fontWeight: '600',
  },
  utilitiesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  utilityTag: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#CED4DA',
    marginRight: 8,
    marginBottom: 8,
    backgroundColor: '#FFFFFF',
  },
  activeUtilityTag: {
    backgroundColor: '#EBFBEE',
    borderColor: '#2B8A3E',
  },
  utilityText: {
    fontSize: 11,
    color: '#495057',
  },
  activeUtilityText: {
    color: '#2B8A3E',
    fontWeight: 'bold',
  },
  resetBtn: {
    marginTop: 15,
    marginBottom: 10,
    backgroundColor: '#FFF5F5',
    borderRadius: 10,
    paddingVertical: 10,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#FFE3E3',
  },
  resetBtnText: {
    color: '#E03131',
    fontSize: 13,
    fontWeight: 'bold',
  },
  resultsHeader: {
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
  resultsCount: {
    fontSize: 13,
    color: '#868E96',
    fontWeight: '500',
  },
  list: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    marginBottom: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  cardImage: {
    width: '100%',
    height: 160,
    backgroundColor: '#E9ECEF',
  },
  cardContent: {
    padding: 14,
  },
  typeBadge: {
    alignSelf: 'flex-start',
    backgroundColor: '#EBFBEE',
    borderRadius: 4,
    paddingHorizontal: 6,
    paddingVertical: 2,
    marginBottom: 8,
  },
  typeText: {
    color: '#2B8A3E',
    fontSize: 10,
    fontWeight: 'bold',
  },
  cardTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#212529',
    marginBottom: 6,
  },
  cardAddress: {
    fontSize: 12,
    color: '#868E96',
    marginBottom: 10,
  },
  cardMeta: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#F1F3F5',
    paddingTop: 10,
  },
  cardPrice: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#2B8A3E',
  },
  cardArea: {
    fontSize: 12,
    color: '#495057',
    fontWeight: '500',
  },
  emptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 80,
  },
  emptyIcon: {
    fontSize: 48,
    marginBottom: 15,
  },
  emptyText: {
    fontSize: 15,
    color: '#868E96',
    fontWeight: '500',
    marginBottom: 15,
  },
  resetSearchBtn: {
    backgroundColor: '#2B8A3E',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },
  resetSearchBtnText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: 'bold',
  },
});
