Meteor.publish('users', function(){
return Meteor.users.find({}, {limit: 6});

});

Meteor.publish('getUsers' , function(){
	return Meteor.users.find({}, {_id:0, limit:3});
});
