
Meteor.publish("produtos-destaque", function(){
  return produtos.destaque({},{limit:3});
});

Meteor.publish("users-all", function(){
  return Users.find();
});

Meteor.publish("usersById", function(_id){
  return Users.find({"users" : _id});
});

Meteor.publish("produtosByID", function(_id){
  return Users.find({"produtos" : _id});
});

Meteor.publish("empresaByID", function(_id){
  return Users.find({"empresa" : _id});
});

Meteor.publish(null, function (){ 
  return Meteor.roles.find({})
});


/*Meteor.publish('seguranca', function (group) {
  if (Roles.userIsInRole(this.userId, ['admin'], group)) {

    return Meteor.secrets.find({group: group});

  } else {

    this.stop();
    return;

  }
});*/

