var { Link } = ReactRouter;

var ProductMain = React.createClass({
  getInitialState: function() {
    return {
      data: null,
    };
  },

  componentDidMount: function () {
    var url = '/api/products/' + this.props.params.product_id;
    // console.log(url);
    $.ajax({
      url: url,
      dataType: 'json',
      cache: false,
      success: function (data) {
        this.setState({data: data});
      }.bind(this),
      error: function (xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },

  render: function () {
    var product = this.state.data;

    if (!product) {
      return false;
    }
    
    return (
      <main className="productMain">
        <div>{product.title}</div>
        <div>{product.categories}</div>
      </main>
    );
  }
});


export { ProductMain } ;