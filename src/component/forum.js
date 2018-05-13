// client/src/components/Forum.js

import React, {PureComponent} from 'react'

class Forum extends PureComponent {
	state = {}

	handleSubmit = (e) => {
		e.preventDefault()
		this.props.onSubmit(this.state)
	}

	handleChange = (event) => {
		const {name, value} = event.target

		this.setState({
		  [name]: value
		})
	}

	render() {
		const initialValues = this.props.initialValues || {}
		return (
			<form onSubmit={this.handleSubmit}>
				<div>
					<label htmlFor="name">Product name</label>
					<input name="name" id="name" value={
						this.state.name || initialValues.name || ''
					} onChange={ this.handleChange } />
				</div>
				<button type="submit">Save</button>
			</form>
		)
	}
}

export default Forum
//
//
// <form onSubmit={this.handleSubmit}>
//   <div>
//     <label htmlFor="name">Product name</label>
//     <input name="name" id="name" value={
//       this.state.name || initialValues.name || ''
//     } onChange={ this.handleChange } />
//   </div>
//   <button type="submit">Save</button>
// </form>
