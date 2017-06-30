import moment from 'moment';


// 编码
export const encode = window.encodeURIComponent;
export const decode = window.decodeURIComponent;

// json 转 url 参数
export const jsonToParam = json => {
	return Object.keys(json).map(key => {
		let value = !json[key] && typeof json[key] != 'number' ? '' : json[key];
		return `${encode(key)}=${encode(value)}`;
	}).join('&');
};

// 判断对象是否为空 {}、[]、空构造函数 都会返回 true
export const isEmptyObject = (obj) => {
	let key;
	// 不可枚举属性的实例属性不会出现在 for-in 循环中
	for (key in obj) {
		return false;
	}
	return true;
};

// 冻结对象，防止对象属性值被更改
export const freeze = (obj) => {
	let freeze = (obj) => {
		Object.freeze(obj);
		Object.keys(obj).forEach(key => {
			if (typeof obj[key] === 'object') {
				freeze(obj[key]);
			}
		});
	};
	freeze(obj);
	return obj;
};

// 空文本占位符
export const emptyText = '----';

// 文本转换
export const yesOrNo = (yes) => yes == 1 ? '是' : '否';
export const hasOrNo = (has) => has == 1 ? '有' : '没有';

// 日期格式化
export const shortDateFormat = 'YYYY-MM-DD';
export const longDateFormat  = 'YYYY-MM-DD HH:mm:ss';
export const dateFormat = (date, format = dateFormatShort) => date ? moment(date).format(format) : '';
export const dateFormatShort = data => dateFormat(data, shortDateFormat);
export const dateFormatLong = data => dateFormat(data, longDateFormat);

// 字符连接
export const textConcat = (texts = [], confix = ' - ') => (texts || []).filter(item => !!item).join(confix);

// 日期连接
export const dateConcat = (range = [], format = longDateFormat, confix = ' 至 ') => {
	return textConcat([dateFormat(range[0], format) || emptyText, dateFormat(range[1], format) || emptyText], confix);
};

export const getRandom = (lowerValue = 1000, upperValue = 9999, withTimer = true) => {

	let r = Math.floor(Math.random() * (upperValue - lowerValue + 1) + lowerValue);

	withTimer && (r = new Date().getTime() + r);

	return r;

};