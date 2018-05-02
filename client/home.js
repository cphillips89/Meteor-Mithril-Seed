import m from 'Mithril'
export class home {
    constructor(){
        
    }
    view (){
        return m('.jumbotron', [m('h2.text-center', 'The power and speed of Mithril, brought to the world of Meteor')])
    }
}