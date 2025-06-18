import { test, expect, request } from '@playwright/test';

test('POST /users com payload inválido deve retornar erro ou estrutura vazia', async () => {
  const context = await request.newContext({
    extraHTTPHeaders: {
      'x-api-key': 'reqres-free-v1',
      'accept': '*/*',
      'user-agent': 'PostmanRuntime/7.43.4'
    }
  });

  const response = await context.post('https://reqres.in/api/users', {
    data: { invalidField: 123 }
  });

  expect([201, 400]).toContain(response.status());
  const body = await response.json();
  expect(body).not.toHaveProperty('name');
});
