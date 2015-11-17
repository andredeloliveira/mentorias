/*var id = aUser.createUser({
    username : "root",
    email: "root@root.com",
    password: "123123",
    profile: { name: "Big Boss" },
    roles : ['root']
  }, 
  {
    username : "Mentor",
    email: "mentor@mentor.com",
    password: "123123",
    profile: { name: "Mentor" },
    roles : ["mentor"]
  },
  {
    username : "Empreendedor",
    email: "empreendedor@empreendedor.com",
    password: "123123",
    profile: { name: "empreendedor" },
    roles : ["empreendedor"]
  }
);

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
/*if(Empresas.find().count() === 0){
  _.each(empresasSeeds, function(valoresSeeds){
    Empresas.insert(valoresSeeds);
    console.log("Enviado ", valoresSeeds.nome);
  })
}*/

//Meteor.Empresas.remove('passar o id');

var produtosSeeds = [
{
"nome":"Cavalo de fogo" ,
"imagem_destaque":"empresas/logo.png",
"descricao":
    "blabla"
},
{
"nome":"Telefone com fio" ,
"imagem_destaque":"empresas/logo.png",
"descricao":
    "blabla"
},
{
"nome":"Panela de Barro" ,
"imagem_destaque":"empresas/publica/logo.png",
"descricao":
    "blabla"
},
{
"nome":"Corrente de prata" ,
"imagem_destaque":"http://cloudsource.com.br/publica/logo.png",
"descricao":
    "blabla"
}
];
if(Produtos.find().count() === 0){
  _.each(produtosSeeds, function(workSeeds){
    Produtos.insert(workSeeds);
    console.log("Produto Cadastrado ", workSeeds.nome);
  })
}
//Meteor.Produtos.remove('passar o id');

var users = [
      {name:"empreendedor-admin",email:"empreendedor-admin@example.com",roles:['empreendedor-admin']},
      {name:"empreendedor-gestor",email:"empreendedor-gestor@example.com",roles:['empreendedor-gestor']},
      {name:"empreendedor",email:"empreendedor@example.com",roles:['empreendedor']},
      {name:"mentor",email:"mentor@example.com",roles:['mentor']},
      {name:"pmo",email:"pmo@example.com",roles:['pmo']}
    ];

/*_.each(users, function (user) {
  var id;

  id = Accounts.createUser({
    email: user.email,
    password: "admin",
    profile: { name: user.name }
  });

  if (user.roles.length > 0) {
    // Need _id of existing user record so this call must come 
    // after `Accounts.createUser` or `Accounts.onCreate`
    Roles.addUsersToRoles(id, user.roles, 'grupo');
  }
});*/

//remover usuarios por id
//Meteor.users.remove('passar id');  