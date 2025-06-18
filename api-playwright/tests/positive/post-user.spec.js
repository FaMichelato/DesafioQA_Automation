import { test, expect, request } from '@playwright/test';

test('POST /users - Inserção de novo usuário', async () => {
  const context = await request.newContext({
    extraHTTPHeaders: {
      'x-api-key': 'reqres-free-v1',
      'accept': '*/*',
      'user-agent': 'PostmanRuntime/7.43.4'
    }
  });

  const userData = {
    name: 'Fabricio',
    job: 'QA Engineer'
  };

  const response = await context.post('https://reqres.in/api/users', {
    data: userData
  });

  expect(response.status()).toBe(201);
  const body = await response.json();

  expect(body).toHaveProperty('id');
  expect(body).toHaveProperty('createdAt');
  expect(body.name).toBe(userData.name);
  expect(body.job).toBe(userData.job);
});
