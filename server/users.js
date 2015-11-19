Meteor.publish("users", function(){
  return Meteor.users.find({},{fields:{_id:1, emails:1, profile:1}});
});
Meteor.publish("oneUser", function(userId){
  return Meteor.users.findOne({_id: userId}, {fields: {_id:1,emails:1, profile:1}});
});
