# Ignite UI Design System

## O que é isso?

Este projeto é um design system desenvolvido durante as aulas do Bootcamp Ignite, da Rocketseat. O projeto utiliza uma estrutura de monorepo, organizado em pacotes para tokens, componentes React, documentação em Storybook e configurações para ESLint e TypeScript.

## Como é a estrutura do projeto?

### Tokens

No pacote de tokens, há especificações para cores, tamanhos, pesos e famílias de fonte, além de margens e espaçamentos de linha.

### Componentes React

No package `react` estão os componentes que podem ser utilizados dentro da sua aplicação em React. Cada componente possui suas especificações de uso detalhadas.

### Documentação com Storybook

Em `package/docs`, está a documentação do design system. Utilizando o Storybook, você pode visualizar e interagir com os diferentes componentes e tokens disponíveis.

### Configurações do ESLint e do TypeScript

O monorepo também conta com pacotes com configurações do ESLint e do TypeScript, para garantir a padronização da escrita de código.

## Como posso executar o projeto?

Para executar o projeto localmente com o NPM, tenha esse gerenciador de pacotes instalado e siga os passos abaixo:

1. Faça o clone do repositório na sua máquina;
2. Com o terminal, acesse a pasta raiz do projeto;
3. Execute `npm install` para instalar as dependências;
4. Execute todos os pacotes com o Turborepo com o comando `npm run dev`;

A partir daí, para acessar a documentação no Storybook, acesse [http://localhost:6006](http://localhost:6006). Você também pode conferir a documentação online por meio [deste link](https://edeiltonso.github.io/ignite-design-system).