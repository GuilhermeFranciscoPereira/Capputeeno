# ☕ Projeto Capputeeno ☕

### Commit: 02/09/2024 - 22:30 ( Refatoração em todo o código para remover os 'use client' desnecessários e adicionar o metadata no layout )

## ⚠️ IMPORTANTE!
### O desafio pede que a estilização seja feita com styled-components. Embora eu prefira estilizar com styled-components, usando react. Quando uso Next.js, prefiro estilizar com CSS Modules para garantir que a renderização no lado do servidor seja precisa.

# 

## 💭 Como o site está no momento atual com os filtros:
![Imagem do projeto atualmente](./src/assets/telaFinalizadaFiltros.png)

## ✔️ Alterações deste commit:

### Alterações na pasta: ( src )

### Alterações nas pastas de ( src ): ( app / components / contexts / hooks / services )

## app:
- app > layout.tsx: Removido o queryClientProvider e movido para (services > queryClient) para conseguir retirar o 'use client' e adicionado o metadata do site.
- app > page.tsx: Removido a importação do 'useContext' e do contexto e então trocado por uma única importação que já faz os dois.

## components:
- components > Header: Adicionado o 'use client' e também removido a importação do 'useContext' e do contexto e então trocado por uma única importação que já faz os dois.
- components > Nav: Removido a importação do 'useContext' e do contexto e então trocado por uma única importação que já faz os dois.
- components > TogglePagination: Pequenas alterações sem impactos (Toda a estrutura será alterada no próximo commit).

## contexts:
- contexts > AppProvider: Adicionado o 'use client' para ficar em apenas um local.
- contexts > Filters > Todos os 3 arquios: Adicionado uma nova função que faz a exportação do contexto já com o 'use client' para não precisar utilizar o 'useContext' e o 'use client' no arquivo que fizer a importação.

## hooks:
- hooks > useGetDatas.tsx: Removido o 'use client' e removido a importação do 'useContext' e do contexto para então trocar por uma única importação que já faz os dois.

## services:
- services > queryClient.tsx: Refatorado toda a estrutura para que seja possível fazer a exportação já com o queryClient, assim não é necessário usar o 'use client' no layout.tsx.

##

### ❤️ Créditos:

#### Créditos do projeto à equipe da RocketSeat:
> <a href="https://github.com/Rocketseat/frontend-challenge" target="_blank">https://github.com/Rocketseat/frontend-challenge</a>

#### Créditos dos emojis: 
> <a href="https://emojipedia.org" target="_blank">https://emojipedia.org</a>

#### Créditos do Favicon: 
> <a target="_blank" href="https://icons8.com/icon/64677/tea-cup">Xícara de chá</a> ícone por <a target="_blank" href="https://icons8.com">Icons8</a>