import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View } from 'react-native';

// Import các Màn hình
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import MessagesScreen from '../screens/MessagesScreen';
import ProfileScreen from '../screens/ProfileScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import PropertyDetailScreen from '../screens/PropertyDetailScreen';

// 1. Định nghĩa danh sách các màn hình và tham số cho Stack Navigation
export type RootStackParamList = {
  Login: undefined;
  Register: undefined;
  MainTabs: undefined;
  PropertyDetail: { propertyId: string };
};

// 2. Định nghĩa danh sách các màn hình cho Bottom Tab Navigation
export type MainTabParamList = {
  Home: undefined;
  Search: { initialType?: string } | undefined;
  Messages: { startVoiceBot?: boolean } | undefined;
  Profile: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<MainTabParamList>();

// Component biểu tượng tab đơn giản bằng Emoji (hoặc dùng Ionicons nếu tích hợp thư viện)
function TabBarIcon({ emoji, label, focused }: { emoji: string; label: string; focused: boolean }) {
  return (
    <View style={styles.tabIconContainer}>
      <Text style={[styles.tabEmoji, { opacity: focused ? 1 : 0.6 }]}>{emoji}</Text>
      <Text style={[styles.tabLabel, { color: focused ? '#2B8A3E' : '#868E96', fontWeight: focused ? 'bold' : 'normal' }]}>
        {label}
      </Text>
    </View>
  );
}

// 3. Cấu hình Bottom Tab Navigation cho màn hình chính sau đăng nhập
function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => <TabBarIcon emoji="🏠" label="Trang chủ" focused={focused} />,
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: ({ focused }) => <TabBarIcon emoji="🔍" label="Tìm kiếm" focused={focused} />,
        }}
      />
      <Tab.Screen
        name="Messages"
        component={MessagesScreen}
        options={{
          tabBarIcon: ({ focused }) => <TabBarIcon emoji="💬" label="Tin nhắn" focused={focused} />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => <TabBarIcon emoji="👤" label="Cá nhân" focused={focused} />,
        }}
      />
    </Tab.Navigator>
  );
}

import { useAuthStore } from '../store/useAuthStore';

// 4. Root App Navigator chính của toàn bộ ứng dụng
export default function AppNavigator() {
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
  const initializeAuth = useAuthStore((state) => state.initializeAuth);
  const isLoading = useAuthStore((state) => state.isLoading);

  React.useEffect(() => {
    initializeAuth();
  }, []);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#F8F9FA' }}>
        <Text style={{ fontSize: 36, marginBottom: 12 }}>🏡</Text>
        <Text style={{ fontSize: 13, color: '#868E96', fontWeight: '500' }}>Đang kết nối Nhà Xanh...</Text>
      </View>
    );
  }

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: '#F8F9FA' },
      }}
    >
      {!isLoggedIn ? (
        <>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
        </>
      ) : (
        <>
          <Stack.Screen name="MainTabs" component={TabNavigator} />
          <Stack.Screen name="PropertyDetail" component={PropertyDetailScreen} />
        </>
      )}
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 64,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#E9ECEF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.03,
    shadowRadius: 6,
    elevation: 8,
  },
  tabIconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 8,
  },
  tabEmoji: {
    fontSize: 20,
    marginBottom: 2,
  },
  tabLabel: {
    fontSize: 10,
    marginTop: 2,
  },
});
