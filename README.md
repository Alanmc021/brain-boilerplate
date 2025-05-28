# brainBoilerplate

## Technologies Used

- **React Native CLI + TypeScript**
- **React Navigation** (Stack/Tab)
- **Redux Toolkit** (state management)
- **React Native Paper** (UI components)
- **React Hook Form + Yup** (forms and validation)
- **Axios** (HTTP requests)
- **react-i18next** (translation/i18n)
- **react-native-localize** (language detection)
- **Dotenv** (environment variables)
- **Absolute Imports** (alias imports)

## Folder Structure

```
/src
  /assets
  /components
  /constants
  /hooks
  /navigation
  /screens
  /services
  /store
  /themes
  /utils
  App.tsx
```

## How to Run the Project

1. **Install dependencies:**
   ```sh
   yarn install
   ```

2. **Install native dependencies (iOS):**
   ```sh
   cd ios && pod install && cd ..
   ```

3. **Start Metro Bundler:**
   ```sh
   yarn start --reset-cache
   ```

4. **Run the app on iOS simulator:**
   ```sh
   npx react-native run-ios --simulator="iPhone 13" --port=8071
   ```
   Or for Android:
   ```sh
   yarn android
   ```

## Fake Authentication Flow

- **Login Screen:**
  - Email: `teste@teste.com`
  - Password: `123456`
  - Any other value returns an error.
  - The login simulates an endpoint with a 1.5s delay.

- **After login:**
  - User is redirected to the tab menu (Home, Profile, Settings).
  - Authentication state is managed by Redux.

## Internationalization (i18n)
- The app supports Portuguese and English.
- Button on the login screen to switch language.

## Useful Scripts
- `yarn start` - Starts Metro Bundler
- `yarn ios` - Runs on iOS simulator
- `yarn android` - Runs on Android emulator
- `yarn lint` - Lints the code
- `yarn type-check` - TypeScript type checking

## Contribution
Pull requests are welcome!

---

> This is a modern React Native boilerplate, ready to scale your next mobile app.

---

## Need Help with Mobile Apps?

Do you need help installing, configuring, or building your mobile application? I can assist you with React Native projects, from setup to advanced features.

**Contact:** alanmc021@gmail.com
