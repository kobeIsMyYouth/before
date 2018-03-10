function init_user_label(param) {
	var resmap = [ {
		itemname : '充电合理性',
		name : '该用户充电',
		values : [ '较合理', '合理', '一般', '不合理', '非常不合理' ]
	}, {
		itemname : '驾驶安全性',
		name : '驾驶安全性',
		values : [ '较高', '高', '一般', '低', '较低' ]
	}, {
		itemname : '驾驶强度',
		name : '驾驶强度',
		values : [ '较高', '高', '一般', '低', '较低' ]
	}, {
		itemname : '驾驶速度',
		name : '驾驶速度',
		values : [ '较高', '高', '一般', '低', '较低' ]
	} ];

	var label_arr = [];
	for (var i = 0; i < param.length; i++) {
		for (var j = 0; j < resmap.length; j++) {
			if (param[i].item_name == resmap[j].itemname) {
				var itemnum = 9 - parseInt(parseFloat(param[i].value) * 10);
				itemnum = itemnum < 0 ? itemnum = 0 : itemnum > 4 ? itemnum = 4 : itemnum;
				var label = resmap[j].name + "：" + resmap[j].values[itemnum]
				label_arr.push(label);
				break;
			}
		}
	}
	var _html = "";
	for (var i = 0; i < label_arr.length; i++) {
		var _class = getClass();
		_html += '<div class="dbtpanbox"><div class="tpan ' + _class + '"><i>NO.' + (i + 1) + '</i><span>' + label_arr[i] + '</span></div></div>';
	}
	$("#userlabel").html(_html);
}

function getClass() {
	var bgArr = [ 1, 2, 3 ];
	var a = parseInt(bgArr.length * Math.random());
	return "decbg-" + bgArr[a];
}
