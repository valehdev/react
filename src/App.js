import React, { Component } from 'react';
import User from './User/User';
import './App.css';

class App extends Component {

	constructor() {
		super();
		this.changedNameHandler = this.changedNameHandler.bind(this);
	}


	state = {
		users: [
			{ fullname: 'John' },
			{ fullname: 'Ahmet' },
			{ fullname: 'Manu' }
		]
	};


	changedNameHandler = (event) => {
		this.setState({
			users: [
				{ fullname: event.target.value },
				{ fullname: event.target.value },
				{ fullname: event.target.value }
			]
		});
	}


    render() {
		return (
			<div className="App">
				{this.state.users.map(
					(user, index) => <User changed={this.changedNameHandler} user={user} key={index} />
				)}
			</div>
		);
    }
}

export default App;
