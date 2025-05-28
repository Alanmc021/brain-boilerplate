import React from 'react';
import { Card, Button, Text } from 'react-native-paper';

interface CustomCardProps {
  title: string;
  description: string;
  image?: string;
  onPress?: () => void;
}

export const CustomCard = ({ title, description, image, onPress }: CustomCardProps) => (
  <Card onPress={onPress} style={{ marginBottom: 16 }}>
    {image && <Card.Cover source={{ uri: image }} />}
    <Card.Title title={title} />
    <Card.Content>
      <Text>{description}</Text>
    </Card.Content>
    <Card.Actions>
      <Button onPress={onPress}>Action</Button>
    </Card.Actions>
  </Card>
); 