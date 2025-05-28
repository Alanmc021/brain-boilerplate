import React, { useState } from 'react';
import { View, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import { Text } from 'react-native-paper';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { CustomButton } from '@components/CustomButton/CustomButton';
import { CustomTextInput } from '@components/CustomTextInput/CustomTextInput';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '@react-navigation/native';

const schema = yup.object().shape({
  email: yup.string().email('Invalid email').required('Email is required'),
});

type FormData = yup.InferType<typeof schema>;

export const ForgotPasswordScreen = () => {
  const { t } = useTranslation();
  const navigation = useNavigation();
  const { control, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    setError(null);
    setTimeout(() => {
      setLoading(false);
      if (data.email.endsWith('@teste.com')) {
        setSuccess(true);
      } else {
        setError(t('forgot.error'));
      }
    }, 1200);
  };

  if (success) {
    return (
      <View style={styles.container}>
        <Text variant="headlineMedium" style={styles.title}>{t('forgot.successTitle')}</Text>
        <Text style={styles.info}>{t('forgot.successInfo')}</Text>
        <CustomButton mode="contained" style={styles.button} onPress={() => navigation.goBack()}>
          {t('forgot.backToLogin')}
        </CustomButton>
      </View>
    );
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0}
    >
      <View style={styles.container}>
        <Text variant="headlineMedium" style={styles.title}>{t('forgot.title')}</Text>
        <Text style={styles.info}>{t('forgot.subtitle')}</Text>
        <Controller
          control={control}
          name="email"
          render={({ field: { onChange, value } }) => (
            <CustomTextInput
              label={t('forgot.email')}
              value={value}
              onChangeText={onChange}
              errorText={errors.email?.message}
              style={styles.input}
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
              returnKeyType="done"
              leftIcon="email"
            />
          )}
        />
        {error && <Text style={styles.errorText}>{error}</Text>}
        <CustomButton
          mode="contained"
          onPress={handleSubmit(onSubmit)}
          style={styles.button}
          loading={loading}
          disabled={loading}
        >
          {t('forgot.send')}
        </CustomButton>
        <CustomButton
          mode="text"
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          {t('forgot.backToLogin')}
        </CustomButton>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  title: {
    marginBottom: 8,
    textAlign: 'center',
  },
  info: {
    textAlign: 'center',
    fontSize: 16,
    color: '#666',
    marginBottom: 16,
  },
  input: {
    marginBottom: 8,
    width: 280,
  },
  errorText: {
    color: 'red',
    marginBottom: 16,
    textAlign: 'center',
  },
  button: {
    marginTop: 16,
    alignSelf: 'center',
    width: 200,
  },
  backButton: {
    marginTop: 8,
    alignSelf: 'center',
  },
}); 