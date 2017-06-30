import { REQUEST_VENDOR, RECEIVE_VENDOR, REQUEST_VENDOR_ERROR, VENDOR_DATA } from 'constants/index';

import VendorService from 'services/vendorService';

export const saveVendor = (vendorData)=> {
	return {
		type      : VENDOR_DATA,
		vendorData: vendorData
	}
};

export const fetchVendor = (vendorNo, params) => {

	// 开始获取数据
	const request = () => {
		return {
			type: REQUEST_VENDOR
		}
	};

	// 获取数据成功
	const receive = (data) => {
		return {
			type      : RECEIVE_VENDOR,
			vendorData: data
		};
	};

	// 获取数据失败 500
	const failed = (error) => {
		return {
			type   : REQUEST_VENDOR_ERROR,
			payload: new Error(),
			error  : error
		}
	};

	return (dispatch) => {

		dispatch(request());

		return VendorService.getVendor(vendorNo, params).then((response)=> {

			dispatch(receive(response.data));

		}).catch(function (error) {

			dispatch(failed(error));

		});


	};
};



