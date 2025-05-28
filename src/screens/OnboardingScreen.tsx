import React, { useState } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Text, Button } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ONBOARDING_KEY = 'onboarding_seen';

const pages = [
  {
    title: 'Welcome to brainBoilerplate!',
    description: 'Kickstart your next React Native app with a modern, scalable boilerplate.',
    // image: require('../../assets/onboarding1.png'), // coloque uma imagem ou remova
  },
  {
    title: 'Ready for Production',
    description: 'Includes navigation, state, forms, i18n, and more. All set for real projects!',
    // image: require('../../assets/onboarding2.png'),
  },
  {
    title: "Let's Build Together!",
    description: 'Need help? Contact alanmc021@gmail.com for mobile app support.',
    // image: require('../../assets/onboarding3.png'),
  },
];

export const OnboardingScreen = ({ onFinish }: { onFinish: () => void }) => {
  const [page, setPage] = useState(0);

  const handleNext = async () => {
    if (page < pages.length - 1) {
      setPage(page + 1);
    } else {
      await AsyncStorage.setItem(ONBOARDING_KEY, 'true');
      onFinish();
    }
  };

  return (
    <View style={styles.container}>
      {/* {pages[page].image && <Image source={pages[page].image} style={styles.image} />} */}
      <Text variant="headlineMedium" style={styles.title}>{pages[page].title}</Text>
      <Text style={styles.description}>{pages[page].description}</Text>
      <Button mode="contained" onPress={handleNext} style={styles.button}>
        {page === pages.length - 1 ? 'Start' : 'Next'}
      </Button>
    </View>
  );
};

export const checkOnboardingSeen = async () => {
  return (await AsyncStorage.getItem(ONBOARDING_KEY)) === 'true';
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 32,
  },
  title: {
    marginBottom: 16,
    textAlign: 'center',
  },
  description: {
    marginBottom: 32,
    textAlign: 'center',
    fontSize: 16,
    color: '#666',
  },
  button: {
    marginTop: 16,
    alignSelf: 'center',
  },
}); 