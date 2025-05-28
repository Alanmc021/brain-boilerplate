import React from 'react';
import { TextInput, TextInputProps } from 'react-native-paper';

interface CustomTextInputProps extends TextInputProps {
  errorText?: string;
  leftIcon?: string;
  rightIcon?: string;
}

export const CustomTextInput = ({ errorText, leftIcon, rightIcon, ...props }: CustomTextInputProps) => (
  <>
    <TextInput
      left={leftIcon ? <TextInput.Icon icon={leftIcon} /> : undefined}
      right={rightIcon ? <TextInput.Icon icon={rightIcon} /> : undefined}
      error={!!errorText}
      {...props}
    />
    {errorText ? <Text style={{ color: 'red', marginBottom: 8 }}>{errorText}</Text> : null}
  </>
); 