# mfe-todolist
> React + TypeScript + Vite + Module Federation.

## Microfrontend

Um estilo de arquitetura em que aplicações frontend independentes se comunicam entre si, 
criando algo maior.

## Como inicializar a aplicação

- Acessar cada uma das aplicação (**mfeHeader - mfe header, mfeList - mfe lista, mfeTodolist - host**) e instalar as dependencias (**yarn install**),
- Para as aplicações **mfeHeader - mfe header, mfeList - mfe lista** executar o comando **yarn build** e após a concluisão do build executar o comando **yarn preview**
- Para a aplicação host (**mfeTodolist - host**) executar o comando **yarn dev**

# Module Federation
Module Federation é um método específico para habilitar o que é comumente chamado de “micro frontends” em aplicativos JavaScript usando Webpack 5.

**De acordo com a documentação do Webpack:**
>Várias compilações separadas devem formar um único aplicativo. Essas compilações separadas agem como contêineres e podem expor e consumir código entre compilações, criando um aplicativo único e unificado.

Isso geralmente é conhecido como Micro-Frontends, mas não se limita a isso.

`Só para lembrar, o Module Federation só está disponível na versão 5 do webpack.`

Com Module Federations podemos compartilhar não apenas componentes, mas estados.

Caso queira conhecer mais sobre o Module Federation,  [module-federation](https://webpack.js.org/concepts/module-federation/).

