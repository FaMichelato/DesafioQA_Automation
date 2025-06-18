import { test, expect, request } from '@playwright/test';

test('GET /users retorno 200', async () => {
  const context = await request.newContext({
    extraHTTPHeaders: {
      'x-api-key': 'reqres-free-v1',
      'accept': '*/*',
      'user-agent': 'PostmanRuntime/7.43.4'
    }
  });

  const response = await context.get('https://reqres.in/api/users?page=1');

  expect(response.status()).toBe(200);
  expect(response.headers()['content-type']).toContain('application/json');

  const body = await response.json();
  expect(body).toHaveProperty('data');
  expect(Array.isArray(body.data)).toBeTruthy();
});
