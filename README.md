# ☕ Projeto Capputeeno ☕

### Commit: 11/09/2024 - 17:38 ( Criação da função de adicionar produtos ao carrinho )

## Veja eu criando este commit no meu canal do youtube:
> <a href="https://youtu.be/yQ5d7Hc_aTI" target="_blank">🔗 Projeto Capputeeno - Parte 7 - Adicionando produtos ao carrinho</a>

## ⚠️ IMPORTANTE!
### O desafio pede que a estilização seja feita com styled-components. Embora eu prefira estilizar com styled-components, usando react. Quando uso Next.js, prefiro estilizar com CSS Modules para garantir que a renderização no lado do servidor seja precisa.

# 

## ✔️ Alterações deste commit:

## Alterações na pasta: ( src )

## Alterações nas pastas de ( src ): ( app / components / contexts / hooks )

### app:
- app > (pages) > produtos > [DynamicProduct]: Adicionado a função de adicionar ao carrinho ao clicar no botão (Função que está importada de CardContext).


### components:
- Header > index.tsx: Importado o contexto que mostra a quantidade de produtos no carrinho.

### contexts:
- contexts > AppProvider: Adicionado o provider do Cart.
- contexts > Pages > CartContext.tsx: Criado todo o contexto do carrinho, onde gera a quantidade de produtos no carrinho, os produtos que estão no carrinho e também salva todos os produtos do carrinho no local storage.

### hooks:
- hooks > useGetDynamicProduct.tsx: Apenas adicionado o 'id' na requisição, para receber o id e salvar ele no carrinho.

##

### ❤️ Créditos:

#### Créditos do projeto à equipe da RocketSeat:
> <a href="https://github.com/Rocketseat/frontend-challenge" target="_blank">https://github.com/Rocketseat/frontend-challenge</a>

#### Créditos dos emojis: 
> <a href="https://emojipedia.org" target="_blank">https://emojipedia.org</a>

#### Créditos do Favicon: 
> <a target="_blank" href="https://icons8.com/icon/64677/tea-cup">Xícara de chá</a> ícone por <a target="_blank" href="https://icons8.com">Icons8</a>