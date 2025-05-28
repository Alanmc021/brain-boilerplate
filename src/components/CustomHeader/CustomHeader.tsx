import React from 'react';
import { Appbar } from 'react-native-paper';

interface CustomHeaderProps {
  title: string;
  onMenu?: () => void;
  onAction?: () => void;
  actionIcon?: string;
}

export const CustomHeader = ({ title, onMenu, onAction, actionIcon }: CustomHeaderProps) => (
  <Appbar.Header>
    {onMenu && <Appbar.Action icon="menu" onPress={onMenu} />}
    <Appbar.Content title={title} />
    {onAction && actionIcon && <Appbar.Action icon={actionIcon} onPress={onAction} />}
  </Appbar.Header>
); 