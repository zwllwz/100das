var CommentBox = React.createClass({displayName: "CommentBox",
  render: function () {
    return (
      React.createElement("div", {className: "commentBox"}, 
        "Hello, world! I am a CommentBox.", 
        React.createElement("h1", null, "commnets"), 
        React.createElement(CommentList, null), 
        React.createElement(CommentForm, null)
      )
    );
  }
});

var CommentList = React.createClass({displayName: "CommentList",
  render: function () {
    return (
      React.createElement("div", {className: "commentList"}, 
        "hello I am the commentList."
      )
    );
  }
});

var CommentForm = React.createClass({displayName: "CommentForm",
  render: function () {
    return (
      React.createElement("div", {className: "commnetForm"}, 
        "commnetForm."
      )
    );
  }
});

React.render(
  React.createElement(CommentBox, null),
  document.getElementById('content')
);