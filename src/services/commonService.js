import { xhr } from './xhr/index';
import { API } from './xhr/config';

/**
 * CommonService
 */
class CommonService {

	getSeq() {
		return xhr({
			url: API.Seq
		});
	}

	//页面初始化数据
	pageInit(pageKey) {
		return xhr({
			url: API.PageInit.replace('{pageKey}', pageKey)
		});
	}

	//日志查询
	getLogList(params) {
		return xhr({
			url: API.LogList,
			params
		});
	}

}

export default new CommonService();
