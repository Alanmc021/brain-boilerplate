import React from 'react';
import { StyleSheet, Platform, KeyboardAvoidingView, ScrollView } from 'react-native';
import { Text } from 'react-native-paper';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useTranslation } from 'react-i18next';
import { useAuth } from '@hooks/useAuth';
import { CustomButton } from '@components/CustomButton/CustomButton';
import { CustomTextInput } from '@components/CustomTextInput/CustomTextInput';
import { useNavigation } from '@react-navigation/native';

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
  const navigation = useNavigation();

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

        <CustomButton mode="outlined" onPress={toggleLanguage} style={styles.langButton}>
          {i18n.language === 'pt' ? 'Switch to English' : 'Mudar para Português'}
        </CustomButton>

        <Controller
          control={control}
          name="email"
          render={({ field: { onChange, value } }) => (
            <CustomTextInput
              label={t('login.email')}
              value={value}
              onChangeText={onChange}
              errorText={errors.email?.message}
              style={styles.input}
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
              returnKeyType="next"
              leftIcon="email"
            />
          )}
        />

        <Controller
          control={control}
          name="password"
          render={({ field: { onChange, value } }) => (
            <CustomTextInput
              label={t('login.password')}
              value={value}
              onChangeText={onChange}
              secureTextEntry
              errorText={errors.password?.message}
              style={styles.input}
              returnKeyType="done"
              leftIcon="lock"
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
          {t('login.button')}
        </CustomButton>
        <Text
          style={styles.registerLink}
          onPress={() => navigation.navigate('Register' as never)}
        >
          {t('register.registerLink')}
        </Text>
        <Text
          style={styles.forgotLink}
          onPress={() => navigation.navigate('ForgotPassword' as never)}
        >
          {t('forgot.forgotLink')}
        </Text>
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
  registerLink: {
    color: '#1976d2',
    marginTop: 8,
    textAlign: 'center',
    textDecorationLine: 'underline',
    fontWeight: '500',
  },
  forgotLink: {
    color: '#1976d2',
    marginTop: 16,
    textAlign: 'center',
    textDecorationLine: 'underline',
    fontWeight: '500',
  },
}); 