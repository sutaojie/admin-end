import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import App from './App';
import Login from './pages/login';
import Admin from './admin';
import Home from './pages/home'
import Detail from './pages/info/detail';
import NoMatch from './pages/nomatch'
export default class IRouter extends React.Component {
	routerMatch = ()=>{
		return (
			<Admin>
				<Switch>
					<Route path="/admin/home" component={Home}></Route>
					<Route path="/admin/info/detail" component={Detail}></Route>
					<Route component={NoMatch}></Route>
				</Switch>
			</Admin>
		)
	}
	render() {
		return (
			<HashRouter>
				<App>
					<Route path="/login" component={Login}></Route>
					<Route path="/admin" render={this.routerMatch}></Route>
				</App>
			</HashRouter>
		);
	}
}