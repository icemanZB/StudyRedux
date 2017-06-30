import { USER_DATA } from 'constants/index';

let auths = (str)=> {
	let _arr = Array.isArray(str) ? str : str.split(',');
	let json = {};

	for (let i = 0; i < _arr.length; i++) {
		json[_arr[i]] = true;
	}
	return json;
};

var initState = {
	isFetching: true,
	error     : {},
	userData  : {
		vendorNo : localStorage.getItem('vendorNo'),
		realName : localStorage.getItem('realName'),
		divKeySet: localStorage.getItem('divKeySet') && auths(localStorage.getItem('divKeySet')),
		super    : localStorage.getItem('super')
	}
};


export const userReducer = (state = initState, action) => {

	switch (action.type) {
		case USER_DATA:
			action.userData.divKeySet = auths(action.userData.divKeySet);
			return Object.assign({}, state, {
				userData: action.userData
			});
		default:
			return state;
	}
};


