import React from 'react';
import {Row, Col} from 'antd';

// 模块展示组件
export const BoxTable = ({
	title = '',
	data = [], //[[label, text]...]
	colSize = 2,
	className = '', //string or array
	layout = {
		style   : {},
		rowStyle: {},
		label   : {span: 10},
		col     : {span: 14}
	},
	emptyText = '----',
	children
}) => {
	const rowCount = Math.ceil(data.length / colSize);
	return (
		<div className={['box-table'].concat(className).join(' ')} style={{...layout.style}}>
			{
				title &&
				<div className="box-title">
					<Row>
						<Col>{title}</Col>
					</Row>
				</div>
			}
			<div className="box-rows" style={{ ...layout.rowStyle }}>
				{
					(() => {
						let n       = 0;
						let rows    = [];
						let colSpan = parseInt(24 / colSize);
						for (let i = 0; i < rowCount && n < data.length; i++) {
							let cols = [];
							for (let j = 0; j < colSize && n < data.length; j++, n++) {
								let label = data[n][0];
								let text  = data[n][1];
								cols.push(
									<Col className="box-col" span={colSpan} key={`row-${i}-col-${j}`}>
										<Col className="box-col-label" {...layout.label}>{ label }：</Col>
										<Col className="box-col-text" {...layout.col}>{ !text && typeof text != 'number' ? emptyText : text }</Col>
									</Col>
								);
							}
							rows.push(<Row key={`row-${i}`}>{ cols }</Row>);
						}
						return rows;
					})()
				}
				{ children }
			</div>
		</div>
	);
};


// 展示附件列表
export const RenderAttachments = ({attachments = [], pathProp = 'path', fileNameProp = 'fileName'}) => {
	return Array.from(attachments).map((item, index) => {
		return <p key={index}><a href={item[pathProp]} target="_blank">{item[fileNameProp]}</a></p>;
	});
};

