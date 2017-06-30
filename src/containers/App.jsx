import React, { Component } from 'react';
import { connect } from 'react-redux';
import NProgress from 'nprogress';
import { Layout, BackTop } from 'antd';
const { Header, Footer, Sider, Content } = Layout;

import Head from 'components/Head';
import MenuBar from 'components/MenuBar';
import ModalLogin from 'components/Login/ModalLogin';

import 'assets/style/main.less';


class App extends Component {

	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.calculateHeight();
		window.addEventListener('resize', this.calculateHeight.bind(this), false);
		NProgress.done();
	}

	//计算高度
	calculateHeight() {
		//截流
		clearTimeout(this.calculateTimer);
		this.calculateTimer = setTimeout(() => {
			let dom = (id) => document.getElementById(id);

			if (dom('sider')) {
				dom('sider').style.minHeight = document.documentElement.clientHeight - dom('header').offsetHeight + 'px';
			}

		}, 500);
	}

	render() {
		return (
			<div>
				<Layout>
					<Header id="header">
						<Head realName={this.props.userData.realName}/>
					</Header>
					<Layout>
						<Sider id="sider">
							<MenuBar location={this.props.location} divKeySet={this.props.userData.divKeySet} super={ this.props.userData.super } route={this.props.route}/>
						</Sider>
						<Content id="content">
							{this.props.children}
						</Content>
					</Layout>
					<Footer id="footer"/>
					<ModalLogin/>
				</Layout>
				<BackTop style={{ right: '10px' }}/>
			</div>

		)
	}
}

const mapStateToProps = (state) => {

	const { userData } = state.user;

	return {
		userData
	};

};


export default connect(mapStateToProps)(App);




