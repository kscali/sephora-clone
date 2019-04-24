import React from 'react';
import ProductIndexItem from './product_index_item';
import AllProducts from './allproducts';


class ProductsIndex extends React.Component {
  constructor(props) {
    super(props)
    
   }

  componentDidMount() {
    this.props.fetchProducts(); 
  }

  render () {
    // let style = window.location.href.slice(24);
    let products = this.props.products;
    if (!products) return null; 
    return (
    <section className="products">
      <div className="container">
          <div className="sidenav">
            <ProductIndexItem />
          </div>
          <div className="main">
            <AllProducts products={products} />
          </div>
        </div>
       </section>
    )
  }

}

export default ProductsIndex; 

