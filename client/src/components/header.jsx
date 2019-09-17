import React, { Component } from 'react';
import { connect } from 'react-redux';
class header extends Component {
	renderContent() {
		switch (this.props.auth) {
			case null:
				return;
			case 'loggedout':
				return (
					<div>
						<li>
							<a href="/auth/google">Login by Google</a>
						</li>
						<li>
							<a href="/auth/facebook">Login By Facebook</a>
						</li>
					</div>
				);
			default:
				return (
					<li>
						<a href="/api/logout">Logged Out</a>
					</li>
				);
		}
	}
	render() {
		return (
			<nav>
				<div className="nav-wrapper">
					<i className="brand-logo" style={{ marginLeft: '5px' }}>
						Logo
					</i>
					<ul className="right hide-on-med-and-down">{this.renderContent()}</ul>
				</div>
			</nav>
		);
	}
}
function mapStateToProps({ auth }) {
	return { auth };
}

export default connect(mapStateToProps)(header);
