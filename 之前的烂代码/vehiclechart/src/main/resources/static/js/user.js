$(function() {
	init_user_count_data({
		province : $('#province').val()
	});
})

function init_user_count_data(param) {
	$.get('/user/getCountList', param, function(data) {
		// $.get('/static/json/user_count.json', param, function(data) {
		var _html = getCountHtml(data)
		$('.chartdetail-box').html(_html);
	});
}