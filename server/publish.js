/**
 * Created by Tadashi on 27/09/2015.
 */

Meteor.startup(function () {
    Meteor.publish("Empresas", function () {
        return Empresas.find({});
    });

    Meteor.publish("Perfis", function () {
        return Perfis.find({});
    });
});