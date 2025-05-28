import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ProgressBar, Text } from 'react-native-paper';

interface CustomStepperProps {
  step: number;
  total: number;
}

export const CustomStepper = ({ step, total }: CustomStepperProps) => (
  <View style={styles.container}>
    <Text>
      Passo {step} de {total}
    </Text>
    <ProgressBar progress={step / total} style={{ marginTop: 8 }} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginVertical: 16,
  },
}); 