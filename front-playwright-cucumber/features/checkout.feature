# language: pt


Funcionalidade: Checkout no e-commerce

  Cenário: Finalizar uma compra com sucesso
    Dado que o usuário está logado na aplicação
    E acessou a tela de produtos
    E adicionou um produto ao carrinho
    Quando acessar o carrinho
    E iniciar o checkout
    E preencher os dados do cliente com "Fabricio" e "QA Engineer"
    E finalizar a compra
    Então o sistema deve exibir a mensagem de confirmação da compra

