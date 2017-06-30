export const API = {
	// 登入
	Login : '/api/sp/usr/login',
	// 注销
	Logout: '/api/sp/usr/logout',

	// 获取序列号
	Seq     : '/api/sp/seq',
	// 页面初始化接口
	PageInit: '/api/sp/init/{pageKey}',

	// 供应商管理(get,add,update)
	Vendor             : '/api/sp/vendor/{vendor_no}',
	// 检测供应商信息是否填写
	VendorCheck        : '/api/sp/vendor/chk',
	// 商品列表
	ProductList        : '/api/sp/sku-grp/list',
	// 导出商品列表
	ProductExport      : '/api/sp/sku-grp/excel',
	// 线上商品列表
	ProductOnlineList  : '/api/sp/sku/list',
	// 线上商品列表
	ProductOnlineExport: '/api/sp/sku/excel',
	// 商品组管理(get,add,update)
	Product            : '/api/sp/sku-chk/sku-grp/{sku_grp_no}',

	// 订单列表
	OrderList      : '/api/sp/ord-item/list',
	// 导出订单
	OrderListExport: '/api/sp/ord-item/excel',
	// 订单详情
	OrderDetail    : '/api/sp/ord-item/{ordNo}',
	// 发货
	Deliver        : '/api/sp/ord-item/ship/{ordItemNo}',

	// 填写物流快递信息的excel模版
	TemplateShip: '/static/excel/批量发货模板.xlsx',
	// 批量发货
	BatchShip   : '/api/sp/ord-item/batch-ship',
	// 批量导入Excel 日志查询
	LogList     : '/api/sp/excel-upload-log/list',

	// 退款订单列表
	OrderRefundList  : '/api/sp/rfd/list',
	// 退款订单导出
	OrderRefundExport: '/api/sp/rfd/excel',
	// 退款单详情
	OrderRefundDetail: '/api/sp/rfd/{refund_no}',
	// 审核退款单
	OrderRefundCheck : '/api/sp/rfd/{refund_no}/state',


	// 退货订单列表
	OrderRmaList      : '/api/sp/rma/list',
	// 退货订单导出
	OrderRmaListExport: '/api/sp/rma/excel',
	// 退货订单详情
	OrderRmaDetail    : '/api/sp/rma/{ordRmaNo}',
	// 退货单审核
	OrderRmaCheck     : '/api/sp/rma/{ordRmaNo}/state',

	// 库存列表
	InvList  : '/api/sp/inv-sku-chk/list',
	// 库存商品导出
	InvExport: '/api/sp/inv-sku-chk/excel',
	// sku商品库存变更提审
	InvEdit  : '/api/sp/inv-sku-chk/{skuNo}',

	// 结算订单列表页
	RcptOrdList          : '/api/sp/rcpt-ord/list',
	// 结算订单列表全导出
	RcptOrdListExport    : '/api/sp/rcpt-ord/excel',
	// 结算订单详情
	RcptOrdDetail        : '/api/sp/rcpt-ord/{trnNo}',
	// 结算文档列表页
	RcptArchiveList      : '/api/sp/rcpt-archive/list',
	// 结算文档导出
	RcptArchiveListExport: '/api/sp/rcpt-archive/excel',
	// 单个结算文档下载
	RcptArchiveExport    : '/api/sp/rcpt-ord/{rcptFileNo}/excel',

	Home: '/api/sp/home'
};
