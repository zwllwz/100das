
// import React from 'react';
// import ReactRouter, { Route, RouteHandler, Link } from 'react-router';

// For now, keep React & ReactRouter serving from CDNJS.
var { DefaultRoute, Route, RouteHandler, Link } = ReactRouter;

import { ProductWall } from './product_wall.js'
import { AppHeader } from './app_header.js'
import { ProductMain } from './product.js'

var App = React.createClass({
  render: function () {
    return (
      <div className="app">
        <AppHeader/>
        <RouteHandler/>
        <AppFooter/>
      </div>
    );
  }
});

var AppFooter = React.createClass({
  render: function () {
    // No footer for now.
    return false;
  }
});

var SignedIn = React.createClass({
  render: function () {
    return (
      <div>
        <h2>Signed In</h2>
        <RouteHandler/>
      </div>
    );
  }
});

var Home = React.createClass({
  render: function () {
    return (
      <div className="home">
        <div className="homeBanner">
        </div>
        <div className="homeMainContainer">
          <ProductWall num_columns="3"/>
        </div>
      </div>
    );
  }
});

var SignedOut = React.createClass({
  render: function () {
    return (
      <div>
        <h2>Signed Out</h2>
        <RouteHandler/>
      </div>
    );
  }
});

var SignIn = React.createClass({
  componentDidMount: function () {
    console.log('SignIn DidMount');
  },
  componentWillUnmount: function () {
    console.log('SignIn componentWillUnmount');
  },
  render: function () {
    return (
      <h3>Please sign in.</h3>
    );
  }
});

var ForgotPassword = React.createClass({
  render: function () {
    return (
      <h3>Forgot your password?</h3>
    );
  }
});

// Routes for this app.
var routes = (
  <Route handler={App}>
    <DefaultRoute handler={Home}/>

    <Route handler={SignedOut}>
      <Route name="signin" handler={SignIn}/>
      <Route name="forgot-password" handler={ForgotPassword}/>
    </Route>
    <Route name="home" handler={Home}/>
    <Route name="products" path="products/:product_id" handler={ProductMain}/>
  </Route>
);

ReactRouter.run(routes, ReactRouter.HistoryLocation, function (Handler) {
  React.render(<Handler/>, document.getElementById('content'));
});