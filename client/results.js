import m from 'Mithril'
export class results {
        constructor(){
            loadResults = false;
            results = {};
        }
        resultsExternalFetch(){
            Meteor.call('ResultsExternal', (error, response) => {

        if (error) { 

            console.log(error)

        } else if(response) {
            console.log(response)
            this.results = response.data;
            this.loadResults = true;
            m.redraw();
        }
        }); 
        }
        resultsFetch(){
            this.loadResults = true;
            this.results = Messages.find().fetch();
            console.log(this.results);   
            m.redraw();
        }
        view(){
            return m('.jumbotron', [m('h2', "Result mapping from a local mongo DB and from an External API")],
            [m('button.btn.btn-success', {onclick: () => { this.resultsFetch() }}, 'Load Results')],
            [m('button.btn.btn-warning', {onclick: () => { this.resultsExternalFetch() }}, 'Load External API Results')],
            [m('hr')],
            [m("ul", [
                this.loadResults ? this.results.map((res) => {
                    return m("li", (res.name||res.title) + ":  " + (res.text || res.body))
                }) : ''
            ])])
        }
}