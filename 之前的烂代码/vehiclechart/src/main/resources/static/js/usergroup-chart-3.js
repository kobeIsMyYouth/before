init_usergroup_label_Data({
	user_type : 'all'
});
function init_usergroup_label_Data(param) {
	$.get('/usergroup/getUserGroupLabel', param, function(data) {
		var _html = "";
		for (var i = 0; i < data.length; i++) {
			var _class = getClass();
			_html += '<div class="tpanbox"><div class="tpan ' + _class + '"><i>NO.' + (i + 1) + '</i><span>' + data[i] + '</span></div></div>';
		}
		$("#userdecs").html(_html);
	})
}

function getClass() {
	var bgArr=[1,2,3];
	var a = parseInt(bgArr.length * Math.random());
	return "decbg-" + bgArr[a];
}
