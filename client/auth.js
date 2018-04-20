import m from 'Mithril'
export class auth {
        constructor(vnode) {
			// vnode.state is undefined at this point
			this.signUp = false;
		}
		login(e) {
			console.log(e)
			if (this.signUp == true){
			if (e.target[1].value != e.target[2].value) return;	
			let auth = {
			  email: e.target[0].value,
			  password: e.target[1].value
			};
			console.log(auth);
			Accounts.createUser(auth, function(err) {
			  if (err)
				console.log(err);
			  else
				console.log('success!');
			});
			}
			else{
				let user = document.getElementById('username');
				let password = document.getElementById('password');
				Meteor.loginWithPassword(user.value, password.value, function(err) {
				  if (err)
					console.log(err);
				  else
					console.log('success!');
					m.route.set('/')
				});
			}
		}
    view (){
        return m('.jumbotron', [m('div', [m("section.signin", [ 
		m(".container.text-center", [
			m(".row", [
			    m(".col-md-3.offset-md-3.form-box"),
				m(".col-md-6.offset-md-3.form-box", [
					m(".row", [
						m(".col-md-12", [
							m("h2", this.signUp == true ? 'Sign up' : 'Sign in')
						])
					]),
						m(".form-group", [
							m("label[for='email']", ["Email Address ",m("span.required", "*")]),
							m("input.form-control[name='email'][placeholder='Email Address'][type='email'][id='username']")
						]),
						m(".form-group", [
							m("label[for='password']", ["Password ",m("span.required", "*")]),
							m("input.form-control[name='password'][placeholder='Password'][type='password'][id='password']")
						]),
						this.signUp == true ? [m(".form-group", [
							m("label[for='password']", ["Password Confirm ",m("span.required", "*")]),
							m("input.form-control[name='password'][placeholder='Password'][type='password'][id='password']")
						])] : '',
						m(".col-md-4", [
						m("button.btn.btn-primary.expand", {onclick: this.login, type: 'button'}, this.signUp == true ? "Sign up" : "Sign in"),
						]),
						/*
						m(".col-md-4", [
							m("a.Pointer", {onclick: function(){m.route('/forgot-password')}}, "Forgot Password?")
						]),  
						*/
						m(".col-md-6", [
							m("a.Pointer", {onclick: () => {this.signUp == true ? this.signUp = false : this.signUp = true}}, 
							this.signUp == true ? "Already have an account?" : "Don't have an account?")
						])
				])
			])
		])
	])])])
    }
}