import React, { Component } from 'react';
import { Router, Route, IndexRoute, browserHistory, Redirect } from 'react-router';

import NProgress from 'nprogress';

import 'assets/style/nprogress.less';


import Login from 'components/Login/Login';

// import NotFound from 'components/NotFound/';

import App from './App';
import Home from './Home';


import VendorEdit from './Vendor/Edit';

const requireLogin = (nextState, replace) => {

	if (!localStorage.getItem('vendorNo')) {
		replace({
			pathname: '/login',
			state   : { nextPathname: nextState.location.pathname },
			query   : { next: nextState.location.pathname }
		})
	}

};

// 供应商详情
const VendorDetail = (location, cb) => {
	NProgress.start();
	require.ensure([], require => {
		cb(null, require('./Vendor/Detail').default);
	}, 'VendorDetail');
};


//商品列表
const ProductList = (location, cb) => {
	NProgress.start();
	require.ensure([], require => {
		cb(null, require('./Product/List').default);
	}, 'ProductList');
};

// 商品详情
const ProductDetail = (location, cb) => {
	NProgress.start();
	require.ensure([], require => {
		cb(null, require('./Product/Detail').default);
	}, 'ProductDetail');
};

// 商品编辑
const ProductEdit = (location, cb) => {
	NProgress.start();
	require.ensure([], require => {
		cb(null, require('./Product/Edit').default);
	}, 'ProductEdit');
};

// 失效商品查询
const SkuInvalidList = (location, cb) => {
	NProgress.start();
	require.ensure([], require => {
		cb(null, require('./Product/InvalidList').default);
	}, 'SkuInvalidList');
};

// 消费订单
const OrderList = (location, cb) => {
	NProgress.start();
	require.ensure([], require => {
		cb(null, require('./Order/List').default);
	}, 'OrderList');
};

// 订单详情
const OrderDetail = (location, cb) => {
	NProgress.start();
	require.ensure([], require => {
		cb(null, require('./Order/Detail').default);
	}, 'OrderDetail');
};

// 退款订单列表
const OrderRefundList = (location, cb) => {
	NProgress.start();
	require.ensure([], require => {
		cb(null, require('./Order/RefundList').default);
	}, 'OrderRefundList');
};

// 退款详情
const OrderRefundDetail = (location, cb) => {
	NProgress.start();
	require.ensure([], require => {
		cb(null, require('./Order/RefundDetail').default);
	}, 'OrderRefundDetail');
};

// 退货订单列表
const OrderRmaList = (location, cb) => {
	NProgress.start();
	require.ensure([], require => {
		cb(null, require('./Order/RmaList').default);
	}, 'OrderRmaList');
};

// 退货详情
const OrderRmaDetail = (location, cb) => {
	NProgress.start();
	require.ensure([], require => {
		cb(null, require('./Order/RmaDetail').default);
	}, 'OrderRmaDetail');
};

// 商品库存列表
const InvList = (location, cb) => {
	NProgress.start();
	require.ensure([], require => {
		cb(null, require('./Inventory/List').default);
	}, 'InvList');
};

// 结算订单列表
const RcptOrdList = (location, cb) => {
	NProgress.start();
	require.ensure([], require => {
		cb(null, require('./Receipts/List').default);
	}, 'RcptOrdList');
};

// 结算文档列表页
const RcptArchiveList = (location, cb) => {
	NProgress.start();
	require.ensure([], require => {
		cb(null, require('./Receipts/ArchiveList').default);
	}, 'RcptArchiveList');
};




const RouteConfig = (
	<Router history={browserHistory}>
		<Route path="/" component={Login}/>
		<Route path="/login" component={Login}/>
		<Route path="/home" component={App} onEnter={requireLogin}>
			<IndexRoute component={Home}/>
			<Route path="vendor">
				<IndexRoute getComponent={VendorDetail} onEnter={requireLogin}/>
				<Route path="edit" component={VendorEdit} onEnter={requireLogin}/>
				<Route path="detail" getComponent={VendorDetail} onEnter={requireLogin}/>
				<Route path="detail/online" getComponent={VendorDetail} onEnter={requireLogin}/>
			</Route>

			<Route path="product">
				<IndexRoute getComponent={ProductList} onEnter={requireLogin}/>
				<Route path="list" getComponent={ProductList} onEnter={requireLogin}/>
				<Route path="online" getComponent={ProductList} onEnter={requireLogin}/>
				<Route path="edit(/:editSkuGrpNo)" getComponent={ProductEdit} onEnter={requireLogin}/>
				<Route path="detail/:detailSkuGrpNo" getComponent={ProductDetail} onEnter={requireLogin}/>
				<Route path="detail/online/:detailSkuGrpNo" getComponent={ProductDetail} onEnter={requireLogin}/>

				<Route path="sku">
					<Route path="invalid" getComponent={SkuInvalidList} onEnter={requireLogin}/>
				</Route>

			</Route>

			<Route path="order">
				<IndexRoute getComponent={OrderList} onEnter={requireLogin}/>
				<Route path="list" getComponent={OrderList} onEnter={requireLogin}/>
				<Route path="detail/:ordNo" getComponent={OrderDetail} onEnter={requireLogin}/>
				<Route path="refund">
					<IndexRoute getComponent={OrderRefundList} onEnter={requireLogin}/>
					<Route path="detail/:refundNo" getComponent={OrderRefundDetail} onEnter={requireLogin}/>
				</Route>
				<Route path="rma">
					<IndexRoute getComponent={OrderRmaList} onEnter={requireLogin}/>
					<Route path="detail/:ordRmaNo" getComponent={OrderRmaDetail} onEnter={requireLogin}/>
				</Route>
			</Route>

			<Route path="inv">
				<IndexRoute getComponent={InvList} onEnter={requireLogin}/>
				<Route path="list" getComponent={InvList} onEnter={requireLogin}/>
			</Route>

			<Route path="receipts">
				<IndexRoute getComponent={RcptOrdList} onEnter={requireLogin}/>
				<Route path="list" getComponent={RcptOrdList} onEnter={requireLogin}/>
				<Route path="rcptarchivelist" getComponent={RcptArchiveList} onEnter={requireLogin}/>
			</Route>

		</Route>


	</Router>
);

// <Route path='/404' component={NotFound}/>

export default RouteConfig;