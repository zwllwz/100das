(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var CommentBox = React.createClass({
  displayName: "CommentBox",

  loadCommentsFromServer: function loadCommentsFromServer() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: (function (data) {
        this.setState({ data: data });
      }).bind(this),
      error: (function (xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }).bind(this)
    });
  },
  getInitialState: function getInitialState() {
    return { data: [] };
  },
  componentDidMount: function componentDidMount() {
    this.loadCommentsFromServer();
    setInterval(this.loadCommentsFromServer, this.props.pollInterval);
  },
  render: function render() {
    return React.createElement(
      "div",
      { className: "CommentBox" },
      React.createElement(
        "h1",
        null,
        "CommentBox"
      ),
      React.createElement(
        CommentList,
        { data: this.state.data },
        "hello"
      ),
      React.createElement(CommentForm, null)
    );
  }
});

var CommentList = React.createClass({
  displayName: "CommentList",

  render: function render() {
    var commentNodes = this.props.data.map(function (comment) {
      return React.createElement(
        Comment,
        { author: comment.author },
        comment.text
      );
    });

    return React.createElement(
      "div",
      { className: "commentList" },
      commentNodes
    );
  }
});

var CommentForm = React.createClass({
  displayName: "CommentForm",

  render: function render() {
    return React.createElement(
      "div",
      { className: "commentForm" },
      React.createElement("input", { type: "text", placeholder: "Your name" }),
      React.createElement("input", { type: "text", placeholder: "Say something..." }),
      React.createElement("input", { type: "submit", value: "Post" })
    );
  }
});

var Comment = React.createClass({
  displayName: "Comment",

  render: function render() {
    return React.createElement(
      "div",
      { className: "comment" },
      React.createElement(
        "h2",
        { className: "commentAuthor" },
        this.props.author
      ),
      this.props.children
    );
  }
});

React.render(React.createElement(CommentBox, { url: "/dist/json/data.json", pollInterval: 2000 }), document.getElementById('content'));

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvbGFyYXpodS9Eb2N1bWVudHMvMTAwZGFzL3NyYy9qc3gvYXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNFQSxJQUFJLFVBQVUsR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDOzs7QUFDakMsd0JBQXNCLEVBQUUsa0NBQVk7QUFDbEMsS0FBQyxDQUFDLElBQUksQ0FBQztBQUNMLFNBQUcsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUc7QUFDbkIsY0FBUSxFQUFFLE1BQU07QUFDaEIsV0FBSyxFQUFFLEtBQUs7QUFDWixhQUFPLEVBQUUsQ0FBQSxVQUFVLElBQUksRUFBRTtBQUN2QixZQUFJLENBQUMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFFLElBQUksRUFBQyxDQUFDLENBQUM7T0FDN0IsQ0FBQSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7QUFDWixXQUFLLEVBQUUsQ0FBQSxVQUFTLEdBQUcsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFO0FBQ2hDLGVBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsTUFBTSxFQUFFLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO09BQ3ZELENBQUEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO0tBQ2IsQ0FBQyxDQUFDO0dBQ0o7QUFDRCxpQkFBZSxFQUFFLDJCQUFZO0FBQzNCLFdBQU8sRUFBQyxJQUFJLEVBQUUsRUFBRSxFQUFDLENBQUE7R0FDbEI7QUFDRCxtQkFBaUIsRUFBRSw2QkFBWTtBQUM3QixRQUFJLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztBQUM5QixlQUFXLENBQUMsSUFBSSxDQUFDLHNCQUFzQixFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUM7R0FDbkU7QUFDRCxRQUFNLEVBQUUsa0JBQVk7QUFDbEIsV0FDRTs7UUFBSyxTQUFTLEVBQUMsWUFBWTtNQUN6Qjs7OztPQUFtQjtNQUNuQjtBQUFDLG1CQUFXO1VBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxBQUFDOztPQUVyQjtNQUNkLG9CQUFDLFdBQVcsT0FBZTtLQUN2QixDQUNOO0dBQ0g7Q0FDRixDQUFDLENBQUM7O0FBRUgsSUFBSSxXQUFXLEdBQUcsS0FBSyxDQUFDLFdBQVcsQ0FBQzs7O0FBQ2xDLFFBQU0sRUFBRSxrQkFBWTtBQUNsQixRQUFJLFlBQVksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxPQUFPLEVBQUU7QUFDeEQsYUFDRTtBQUFDLGVBQU87VUFBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLE1BQU0sQUFBQztRQUM3QixPQUFPLENBQUMsSUFBSTtPQUNMLENBQ1Y7S0FDSCxDQUFDLENBQUM7O0FBRUgsV0FDRTs7UUFBSyxTQUFTLEVBQUMsYUFBYTtNQUN6QixZQUFZO0tBQ1QsQ0FDTjtHQUNIO0NBQ0YsQ0FBQyxDQUFDOztBQUVILElBQUksV0FBVyxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUM7OztBQUNsQyxRQUFNLEVBQUUsa0JBQVk7QUFDbEIsV0FDRTs7UUFBSyxTQUFTLEVBQUMsYUFBYTtNQUMxQiwrQkFBTyxJQUFJLEVBQUMsTUFBTSxFQUFDLFdBQVcsRUFBQyxXQUFXLEdBQUc7TUFDN0MsK0JBQU8sSUFBSSxFQUFDLE1BQU0sRUFBQyxXQUFXLEVBQUMsa0JBQWtCLEdBQUc7TUFDcEQsK0JBQU8sSUFBSSxFQUFDLFFBQVEsRUFBQyxLQUFLLEVBQUMsTUFBTSxHQUFFO0tBQy9CLENBQ047R0FDSDtDQUNGLENBQUMsQ0FBQzs7QUFHSCxJQUFJLE9BQU8sR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDOzs7QUFDOUIsUUFBTSxFQUFFLGtCQUFZO0FBQ2xCLFdBQ0U7O1FBQUssU0FBUyxFQUFDLFNBQVM7TUFDdEI7O1VBQUksU0FBUyxFQUFDLGVBQWU7UUFDMUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNO09BQ2Y7TUFDSixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVE7S0FDaEIsQ0FDTjtHQUNIO0NBQ0YsQ0FBQyxDQUFDOztBQUdILEtBQUssQ0FBQyxNQUFNLENBQ1Ysb0JBQUMsVUFBVSxJQUFDLEdBQUcsRUFBQyxzQkFBc0IsRUFBQyxZQUFZLEVBQUUsSUFBSSxBQUFDLEdBQWMsRUFDeEUsUUFBUSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FDbkMsQ0FBQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJcblxudmFyIENvbW1lbnRCb3ggPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIGxvYWRDb21tZW50c0Zyb21TZXJ2ZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAkLmFqYXgoe1xuICAgICAgdXJsOiB0aGlzLnByb3BzLnVybCxcbiAgICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgICBjYWNoZTogZmFsc2UsXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtkYXRhOiBkYXRhfSk7XG4gICAgICB9LmJpbmQodGhpcyksXG4gICAgICBlcnJvcjogZnVuY3Rpb24oeGhyLCBzdGF0dXMsIGVycikge1xuICAgICAgICBjb25zb2xlLmVycm9yKHRoaXMucHJvcHMudXJsLCBzdGF0dXMsIGVyci50b1N0cmluZygpKTtcbiAgICAgIH0uYmluZCh0aGlzKVxuICAgIH0pO1xuICB9LFxuICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4ge2RhdGE6IFtdfVxuICB9LFxuICBjb21wb25lbnREaWRNb3VudDogZnVuY3Rpb24gKCkge1xuICAgIHRoaXMubG9hZENvbW1lbnRzRnJvbVNlcnZlcigpO1xuICAgIHNldEludGVydmFsKHRoaXMubG9hZENvbW1lbnRzRnJvbVNlcnZlciwgdGhpcy5wcm9wcy5wb2xsSW50ZXJ2YWwpO1xuICB9LFxuICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJDb21tZW50Qm94XCI+XG4gICAgICAgIDxoMT5Db21tZW50Qm94PC9oMT5cbiAgICAgICAgPENvbW1lbnRMaXN0IGRhdGE9e3RoaXMuc3RhdGUuZGF0YX0+XG4gICAgICAgICAgaGVsbG9cbiAgICAgICAgPC9Db21tZW50TGlzdD5cbiAgICAgICAgPENvbW1lbnRGb3JtPjwvQ29tbWVudEZvcm0+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59KTtcblxudmFyIENvbW1lbnRMaXN0ID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgY29tbWVudE5vZGVzID0gdGhpcy5wcm9wcy5kYXRhLm1hcChmdW5jdGlvbiAoY29tbWVudCkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPENvbW1lbnQgYXV0aG9yPXtjb21tZW50LmF1dGhvcn0+XG4gICAgICAgICAge2NvbW1lbnQudGV4dH1cbiAgICAgICAgPC9Db21tZW50PlxuICAgICAgKTtcbiAgICB9KTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbW1lbnRMaXN0XCI+XG4gICAgICAgIHtjb21tZW50Tm9kZXN9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59KTtcblxudmFyIENvbW1lbnRGb3JtID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21tZW50Rm9ybVwiPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIllvdXIgbmFtZVwiIC8+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiU2F5IHNvbWV0aGluZy4uLlwiIC8+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJQb3N0XCIvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufSk7XG5cblxudmFyIENvbW1lbnQgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIHJlbmRlcjogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbW1lbnRcIj5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cImNvbW1lbnRBdXRob3JcIj5cbiAgICAgICAgICB7dGhpcy5wcm9wcy5hdXRob3J9XG4gICAgICAgIDwvaDI+XG4gICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufSk7XG5cblxuUmVhY3QucmVuZGVyKFxuICA8Q29tbWVudEJveCB1cmw9XCIvZGlzdC9qc29uL2RhdGEuanNvblwiIHBvbGxJbnRlcnZhbD17MjAwMH0+PC9Db21tZW50Qm94PixcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKVxuKTsiXX0=
