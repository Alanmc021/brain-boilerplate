# brainBoilerplate

## Tecnologias Utilizadas

- **React Native CLI + TypeScript**
- **React Navigation** (Stack/Tab)
- **Redux Toolkit** (gerenciamento de estado)
- **React Native Paper** (UI components)
- **React Hook Form + Yup** (formulários e validação)
- **Axios** (requisições HTTP)
- **react-i18next** (tradução/i18n)
- **react-native-localize** (detecção de idioma)
- **Dotenv** (variáveis de ambiente)
- **Absolute Imports** (imports com alias)

## Estrutura de Pastas

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

## Como rodar o projeto

1. **Instale as dependências:**
   ```sh
   yarn install
   ```

2. **Instale as dependências nativas (iOS):**
   ```sh
   cd ios && pod install && cd ..
   ```

3. **Inicie o Metro Bundler:**
   ```sh
   yarn start --reset-cache
   ```

4. **Rode o app no simulador iOS:**
   ```sh
   npx react-native run-ios --simulator="iPhone 13" --port=8071
   ```
   Ou para Android:
   ```sh
   yarn android
   ```

## Fluxo de Autenticação Fake

- **Tela de Login:**
  - Email: `teste@teste.com`
  - Senha: `123456`
  - Qualquer outro valor retorna erro.
  - O login simula um endpoint com delay de 1.5s.

- **Após login:**
  - Usuário é redirecionado para o menu em tabs (Home, Profile, Settings).
  - O estado de autenticação é controlado pelo Redux.

## Tradução (i18n)
- O app suporta português e inglês.
- Botão na tela de login para alternar idioma.

## Scripts úteis
- `yarn start` - Inicia o Metro Bundler
- `yarn ios` - Roda no simulador iOS
- `yarn android` - Roda no emulador Android
- `yarn lint` - Lint do código
- `yarn type-check` - Checagem de tipos TypeScript

## Contribuição
Pull requests são bem-vindos!

---

> Projeto boilerplate para apps React Native modernos, pronto para escalar.
