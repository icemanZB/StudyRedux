import {Component} from 'react';
import {jsonToParam} from '../assets/utils';

class SuperComponent extends Component {
	constructor(props) {
		super(props);
	}

	componentWillReceiveProps(nextProps, nextState) {
		if (nextProps.location && this.props.location) {
			if (nextProps.location !== this.props.location) {
				//if (nextProps.location.pathname == this.props.location.pathname) {
					this.componentDidRouteChange(nextProps, nextState);
				//}
			}
		}
	}

	//自定义方法

	componentDidRouteChange(nextProps, nextState) {
		// console.log('aaa');
	}
	
	pushRoute(query = {}, pathname = (this.props.location || location)['pathname']) {
		for (let key in query) {
			if (query[key] === '') {
				delete query[key];
			}
		}
		window.scrollTo(0,0);
		this.props.router && this.props.router.push(pathname + '?' + jsonToParam(query));
	}

	setFieldsValue(newFieldsValue, antdForm = this.props.form) {
		let form = antdForm;
		if (!form) {
			return false;
		}
		let fieldsValue = form.getFieldsValue();
		for (let key in fieldsValue) {
			fieldsValue[key] = newFieldsValue[key];
		}
		form.setFieldsValue(fieldsValue);
	}

	expandRow(expanded, rowKey) {
		let expandedRowKeys = this.state.expandedRowKeys || [];
		if (expanded) {
			expandedRowKeys.push(rowKey);
		}
		else {
			expandedRowKeys = expandedRowKeys.filter(item => item != rowKey);
		}
		this.setState({expandedRowKeys});
	}

}

export default SuperComponent;