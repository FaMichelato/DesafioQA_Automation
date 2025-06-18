import { test, expect, request } from '@playwright/test';

test('PUT /users/2 update e validação de response', async () => {
  const context = await request.newContext({
    extraHTTPHeaders: {
      'x-api-key': 'reqres-free-v1',
      'accept': '*/*',
      'user-agent': 'PostmanRuntime/7.43.4'
    }
  });

  const updatedData = {
    name: 'Fabricio',
    job: 'QA Engineer'
  };

  const response = await context.put('https://reqres.in/api/users/2', {
    data: updatedData
  });

  expect(response.status()).toBe(200);
  const body = await response.json();

  expect(body).toHaveProperty('updatedAt');
  expect(body.name).toBe(updatedData.name);
  expect(body.job).toBe(updatedData.job);
});
