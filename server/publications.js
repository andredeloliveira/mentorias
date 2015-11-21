//produtos
Meteor.publish("produtos", function(){
  return Produtos.find({});
});
Meteor.publish("produtosByID", function(_id){
  return Produtos.find({"produtos" : _id});
});
//users
Meteor.publish('allUsers',function(){
 return Meteor.users.find({}, {fields: {emails: 1, profile: 1}});
});

//empresas
Meteor.publish("empresaByID", function(empresaId){
  retorno =  Empresas.find({_id:empresaId.empresaId});
  //console.log(retorno);
  return retorno;
});

Meteor.publish('imagensID', function(imgid) {
   rs = Images.find({_id:imgid});
   return rs;
});

//roles
Meteor.publish(null, function (){
  return Meteor.roles.find({});
})


/*Meteor.publish('seguranca', function (group) {
  if (Roles.userIsInRole(this.userId, ['admin'], group)) {
    return Meteor.secrets.find({group: group});
  } else {
    this.stop();
    return;
  }
});*/
