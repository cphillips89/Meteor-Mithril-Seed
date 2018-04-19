import m from 'Mithril'
import { auth } from '/client/auth.js'
//meteor helper which replaces Blaze with Mithril
var reactive = function(controller) {
    return function() {
        var instance = {};

        var computation = Deps.autorun(function() {
            m.startComputation()
            controller.call(instance)
            m.endComputation()
        });

        instance.onunload = function() {
            computation.stop();
        };

        return instance;
    };
};


//App view model
// App = {};
// App.view = () => [];

class Page {
    constructor(content) {
        this.view = function (vnode) {
            return [m(menu), m(".container", m(content))];
        };
    }
}

//controller as well as global routing declarations.
// App.controller = reactive(function() {
//         var ctrl = this;

//         Home = new Page(home);
//         About = new Page(about);
//         Contact = new Page(contact);
//         Auth = new Page(auth);
//         Results = new Page(results);
//         m.route.mode = "pathname";
        
//         m.route(document.body, "/", {
//     	    "/": Home,
//     	    "/about": About,
//     	    "/contact": Contact,
//     	    "/auth": Auth,
//     	    "/results": Results
// });  

// })

//render the app
if (Meteor.isClient) {
    Meteor.startup(function() {
        const root = document.body;
        // m.render(root, App)
        Home = new Page(home);
        About = new Page(about);
        Contact = new Page(contact);
        Auth = new Page(auth);
        Results = new Page(results);
        //m.route.mode = "pathname";
        m.route.prefix("")
        
        m.route(root, "/", {
    	    "/": Home,
    	    "/about": About,
    	    "/contact": Contact,
    	    "/auth": Auth,
    	    "/results": Results
        });  
    })
}
