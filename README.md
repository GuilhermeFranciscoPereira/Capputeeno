# ☕ Projeto Capputeeno ☕

### Commit: 10/09/2024 - 15:23 ( Criação da página única do produto )

## ⚠️ IMPORTANTE!
### O desafio pede que a estilização seja feita com styled-components. Embora eu prefira estilizar com styled-components, usando react. Quando uso Next.js, prefiro estilizar com CSS Modules para garantir que a renderização no lado do servidor seja precisa.

# 

## ✔️ Alterações deste commit:

## Alterações na pasta: ( src )

## Alterações nas pastas de ( src ): ( app / contexts / hooks )

### app:
- app > page.tsx: Foi adicionado a função de tratamento do click ao card do produto, onde ao clicar muda para a página do produto e faz a requisição.
- app > (pages) > produtos > [DynamicProduct]: Criado toda a estrutura da página de produto único e sua estilização.

### contexts:
- contexts > AppProvider: Adicionado o provider do DynamicProduct.
- contexts > Pages > DynamicProduct: Criado todo o contexto para os produtos dinâmicos.

### hooks:
- hooks > useGetDynamicProduct.tsx: Criado um novo arquivo, mas este é para realizar a requisição de produtos únicos baseado no ID.

##

### ❤️ Créditos:

#### Créditos do projeto à equipe da RocketSeat:
> <a href="https://github.com/Rocketseat/frontend-challenge" target="_blank">https://github.com/Rocketseat/frontend-challenge</a>

#### Créditos dos emojis: 
> <a href="https://emojipedia.org" target="_blank">https://emojipedia.org</a>

#### Créditos do Favicon: 
> <a target="_blank" href="https://icons8.com/icon/64677/tea-cup">Xícara de chá</a> ícone por <a target="_blank" href="https://icons8.com">Icons8</a>