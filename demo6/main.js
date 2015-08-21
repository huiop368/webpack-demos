var Router = require('react-router'); // or var Router = ReactRouter; in browsers
var React = require('react');

var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;


var App = React.createClass({
    render : function(){
        return (
            <div id="main">
                <ul clasName="header">
                    <li><Link to="app">Home</Link></li>
                    <li><Link to="list">List</Link></li>
                    <li><Link to="concat">Concat</Link></li>
                </ul>

                <div>
                    <RouteHandler />
                </div>
            </div>           
        );
    }
});

var Home = React.createClass({
    render : function(){
        return (
            <div>Home Page</div>    
        );
    }
});

var List = React.createClass({
    render : function(){
        return (
            <div>List Page</div>    
        );
    }
});

var Concat = React.createClass({
    render : function(){
        return (
            <div>Concat Page</div>    
        );
    }
});


var routes = (
  <Route name="app" path="/" handler={App}>
    <Route name="list" handler={List}/>
    <Route name="concat" handler={Concat}/>
    <DefaultRoute handler={Home}/>
  </Route>
);


Router.run(routes, Router.HistoryLocation, function (Handler) {
  React.render(<Handler/>, document.body);
});
