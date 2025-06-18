import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
  stages: [
    { duration: '1m', target: 100 },
    { duration: '3m', target: 500 },
    { duration: '1m', target: 0 },
  ],
};

export default function () {
  let res = http.get('https://reqres.in/api/users?page=1', {
    headers: {
      'x-api-key': 'reqres-free-v1'
    }
  });

  check(res, {
    'status é 200': (r) => r.status === 200,
    'tempo de resposta < 500ms': (r) => r.timings.duration < 500,
  });

  sleep(1);
}
