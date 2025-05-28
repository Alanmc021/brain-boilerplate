import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-paper';
import { useAuth } from '@hooks/useAuth';

export const SettingsScreen = () => {
  const { logout, loading } = useAuth();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings</Text>
      <Button
        mode="contained"
        onPress={logout}
        loading={loading}
        style={{ marginTop: 24 }}
      >
        Sair
      </Button>
    </View>
  );
}; 