import { test, expect, request } from '@playwright/test';

test('DELETE /users/2 retorno 204', async () => {
  const context = await request.newContext({
    extraHTTPHeaders: {
      'x-api-key': 'reqres-free-v1',
      'accept': '*/*',
      'user-agent': 'PostmanRuntime/7.43.4'
    }
  });

  const response = await context.delete('https://reqres.in/api/users/2');
  expect(response.status()).toBe(204);
});
