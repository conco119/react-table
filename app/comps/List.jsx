import React from 'react'
import Input from './Input.jsx'
import Row from './Row.jsx'
import Table from './Table.js'

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listRow: [],
      name: '',
      age: '',
      address: '',
      isFormOpen: false
    };

  }

  handleDelete(index) {
    this.setState(prevState => {
      prevState.listRow.splice(index,1);
      return {listRow: prevState.listRow}
    })
  }

  handleAdd() {
    this.setState(prevState => {
      prevState.listRow.push({name: prevState.name,age: prevState.age,address: prevState.address});
      console.log(this.state.listRow);
      // return {listRow: prevState.listRow}
    }) ;
  }

  handleVisible() {
    this.setState(prevState => ({isFormOpen: !prevState.isFormOpen}) );
  }

  handleNameChange(value) {
    this.setState({name: value});
  }

  handleAgeChange(value) {
    this.setState({age: value});
  }

  handleAddressChange(value) {
    this.setState({address: value});
  }

  render() {

    return(
      <div>
        <button className={this.state.isFormOpen ? 'glyphicon glyphicon-minus btn btn-success'
          : 'glyphicon glyphicon-plus btn btn-success'} onClick={() => this.handleVisible()}/>
        <Input
        handleNameChange={(name) => this.handleNameChange(name)}
        name={this.state.name}

        handleAgeChange={(age) => this.handleAgeChange(age)}
        age={this.state.age}

        handleAddressChange = {(address) => this.handleAddressChange(address)}
        address = {this.state.address}

        handleAdd={() => this.handleAdd()}
        isFormOpen={this.state.isFormOpen}
        />
        <Table listRow={this.state.listRow} handleDelete={() => this.handleDelete()}/>

      </div>
    )
  }
}
export default List;
