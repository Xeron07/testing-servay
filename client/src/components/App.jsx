import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './header';
import { connect } from 'react-redux';
import * as actions from '../actions';
import login from './login';

const landing = () => <h2>Landing</h2>;

class App extends Component {
	componentDidMount() {
		this.props.fetchUser();
	}
	render() {
		return (
			<div>
				<BrowserRouter>
					<div style={{ marginLeft: '3px', marginRight: '3px', marginTop: '1px' }}>
						<Header />
						<Route exact={true} path="/" component={landing} />
						<Route exact={true} path="/login" component={login} />
					</div>
				</BrowserRouter>
			</div>
		);
	}
}

export default connect(null, actions)(App);
