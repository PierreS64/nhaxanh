import React, { useEffect, useMemo, useState, useLayoutEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as SecureStore from 'expo-secure-store';
import { useAuthStore } from '../store/useAuthStore';
import api from '../services/api';
import { propertyTypes, RentalProperty, sampleProperties } from '../data/properties';

const formatMoney = (value: number) => {
  if (!value) return 'Đã gồm';
  if (value >= 1000000) {
    const amount = value / 1000000;
    return `${Number.isInteger(amount) ? amount.toFixed(0) : amount.toFixed(1)} triệu`;
  }
  return `${new Intl.NumberFormat('vi-VN').format(value)}đ`;
};

const normalizeProperty = (item: any): RentalProperty => ({
  id: String(item.id),
  title: item.title,
  type: item.type,
  typeLabel:
    item.type === 'ROOM'
      ? 'Phòng trọ'
      : item.type === 'WHOLE_HOUSE'
        ? 'Nhà nguyên căn'
        : item.type === 'DORMITORY'
          ? 'KTX / Sleepbox'
          : 'Căn hộ mini',
  status: item.status ?? 'AVAILABLE',
  district: item.district ?? '',
  city: item.city ?? '',
  address: item.address,
  price: Number(item.price ?? 0),
  area: Number(item.area ?? 0),
  deposit: Number(item.depositAmount ?? item.deposit ?? 0),
  electricity: Number(item.electricity ?? 0),
  water: Number(item.water ?? 0),
  waterUnit: item.waterUnit ?? 'người',
  service: Number(item.service ?? 0),
  commute: Number(item.commute ?? 0),
  vibe: Number(item.vibe ?? 80),
  tags: item.tags ?? item.amenities ?? [],
  amenities: item.amenities ?? [],
  description: item.description ?? 'Tin đang chờ bổ sung mô tả chi tiết.',
  landlord: item.landlord ?? 'Chủ nhà đã xác thực',
  phone: item.phone ?? 'Đang cập nhật',
});

const getTrustBadges = (property: RentalProperty) => {
  const tagText = property.tags.join(' ').toLowerCase();
  const amenities = new Set(property.amenities);
  return [
    'Tin đã kiểm duyệt',
    amenities.has('pccc') || tagText.includes('pccc') ? 'PCCC' : '',
    amenities.has('security') || tagText.includes('camera') ? 'Camera' : '',
    tagText.includes('giờ tự do') ? 'Giờ tự do' : '',
    property.deposit > 0 ? 'Hợp đồng điện tử' : '',
    property.electricity || property.water || property.service ? 'Chi phí tách riêng' : '',
  ].filter(Boolean);
};

const HomeScreen = () => {
  const [properties, setProperties] = useState<RentalProperty[]>(sampleProperties);
  const [loading, setLoading] = useState(true);
  const [usingSampleData, setUsingSampleData] = useState(false);
  const [keyword, setKeyword] = useState('');
  const [selectedType, setSelectedType] = useState<'ALL' | RentalProperty['type']>('ALL');
  const navigation = useNavigation<any>();
  const logout = useAuthStore((state) => state.logout);

  const handleLogout = async () => {
    try {
      await SecureStore.deleteItemAsync('token');
      await SecureStore.deleteItemAsync('user');
      logout();
    } catch (error) {
      console.error('Không thể đăng xuất:', error);
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Tìm phòng',
      headerRight: () => (
        <TouchableOpacity style={styles.logoutHeaderButton} onPress={handleLogout}>
          <Text style={styles.logoutHeaderText}>Đăng xuất</Text>
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        setLoading(true);
        const response = await api.get('/properties');
        const normalized = Array.isArray(response.data)
          ? response.data.map(normalizeProperty)
          : sampleProperties;
        setProperties(normalized.length ? normalized : sampleProperties);
        setUsingSampleData(!normalized.length);
      } catch (error: any) {
        setProperties(sampleProperties);
        setUsingSampleData(true);
        const message = error.response?.data?.message;
        if (message) {
          Alert.alert('Không tải được dữ liệu backend', Array.isArray(message) ? message.join('\n') : message);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  const filteredProperties = useMemo(() => {
    const normalizedKeyword = keyword.trim().toLowerCase();
    return properties.filter((property) => {
      const typeMatch = selectedType === 'ALL' || property.type === selectedType;
      const searchable = `${property.title} ${property.address} ${property.district} ${property.city} ${property.tags.join(' ')}`.toLowerCase();
      const keywordMatch = !normalizedKeyword || searchable.includes(normalizedKeyword);
      return typeMatch && keywordMatch;
    });
  }, [keyword, properties, selectedType]);

  const renderTrustBadges = (property: RentalProperty) => (
    <View style={styles.badgeWrap}>
      {getTrustBadges(property).slice(0, 4).map((badge) => (
        <View key={badge} style={styles.trustBadge}>
          <Text style={styles.trustBadgeText}>{badge}</Text>
        </View>
      ))}
    </View>
  );

  const renderPropertyItem = ({ item }: { item: RentalProperty }) => (
    <TouchableOpacity
      activeOpacity={0.85}
      style={styles.card}
      onPress={() => navigation.navigate('PropertyDetail', { propertyId: item.id })}
    >
      <View style={styles.cardHeader}>
        <View style={styles.cardTitleBlock}>
          <Text style={styles.cardType}>{item.typeLabel}</Text>
          <Text style={styles.cardTitle} numberOfLines={2}>{item.title}</Text>
        </View>
        <View style={styles.scoreBadge}>
          <Text style={styles.scoreText}>{item.vibe}</Text>
        </View>
      </View>

      <Text style={styles.addressText} numberOfLines={2}>Vị trí: {item.address}</Text>
      {renderTrustBadges(item)}

      <View style={styles.priceRow}>
        <View>
          <Text style={styles.priceText}>{formatMoney(item.price)}/tháng</Text>
          <Text style={styles.costText}>
            Điện {item.electricity ? `${new Intl.NumberFormat('vi-VN').format(item.electricity)}đ/kWh` : 'trọn gói'} · Nước {item.water ? `${new Intl.NumberFormat('vi-VN').format(item.water)}đ/${item.waterUnit}` : 'trọn gói'}
          </Text>
        </View>
        <Text style={styles.areaText}>{item.area} m2</Text>
      </View>
    </TouchableOpacity>
  );

  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="#0D7A55" />
        <Text style={styles.loadingText}>Đang tải danh sách phòng...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={filteredProperties}
        keyExtractor={(item) => item.id}
        renderItem={renderPropertyItem}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View>
            <Text style={styles.heroTitle}>Nhà Xanh</Text>
            <Text style={styles.heroSubtitle}>Tìm phòng theo chi phí thật, an toàn và minh bạch trước khi đặt lịch.</Text>
            {usingSampleData ? (
              <View style={styles.notice}>
                <Text style={styles.noticeText}>Đang dùng dữ liệu mẫu vì backend chưa kết nối được.</Text>
              </View>
            ) : null}
            <TextInput
              style={styles.searchInput}
              placeholder="Tìm theo quận, đường, tiện ích..."
              placeholderTextColor="#7B8B83"
              value={keyword}
              onChangeText={setKeyword}
            />
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.typeList}>
              {propertyTypes.map((type) => (
                <TouchableOpacity
                  key={type.value}
                  style={[styles.typeChip, selectedType === type.value && styles.typeChipActive]}
                  onPress={() => setSelectedType(type.value)}
                >
                  <Text style={[styles.typeChipText, selectedType === type.value && styles.typeChipTextActive]}>
                    {type.label}
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
            <Text style={styles.resultText}>{filteredProperties.length} tin phù hợp</Text>
          </View>
        }
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>Chưa có phòng phù hợp với bộ lọc hiện tại.</Text>
          </View>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F7F2',
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F4F7F2',
  },
  loadingText: {
    marginTop: 12,
    color: '#0D7A55',
    fontSize: 16,
    fontWeight: '600',
  },
  listContent: {
    padding: 16,
    paddingBottom: 28,
  },
  heroTitle: {
    color: '#17201C',
    fontSize: 34,
    fontWeight: '900',
  },
  heroSubtitle: {
    color: '#617068',
    fontSize: 15,
    lineHeight: 22,
    marginTop: 6,
    marginBottom: 14,
  },
  notice: {
    backgroundColor: '#FFF6DF',
    borderRadius: 10,
    padding: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#F4D27A',
  },
  noticeText: {
    color: '#6F3B00',
    fontWeight: '700',
  },
  searchInput: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#DCE5DF',
    paddingHorizontal: 14,
    height: 48,
    color: '#17201C',
    fontSize: 15,
  },
  typeList: {
    gap: 8,
    paddingVertical: 14,
  },
  typeChip: {
    paddingHorizontal: 14,
    paddingVertical: 9,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: '#DCE5DF',
    backgroundColor: '#FFFFFF',
  },
  typeChipActive: {
    backgroundColor: '#0D7A55',
    borderColor: '#0D7A55',
  },
  typeChipText: {
    color: '#617068',
    fontWeight: '800',
  },
  typeChipTextActive: {
    color: '#FFFFFF',
  },
  resultText: {
    color: '#617068',
    fontWeight: '800',
    marginBottom: 12,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    padding: 16,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: '#DCE5DF',
    shadowColor: '#17201C',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 2,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
  },
  cardTitleBlock: {
    flex: 1,
  },
  cardType: {
    color: '#0D7A55',
    fontSize: 12,
    fontWeight: '900',
    marginBottom: 5,
  },
  cardTitle: {
    color: '#17201C',
    fontSize: 18,
    lineHeight: 24,
    fontWeight: '900',
  },
  scoreBadge: {
    width: 42,
    height: 42,
    borderRadius: 10,
    backgroundColor: '#DFF4E9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scoreText: {
    color: '#07563C',
    fontWeight: '900',
  },
  addressText: {
    color: '#617068',
    fontSize: 14,
    lineHeight: 20,
    marginTop: 10,
  },
  badgeWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 7,
    marginTop: 12,
  },
  trustBadge: {
    backgroundColor: '#EEF8F2',
    borderWidth: 1,
    borderColor: 'rgba(13,122,85,0.18)',
    borderRadius: 999,
    paddingHorizontal: 9,
    paddingVertical: 5,
  },
  trustBadgeText: {
    color: '#07563C',
    fontSize: 12,
    fontWeight: '900',
  },
  priceRow: {
    marginTop: 14,
    paddingTop: 14,
    borderTopWidth: 1,
    borderTopColor: '#EEF2EE',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
  },
  priceText: {
    color: '#07563C',
    fontSize: 20,
    fontWeight: '900',
  },
  costText: {
    color: '#617068',
    fontSize: 12,
    marginTop: 4,
  },
  areaText: {
    color: '#17201C',
    fontWeight: '900',
  },
  emptyContainer: {
    marginTop: 32,
    alignItems: 'center',
  },
  emptyText: {
    color: '#617068',
    fontSize: 15,
  },
  logoutHeaderButton: {
    marginRight: 12,
    paddingVertical: 6,
    paddingHorizontal: 10,
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: 8,
  },
  logoutHeaderText: {
    color: '#FFFFFF',
    fontWeight: '800',
    fontSize: 13,
  },
});

export default HomeScreen;
