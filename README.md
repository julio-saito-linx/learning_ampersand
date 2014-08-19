Aprendendo Ampersand.js
=======================
Lições aprendidas no curso com vídeos: http://learn.humanjavascript.com/


## Indice
* [Human Javascript](#human-javascript)
* [Instalacao](#instalacao)
* [Main App](#main-app)
* [Views](#views)


=====================
## Human Javascript

Human Javascript é uma técnica, um livro, um guia de boas práticas escrito por [@HenrikJoreteg](https://twitter.com/henrikjoreteg). De nada vale escrever um código incrível e complicado se só quem fez poderá dar manutenção. Devemos escrever código para seres humanos.

Um [exemplo](http://read.humanjavascript.com/ch03-code-for-humans.html) do livro:
```javascript

// ruim
var hasHello = ~myArray.indexOf('hello')

// melhor
var hasHello = myArray.indexOf('hello') !== -1

// ainda melhor
var hasHello = _(myArray).contains('hello')
```

Seguindo esse princípio de que tudo deve ser claro em pequenos módulos, Henrik criou o [Ampersand](http://ampersandjs.com/). O foco é utilizar pequenos módulos independentes para se montar aplicações web. Tudo no browser e focado em convenções. Parecido com o backbone.js porém mais focado em produtividade, praticidade, legibilidade e manutenibilidade.

=====================
## Instalacao
####npm
```shell
npm init

# Mogger (esse é o meu logger)
npm i mogger lodash --save

# HAPI (servidor web que aguenta cargas monstruosas)
npm i hapi moonboots_hapi  --save

# Ampersand
npm i ampersand ampersand-view domready --save
npm i ampersand-router --save
npm i getconfig --save
```

####MoonBoots
 - Exibe apenas um script na saída
 - Quando em developmentMode, envia o javascript e o CSS sem compactação
 - Quando em developmentMode=false, os arquivos são minificados
 - Quando em developmentMode=false, o nome dos arquivos é alterados quando ocorre alguma mudança



=====================
## Main App

####/client/app.js
 - Ponto de entrada da aplicação
 - Cria uma variável global chamada app, que podemos chamar de qualquer lugar

####/client/router.js
 - Gerenciamento de rotas
 - Instancia as paginas e manda para o evento global 'page'

####getconfig
 - https://github.com/HenrikJoreteg/clientconfig
 - Busca variável NODE_ENV
 - dev_config.json, production_config.json, ...
 - grava as informações em cookies para acesso no cliente






=====================
## Views

####/client/view/main.js
 - View principal, possui o body, por exemplo.
 - Vai conter todas as outras views dentro dela
 - Serve para gerenciar eventos gerais
 - Escuta o evento geral e usando o ViewSwitcher, carrega as páginas que o router mandar

####Views possem seletores
```
 get('#elementId')     => $('#elementId')[0]
 getAll('.className')  => $('.className')
 getByRole('roleName') => $('[role=roleName]')[0]
```

####/client/pages/ ... home.js, ...
 - Páginas são views que representam as rotas

####Pages vs Views
 - Pages são Views
 - Pages são utilizadas para organização

