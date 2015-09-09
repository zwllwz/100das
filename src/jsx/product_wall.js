// For performance tuning
// var PureRenderMixin = React.addons.PureRenderMixin;

var { Link } = ReactRouter;

var ProductSquare = React.createClass({
  // mixins: [PureRenderMixin],

  render: function () {
    var data = this.props.data;
    if (data.image_keys != undefined) {
      var img_url = "/static/images/" + data.image_keys[0] + ".png";
      console.log(img_url);
      return (
        <figure className="productSquare">
          <Link to="products" params={{product_id: data._id.$oid}}>
            <img src={img_url} alt="Ooops, Image Not Found."></img>
            <figcaption className="productTitle">{data.title}</figcaption>
            <div className="productPrice">¥{data.price}</div>
          </Link>
        </figure>
      );
    } else {
      // Skip product if image url is not set.
      console.log("Skip product " + data._id.$oid + " because no image url found.");
      return false;
    }
  }
});

var ProductColumn = React.createClass({
  render: function () {
    var squares = this.props.column.map(function (product) {
      console.log(product);
      return (
        <ProductSquare key={product._id.$oid} data={product}>
        </ProductSquare>
      );
    });
    return (
      <div className="productColumn">
        {squares}
      </div>
    );
  }
});

var ProductWall = React.createClass({
  getInitialState: function() {
    var columns = [];
    for (var i = 0; i < this.props.num_columns; ++i) {
      columns.push([]);
    }
    return {
      // All products should be here.
      products: [],

      // Products data for one column.
      columns: columns,
    };
  },

  componentDidMount: function () {
    console.log(this.props);
    var url = this.props.url;
    if (typeof url === 'undefined') {
      url = '/api/products/page/0';
    }
    
    if (this.props.index_key == 'category') {
      url = '/api/products/category/' + this.props.index_value + '/page/0';
    }

    $.ajax({
      url: url,
      dataType: 'json',
      cache: false,
      success: function (data) {
        this.appendProducts(data);
      }.bind(this),
      error: function (xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },

  appendProducts: function (products) {
    var total = this.state.products.length + products.length;
    var col = 0;

    // Never update this.state directly, as documented by ReactJS.
    // Shallow copy enough ? 
    var state_columns = this.state.columns;
    var state_products = this.state.products;

    var wall = this;
    products.forEach(function (product) {
      // Always add to product.
      state_products.push(product);

      // Swith to next column if this column is full.
      if (this.state.columns[col].length >= total / this.props.num_columns) {
        ++col;
      }

      // Append to column.
      state_columns[col].push(product);
    }.bind(this));

    // console.log(state_columns);

    this.setState({
      products: state_products,
      columns: state_columns,
    });
  },

  render: function () {
    var columns = this.state.columns.map(function (column, index) {
      var column_key = 'product_column_' + index;
      return (
        <ProductColumn key={column_key} column={column}>
        </ProductColumn>
      );
    });
    return (
      <div className="productWall">
        {columns}
      </div>
    );
  }
});

export { ProductWall } ;

