# 🚀 Desafio Técnico – Teste de Carga com K6

Este projeto realiza um teste de carga utilizando a ferramenta [K6](https://k6.io/) para validar a performance de uma API pública sob alto volume de requisições.

## 📌 Cenário do Teste

- **API testada:** [ReqRes API](https://reqres.in/api/users?page=1)
- **Tipo de requisição:** GET
- **Ferramenta:** K6
- **Usuários simultâneos:** 500
- **Duração total do teste:** 5 minutos
- **Autenticação:** Header `x-api-key: reqres-free-v1`

## 🔧 Como Executar

1. Instale o [K6](https://k6.io/docs/getting-started/installation/)
2. Clone este repositório:
   ```bash
   git clone https://github.com/seu-usuario/desafio-k6.git
   cd desafio-k6
   ```
3. Execute o teste:
   ```bash
   k6 run load_test.js
   ```

## 📊 Resultados do Teste

| Métrica                        | Resultado                                  |
|-------------------------------|---------------------------------------------|
| Total de requisições          | 70.913                                      |
| Status `200 OK`               | 3.928 (somente 5%)                          |
| Tempo médio de resposta       | 17.44 ms                                    |
| Latência P95                  | 29.75 ms                                    |
| Falhas totais                 | 66.985 (94% das requisições falharam)       |
| Requisições em <500ms         | 99%                                         |

## ✅ Conclusão

Durante o teste de carga com 500 usuários simultâneos por 5 minutos, a API ReqRes apresentou **ótimos tempos de resposta**, com média de 17ms e latência p95 abaixo de 30ms. Isso indica que a API é **altamente performática** sob o ponto de vista técnico.

Contudo, foi identificado um **alto índice de falhas nas validações de status HTTP**, com apenas 5% das requisições retornando `200 OK`. Isso sugere que a API implementa **mecanismos de limitação de taxa (rate limit)** ou **bloqueio automático por excesso de requisições**, o que impactou diretamente os testes de carga.

Essa limitação não compromete o uso da ferramenta K6 ou o objetivo do teste, mas reforça a importância de considerar os seguintes pontos ao testar APIs públicas:

- Confirmar a política de limite de requisições do serviço
- Evitar testes de carga em APIs com limitação agressiva
- Utilizar APIs próprias, simuladas ou com ambiente dedicado para performance

---

O projeto atende ao objetivo do desafio, demonstrando domínio da ferramenta K6, criação de script parametrizado com cabeçalhos, análise crítica dos dados obtidos e documentação da execução.
