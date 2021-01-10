import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import App from '../app'
import Layout from '../components/Layout';
import Login from '../components/Login';
import NotFound from '../components/NotFound';
import Register from '../components/Register';


const RouterApp = () => (
	<Router>
		<Layout>
			<Switch>
				<Route exact path="/" component={App} />
				<Route exact path="/login" component={Login} />
				<Route exact path="/register" component={Register} />
				<Route component={NotFound}/>
			</Switch>
		</Layout>
	</Router>
)


export default RouterApp;
