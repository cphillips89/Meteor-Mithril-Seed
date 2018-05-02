import m from 'Mithril'
import { auth } from '/client/auth.js';
import { about } from '/client/about.js';
import { results } from '/client/results.js';
import { contact } from '/client/contact.js';
import { menu } from '/client/menu.js';
import { home } from '/client/home.js';

class Page {
    constructor(content) {
        this.view = function (vnode) {
            return [m(menu), m(".container", m(content))];
        };
    }
}

//render the app
if (Meteor.isClient) {
    Meteor.startup(function() {
        const root = document.body;
        Home = new Page(home);
        About = new Page(about);
        Contact = new Page(contact);
        Auth = new Page(auth);
        Results = new Page(results);
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
