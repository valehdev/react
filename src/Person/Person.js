import React, { Component } from 'react';
import './Person.css';

class Person extends Component {
    
	app = {
		category : {
			heading: 'Tes Category',
			summary: 'Test Summary'
		}
	};

	render() {
		return (
			<div className="Person">
				<h1>{this.app.category.heading}</h1>
				<p>{this.app.category.summary}</p>
			</div>
		);
	}
}

export default Person;