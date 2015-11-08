(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/Users/Sean/Dropbox/Dev/blog/seansassenrath.io_blog_client/src/js/App.js":[function(require,module,exports){
// var App = React.createClass({
//   getInitialState: function() {
//     return {
//       title: "Testing 123",
//       content: "This is a test to see if react is working"
//     }
//   },
//   render: function() {
//     return(
//       <div>
//         <h1>{this.state.title}</h1>
//         <p>{this.state.content}</p>
//       </div>
//     )
//   }
// })

// var Router = require('react-router').Router
// var Route = require('react-router').Route
// var Link = require('react-router').Link

var HomeNotLoggedIn = React.createClass({displayName: "HomeNotLoggedIn",
  render: function() {
    return(
      React.createElement("div", null, 
        React.createElement(LoggedOutNav, null), 
        React.createElement(BlogDisplay, null)
      )
    )
  }
})

var LoggedOutNav = React.createClass({displayName: "LoggedOutNav",
  render: function(){
    return(
      React.createElement("nav", {className: "top debug"}, 
        React.createElement("div", {className: "nav-container"}, 
          React.createElement("h4", {className: "debug"}, "Seans Blog"), 
          React.createElement("div", {className: "right-nav-container debug"}, 
            React.createElement("a", {href: "1"}, "Archive"), 
            React.createElement("a", {href: "1"}, "About"), 
            React.createElement("a", {href: "1"}, "Subscribe")
          )
        )
      )
    )
  }
})

// var LoggedInNav = React.createClass({

// })

var BlogDisplay = React.createClass({displayName: "BlogDisplay",
  getInitialState: function() {
    return {
      title: "Testing 123",
      content: "This is a test to see if react is working"
    }
  },
  render: function() {
    return(
      React.createElement("div", null, 
        React.createElement("h1", null, this.state.title), 
        React.createElement("p", null, this.state.content), 
        React.createElement("h5", null, "Another test")
      )
    )
  }
})

React.render(React.createElement(HomeNotLoggedIn, null), document.getElementById('app'))
// var routes = (
//   <Route handler={HomeNotLoggedIn}>
//   </Route>
// );

// Router.run(routes, function(Handler) {
//   React.render(<Handler />, document.getElementById('app'));
// });

},{}]},{},["/Users/Sean/Dropbox/Dev/blog/seansassenrath.io_blog_client/src/js/App.js"])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvU2Vhbi9Ecm9wYm94L0Rldi9ibG9nL3NlYW5zYXNzZW5yYXRoLmlvX2Jsb2dfY2xpZW50L3NyYy9qcy9BcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQSxnQ0FBZ0M7QUFDaEMsa0NBQWtDO0FBQ2xDLGVBQWU7QUFDZiw4QkFBOEI7QUFDOUIsNkRBQTZEO0FBQzdELFFBQVE7QUFDUixPQUFPO0FBQ1AseUJBQXlCO0FBQ3pCLGNBQWM7QUFDZCxjQUFjO0FBQ2Qsc0NBQXNDO0FBQ3RDLHNDQUFzQztBQUN0QyxlQUFlO0FBQ2YsUUFBUTtBQUNSLE1BQU07QUFDTixLQUFLOztBQUVMLDhDQUE4QztBQUM5Qyw0Q0FBNEM7QUFDNUMsMENBQTBDOztBQUUxQyxJQUFJLHFDQUFxQywrQkFBQTtFQUN2QyxNQUFNLEVBQUUsV0FBVztJQUNqQjtNQUNFLG9CQUFBLEtBQUksRUFBQSxJQUFDLEVBQUE7UUFDSCxvQkFBQyxZQUFZLEVBQUEsSUFBQSxDQUFHLENBQUEsRUFBQTtRQUNoQixvQkFBQyxXQUFXLEVBQUEsSUFBQSxDQUFHLENBQUE7TUFDWCxDQUFBO0tBQ1A7R0FDRjtBQUNILENBQUMsQ0FBQzs7QUFFRixJQUFJLGtDQUFrQyw0QkFBQTtFQUNwQyxNQUFNLEVBQUUsVUFBVTtJQUNoQjtNQUNFLG9CQUFBLEtBQUksRUFBQSxDQUFBLENBQUMsU0FBQSxFQUFTLENBQUMsV0FBWSxDQUFBLEVBQUE7UUFDekIsb0JBQUEsS0FBSSxFQUFBLENBQUEsQ0FBQyxTQUFBLEVBQVMsQ0FBQyxlQUFnQixDQUFBLEVBQUE7VUFDN0Isb0JBQUEsSUFBRyxFQUFBLENBQUEsQ0FBQyxTQUFBLEVBQVMsQ0FBQyxPQUFRLENBQUEsRUFBQSxZQUFlLENBQUEsRUFBQTtVQUNyQyxvQkFBQSxLQUFJLEVBQUEsQ0FBQSxDQUFDLFNBQUEsRUFBUyxDQUFDLDJCQUE0QixDQUFBLEVBQUE7WUFDekMsb0JBQUEsR0FBRSxFQUFBLENBQUEsQ0FBQyxJQUFBLEVBQUksQ0FBQyxHQUFJLENBQUEsRUFBQSxTQUFXLENBQUEsRUFBQTtZQUN2QixvQkFBQSxHQUFFLEVBQUEsQ0FBQSxDQUFDLElBQUEsRUFBSSxDQUFDLEdBQUksQ0FBQSxFQUFBLE9BQVMsQ0FBQSxFQUFBO1lBQ3JCLG9CQUFBLEdBQUUsRUFBQSxDQUFBLENBQUMsSUFBQSxFQUFJLENBQUMsR0FBSSxDQUFBLEVBQUEsV0FBYSxDQUFBO1VBQ3JCLENBQUE7UUFDRixDQUFBO01BQ0YsQ0FBQTtLQUNQO0dBQ0Y7QUFDSCxDQUFDLENBQUM7O0FBRUYsd0NBQXdDOztBQUV4QyxLQUFLOztBQUVMLElBQUksaUNBQWlDLDJCQUFBO0VBQ25DLGVBQWUsRUFBRSxXQUFXO0lBQzFCLE9BQU87TUFDTCxLQUFLLEVBQUUsYUFBYTtNQUNwQixPQUFPLEVBQUUsMkNBQTJDO0tBQ3JEO0dBQ0Y7RUFDRCxNQUFNLEVBQUUsV0FBVztJQUNqQjtNQUNFLG9CQUFBLEtBQUksRUFBQSxJQUFDLEVBQUE7UUFDSCxvQkFBQSxJQUFHLEVBQUEsSUFBQyxFQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBVyxDQUFBLEVBQUE7UUFDM0Isb0JBQUEsR0FBRSxFQUFBLElBQUMsRUFBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQVksQ0FBQSxFQUFBO1FBQzNCLG9CQUFBLElBQUcsRUFBQSxJQUFDLEVBQUEsY0FBaUIsQ0FBQTtNQUNqQixDQUFBO0tBQ1A7R0FDRjtBQUNILENBQUMsQ0FBQzs7QUFFRixLQUFLLENBQUMsTUFBTSxDQUFDLG9CQUFDLGVBQWUsRUFBQSxJQUFBLENBQUcsQ0FBQSxFQUFFLFFBQVEsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDakUsaUJBQWlCO0FBQ2pCLHNDQUFzQztBQUN0QyxhQUFhO0FBQ2IsS0FBSzs7QUFFTCx5Q0FBeUM7QUFDekMsK0RBQStEO0FBQy9EIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8vIHZhciBBcHAgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4vLyAgIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24oKSB7XG4vLyAgICAgcmV0dXJuIHtcbi8vICAgICAgIHRpdGxlOiBcIlRlc3RpbmcgMTIzXCIsXG4vLyAgICAgICBjb250ZW50OiBcIlRoaXMgaXMgYSB0ZXN0IHRvIHNlZSBpZiByZWFjdCBpcyB3b3JraW5nXCJcbi8vICAgICB9XG4vLyAgIH0sXG4vLyAgIHJlbmRlcjogZnVuY3Rpb24oKSB7XG4vLyAgICAgcmV0dXJuKFxuLy8gICAgICAgPGRpdj5cbi8vICAgICAgICAgPGgxPnt0aGlzLnN0YXRlLnRpdGxlfTwvaDE+XG4vLyAgICAgICAgIDxwPnt0aGlzLnN0YXRlLmNvbnRlbnR9PC9wPlxuLy8gICAgICAgPC9kaXY+XG4vLyAgICAgKVxuLy8gICB9XG4vLyB9KVxuXG4vLyB2YXIgUm91dGVyID0gcmVxdWlyZSgncmVhY3Qtcm91dGVyJykuUm91dGVyXG4vLyB2YXIgUm91dGUgPSByZXF1aXJlKCdyZWFjdC1yb3V0ZXInKS5Sb3V0ZVxuLy8gdmFyIExpbmsgPSByZXF1aXJlKCdyZWFjdC1yb3V0ZXInKS5MaW5rXG5cbnZhciBIb21lTm90TG9nZ2VkSW4gPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIHJlbmRlcjogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuKFxuICAgICAgPGRpdj5cbiAgICAgICAgPExvZ2dlZE91dE5hdiAvPlxuICAgICAgICA8QmxvZ0Rpc3BsYXkgLz5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufSlcblxudmFyIExvZ2dlZE91dE5hdiA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgcmVuZGVyOiBmdW5jdGlvbigpe1xuICAgIHJldHVybihcbiAgICAgIDxuYXYgY2xhc3NOYW1lPVwidG9wIGRlYnVnXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2LWNvbnRhaW5lclwiPlxuICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJkZWJ1Z1wiPlNlYW5zIEJsb2c8L2g0PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmlnaHQtbmF2LWNvbnRhaW5lciBkZWJ1Z1wiPlxuICAgICAgICAgICAgPGEgaHJlZj1cIjFcIj5BcmNoaXZlPC9hPlxuICAgICAgICAgICAgPGEgaHJlZj1cIjFcIj5BYm91dDwvYT5cbiAgICAgICAgICAgIDxhIGhyZWY9XCIxXCI+U3Vic2NyaWJlPC9hPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbmF2PlxuICAgIClcbiAgfVxufSlcblxuLy8gdmFyIExvZ2dlZEluTmF2ID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXG4vLyB9KVxuXG52YXIgQmxvZ0Rpc3BsYXkgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRpdGxlOiBcIlRlc3RpbmcgMTIzXCIsXG4gICAgICBjb250ZW50OiBcIlRoaXMgaXMgYSB0ZXN0IHRvIHNlZSBpZiByZWFjdCBpcyB3b3JraW5nXCJcbiAgICB9XG4gIH0sXG4gIHJlbmRlcjogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGgxPnt0aGlzLnN0YXRlLnRpdGxlfTwvaDE+XG4gICAgICAgIDxwPnt0aGlzLnN0YXRlLmNvbnRlbnR9PC9wPlxuICAgICAgICA8aDU+QW5vdGhlciB0ZXN0PC9oNT5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufSlcblxuUmVhY3QucmVuZGVyKDxIb21lTm90TG9nZ2VkSW4gLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKSlcbi8vIHZhciByb3V0ZXMgPSAoXG4vLyAgIDxSb3V0ZSBoYW5kbGVyPXtIb21lTm90TG9nZ2VkSW59PlxuLy8gICA8L1JvdXRlPlxuLy8gKTtcblxuLy8gUm91dGVyLnJ1bihyb3V0ZXMsIGZ1bmN0aW9uKEhhbmRsZXIpIHtcbi8vICAgUmVhY3QucmVuZGVyKDxIYW5kbGVyIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJykpO1xuLy8gfSk7Il19
