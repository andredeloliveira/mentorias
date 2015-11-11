
Images = new FS.Collection("images", {
    stores: [
        new FS.Store.GridFS("original")
    ],
    filter: {
        allow: {
            contentTypes: ['image/*']
        }
    }
});

/*if (Meteor.isServer) {
    Images.allow({
        'insert': function () {
            return true;
        }
    });

    Meteor.publish('images', function () {

        return Images.find({});
    });
}*/