import React from 'react';
import { FAB } from 'react-native-paper';

interface CustomFABProps {
  icon: string;
  onPress: () => void;
  label?: string;
}

export const CustomFAB = ({ icon, onPress, label }: CustomFABProps) => (
  <FAB icon={icon} onPress={onPress} label={label} style={{ position: 'absolute', right: 16, bottom: 16 }} />
); 