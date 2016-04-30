Meteor.publish('messages', function (channel) {
	return Messages.find({channel: channel});
});