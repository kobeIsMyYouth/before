$(function() {
	init_usergroup_count_Data({
		user_type : 'all'
	});
})

function init_usergroup_count_Data(param) {
	$.get('/usergroup/getUserCountLabel', param, function(data) {
		var _html = getCountHtml(data)
		$('.chartdetail-box').html(_html);
	});
}