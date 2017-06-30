import React, { Component } from 'react';
import { browserHistory } from 'react-router';

import { Modal } from 'antd';

import LoginApp from 'containers/Login/Login';

class ModalLogin extends Component {

	constructor(props) {
		super(props);

		this.state = {
			visible: false
		};

		window.LoginPopup = this;
	}

	componentDidMount() {
		
	}

	show() {
		this.setState({
			visible: true
		});
	}

	handlerSubmit() {
		this.setState({
			visible: false
		});
	}

	render() {
		return (
			<Modal
				visible={this.state.visible}
				title="登入超时，请重新登入"
				onCancel={ () => {
					    this.setState({
					      visible: false
					    });
					 }}
				footer={null}
			>
				<LoginApp handlerSubmit={ this.handlerSubmit.bind(this) }/>
			</Modal>

		)
	}
}

export default ModalLogin;
