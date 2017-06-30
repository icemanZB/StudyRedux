import { combineReducers } from 'redux';

import { vendorReducer } from './vendor';
import { userReducer } from './user';
import { exportReducer } from './export';

const rootReducer = combineReducers({
	vendor: vendorReducer,
	user  : userReducer,
	export: exportReducer
});

export default rootReducer;