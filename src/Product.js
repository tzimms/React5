import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Product extends Component {
    render() {
        return (
            <div>
              <Link to="/"> Back to homepage </Link>
              {this.props.match.params.productNumber}
            </div>
        );
    }
}

export default Product;