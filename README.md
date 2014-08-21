Aprendendo Ampersand.js
=======================
Lições aprendidas no curso com vídeos: http://learn.humanjavascript.com/
## Indice
* [Human Javascript](#human-javascript)
* [Instalacao](#instalacao)
  + [moonboots](#moonboots)
  + [templatizer](#templatizer)
  + [stylizer](#stylizer)
* [Main App](#main-app)
* [Views](#views)
* [Passo-a-passo](#passo-a-passo)
  + [Nova Rota e Pagina](#nova-rota-e-pagina)
* [TODO](#todo)


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
```shell
npm init

# Mogger (meu logger querido)
npm i mogger lodash --save

# HAPI (servidor web que aguenta cargas monstruosas)
npm i hapi moonboots_hapi  --save

## Ampersand
# configs
npm i getconfig --save

# router
npm i ampersand-router --save

# views
npm i ampersand ampersand-view domready --save
npm i templatizer --save
```

####[moonboots](https://github.com/HenrikJoreteg/moonboots)
 - Exibe apenas um script na saída
 - Quando em developmentMode, envia o javascript e o CSS sem compactação
 - Quando em developmentMode=false, os arquivos são minificados
 - Quando em developmentMode=false, o nome dos arquivos é alterados quando ocorre alguma mudança

####[templatizer](https://github.com/HenrikJoreteg/templatizer)
 - Compila templates JADE para templates com funções javascript leves
 - Dois parametros
     + origiem dos templates JADE
     + destino do arquivo JS

####[stylizer](https://github.com/HenrikJoreteg/templatizer)
 - Compila templates .styl para um css geral
 - Compatível com [livereload](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei/related) 




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
```javascript
 get('#elementId')     // $('#elementId')[0]
 getAll('.className')  // $('.className')
 getByRole('roleName') // $('[role=roleName]')[0]
```

####/client/pages/ ... home.js, ...
 - Páginas são views que representam as rotas

####Pages vs Views
 - Pages são Views
 - Pages são utilizadas para organização



=====================
# Passo-a-passo


## Nova Rota e Pagina

<img src="https://docs.google.com/drawings/d/1GZpAldVcj94fVNrZdaLxn3TQbUGjnElPIOCbRJjheQ8/pub?w=1440&amp;h=1080">
https://docs.google.com/drawings/d/1GZpAldVcj94fVNrZdaLxn3TQbUGjnElPIOCbRJjheQ8/edit?usp=sharing

---
### 1- Link
```jade
a(href='/dois') dois
```
_/templates/body.jade_



---
### 2- Rota
```javascript
var DoisPage = require('./pages/dois');
//...

routes: {
    '': 'home',
    //...

    'dois': 'dois',
},
//...

dois: function() {
    this.trigger('page', new DoisPage());
},
```
_/client/router.js_



---
### 3- Página
##### page === Ampersand.View
```javascript
'use strict';
var View = require('ampersand-view');
var templates = require('../templates');

module.exports = View.extend({
    template: templates.pages.dois,
    autoRender: true
});
```
_/client/pages/dois.js_




---
### 4- Template da página
```jade
h1 Eu sou a página "Dois"
```
_/templates/pages/dois.jade_



## TODO
- [ ] padronizar nomes de variáveis e arquivos
  - Views
    + user_view ("arquivo")
    + UserView ("classe")
    + userView ("instancia")
    + role='user_view' ("roles")
    + user_view_template ("template jade")

  - Pages
    + user_page ("arquivo")
    + UserDetailPage ("classe")
    + userDetailPage ("instancia")
    + user_page ("roles")
    + user_page ("roles")

  - Models
    + user_model ("arquivo")
    + UserModel ("classe")
    + userModel ("instancia")
  
  - Collections
    + user-collection ("arquivo")
    + UserCollections ("classe")
    + userCollections ("instancia")

- [x] criar gerador de arquivos ampersand (model, view, pages, routes...)
  - Já existe o gerador oficial: https://github.com/AmpersandJS/ampersand#generating-stuff

- [ ] Customizar para criar com os nomes sugeridos por mim
