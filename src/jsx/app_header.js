import { TopNavigationBar } from './nav-bar.js'

var AppHeader = React.createClass({
  render: function () {
    return (
      <header className="appHeader">
        <TopNavigationBar/>
      </header>
    );
  }
});


export { AppHeader } ;