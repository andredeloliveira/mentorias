Meteor.publish("users", function(){
  return Meteor.users.find({},{fields:{_id:1, emails:1, profile:1}});
});
Meteor.publish("oneUser", function(userId){
  return Meteor.users.findOne({_id: userId}, {fields: {_id:1,emails:1, profile:1}});
});

/*Meteor.publish('pegaTudo', function(){
	var emails = _.pluck(Meteor.users.find({}, {fields: {'profile.email': 1, _id:0}}).fetch(), 'profile.email');
return emails;
});*/
