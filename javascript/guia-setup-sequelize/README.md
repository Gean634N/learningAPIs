# Sequelize Setup

# Sumário

- [Sequelize Setup](#sequelize-setup)
- [Sumário](#sumário)
- [Guia](#guia)
  - [Plugins do VSCode](#plugins)
  - [Configuração do dotenv](#Configuração-do-.env)
  - [Configuração do gitignore](#Configuração-do-.gitignore)
  - [Inicialização com npm](#Inicialização)
  - [Configuração do editorconfig](#Configuração-do-editorconfig)
  - [Instalação das dependências](#instalação-das-dependências)
    - [Instalação do eslint](#instalação-do-eslint)
    - [Instalação do prettier](#instalação-do-prettier)
    - [Instalação do express](#instalação-do-express)
    - [Instalação do sequelize](#instalação-do-sequelize)
    - [Instalação do pacote de comandos CLI](#instalação-do-pacote-de-comandos-cli)
    - [Instalação do `mysql2`](#instalação-do-mysql2)
  - [Inicialização de um projeto sequelize](#inicialização-de-um-projeto-sequelize)
  - [Criação de um arquivo _model_](#criação-de-um-arquivo-model)
  - [Arquivos _migration_](#arquivos-migration)
    - [Criação de um arquivo _migration_](#criação-de-um-arquivo-migration)
    - [Execução dos arquivos _migration_](#execução-dos-arquivos-migration)
    - [Reverter a _migration_](#reverter-a-migration)
    - [Reverter até uma _migration_ específica](#reverter-até-uma-migration-específica)
  - [Arquivos _seeds_](#arquivos-seeds)
    - [Criação de um arquivo _seed_](#criação-de-um-arquivo-seed)
    - [Execução dos arquivos _seeds_](#execução-dos-arquivos-seeds)
    - [Reversão dos arquivos _seeds_](#reversão-dos-arquivos-seeds)
      - [Reverter todos arquivos _seeds_](#reverter-todos-arquivos-seeds)
      - [Reverter _seed_ mais recente](#reverter-seed-mais-recente)
      - [Reverter _seed_ específica](#reverter-seed-específica)

---

# Guia
este guia foi feito utilizando o gerenciador de pacotes **yarn**.

## Plugins

### Instale os seguintes plugins
>- ***Prettier - Code Formatter**
>- **ESLint**
>- **EditorConfig for VS Code***

presione **`Ctrl+Shift+P`**, digite ***User Settings*** e abilite a opção ***Editor: Format On Save***

<div style="text-align: right"> <a href='#sumário' >Sumário ⬆</a> </div>

---

## Configuração do .gitignore

adicione o o arquivo .gitignore na raiz do seu projeto e inclua todos os arquivos com variaveis de ambiente, dados sensiveis ou que não ser enviados para o github.

<div style="text-align: right"> <a href='#sumário' >Sumário ⬆</a> </div>

---

## Configuração do .env
Arquivo que ira conter credenciais e outras informações que não devem ser tornadas publicas.
- instale a extenção dotenv
```bash
$ npm install dotenv
```
> Crie um arquivo .env.local que ira para o git e servira como guia para saber quais são as variaveis de ambiente necessárias.

> Crie um arquivo .env para conter as variaveis de ambiente.

- para utilizar as variaveis de ambiente utilise a seguinte sintaxe.

arquivo .env
```
PROT=3000
```

arquivo .js em que será utilizada a variavel
```js
const port = process.env.PORT
```
- nos scripts do package.json será necessário inserir `-r dotenv/config`. [exemplo de utilização](#########utilizando-dotenv)

>lembre de incluir o arquivo ***.env*** no gitignore

<div style="text-align: right"> <a href='#sumário' >Sumário ⬆</a> </div>

----

## Inicialização
todos os comandos podem ser feitos utilizando ***yarn*** ou utilizando ***npm***, utilizar um ou outro.
```bash
$ npm init -y
```

> lembre de incluir o arquivo ***node_modules*** no .gitignore
<div style="text-align: right"> <a href='#sumário' >Sumário ⬆</a> </div>

---

## Configuração do editorconfig

Clique com o botão direito na pasta que representa a raiz do seu projeto e escolha a opção **Generate .editorconfig**

exemplo de configuração:

    root = true
    [*]
    indent_style = space
    indent_size = 2
    end_of_line = lf
    charset = utf-8
    trim_trailing_whitespace = false
    insert_final_newline = false

<div style="text-align: right"> <a href='#sumário' >Sumário ⬆</a> </div>

---

## Instalação das dependências
### Instalação do eslint
- instale o eslint como dependencia de desenvolvimento.

```bash
$ npm i -D eslint
```
- inicialize o eslint
```bash
$ npm eslint --init
```
- exemplo de opções:
>

<div style="text-align: right"> <a href='#sumário' >Sumário ⬆</a> </div>

---


### Instalação do prettier
>instale o prettier, assim como configurações e plugins para que ele trabalhe junto com o eslint, tudo como dependencia de desenvolvimento.

```bash
$ npm install prettier eslint-config-prettier eslint-plugin-prettier babel-eslint -D
```
> edite o .eslintrc.json, para adicionar o prettier
```json
 "extends": [
    "standard",
    "prettier"
  ],
```
```json
  "plugins": [
    "@typescript-eslint",
    "prettier"
  ],
```
```json
  "rules": {
    "prettier/prettier": "error"
  }
```
<div style="text-align: right"> <a href='#sumário' >Sumário ⬆</a> </div>

---

### Instalação do express

```bash
$ npm install express
```


<div style="text-align: right"> <a href='#sumário' >Sumário ⬆</a> </div>

----

### Instalação do sequelize

```bash
$ npm install sequelize
```

<div style="text-align: right"> <a href='#sumário' >Sumário ⬆</a> </div>

---
### Instalação do pacote de comandos CLI

```bash
$ npm install --save-dev sequelize-cli
```

<div style="text-align: right"> <a href='#sumário' >Sumário ⬆</a> </div>

---

### Instalação do `mysql2`

```bash
$ npm install mysql2
```


<div style="text-align: right"> <a href='#sumário' >Sumário ⬆</a> </div>

---

## Inicialização de um projeto sequelize

> O comando criará as pastas models, migrations, seeders e config.

```bash
$ npx sequelize-cli init
```
> Caso vc queira mudar as pastas de lugar é necessário avisar o sequelize através do arquivo `.serquelizerc`.

Exemplo de utilização:
Criamos uma pasta `src` e movemos para ela as pastas `config` e `models`, dentro de `src` criamos a pasta `database` criamos e movemos para ela as pastas `migrations` e `seeders`

    ./src/config
    ./src/models
    ./src/database/migrations
    ./src/database/seeders

```tree
.
├─ ...
├─ node_modules
├─ src                              
│   ├─ config  
|   |   └─ config.json
|   |
|   ├─ database
|   |   ├─ migrations
|   |   └─ seeders
|   |     
|   ├─ models
|   |
|   └─ index.js
|
├─ .editorconfig
├─ .eslintrc
├─ .gitignore
├─ package.json
├─ package.lock.json
└─ ...
```
no caso acima o arquivo `.sequelizerc` ficaria assim:
```js
const path = require('path');

module.exports = {
  'config': path.resolve('src', 'config', 'config.json'),
  'models-path': path.resolve('src', 'models'),
  'seeders-path': path.resolve('src', 'database', 'seeders'),
  'migrations-path': path.resolve('src', 'database', 'migrations'),
};

```


<div style="text-align: right"> <a href='#sumário' >Sumário ⬆</a> </div>

---

## Criação de um arquivo _model_ 

> O comando irá gerar o arquivo model e o arquivo migration correspondente.

```bash
$ npx sequelize model:generate --name NomeDoModel --attributes nomeDoAtributo:string
```


<div style="text-align: right"> <a href='#sumário' >Sumário ⬆</a> </div>

---

## Arquivos _migration_ 

### Criação de um arquivo _migration_ 

```bash
$ npx sequelize migration:generate --name migrationName
```


<div style="text-align: right"> <a href='#sumário' >Sumário ⬆</a> </div>

---

### Execução dos arquivos _migration_ 

```bash
$ npx sequelize db:migrate
```


<div style="text-align: right"> <a href='#sumário' >Sumário ⬆</a> </div>

---

### Reverter a _migration_

```bash
$ npx sequelize db:migrate:undo
```


<div style="text-align: right"> <a href='#sumário' >Sumário ⬆</a> </div>

---

### Reverter até uma _migration_ específica

```bash
$ npx sequelize-cli db:migrate:undo:all --to XXXXXXXXXXXXXX-create-posts.js
```


<div style="text-align: right"> <a href='#sumário' >Sumário ⬆</a> </div>

---

## Arquivos _seeds_ 

### Criação de um arquivo _seed_

```bash
$ npx sequelize seed:generate --name seedName
```


<div style="text-align: right"> <a href='#sumário' >Sumário ⬆</a> </div>

---

### Execução dos arquivos _seeds_

> O comando executa **todos** os arquivos seeds

```bash
$ npx sequelize db:seed:all
```


<div style="text-align: right"> <a href='#sumário' >Sumário ⬆</a> </div>

---

### Reversão dos arquivos _seeds_ 

#### Reverter todos arquivos _seeds_ 

```bash
$ npx sequelize db:seed:undo:all
```


<div style="text-align: right"> <a href='#sumário' >Sumário ⬆</a> </div>

---

#### Reverter _seed_ mais recente 

```bash
$ npx sequelize-cli db:seed:undo
```


<div style="text-align: right"> <a href='#sumário' >Sumário ⬆</a> </div>

---

#### Reverter _seed_ específica 

```bash
$ npx sequelize-cli db:seed:undo --seed name-of-seed-as-in-data
```


<div style="text-align: right"> <a href='#sumário' >Sumário ⬆</a> </div>

---
