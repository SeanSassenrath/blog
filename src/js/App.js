var { Router, Route } = require('react-router');

var HomeNotLoggedIn = React.createClass({
  render: function() {
    return(
      <div>
        <LoggedOutNav />
        <BlogDisplay />
        <h3>Testing stuff</h3>
      </div>
    )
  }
})

var LoggedOutNav = React.createClass({
  render: function(){
    return(
      <nav className="top debug">
        <div className="nav-container">
          <h4 className="debug">Seans Blog</h4>
          <div className="right-nav-container debug">
            <a href="1">Archive</a>
            <a href="1">About</a>
            <a href="1">Subscribe</a>
          </div>
        </div>
      </nav>
    )
  }
})

// var LoggedInNav = React.createClass({

// })

var BlogDisplay = React.createClass({
  getInitialState: function() {
    return {
      title: "Testing 123",
      content: "This is a test to see if react is working"
    }
  },
  render: function() {
    return(
      <div>
        <h1>{this.state.title}</h1>
        <p>{this.state.content}</p>
        <h5>Another test</h5>
        <h5>Another thing</h5>

      </div>
    )
  }
})

React.render((
  <Router>
    <Route path="/" component={HomeNotLoggedIn}/>
  </Router>
), document.getElementById('app'));

// React.render(<HomeNotLoggedIn />, document.getElementById('app'))
// var routes = (
//   <Route handler={HomeNotLoggedIn}>
//   </Route>
// );

// Router.run(routes, function(Handler) {
//   React.render(<Handler />, document.getElementById('app'));
// });