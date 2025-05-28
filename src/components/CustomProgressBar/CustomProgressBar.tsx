import React from 'react';
import { ProgressBar } from 'react-native-paper';

interface CustomProgressBarProps {
  progress: number;
  color?: string;
}

export const CustomProgressBar = ({ progress, color }: CustomProgressBarProps) => (
  <ProgressBar progress={progress} color={color} style={{ marginVertical: 8 }} />
); 