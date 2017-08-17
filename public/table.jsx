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
    this.props.products.forEach(product => {

      if(product.name.indexOf(this.props.filterText) === -1 || (!product.stocked) && this.props.inStockOnly) {
        return;
      }
      if(product.category != lastProductCategory) {
        row.push(<ProductCategoryRow category={product.category} key={product.category}/>)
      }
      row.push(<ProductRow product={product} key={product.name}/>)
      lastProductCategory = product.category;
    })
    return(
      <table>
        <thead>
         <tr>
          <th>Tên</th>
          <th>Giá</th>
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
  constructor(props) {
    super(props);
    this.handleInput = this.handleInput.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
  }
  
  handleInput(e) {
    this.props.onFilterChange(e.target.value);
  }

  handleCheck(e) {
    this.props.onCheckChange(e.target.checked);
  }

  render() {
    return(
      <form>
        <input type="text" placeholder='Search' value={this.props.filterText} onChange={this.handleInput}/>
        <p>
        <input type="checkbox"  checked={this.props.inStockOnly} onChange={this.handleCheck}/>
        {' '}
        Sản phẩm trong kho
        </p>
      </form>
    )
  }
}

class FilterableProductTable extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
      filterText: 'ball',
      inStockOnly: false
    }
    this.onFilterChange = this.onFilterChange.bind(this);
    this.onCheckChange = this.onCheckChange.bind(this);
  }
  onFilterChange(filterText) {
    this.setState({filterText: filterText});
  }
  onCheckChange(inStockOnly) {
    this.setState({inStockOnly: inStockOnly});
  }
  render() {
    return(
      <div>
        <SearchBar filterText={this.state.filterText} inStockOnly={this.state.inStockOnly} onFilterChange={this.onFilterChange} onCheckChange={this.onCheckChange}/>
        <ProductTable products={this.props.products} filterText={this.state.filterText} inStockOnly={this.state.inStockOnly}/>
      </div>
    )
  }
}

var PRODUCTS = [
  {category: 'Đồ thể thao', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Đồ thể thao', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Đồ thể thao', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Đồ điện tử', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Đồ điện tử', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Đồ điện tử', price: '$199.99', stocked: true, name: 'Nexus 7'}
];

ReactDOM.render(<FilterableProductTable products={PRODUCTS}/>,document.getElementById('root'));
