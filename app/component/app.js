import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import '../style/app.less';

export default class App extends Component {
	render() {
		return (
			<div id="ReactCSSTransitionGroup">
				<ReactCSSTransitionGroup
		          transitionName="example"
		          transitionAppear={true}
		          transitionAppearTimeout={500}

		          transitionEnterTimeout={500}
		          transitionLeaveTimeout={300}>
				{React.cloneElement(this.props.children, {
                  key: this.props.location.pathname
              })}
				</ReactCSSTransitionGroup>
			</div>
		);
	}
}


