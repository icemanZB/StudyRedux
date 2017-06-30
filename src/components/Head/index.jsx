import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';

import { Row, Col, Icon, notification, Button } from 'antd';

import userService from 'services/userService';

import './head.scss';


class Head extends Component {

	constructor(props) {
		super(props);
	}

	render() {

		const openNotification = () => {

			const key = `open${Date.now()}`;

			const btnClick = function () {

				userService.logout().then((data)=> {

					localStorage.clear();
					browserHistory.replace('/login');

				});

				notification.close(key);

			};

			const btn = (
				<Button type="primary" size="small" onClick={btnClick.bind(this)}>
					确定
				</Button>
			);

			notification['warning']({
				message    : '提示信息',
				description: '确定需要注销嘛？',
				duration   : 0,
				btn,
				key
			});

		};


		return (
			<Row>
				<Col className="sp-title" span={6}>SP销售管理系统</Col>
				<Col className="sp-user" span={6} offset={12}><Icon type="user"/>
					<span>{ this.props.realName }，您好</span>
					<Icon type="logout"/>
					<a onClick={openNotification}>注销</a>
				</Col>
			</Row>
		)
	}
}

export default Head;