import { REQUEST_VENDOR, RECEIVE_VENDOR, VENDOR_DATA, REQUEST_VENDOR_ERROR } from 'constants/index';

var initState = {
	isFetching: true,
	error     : {},
	vendorData: {}
};

export const vendorReducer = (state = initState, action) => {

	switch (action.type) {

		case REQUEST_VENDOR:
			return Object.assign({}, state, {
				isFetching: true,
				vendorData: {},
				error     : {}
			});
		case RECEIVE_VENDOR:
			return Object.assign({}, state, {
				isFetching: false,
				vendorData: action.vendorData,
				error     : {}
			});
		case VENDOR_DATA:
			return Object.assign({}, state, {
				isFetching: false,
				vendorData: action.vendorData,
				error     : {}
			});
		case REQUEST_VENDOR_ERROR:
			return Object.assign({}, state, {
				isFetching: false,
				vendorData: {},
				error     : action.error

			});
		default:
			return state;
	}
};


