import React from 'react';
import { Button, ButtonProps, ActivityIndicator } from 'react-native-paper';

interface CustomButtonProps extends ButtonProps {
  loading?: boolean;
  icon?: string;
  children: React.ReactNode;
}

export const CustomButton = ({ loading, icon, children, ...props }: CustomButtonProps) => (
  <Button icon={icon} disabled={loading} {...props}>
    {loading ? <ActivityIndicator color="#fff" /> : children}
  </Button>
); 