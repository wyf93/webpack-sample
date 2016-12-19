import React, {Component} from 'react';
import {Link} from 'react-router';

export default class Page1 extends Component {
	render() {
		return (
			<div className="page">
				<Link to="/page2">page11</Link>
			</div>
		);
	}
}