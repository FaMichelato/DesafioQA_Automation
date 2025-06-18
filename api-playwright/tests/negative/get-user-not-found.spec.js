import { test, expect, request } from '@playwright/test';

test('GET /users/9999 deve retornar 404 para usuário inexistente', async () => {
  const context = await request.newContext({
    extraHTTPHeaders: {
      'x-api-key': 'reqres-free-v1',
      'accept': '*/*',
      'user-agent': 'PostmanRuntime/7.43.4'
    }
  });

  const response = await context.get('https://reqres.in/api/users/9999');
  expect(response.status()).toBe(404);
});
