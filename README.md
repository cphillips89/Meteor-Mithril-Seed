This is a seed application which anyone can clone for getting started with using Mithril with Meteor.    

It replaces Blaze with Mithril, sets up basic Mithril routing and creates a shared functions helper file.

Bootstrap is also included by default in the client/styles folder. 

I have also included a demonstration of user sign-in/sign-up using Meteors accounts-password package,
as well as a demonstration of mapping results returned from the local MongoDB and from an external API.

The result mapping route only becomes available once you are signed in/up. 

The following seed user account is also automatically created for you when you run meteor via the seeder.js file in the server folder.
    username: "test",
    email: "test@example.com",
    password: "password"


