 Meteor.startup(function () {
    // code to run on server at startup
  });
//methods to call from the client
Meteor.methods({
//request to external api    
'ResultsExternal': function(){
      Future = Npm.require('fibers/future');
      let v = new Future();
      this.unblock();
      
      var res = HTTP.call( 'GET', 'http://jsonplaceholder.typicode.com/posts',
      function( err, res1 ) {
      if ( err ) {
        
        v.return(err);}
        else {
        
        v.return(res1);}

        });

      return v.wait();
}
})