import React, { Component } from 'react';

class header extends Component {
	render() {
		return (
			<nav>
				<div className="nav-wrapper">
					<a className="brand-logo" style={{ marginLeft: '5px' }}>
						Logo
					</a>
					<ul className="right hide-on-med-and-down">
						<li>
							<a href="/auth/google">Login With Google</a>
						</li>
					</ul>
				</div>
			</nav>
		);
	}
}

export default header;
