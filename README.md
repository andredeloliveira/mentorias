#Projeto mentorias

##Agora com Angular e Meteor.

##Novidades serão postadas aqui.

####Pacotes utilizados:

`meteor add angular`
`meteor add accounts-ui`
`meteor add accounts-password`
`meteor add accounts-facebook accounts-twitter`

CSS boilerplates:
`meteor add twbs:bootstrap`
¹removido o pack skeleton

Como descrito na documentacao do meteor seria denecessário desmembrar o template do mesmo e usar o do angular, achei melhor por causa disso então usar as diretivas default do angular 
https://www.meteor.com/tutorials/angular/templates

Mas poderiamos fazer os partials separados.

Outros estilos de css estão incluidos no arquivo main.css

E muitos outros, que agora eu não me lembro, mas postarei. Do mesmo modo, os pacotes estão contidos na pasta .meteor
e não trarão muitas consequencias.

##API DOCS:

Para acessar a API é simples:
http://server/api/users

O resultado é um JSON. Os metodos PUT e GET estão disponíveis.
para usar o GET

/api/users/:id

####Login
para o login é só acessar a URL:

/api/login

uma possivel chamada seria:

`curl http://localhost:3000/api/login/ -d "email=test&password=password"`

isso vai gerar um status:

 {status: "success", data: {authToken: "f2KpRW7KeN9aPmjSZ", userId: fbdpsNf4oHiX79vMJ} }

é necessário salvar o userId e o authToken para permanecer com o usuário logado.

Para o logout é simples, só

/api/logout

Depois disso não vai mais rolar usar o authToken para mais nada, pois será invalidado.
