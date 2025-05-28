import React from 'react';
import { Avatar } from 'react-native-paper';

interface CustomAvatarProps {
  name?: string;
  image?: string;
  size?: number;
}

export const CustomAvatar = ({ name, image, size = 48 }: CustomAvatarProps) => {
  if (image) {
    return <Avatar.Image size={size} source={{ uri: image }} />;
  }
  if (name) {
    return <Avatar.Text size={size} label={name[0].toUpperCase()} />;
  }
  return <Avatar.Icon size={size} icon="account" />;
}; 