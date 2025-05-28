import React from 'react';
import { RadioButton, Text } from 'react-native-paper';

interface CustomRadioProps {
  value: string;
  status: 'checked' | 'unchecked';
  onPress: () => void;
  label: string;
}

export const CustomRadio = ({ value, status, onPress, label }: CustomRadioProps) => (
  <RadioButton.Item label={label} value={value} status={status} onPress={onPress} />
); 