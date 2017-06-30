import React, { Component } from 'react';
import { Spin, Card, Row, Col } from 'antd';
import vendorService from '../services/vendorService';
import userService from '../services/userService';
import Empty from '../components/Vendor/Empty';


class Home extends Component {

	constructor(props) {
		super(props);

		this.state = {
			editedFlag: false,
			passedFlag: false,
			loading   : true,
			isShowImg : false
		}
	}

	componentDidMount() {

		vendorService.checkVendor().then((res) => {

			let { editedFlag, passedFlag } = res.data;

			this.setState({
				editedFlag,
				passedFlag,
				loading: false
			});

		}).catch((error) => {
			console.log(error);
			this.setState({
				loading: false
			});
		});

		userService.getHomeData().then((res) => {
			console.log(res.data);

			this.setState({
				loading: false
			});

		}).catch((error) => {
			console.log(error);

			this.setState({
				loading  : false,
				isShowImg: true
			});

		});


	}

	render() {

		const { data, loading } = this.state;

		const cardStyle = {
			marginBottom: 24
		};

		const cardRowStyle = {
			fontSize  : 13,
			fontFamily: 'Arial',
			lineHeight: 2
		};

		const columns = [
			{
				title: 'T+1发货率',
				icon : 'tPlus1Ratio.png',
				//value: data.tPlus1Ratio
			},
			{
				title: '累计订单量（个）',
				icon : 'totalOrdQty.png',
				//value: data.totalOrdQty
			},
			{
				title: '销售总额（元）',
				icon : 'totalOrdCost.png',
				//value: data.totalOrdCost
			}
		];

		return (
			<Spin spinning={loading}>
				{ !this.state.loading &&
				<Empty editedFlag={this.state.editedFlag} passedFlag={this.state.passedFlag}/> }

				<Card style={cardStyle} title="今日一览">
					<Row gutter={12}>
						{
							columns.map((item, key) =>
								<Col span={parseInt(24 / columns.length)} key={key}>
									<img src={`/static/img/${item.icon}`} width="60" height="60" style={{
										display      : 'inline-block',
										verticalAlign: 'middle'
									}}/>
									<span style={{ display: 'inline-block', verticalAlign: 'middle', marginLeft: 20 }}>
										<span className="gray">{item.title}</span>
										<p style={{ fontSize: 28, lineHeight: 1.2 }}>300,000</p>
									</span>
								</Col>
							)
						}
					</Row>
				</Card>

				<Row gutter={24}>
					<Col span={12}>
						<Card style={cardStyle} bodyStyle={{ minHeight: 160 }} title="通知">
							<Row gutter={24} style={cardRowStyle}>
								<Col>本月结算文档已产出，请及时<a>查看</a>处理。</Col>
							</Row>
							<Row gutter={24} style={cardRowStyle}>
								<Col>有3个商品提报被驳回，请及时<a>查看</a>处理。</Col>
							</Row>
							<Row gutter={24} style={cardRowStyle}>
								<Col>有2个商品提报被驳回，请及时<a>查看</a>处理。</Col>
							</Row>

						</Card>
					</Col>
					<Col span={12}>
						<Card style={cardStyle} bodyStyle={{ minHeight: 160 }} title="待处理">

							<Row gutter={24} style={cardRowStyle}>
								<Col span={8}>待发货订单</Col>
								<Col span={10} className="tr primary-color">200 个</Col>
							</Row>
							<Row gutter={24} style={cardRowStyle}>
								<Col span={8}>待退货订单</Col>
								<Col span={10} className="tr primary-color">200 个</Col>
							</Row>
							<Row gutter={24} style={cardRowStyle}>
								<Col span={8}>库存预警商品</Col>
								<Col span={10} className="tr primary-color">200 个</Col>
							</Row>
							<Row gutter={24} style={cardRowStyle}>
								<Col span={8}>已售罄商品</Col>
								<Col span={10} className="tr primary-color">200 个</Col>
							</Row>

						</Card>
					</Col>
				</Row>

			</Spin>
		)
	}
}

export default Home;