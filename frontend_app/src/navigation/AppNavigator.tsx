import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useAuthStore } from '../store/useAuthStore';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import PropertyDetailScreen from '../screens/PropertyDetailScreen';

const Stack = createNativeStackNavigator();

const AuthStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Login" component={LoginScreen} />
  </Stack.Navigator>
);

const MainStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: '#0D7A55' },
      headerTintColor: '#FFFFFF',
      headerTitleStyle: { fontWeight: '900' },
      contentStyle: { backgroundColor: '#F4F7F2' },
    }}
  >
    <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Tìm phòng' }} />
    <Stack.Screen name="PropertyDetail" component={PropertyDetailScreen} options={{ title: 'Chi tiết phòng' }} />
  </Stack.Navigator>
);

const AppNavigator = () => {
  const token = useAuthStore((state) => state.token);
  const isGuest = useAuthStore((state) => state.isGuest);

  return token || isGuest ? <MainStack /> : <AuthStack />;
};

export default AppNavigator;
