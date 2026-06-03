import React, { useMemo } from 'react';
import { ScrollView, StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { RentalProperty, sampleProperties } from '../data/properties';

type DetailRoute = RouteProp<{ PropertyDetail: { propertyId: string } }, 'PropertyDetail'>;

const formatMoney = (value: number) => {
  if (!value) return 'Đã gồm';
  if (value >= 1000000) {
    const amount = value / 1000000;
    return `${Number.isInteger(amount) ? amount.toFixed(0) : amount.toFixed(1)} triệu`;
  }
  return `${new Intl.NumberFormat('vi-VN').format(value)}đ`;
};

const getTrustBadges = (property: RentalProperty) => {
  const tagText = property.tags.join(' ').toLowerCase();
  const amenities = new Set(property.amenities);
  return [
    'Tin đã kiểm duyệt',
    amenities.has('pccc') || tagText.includes('pccc') ? 'PCCC' : '',
    amenities.has('security') || tagText.includes('camera') ? 'Camera/an ninh' : '',
    tagText.includes('giờ tự do') ? 'Giờ tự do' : '',
    property.deposit > 0 ? 'Hợp đồng điện tử' : '',
    property.electricity || property.water || property.service ? 'Chi phí tách riêng' : '',
  ].filter(Boolean);
};

const DetailMetric = ({ label, value }: { label: string; value: string }) => (
  <View style={styles.metric}>
    <Text style={styles.metricValue}>{value}</Text>
    <Text style={styles.metricLabel}>{label}</Text>
  </View>
);

const PropertyDetailScreen = () => {
  const route = useRoute<DetailRoute>();
  const property = useMemo(
    () => sampleProperties.find((item) => item.id === route.params.propertyId) ?? sampleProperties[0],
    [route.params.propertyId],
  );

  const costText = `Giá thuê tách riêng điện ${property.electricity ? `${new Intl.NumberFormat('vi-VN').format(property.electricity)}đ/kWh` : 'trọn gói'}, nước ${property.water ? `${new Intl.NumberFormat('vi-VN').format(property.water)}đ/${property.waterUnit}` : 'trọn gói'} và phí dịch vụ ${property.service ? `${new Intl.NumberFormat('vi-VN').format(property.service)}đ/tháng` : 'không thu'}.`;

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.heroBlock}>
        <Text style={styles.typeLabel}>{property.typeLabel} tại {property.district}</Text>
        <Text style={styles.title}>{property.title}</Text>
        <Text style={styles.address}>{property.address}</Text>
        <Text style={styles.price}>{formatMoney(property.price)}/tháng</Text>
      </View>

      <View style={styles.badgeWrap}>
        {getTrustBadges(property).map((badge) => (
          <View key={badge} style={styles.trustBadge}>
            <Text style={styles.trustBadgeText}>{badge}</Text>
          </View>
        ))}
      </View>

      <View style={styles.panel}>
        <Text style={styles.panelTitle}>Thông tin thuê</Text>
        <View style={styles.metricGrid}>
          <DetailMetric label="Diện tích" value={`${property.area} m2`} />
          <DetailMetric label="Tiền cọc" value={formatMoney(property.deposit)} />
          <DetailMetric label="Di chuyển" value={`${property.commute} phút`} />
          <DetailMetric label="Điện/kWh" value={property.electricity ? `${new Intl.NumberFormat('vi-VN').format(property.electricity)}đ` : 'Trọn gói'} />
          <DetailMetric label={`Nước/${property.waterUnit}`} value={property.water ? `${new Intl.NumberFormat('vi-VN').format(property.water)}đ` : 'Trọn gói'} />
          <DetailMetric label="Dịch vụ" value={property.service ? `${new Intl.NumberFormat('vi-VN').format(property.service)}đ` : 'Không thu'} />
        </View>
      </View>

      <View style={styles.panel}>
        <Text style={styles.panelEyebrow}>Thông tin đáng tin cậy</Text>
        <Text style={styles.panelTitle}>Minh bạch trước khi đặt lịch</Text>
        <View style={styles.trustList}>
          <Text style={styles.trustItem}><Text style={styles.trustStrong}>Chi phí rõ ràng: </Text>{costText}</Text>
          <Text style={styles.trustItem}><Text style={styles.trustStrong}>Hợp đồng: </Text>Hỗ trợ hợp đồng SMS/điện tử hoặc nhãn “Tin đã kiểm duyệt” trong giai đoạn demo.</Text>
          <Text style={styles.trustItem}><Text style={styles.trustStrong}>An toàn: </Text>PCCC, camera/an ninh và tiện ích chính được gắn nhãn để người thuê kiểm tra nhanh.</Text>
        </View>
      </View>

      <View style={styles.panel}>
        <Text style={styles.panelTitle}>Mô tả</Text>
        <Text style={styles.description}>{property.description}</Text>
        <View style={styles.tagWrap}>
          {property.tags.map((tag) => (
            <View key={tag} style={styles.tag}>
              <Text style={styles.tagText}>{tag}</Text>
            </View>
          ))}
        </View>
      </View>

      <TouchableOpacity
        style={styles.primaryButton}
        onPress={() => Alert.alert('Yêu cầu xem phòng', `Đã gửi yêu cầu liên hệ ${property.landlord} (${property.phone}).`)}
      >
        <Text style={styles.primaryButtonText}>Gửi yêu cầu xem phòng</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F7F2',
  },
  content: {
    padding: 16,
    paddingBottom: 32,
  },
  heroBlock: {
    backgroundColor: '#0B3628',
    borderRadius: 18,
    padding: 20,
  },
  typeLabel: {
    color: '#BAF0D0',
    fontSize: 12,
    fontWeight: '900',
    textTransform: 'uppercase',
    marginBottom: 10,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 28,
    lineHeight: 34,
    fontWeight: '900',
  },
  address: {
    color: 'rgba(255,255,255,0.82)',
    marginTop: 10,
    lineHeight: 21,
  },
  price: {
    color: '#BAF0D0',
    fontSize: 24,
    fontWeight: '900',
    marginTop: 16,
  },
  badgeWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginVertical: 14,
  },
  trustBadge: {
    backgroundColor: '#EEF8F2',
    borderRadius: 999,
    borderWidth: 1,
    borderColor: 'rgba(13,122,85,0.18)',
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  trustBadgeText: {
    color: '#07563C',
    fontWeight: '900',
    fontSize: 12,
  },
  panel: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#DCE5DF',
    padding: 16,
    marginBottom: 14,
  },
  panelEyebrow: {
    color: '#0D7A55',
    fontWeight: '900',
    fontSize: 12,
    textTransform: 'uppercase',
    marginBottom: 6,
  },
  panelTitle: {
    color: '#17201C',
    fontSize: 18,
    fontWeight: '900',
    marginBottom: 12,
  },
  metricGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  metric: {
    width: '48%',
    backgroundColor: '#F7FAF7',
    borderRadius: 12,
    padding: 12,
  },
  metricValue: {
    color: '#17201C',
    fontWeight: '900',
    fontSize: 16,
  },
  metricLabel: {
    color: '#617068',
    marginTop: 4,
    fontSize: 12,
    fontWeight: '700',
  },
  trustList: {
    gap: 10,
  },
  trustItem: {
    color: '#617068',
    lineHeight: 21,
  },
  trustStrong: {
    color: '#17201C',
    fontWeight: '900',
  },
  description: {
    color: '#617068',
    lineHeight: 22,
  },
  tagWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginTop: 14,
  },
  tag: {
    backgroundColor: '#DFF4E9',
    borderRadius: 999,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  tagText: {
    color: '#07563C',
    fontWeight: '800',
    fontSize: 12,
  },
  primaryButton: {
    backgroundColor: '#0D7A55',
    minHeight: 50,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  primaryButtonText: {
    color: '#FFFFFF',
    fontWeight: '900',
    fontSize: 16,
  },
});

export default PropertyDetailScreen;
