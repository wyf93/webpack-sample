import React, {Component} from 'react';
import {Link} from 'react-router';

export default class Page2 extends Component {
	render() {
		return (
			<div className="page">
				<Link to="/page1">page22</Link>
				<Link to="/page4">page4</Link>
			</div>
		);
	}
}
