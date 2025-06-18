# 🧪 Testes Automatizados de API com Playwright

Este projeto executa testes automatizados em múltiplos endpoints da API pública [ReqRes](https://reqres.in/), utilizando Playwright Test.

## ✅ Endpoints testados

- `GET /users`
- `POST /users`
- `PUT /users/{id}`
- `DELETE /users/{id}`

## 📦 Requisitos

- Node.js 18+
- Playwright

## 🚀 Como rodar os testes

1. Instale as dependências:
   ```bash
   npm install -D @playwright/test
   npx playwright install
   ```

2. Execute todos os testes:
   ```bash
   npx playwright test
   ```

3. Gere o relatório em HTML:
   ```bash
   npx playwright show-report
   ```

## 🧾 Relatório

Os testes geram automaticamente um relatório HTML com detalhes de cada requisição e validações realizadas.


##  Execução segmentada

- Rodar todos os testes:
  ```bash
  npx playwright test
  ```

- Rodar apenas testes positivos:
  ```bash
  npx playwright test tests/positive
  ```

- Rodar apenas testes negativos:
  ```bash
  npx playwright test tests/negative
  ```

## 📈 Relatórios

- Relatório de testes positivos:
  ```bash
  npx playwright test tests/positive --reporter html --output=report-positivos
  npx playwright show-report report-positivos
  ```

- Relatório de testes negativos:
  ```bash
  npx playwright test tests/negative --reporter html --output=report-negativos
  npx playwright show-report report-negativos
  ```
