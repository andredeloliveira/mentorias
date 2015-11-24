Meteor.publish("empresas", function(options){
  return Empresas.find({}).fetch();
});
