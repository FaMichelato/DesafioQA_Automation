# 🧪 Projeto de Testes Automatizados com Playwright e Cucumber

Testes end-to-end (E2E) utilizando [Playwright](https://playwright.dev/) e [Cucumber.js](https://cucumber.io/docs/installation/javascript/), aplicando o padrão de projeto Page Objects para manter uma estrutura organizada.

---

## Estrutura do Projeto

```
front-playwright-cucumber/
├── features/
│   ├── login.feature
│   └── checkout.feature
├── pages/
│   ├── LoginPage.js
│   └── ProductsPage.js
├── steps/
│   ├── login.steps.js
│   └── checkout.steps.js
├── support/
│   ├── custom-world.js
│   └── hooks.js
├── package.json
├── playwright.config.js (opcional)
└── README.md
```

---

## Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [Playwright](https://playwright.dev/)
- [Cucumber.js](https://cucumber.io/)
- [ESM Modules](https://nodejs.org/api/esm.html)

---

## Pré-requisitos

- Node.js 18 ou superior
- NPM ou Yarn
- Git (opcional)

---

## Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/front-playwright-cucumber.git
cd front-playwright-cucumber

# Instale as dependências
npm install
```

---

## Executando os Testes

### Rodar todos os testes:

```bash
npx cucumber-js --import support/custom-world.js --import support/hooks.js --import steps/login.steps.js --import steps/checkout.steps.js features
```

### Rodar apenas testes com tag `@negativo`:

```bash
npx cucumber-js --tags @negativo --import support/custom-world.js --import support/hooks.js --import steps/login.steps.js features
```

---

## 🏷️ Tags

- `@positivo` — testes de fluxo feliz
- `@negativo` — testes de validação e erro

---

## 🧰 Comandos úteis

- Instalar o Playwright:
  ```bash
  npx playwright install
  ```

- Gerar HTML Report (opcional):
  ```bash
  npx playwright show-report
  ```

---

