import React from 'react';
import { List } from 'react-native-paper';

interface CustomListItemProps {
  title: string;
  description?: string;
  leftIcon?: string;
  onPress?: () => void;
}

export const CustomListItem = ({ title, description, leftIcon, onPress }: CustomListItemProps) => (
  <List.Item
    title={title}
    description={description}
    left={leftIcon ? (props) => <List.Icon {...props} icon={leftIcon} /> : undefined}
    onPress={onPress}
  />
); 