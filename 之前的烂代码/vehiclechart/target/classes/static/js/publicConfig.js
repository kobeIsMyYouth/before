var color_cinfig = {
	title_color : '#fff',
	subtitle_color : '#fff',
	grid_color : '#fff',
	map_inRange_color : [ '#BF784F' ,'#67849C','#8A7F7C'],
	xline_color : '#90979c',
	yline_color : '#90979c',
	legend_textColor : '#90979c',// 图例文字颜色
	legend_inactiveColor : '#000',// 图例取消选中颜色
	pie_range_color:['#FAC069','#FAEBD7','#E4BEE3','#C3C3C3','#FAC069','#A1B8C5','#554C8E','#FFBC35',' #34BCD9',' #51B7C2',' #D79FD5','#73BFA1','#C69126',' #94BA4C',' #A7CFE9'],
	map_pie_color:['#BF9000','#A5A5A5','#FFC000','#F5DAA2','#CE6A4D','#B6BB6A','#4B91D1']
}
$(function() {
})

function getCountHtml(data){
	var _html='';
	for (var i = 0; i < data.length; i++) {
		var item_html = '<div class="d-item">' + '<div class="i-title">?title</div>' + '<div class="i-content pdt40">' + '?item' + '</div>' + '</div>';
		var val = data[i].count_value;
		var unit = data[i].count_unit;
		var type = data[i].value_type;
		var title = data[i].count_title;
		var classtype = 'spbg_2';
		var content;
		switch (type) {
		case 'text':
			content = distributionArea(val, classtype, unit);
			break;
		case 'number':
			content = numDivision(val, classtype, unit);
			break;
		case 'fraction':
			content = percentageNum(val, classtype, unit);
			break;
		default:
			content = distributionArea(val, classtype, unit);
			break;
		}
		item_html = item_html.replace('?title', title);
		item_html = item_html.replace('?item', content);
		_html += item_html;
	}
	return _html;
}

function getLightColor() {
	return 'rgb(' + [ Math.round(Math.random() * 95 + 160), Math.round(Math.random() * 95 + 160), Math.round(Math.random() * 95 + 160) ].join(',') + ')';
}

function getLightColors(length) {
	var colorarr = [];
	for(var i =0;i<length;i++){
		colorarr.push('rgb(' + [ Math.round(Math.random() * 95 + 160), Math.round(Math.random() * 95 + 160), Math.round(Math.random() * 95 + 160) ].join(',') + ')');
	}
	return colorarr;
}

function getLightColor() {
	return 'rgb(' + [ Math.round(Math.random() * 95 + 160), Math.round(Math.random() * 95 + 160), Math.round(Math.random() * 95 + 160) ].join(',') + ')';
}

// 获取当前月之前的12个月
function getMonth() {
	var monthArr = [], Arr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ], myDate = new Date(),
	// 获取当前年
	year = myDate.getFullYear(),
	// 获取当前月
	month = myDate.getMonth() + 1;
	if (month < 12) {
		var _leftmonth = Arr.length - (12 - month) + 1, _year = year - 1;
		for (var i = _leftmonth; i <= 12; i++) {
			// var n=p(12-i);
			var n = _year + "年" + p(i) + "月";
			monthArr.push(n);
		}
	}
	for (var j = 1; j <= month; j++) {
		// j=p(j);
		monthArr.push(year + "年" + p(j) + "月");
	}
	return monthArr;
}

// 小于10的数字补0
function p(n) {
	return n < 10 ? '0' + n : n;
}

// 数字三位用逗号分隔
// number为原始数字
// classnames为样式类名
// unit单位
function numDivision(number, classnames, unit) {
	var _number = number.toString(); // 数字转成字符串
	var result = ''; // 转换后的字符串
	var counter = '';
	for (var i = _number.length - 1; i >= 0; i--) {
		counter++;
		result = '<span class="' + classnames + '">' + _number.charAt(i) + '</span>' + result;
		// result = _number.charAt(i) + result;
		if (!(counter % 3) && i != 0) {
			// result = ',' + result;
			result = '<span>,</span>' + result;
		}
	}
	result += '<span class="sp_unit">' + unit + '</span>';
	return result;
}

// 百分比构建dom
// number为原始number百分比
// classnames为样式类名
// unit单位
function percentageNum(number, classnames, unit) {
	var result = '';
	for (var i = 0; i < number.length; i++) {
		if (number[i] == ".") {
			result += '<span>' + number[i] + '</span>';
		} else {
			result += '<span class="' + classnames + '">' + number[i] + '</span>';
		}
	}
	result += '<span class="sp_unit">' + unit + '</span>';
	return result;
}

// 纯文字构建dom
// area为分布区域
// classnames为样式类名
function distributionArea(area, classnames) {
	var result = '', areaArr = area.split("，");
	for (var i = 0; i < areaArr.length; i++) {
		if (i == (areaArr.length - 1)) {
			result += '<span class="strsp mb10 ' + classnames + '">' + areaArr[i] + '</span>';
		} else {
			result += '<span class="strsp mr10 mb10 ' + classnames + '">' + areaArr[i] + '</span>';
		}
	}
	return result;
}
