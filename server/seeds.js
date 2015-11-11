/*var id = aUser.createUser({
    username : "root",
    email: "root@root.com",
    password: "123123",
    profile: { name: "Big Boss" },
    roles : []
  });

  Roles.addUsersToRoles(id, ["root"]);
  console.log("Adicionando o cabeça  da app");*/

/*  Roles.addUsersToRoles(id, ["Empreendedor"]);
  console.log("Criando Role Empreendedor");

  Roles.addUsersToRoles(id, ["Mentor"]);
  console.log("Criando Role Mentor");*/



var empresasSeeds =[
{
"nome":"CloudSource" ,
"website":"http://nuvem.coffee",
"produtos":{
	"id":"1001", 
	"id":"2001",
	"id":"3001"
},
"descricao_empresa":"dsfsdfsdf",
"integrantes-empresa":{
	"id":"1", 
	"id":"2",
	"id":"3",
},
    "facebook":"http://facebook.com/cloudsourcefoz",
    "linkedin":"http://linkedin.com",
    "twitter": "http://twitter.com",
    "dt_cadastro": new Date(),
    "status": true
},
{
"nome":"Magnidea" ,
"website":"http://nuvem.coffee",
"produtos":{
	"id":"1001", 
	"id":"2001",
	"id":"3001"
},
"descricao_empresa":"",
"integrantes-empresa":{
	"id":1, 
	"id":2,
	"id":3
},
    "facebook":"http://facebook.com/cloudsourcefoz",
    "linkedin":"http://linkedin.com",
    "twitter": "http://twitter.com",
    "dt_cadastro": new Date(),
    "status": true
},
{
"nome":"Consvita" ,
"website":"http://nuvem.coffee",
"produtos":{
	"id":"1001", 
	"id":"2001",
	"id":"3001"
},
"descricao_empresa":"",
"integrantes-empresa":{
	"id":1, 
	"id":2,
	"id":3
},
    "facebook":"http://facebook.com/cloudsourcefoz",
    "linkedin":"http://linkedin.com",
    "twitter": "http://twitter.com",
    "dt_cadastro": new Date(),
    "status": true
}
];
if(Empresas.find().count() === 0){
  _.each(empresasSeeds, function(valoresSeeds){
    Empresas.insert(valoresSeeds);
    console.log("Enviado ", valoresSeeds.nome);
  })
}