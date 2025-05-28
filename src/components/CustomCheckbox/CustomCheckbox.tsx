import React from 'react';
import { Checkbox } from 'react-native-paper';

interface CustomCheckboxProps {
  status: 'checked' | 'unchecked';
  onPress: () => void;
  label?: string;
}

export const CustomCheckbox = ({ status, onPress, label }: CustomCheckboxProps) => (
  <Checkbox.Item label={label || ''} status={status} onPress={onPress} />
); 