Meteor.publish('users', function(){
	return Meteor.users.find();
});

/*Meteor.publish('pegaTudo', function(){
	var emails = _.pluck(Meteor.users.find({}, {fields: {'profile.email': 1, _id:0}}).fetch(), 'profile.email');
return emails;
});*/
