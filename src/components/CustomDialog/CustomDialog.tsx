import React from 'react';
import { Dialog, Portal, Button, Text } from 'react-native-paper';

interface CustomDialogProps {
  visible: boolean;
  onDismiss: () => void;
  title: string;
  content: string;
  onConfirm: () => void;
}

export const CustomDialog = ({ visible, onDismiss, title, content, onConfirm }: CustomDialogProps) => (
  <Portal>
    <Dialog visible={visible} onDismiss={onDismiss}>
      <Dialog.Title>{title}</Dialog.Title>
      <Dialog.Content>
        <Text>{content}</Text>
      </Dialog.Content>
      <Dialog.Actions>
        <Button onPress={onDismiss}>Cancelar</Button>
        <Button onPress={onConfirm}>OK</Button>
      </Dialog.Actions>
    </Dialog>
  </Portal>
); 