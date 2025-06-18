# language: pt

Funcionalidade: Login na aplicação

  Cenário: Login com credenciais válidas
    Dado que o usuário está na página de login
    Quando preencher o nome de usuário e senha corretamente
    E clicar no botão de login
    Então o sistema deve redirecionar para a página de produtos

@negativo
  Cenário: Login com credenciais inválidas
    Dado que o usuário está na página de login
    Quando preencher o nome de usuário como "usuarioteste" e senha como "senhaerrada"
    E clicar no botão de login
    Então o sistema deve exibir uma mensagem de erro de autenticação
