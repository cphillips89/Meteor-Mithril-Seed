import m from 'Mithril'
menu = {
    controller: function(){
        var ctrl = this;
		
    },
    view: function(ctrl){
        // setTimeout(function(){
        //     m.redraw(true);
        // }, 0)
        return [
	m('div.navbar.navbar-default.navbar-static-top', [
    m('.container',[
    m('.navbar-collapse.collapse#navbar-main', [    
    m('ul.nav.navbar-nav', {role: "navigation"}, [
        m('a.navbar-brand', 'Meteor-Mithril'),
		nav("Home",  "/"),
		nav("About",  "/about"),
		nav("Contact",  "/contact"),
		Meteor.user() ? nav("Results",  "/results") : ''
	]),
	[m("ul.nav.navbar-nav.navbar-right[id='login-buttons']", [
			Meteor.user() ? logout('Logout', '/') : nav("Sign in",  "/auth")
	])]])])])]

	function btn(name, route){
		var isCurrent = (m.route.get() === route);
		var click = function(){ m.route.set(route); };
		return m("button"+
		(isCurrent ? ".btn.btn-default.navbar-btn.active" : ".btn.btn-default.navbar-btn"), 
		{onclick: click, type: 'button'}, name);
	}
	function nav(name, route){
		var isCurrent = (m.route.get() === route);
		var click = function(){ m.route.set(route); };
		return m("li"+
		(isCurrent ? ".active" : ""), 
		{onclick: click},[ m('a.Pointer', name)]);
	}
	function logout(name, route){
	    var x1 = function(){Meteor.logout(); window.location.reload()};
	    return m('li', [m("a.Pointer", {onclick: x1}, name)]);
	}
    }
    
    
}