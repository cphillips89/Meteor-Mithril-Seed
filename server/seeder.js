Meteor.startup(function() {

//removes pre-existing users before seeding
  Meteor.users.remove({});

  Accounts.createUser({
    username: "test",
    email: "test@example.com",
    password: "password"
  });

  Factory.define('message', Messages, {
    text: function() {
    	return Fake.sentence();
    },
    user: Meteor.users.findOne()._id,
    timestamp: Date.now(),
    name: 'Result'
  });

  // Add this if you want to remove all messages before seeding
  Messages.remove({});

  if (Messages.find({}).count() === 0) {
    _(100).times(function(n) {
      Factory.create('message');
    });
  }

});