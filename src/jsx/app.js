
var { DefaultRoute, Route, RouteHandler, Link } = ReactRouter;
var CommentBox = React.createClass({
  loadCommentsFromServer: function () {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function (data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  handleCommentSubmit: function(comment) {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      type: 'POST',
      data: comment,
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  getInitialState: function () {
    return {data: []}
  },
  componentDidMount: function () {
    this.loadCommentsFromServer();
    setInterval(this.loadCommentsFromServer, this.props.pollInterval);
  },
  render: function () {
    return (
      <div className="CommentBox">
        <h1>CommentBox</h1>
        <CommentList data={this.state.data}>
          hello
        </CommentList>
        <CommentForm onCommentSubmit={this.handleCommentSubmit}></CommentForm>
      </div>
    );
  }
});

var CommentList = React.createClass({
  render: function () {
    var commentNodes = this.props.data.map(function (comment) {
      return (
        <Comment author={comment.author}>
          {comment.text}
        </Comment>
      );
    });

    return (
      <div className="commentList">
        {commentNodes}
      </div>
    );
  }
});

var CommentForm = React.createClass({
  handleSubmit: function (event) {
    event.preventDefault();
    var author = React.findDOMNode(this.refs.author).value.trim();
    var text = React.findDOMNode(this.refs.text).value.trim();
    if (!text || !author) {
      return;
    }

    this.props.onCommentSubmit({author: author, text: text});
    React.findDOMNode(this.refs.author).value = '';
    React.findDOMNode(this.refs.text).value ='';
    return;
  }
  render: function () {
    return (
      <div className="commentForm">
        <input type="text" placeholder="Your name" />
        <input type="text" placeholder="Say something..." />
        <input type="submit" value="Post"/>
      </div>
    );
  }
});


var Comment = React.createClass({
  render: function () {
    return (
      <div className="comment">
        <h2 className="commentAuthor">
          {this.props.author}
        </h2>
        {this.props.children}
      </div>
    );
  }
});

var App = React.createClass({
  render: function () {
    return (
      <AppHeader></AppHeader>
      <RouteHandler></RouteHandler>
    );
  }
});

var AppHeader = React.createClass({
  render: function () {
    return (
      <div>Home</div>
      <div>comment</div>
    );
  }
});

var Home = React.createClass({
  render: function () {
    return (
      <h1>Home</h1>
    );
  }
})


var routes = (
  <Route handler={App} path="/">
    <DefaultRoute handler={Home} />
    <Route name="comment" handler={Comment} />
    
    <Redirect from="company" to="about" />
  </Route>
);

// React.render(
//   <CommentBox url="/dist/json/data.json" pollInterval={2000}></CommentBox>,
//   document.getElementById('content')
// );

Router.run(routes, Router.HistoryLocation, function (Handler) {
  React.render(<Handler/>, document.getElementById('content'));
});











