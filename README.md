Aprendendo Ampersand.js
=======================

lições aprendidas no curso: http://learn.humanjavascript.com/

####Instalações iniciais
```
npm init

# Mogger
npm i mogger lodash --save

# HAPI
npm i hapi moonboots_hapi  --save

# Ampersand
npm i ampersand ampersand-view domready --save
npm i ampersand-router --save

```

####/client/app.js
 - Ponto de entrada da aplicação
 - Cria uma variável global chamada app, que podemos chamar de qualquer lugar

####/client/router.js
 - Gerenciamento de rotas
 - Instancia as paginas e manda para o evento global 'page'

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

