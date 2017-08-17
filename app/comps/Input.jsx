import React from 'react'

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    this.props.handleAdd(e);
    e.preventDefault();
  }

  render() {
    return(
	    <form onSubmit={this.handleSubmit} style={{display: this.props.isFormOpen ? "block" : "none" }}>
	      <div className="form-group">
	        <div className="form-inline">
	        	<span>Names: </span>
		        <input className="form-control" type="text" value={this.props.name} onChange={(e) => this.props.handleNameChange(e.target.value)}/>
	        </div>

	        <div className="form-inline">
	        	<span>Age: </span>
		        <input className="form-control" type="text" value={this.props.age} onChange={(e) =>this.props.handleAgeChange(e.target.value)}/>
	        </div>

	        <div className="form-inline">
	        	<span>Address: </span>
		        <input className="form-control" type="text" value={this.props.address} onChange={(e) =>this.props.handleAddressChange(e.target.value)}/>
	        </div>

	        <button className="btn btn-primary" type='submit'>Add</button>
	      </div>
		</form>
    )
  }
}

export default Input
