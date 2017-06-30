import React, { Component } from 'react';
import { browserHistory } from 'react-router';

import LoginApp from 'containers/Login/Login';

class Login extends Component {

	constructor(props) {
		super(props);

	}

	componentDidMount() {
		this.calculateHeight();
		window.addEventListener('resize', this.calculateHeight.bind(this), false);
		
	}

	handlerSubmit() {
		if (this.props.location.query.next) {
			browserHistory.replace(this.props.location.query.next);
		} else {
			browserHistory.replace('/home');
		}
	}

	//计算高度
	calculateHeight() {
		//截流
		clearTimeout(this.calculateTimer);
		this.calculateTimer = setTimeout(() => {
			if (document.getElementsByClassName('login-form')[0]) {
				document.getElementsByClassName('login-form')[0].style.minHeight = document.documentElement.clientHeight - 250 - 70 + 'px';
			}
		}, 500);
	}

	render() {
		return (
			<div id="Login">
				<style>
					{"body { background-color: #191919; }"}
				</style>
				<header>
					<h1>疾风商城供应管理系统</h1>
					<h3>为客户提供高效、专业的服务</h3>
				</header>
				<section>
					<LoginApp handlerSubmit={ this.handlerSubmit.bind(this) }/>
				</section>

			</div>
		)
	}
}

export default Login;
