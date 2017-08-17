import React from 'react'
import ReactDOM from 'react-dom'

class ProductCategoryRow extends React.Component {

  render() {
    return(
      <tr><th colSpan='2'>{this.props.category}</th></tr>
    )
  }
}

class ProductRow extends React.Component {

  render() {
    var name = this.props.product.stocked ? this.props.product.name :
    <span style={{color: 'red'}}>{this.props.product.name}</span>;
    return(
      <tr>
        <td>{name}</td>
        <td>{this.props.product.price}</td>
      </tr>
    );
  }
}

class ProductTable extends React.Component {

  render() {
    var row = [];
    var lastProductCategory = null;
    this.props.product.forEach(product => {
      if(product.category != lastProductCategory) {
        row.push(<ProductCategoryRow category={product.category}/>)
      }
      row.push(<ProductRow product={product}/>)
      lastProductCategory = product.category;
    })
    return(
      <table>
        <thead>
         <tr>
          <th>Name</th>
          <th>Price</th>
         </tr>
        </thead>
        <tbody>
          {row}
        </tbody>
      </table>
    )
  }
}

class SearchBar extends React.Component {
  render() {
    return(
      <form>
        <input type="text" placeholder='Search'/>
        <p>
        <input type="checkbox"/>
        {' '}
        Only show product in stock
        </p>
      </form>
    )
  }
}

class FilterableProductTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      inStockOnly: false
    }
  }
  render() {
    return(
      <div>
        <SearchBar filterText={this.state.filterText} inStockOnly={this.state.inStockOnly} />
        <ProductTable product={this.props.product}/>
      </div>
    )
  }
}

var PRODUCTS = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];

ReactDOM.render(<FilterableProductTable product={PRODUCTS}/>,document.getElementById('root'));
