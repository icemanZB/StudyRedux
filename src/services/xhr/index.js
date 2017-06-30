import fetch from 'isomorphic-fetch';
import { jsonToParam, encode } from 'assets/utils';
import { browserHistory } from 'react-router';

const errorHandler = (status, statusText = '哎呀出错了', reject) => {

	checkLogin(status);

	return reject({
		status,
		statusText
	});
};

const successsHandler = (data, msg, resolve) => {
	return resolve({
		data,
		msg
	});
};

const checkLogin = (status)=> {
	if (status == '0004') {
		localStorage.clear();
		window.LoginPopup.show();
	}

};

export const xhr = ({ url = '', params = '', method = 'get', timeout = 10000 } = {}) => {

	// 默认带上cookie
	var opts = { method, timeout, credentials: 'include' };

	if (method.toLocaleUpperCase() == 'GET') {
		if (params) {
			url = `${url}?${jsonToParam(params)}`;
		}
	}

	if (method.toLocaleUpperCase() == 'POST' || method.toLocaleUpperCase() == 'PUT') {
		opts.headers = {
			"content-type": "application/json;charset=UTF-8"
		};
		opts.body = JSON.stringify(params);
	}

	return new Promise((resolve, reject)=> {

		fetch(url, opts).then(function (res) {

			if (res.status != 200) {
				return Promise.reject(res);
			}

			return res;

		}).then(response=>response.json()).then(function (data) {

			if (!data)return resolve(null);

			if (data.success) {
				return successsHandler(data.result, data.resMsg, resolve);
			}

			if (method.toLocaleUpperCase() == 'GET' && data.resCode == '0004') {

				window.location.href = '/login?next=' + encode(window.location.pathname);
				localStorage.clear();
				return;
			}

			return errorHandler(data.resCode, data.resMsg, reject);

		}).catch((res) => {
			return errorHandler(res.status, res.statusText, reject);
		});

	})

};


