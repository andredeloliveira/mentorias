isAdmin = function(){
  var loggedInUser = Meteor.user();
  var result = false;
  if(loggedInUser){
    if (Roles.userIsInRole(loggedInUser, ['root'])){
      result = true;
    }
  }
  return result;
};

isMentor = function(){
  var loggedInUser = Meteor.user();
  var result = false;
  if(loggedInUser){
    if (Roles.userIsInRole(loggedInUser, ['Mentor'])){
      result = true;
    }
  }
  return result;
};

isEmpreendedor = function(){
  var loggedInUser = Meteor.user();
  var result = false;
  if(loggedInUser){
    if (Roles.userIsInRole(loggedInUser, ['Empreendedor'])){
      result = true;
    }
  }
  return result;
};