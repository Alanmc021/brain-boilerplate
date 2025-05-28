import React from 'react';
import { Switch } from 'react-native-paper';

interface CustomSwitchProps {
  value: boolean;
  onValueChange: (value: boolean) => void;
}

export const CustomSwitch = ({ value, onValueChange }: CustomSwitchProps) => (
  <Switch value={value} onValueChange={onValueChange} />
); 