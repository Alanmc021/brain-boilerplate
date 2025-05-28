import React from 'react';
import { View, StyleSheet, Platform, KeyboardAvoidingView, ScrollView } from 'react-native';
import { TextInput, Button, Text, ActivityIndicator } from 'react-native-paper';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useTranslation } from 'react-i18next';
import { useAuth } from '@hooks/useAuth';

const schema = yup.object().shape({
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});

type FormData = yup.InferType<typeof schema>;

export const LoginScreen = () => {
  const { t, i18n } = useTranslation();
  const { login, loading, error } = useAuth();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: FormData) => {     
    await login(data.email, data.password);
  };

  const toggleLanguage = () => {
    const newLang = i18n.language === 'pt' ? 'en' : 'pt';
    i18n.changeLanguage(newLang);
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0}
    >
      <ScrollView
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="handled"
      >
        <Text variant="headlineMedium" style={styles.title}>
          {t('login.title')}
        </Text>

        <Button mode="outlined" onPress={toggleLanguage} style={styles.langButton}>
          {i18n.language === 'pt' ? 'Switch to English' : 'Mudar para Português'}
        </Button>

        <Controller
          control={control}
          name="email"
          render={({ field: { onChange, value } }) => (
            <TextInput
              label={t('login.email')}
              value={value}
              onChangeText={onChange}
              error={!!errors.email}
              style={styles.input}
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
              returnKeyType="next"
            />
          )}
        />
        {errors.email && (
          <Text style={styles.errorText}>{errors.email.message}</Text>
        )}

        <Controller
          control={control}
          name="password"
          render={({ field: { onChange, value } }) => (
            <TextInput
              label={t('login.password')}
              value={value}
              onChangeText={onChange}
              secureTextEntry
              error={!!errors.password}
              style={styles.input}
              returnKeyType="done"
            />
          )}
        />
        {errors.password && (
          <Text style={styles.errorText}>{errors.password.message}</Text>
        )}

        {error && <Text style={styles.errorText}>{error}</Text>}

        <Button mode="contained" onPress={handleSubmit(onSubmit)} style={styles.button} disabled={loading}>
          {loading ? <ActivityIndicator color="#fff" /> : t('login.button')}
        </Button>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
    marginBottom: 24,
  },
  langButton: {
    marginBottom: 24,
    alignSelf: 'center',
  },
  input: {
    marginBottom: 8,
  },
  errorText: {
    color: 'red',
    marginBottom: 16,
    textAlign: 'center',
  },
  button: {
    marginTop: 16,
  },
}); 