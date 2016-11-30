import React from 'react';
import {render} from 'react-dom';
import { Router, Route, IndexRoute, Redirect, hashHistory} from 'react-router';
import App from './component/app';
import Page1 from './component/page1';
import Page2 from './component/page2';

const routes = (
	<Router history={hashHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Page1} />
			<Route path="/page1" component={Page1} />
			<Route path="/page2" component={Page2} />
			<Redirect from="page3" to="/" />
		</Route>
	</Router>
);

render(routes, document.getElementById('app'));