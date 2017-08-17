import React from 'react'

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this)
  }

  handleDelete() {
    this.props.handleDelete(this.props.index);
  }

  render() {
    return(
      <tr>
      	<td>{this.props.index}</td>
      	<td>{this.props.row.name}</td>
      	<td>{this.props.row.age}</td>
      	<td>{this.props.row.address}</td>
      	<td><button className='btn btn-danger' onClick={this.handleDelete}>Delete</button></td>
      </tr>
    )
  }
}

module.exports = Form;