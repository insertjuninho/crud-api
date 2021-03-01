# CRUD API

### Aplicação desenvolvida com NodeJS, ExpressJS e MongoDB

É uma aplicação de carta de natal, onde será possível realizar um cadastro de uma carta 

### Ajustes e melhorias

-[X] CRUD:(Create, release("Select"), Update e delete)

-[X] Cadastro e login com JWT

-[ ] Aplicar teste TDD

-[ ] Refatorar aplicando o TS

## Iniciando o projeto LOCAL
- Clone o repositório
- Dentro da pasta com o projeto clonado rode o comando

```
    npm install -D

```
--- Depois da instalação, rode o comando dentro de SRC 

```
nodemon index

```
## Usando o projeto Via Heroku
link: https://apicrudrest.herokuapp.com/

## Routes

router.group("/public", router => {
    
    router.post('/register', auth.register);
    payload de registro: { "name": "name", "email":"email", "password":"passowrd" }
    
    router.post('/auth', auth.auth);
    payload de login: { "email":"email", "password":"passowrd" }

});

### Para usar as routas "private" será necessário para o token jwt no Authotization

router.group("/private", router => {

    router.post('/create',   controller.create);
    payload para criar as carta de natal: { "titulo":"titulo", "conteudo":"conteudo"}
    
    Retorna todas as cartas cadastradas no banco
    router.get('/full',     controller.full);
    
    router.put('/update',    controller.update);
    payload para alterar a carta de natal: {"id":"ido", "titulo":"titulo", "conteudo":"conteudo"}
    
    router.delete('/delete/:id', controller.delete);
    Só passar o ID como parametro na parâmetro

}).use(authMiddleware)

## Banco

Estou usando o MongoDB cloud, com isso não será necessário rodar o banco local

### Libs utilizadas

* jsonwebtoken
* body-parser,
* cors,
* express,
* mongodb,
* mongoose,
* nodemon,
* bcryptjs,
* dotenv,
* express-router-group

<table>
  <tr>
    <td align="center">
      <a href="#">
        <img src="https://avatars.githubusercontent.com/u/35452628" width="100px;" alt="Foto do Alexandre Junior no GitHub"/><br>
        <sub>
          <b>Alexandre Junior</b>
        </sub>
      </a>
    </td>
  </tr>
</table>
