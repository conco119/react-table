import React from 'react'
import Row from './Row.jsx'

class Table extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
			<table className='table table-bordered' >
				<thead>
					<tr>
						<th>STT</th>
						<th>Name</th>
						<th>Age</th>
						<th>Address</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>
					{this.props.listRow.map((row,index) =>
						<Row key={index} index={index} row={row} handleDelete={this.props.handleDelete}/>
					)}
				</tbody>
			</table>
		)
	}
}

export default Table
