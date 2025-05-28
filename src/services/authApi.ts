type LoginResponse = {
  token: string;
  user: {
    id: string;
    email: string;
    name: string;
  };
};

export function login(email: string, password: string): Promise<LoginResponse> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simulação: email: teste@teste.com, senha: 123456
      if (email === 'teste@teste.com' && password === '123456') {
        resolve({
          token: 'fake-token-123',
          user: {
            id: '1',
            email,
            name: 'Usuário Teste',
          },
        });
      } else {
        reject(new Error('Credenciais inválidas.'));
      }
    }, 1500);
  });
} 