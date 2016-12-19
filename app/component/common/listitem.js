import React, {Component} from "react";
import './listitem.less';

export default class ListItem extends Component {
	render() {
		return (
			<div className="listitem">
				{'列表项'+this.props.data}
			</div>
		);
	}
}