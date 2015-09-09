(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var dataJson = [{ author: "Pete Hunt", text: "This is one comment" }, { author: "Jordan Walke", text: "This is *another* comment" }];

var CommentBox = React.createClass({
  displayName: "CommentBox",

  render: function render() {
    return React.createElement(
      "div",
      { className: "CommentBox" },
      React.createElement(
        "h1",
        null,
        "CommentBox"
      ),
      React.createElement(CommentList, { data: this.props.data }),
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
      "CommentForm"
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

React.render(React.createElement(CommentBox, { data: dataJson }), document.getElementById('content'));

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvbGFyYXpodS9Eb2N1bWVudHMvMTAwZGFzL3NyYy9qc3gvYXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQSxJQUFJLFFBQVEsR0FBRyxDQUNiLEVBQUMsTUFBTSxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUUscUJBQXFCLEVBQUMsRUFDbEQsRUFBQyxNQUFNLEVBQUUsY0FBYyxFQUFFLElBQUksRUFBRSwyQkFBMkIsRUFBQyxDQUM1RCxDQUFDOztBQUdGLElBQUksVUFBVSxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUM7OztBQUNqQyxRQUFNLEVBQUUsa0JBQVk7QUFDbEIsV0FDRTs7UUFBSyxTQUFTLEVBQUMsWUFBWTtNQUN6Qjs7OztPQUFtQjtNQUNuQixvQkFBQyxXQUFXLElBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxBQUFDLEdBQWU7TUFDbEQsb0JBQUMsV0FBVyxPQUFlO0tBQ3ZCLENBQ047R0FDSDtDQUNGLENBQUMsQ0FBQzs7QUFFSCxJQUFJLFdBQVcsR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDOzs7QUFDbEMsUUFBTSxFQUFFLGtCQUFZO0FBQ2xCLFFBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLE9BQU8sRUFBRTtBQUN4RCxhQUNFO0FBQUMsZUFBTztVQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsTUFBTSxBQUFDO1FBQzdCLE9BQU8sQ0FBQyxJQUFJO09BQ0wsQ0FDVjtLQUNILENBQUMsQ0FBQzs7QUFFSCxXQUNFOztRQUFLLFNBQVMsRUFBQyxhQUFhO01BQ3pCLFlBQVk7S0FDVCxDQUNOO0dBQ0g7Q0FDRixDQUFDLENBQUM7O0FBRUgsSUFBSSxXQUFXLEdBQUcsS0FBSyxDQUFDLFdBQVcsQ0FBQzs7O0FBQ2xDLFFBQU0sRUFBRSxrQkFBWTtBQUNsQixXQUNFOztRQUFLLFNBQVMsRUFBQyxhQUFhOztLQUV0QixDQUNOO0dBQ0g7Q0FDRixDQUFDLENBQUM7O0FBR0gsSUFBSSxPQUFPLEdBQUcsS0FBSyxDQUFDLFdBQVcsQ0FBQzs7O0FBQzlCLFFBQU0sRUFBRSxrQkFBWTtBQUNsQixXQUNFOztRQUFLLFNBQVMsRUFBQyxTQUFTO01BQ3RCOztVQUFJLFNBQVMsRUFBQyxlQUFlO1FBQzFCLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTTtPQUNmO01BQ0osSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRO0tBQ2hCLENBQ047R0FDSDtDQUNGLENBQUMsQ0FBQzs7QUFHSCxLQUFLLENBQUMsTUFBTSxDQUNWLG9CQUFDLFVBQVUsSUFBQyxJQUFJLEVBQUUsUUFBUSxBQUFDLEdBQUUsRUFDN0IsUUFBUSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FDbkMsQ0FBQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJ2YXIgZGF0YUpzb24gPSBbXG4gIHthdXRob3I6IFwiUGV0ZSBIdW50XCIsIHRleHQ6IFwiVGhpcyBpcyBvbmUgY29tbWVudFwifSxcbiAge2F1dGhvcjogXCJKb3JkYW4gV2Fsa2VcIiwgdGV4dDogXCJUaGlzIGlzICphbm90aGVyKiBjb21tZW50XCJ9XG5dO1xuXG5cbnZhciBDb21tZW50Qm94ID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJDb21tZW50Qm94XCI+XG4gICAgICAgIDxoMT5Db21tZW50Qm94PC9oMT5cbiAgICAgICAgPENvbW1lbnRMaXN0IGRhdGE9e3RoaXMucHJvcHMuZGF0YX0+PC9Db21tZW50TGlzdD5cbiAgICAgICAgPENvbW1lbnRGb3JtPjwvQ29tbWVudEZvcm0+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59KTtcblxudmFyIENvbW1lbnRMaXN0ID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgY29tbWVudE5vZGVzID0gdGhpcy5wcm9wcy5kYXRhLm1hcChmdW5jdGlvbiAoY29tbWVudCkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPENvbW1lbnQgYXV0aG9yPXtjb21tZW50LmF1dGhvcn0+XG4gICAgICAgICAge2NvbW1lbnQudGV4dH1cbiAgICAgICAgPC9Db21tZW50PlxuICAgICAgKTtcbiAgICB9KTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbW1lbnRMaXN0XCI+XG4gICAgICAgIHtjb21tZW50Tm9kZXN9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59KTtcblxudmFyIENvbW1lbnRGb3JtID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21tZW50Rm9ybVwiPlxuICAgICAgQ29tbWVudEZvcm1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn0pO1xuXG5cbnZhciBDb21tZW50ID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21tZW50XCI+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJjb21tZW50QXV0aG9yXCI+XG4gICAgICAgICAge3RoaXMucHJvcHMuYXV0aG9yfVxuICAgICAgICA8L2gyPlxuICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn0pO1xuXG5cblJlYWN0LnJlbmRlcihcbiAgPENvbW1lbnRCb3ggZGF0YT17ZGF0YUpzb259Lz4sXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jylcbik7Il19
