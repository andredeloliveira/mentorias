#Projeto mentorias

##Agora com Angular e Meteor.

##Novidades serão postadas aqui.

####Pacotes utilizados:
meteor-base             # Packages every Meteor app needs to have
mobile-experience       # Packages for a great mobile UX
mongo                   # The database Meteor supports right now
session                 # Client-side reactive dictionary for your app
jquery                  # Helpful client-side library
tracker                 # Meteor's client-side reactive programming library

standard-minifiers      # JS/CSS minifiers run for production mode
es5-shim                # ECMAScript 5 compatibility for older browsers.

insecure                # Allow all DB writes from clients (for prototyping)
angular
angularui:angular-ui-router
accounts-password
accounts-ui
urigo:angular-blaze-template
accounts-facebook
accounts-twitter
twbs:bootstrap
angular:angular-material
cfs:standard-packages
cfs:gridfs
fortawesome:fontawesome
cfs:ejson-file
cfs:filesystem
rzymek:fullcalendar
nimble:restivus
vitalets:angular-xeditable
ecmascript
blaze-html-templates
aldeed:simple-schema
alanning:roles

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
