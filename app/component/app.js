import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import '../style/animation.less';

import './app.less';

export default class App extends Component {
	render() {
		return (
			<div className="App">
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


