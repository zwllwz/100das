React.render(
  React.createElement("h1", null, "Hello, world!"),
  document.getElementById('example')
);

// var Hello = React.createClass({displayName: 'Hello',
//     render: function() {
//         return React.createElement("div", null, "Hello ", this.props.name);
//     }
// });
 
// React.render(
//     React.createElement(Hello, {name: "World"}),
//     document.getElementById('container')
// );

// var Hello = React.createClass({
//     render: function() {
//         return <div>Hello {this.props.name}</div>;
//     }
// });
 
// React.render(<Hello name="World" />, document.getElementById('container'));
