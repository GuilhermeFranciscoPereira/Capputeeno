# ☕ Projeto Capputeeno ☕

Commit: 29/08/2024 - 18:41 ( Commit de adição da opção filtro de "Organizar por" )
## Veja eu criando este commit no meu canal do youtube:
> 🔗 <a href="https://youtube.com/@lottusdev?si=XXXaT6mtVrOct7Tr" target="_blank">Projeto Capputeeno - Parte 5 - Filtro de pesquisa de "organizar por"</a>

## ⚠️ IMPORTANTE!
### O desafio pede que a estilização seja feita com styled-components. Embora eu prefira estilizar com styled-components, usando react. Quando uso Next.js, prefiro estilizar com CSS Modules para garantir que a renderização no lado do servidor seja precisa.

# 

## 💭 Como o site está no momento atual com os filtros:
![Imagem do projeto atualmente](./src/assets/telaFinalizadaFiltros.png)

## ✔️ Alterações deste commit:

### Alterações na pasta: ( src )

### Alterações nas pastas de ( src ): ( assets / components / contexts / hooks )

## assets:
- assets: Adicionado a imagem do site atualmente, com os filtros já aplicados.

## components:
- components > Nav: Adicionado uma nova função para que toda vez que o select for alterado ele chame a função que seta o novo valor para fazer a requisição com o filtro desejado.

## contexts:
- contexts > AppProvider: Adicionado o provider de OrganizeBy.
- contexts > Filters > OrganizeByContext.tsx: Criado todo o contexto para setar e compartilhar o valor setado, a ordem e a função que seta um novo valor.

## hooks:
- hooks > useGetDatas.tsx: Apenas adicionado os parâmetros sortField e sortOrder em "allProducts" para fazer a requisição com o filtro que o usuário escolher.

##

### ❤️ Créditos:

#### Créditos do projeto à equipe da RocketSeat:
> <a href="https://github.com/Rocketseat/frontend-challenge" target="_blank">https://github.com/Rocketseat/frontend-challenge</a>

#### Créditos dos emojis: 
> <a href="https://emojipedia.org" target="_blank">https://emojipedia.org</a>

#### Créditos do Favicon: 
> <a target="_blank" href="https://icons8.com/icon/64677/tea-cup">Xícara de chá</a> ícone por <a target="_blank" href="https://icons8.com">Icons8</a>