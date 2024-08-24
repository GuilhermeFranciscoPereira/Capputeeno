# ☕ Projeto Capputeeno ☕

Commit: 24/08/2024 - 07:59 ( Commit de adição da opção filtro de pesquisas escritas no canto superior direito )
## Veja eu criando este commit no meu canal do youtube:
> 🔗 <a href="https://youtu.be/MNrKWIPPRC8" target="_blank">Projeto Capputeeno - Parte 4 - Filtro de pesquisa escrita</a>

## ⚠️ IMPORTANTE!
### O desafio pede que a estilização seja feita com styled-components. Embora eu prefira estilizar com styled-components, usando react. Quando uso Next.js, prefiro estilizar com CSS Modules para garantir que a renderização no lado do servidor seja precisa.

# 


## 💭 Como o site está no momento atual:
![Imagem do projeto atualmente](./src/assets/telaFinalizadaRefactor.png)

## ✔️ Alterações deste commit:

### Alterações na pasta: ( src )

### Alterações nas pastas de ( src ): ( app / components / contexts )

## app:
- app > page.tsx: Adicionado os filtros para as pesquisas, se o usuário digitar qualquer coisa no campo de pesquisa do canto superior direito ele vai fazer a validação e procurar os produtos que o nome seja compatível com a pesquisa, se não digitar nada ele irá renderizar todos os cards normalmente.

## components:
- components > Header: Adicionado o onChange para que toda vez que o usuário digitar ele realizar uma nova renderização e assim fazer uma nova pesquisa. Além de importar o useContext e o SearchContext para pegar a função para setarmos o valor da pesquisa.

## contexts:
- contexts > AppProvider: Adicionado o provider de Search.
- contexts > Filters: Criado o arquivo: SearchContext.tsx que contem todo o nosso contexto de filtro de pesquisas escritas.
- contexts > Filters > CategoryContext.tsx: Apenas adicionado o useEffect para sempre que o site iniciar começar com padrão como "Todos os produtos"

##

### ❤️ Créditos:

#### Créditos do projeto à equipe da RocketSeat:
> <a href="https://github.com/Rocketseat/frontend-challenge" target="_blank">https://github.com/Rocketseat/frontend-challenge</a>

#### Créditos dos emojis: 
> <a href="https://emojipedia.org" target="_blank">https://emojipedia.org</a>

#### Créditos do Favicon: 
> <a target="_blank" href="https://icons8.com/icon/64677/tea-cup">Xícara de chá</a> ícone por <a target="_blank" href="https://icons8.com">Icons8</a>