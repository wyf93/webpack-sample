// var config = require('./config.json');
// //Greeter
// module.exports = function () {
// 	var greet = document.createElement('div');
// 	greet.textContent = config.greetText;

// 	return greet;
// }
import React, {Component} from 'react';
import config from './config.json';

import './Greeter.less';

class Greeter extends Component {
	render() {
		return (
			//<div className={styles.root}>
			<div className="greeter">
				{config.greetText + "hsdjkahsjdhasdhuiasd"}
			</div>
		)
	}
}

export default Greeter;
