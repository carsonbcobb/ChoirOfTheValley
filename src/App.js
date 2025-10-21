import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Home from './sections/home/home';
import Events from './sections/events/events.jsx';
import Contact from './sections/contact/contact';
import About from './sections/about/about';
import Director from './sections/director/director';
import History from './sections/history/history';
import './App.scss';

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path='/' component={Home} />
				<Route exact path='/about' component={About} />
				<Route exact path='/director' component={Director} />
				<Route exact path='/history' component={History} />
				<Route exact path='/events' component={Events} />
				<Route exact path='/contact' component={Contact} />
			</Switch>
		</Router>
	);
}

export default App;
