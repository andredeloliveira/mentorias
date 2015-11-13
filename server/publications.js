
Meteor.publish("produtos-destaque", function(){
  return Produtos.destaque({},{limit:3});
});

Meteor.publish("users-all", function(){
  return Users.find();
});

Meteor.publish("usersById", function(_id){
  return Users.find({"users" : _id});
});

Meteor.publish("cart", function(key){
  check(key, String);
  return Carts.find({userKey : key});
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

