import { USER_DATA } from 'constants/index';

export const saveUser = (userData)=> {
	return {
		type: USER_DATA,
		userData
	}
};


