import React, {Component} from 'react';
import {Link} from 'react-router';
import {Menu, Icon} from 'antd';
import './menu.scss';


// 菜单配置
const MenuData = [
	{
		key  : 'home',
		title: '首页',
		icon : 'home',
		url  : '/home'
	},
	{
		key  : 'vendor',
		title: '个人信息管理',
		icon : 'team',
		url  : '',
		sub  : [
			{
				key  : 'vendor-detail',
				title: '我的提报',
				url  : ['/home/vendor/detail', '/home/vendor/edit']
			},
			{
				key  : 'vendor-detail-online',
				title: '我的信息',
				url  : '/home/vendor/detail/online?onlineFlag=1'
			}
		]
	},
	{
		key  : 'product',
		title: '商品管理',
		icon : 'shopping-cart',
		url  : '',
		sub  : [
			{
				key  : 'product-list',
				title: '提报商品列表',
				url  : ['/home/product/list', '/home/product/detail']
			},
			{
				key  : 'product-online',
				title: '采购商品列表',
				url  : ['/home/product/online?onlineFlag=1', '/home/product/detail/online']
			},
			{
				key  : 'product-edit',
				title: '新增商品组',
				url  : '/home/product/edit'
			},
			{
				key  : 'product-invalid-list',
				title: '失效商品列表',
				url  : '/home/product/sku/invalid'
			}
		]
	},
	{
		key  : 'order',
		title: '订单管理',
		icon : 'bars',
		url  : '',
		sub  : [
			{
				key  : 'order-list',
				title: '消费订单',
				url  : ['/home/order/list', '/home/order/detail']
			},
			{
				key  : 'order-rma-list',
				title: '退货订单',
				url  : ['/home/order/rma', '/home/order/rma/edit', '/home/order/rma/detail']
			},
			{
				key  : 'order-refund-list',
				title: '退款订单',
				url  : ['/home/order/refund', '/home/order/refund/edit', '/home/order/refund/detail']
			}
		]
	},
	{
		key  : 'inv',
		title: '库存管理',
		icon : 'shop',
		url  : '',
		sub  : [
			{
				key  : 'inv-list',
				title: '商品库存管理',
				url  : '/home/inv/list'
			}
		]
	},
	{
		key  : 'receipts',
		title: '结算管理',
		icon : 'pay-circle-o',
		url  : '',
		sub  : [
			{
				key  : 'rcpt-ord-list',
				title: '订单列表',
				url  : '/home/receipts/list'
			},
			{
				key  : 'rcpt-archive-list',
				title: '结算文档',
				url  : '/home/receipts/rcptarchivelist'
			}
		]
	}
];

// 遍历查找每个菜单的父元素集合
const ExpandMenu = (menu, parentKeys = [], hash = {}) => {
	Array.from(menu).map(item => {
		let {key, url, sub} = item;

		if (Array.isArray(sub)) {
			ExpandMenu(sub, parentKeys.concat(key), hash);
		}
		else {
			hash[key] = {
				urls: Array.isArray(url) ? url : [url],
				parentKeys
			};
		}
	});
	return hash;
};

const MenuHash = ExpandMenu(MenuData);

// 绑定菜单选中状态
const RebindMenu = (pathname = window.location.pathname) => {

	pathname = pathname.replace(/\/[0-9]+$/, '');

	let openKeys = [];
	let selectedKeys = [];
	let find = false;

	for (let key in MenuHash) {
		let {urls, parentKeys} = MenuHash[key];
		urls.some(url => {
			if (url.split('?')[0] == pathname) {
				openKeys = parentKeys.concat(key);
				selectedKeys = [key];
				return find = true;
			}
		});
		if (find) {
			break;
		}
	}

	return {
		openKeys,
		selectedKeys
	}
};


class MenuBar extends Component {

	constructor(props) {
		super(props);

		this.state = {
			...RebindMenu()
		};

	}

	componentDidMount() {
	}

	componentWillReceiveProps(nextProps, nextState) {
		if (nextProps.location && this.props.location) {
			if (nextProps.location !== this.props.location) {
				if (nextProps.location.pathname !== this.props.location.pathname) {

					this.setState(RebindMenu(nextProps.location.pathname));

				}
			}
		}
	}

	handleClick(e) {
		this.setState({
			selectedKeys: [e.key]
		}, () => {
			window.scrollTo(0, 0);
		});
	}

	render() {

		// const isShow = (divKey) => {
		// 	return this.props.super + '' == 'true' || this.props.divKeySet[divKey];
		// };

		const isShow = divKey => this.props.divKeySet[divKey];

		const renderMenu = (menu) => {
			return Array.from(menu).map(item => {
				let {key, title, icon, url, sub} = item;

				if (!isShow(key)) {
					return false;
				}

				let titleNode = icon ? <span><Icon type={icon}/>{title}</span> : title;
				url = Array.isArray(url) ? url[0] : url;
				titleNode = url ? <Link to={url}>{titleNode}</Link> : titleNode;

				if (Array.isArray(sub) && sub.length) {
					return <Menu.SubMenu key={key} title={titleNode}>{renderMenu(sub)}</Menu.SubMenu>
				}
				else {
					return <Menu.Item key={key}>{titleNode}</Menu.Item>;
				}
			});
		};

		return (
			<Menu
				id="menu"
				theme="dark"
				onClick={this.handleClick.bind(this)}
				openKeys={this.state.openKeys}
				selectedKeys={this.state.selectedKeys}
				mode="inline"
				inlineIndent="25"
				onOpenChange={(openKeys) => {
					this.setState({
						openKeys
					});
				}}
			>
				{renderMenu(MenuData)}
			</Menu>
		)
	}

}


export default MenuBar;

