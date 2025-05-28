import React from 'react';
import { Snackbar } from 'react-native-paper';

interface CustomSnackbarProps {
  visible: boolean;
  onDismiss: () => void;
  message: string;
  actionLabel?: string;
  onAction?: () => void;
}

export const CustomSnackbar = ({ visible, onDismiss, message, actionLabel, onAction }: CustomSnackbarProps) => (
  <Snackbar
    visible={visible}
    onDismiss={onDismiss}
    action={actionLabel ? { label: actionLabel, onPress: onAction } : undefined}
    duration={3000}
  >
    {message}
  </Snackbar>
); 