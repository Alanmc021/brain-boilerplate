import React from 'react';
import { Badge } from 'react-native-paper';

interface CustomBadgeProps {
  value: string | number;
  style?: object;
}

export const CustomBadge = ({ value, style }: CustomBadgeProps) => (
  <Badge style={style}>{value}</Badge>
); 