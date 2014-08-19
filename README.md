Aprendendo Ampersand.js
=======================
Lições aprendidas no curso com vídeos: http://learn.humanjavascript.com/


## Indice
* [Instalacao](#instalacao)
* [Main App](#main-app)
* [Views](#views)


=====================
## Instalacao
####npm
```
npm init

# Mogger
npm i mogger lodash --save

# HAPI
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

