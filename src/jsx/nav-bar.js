var { Link } = ReactRouter;

var TopNavigationBar = React.createClass({
  render: function () {
    return (
      <nav className="topNavigationBar">
        <li><Link to="home">Home</Link></li>
        <li><Link to="signin">Sign in</Link></li>
        <li><Link to="forgot-password">Forgot Password</Link></li>
      </nav>
    );
  }
});


export { TopNavigationBar } ;