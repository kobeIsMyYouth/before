$(function() {
	init_trouble_count_data();
})

function init_trouble_count_data(param) {
	var myparam = param ? param : {
		pid : '102'
	};
	$.get('/trouble/getCountList', myparam, function(data) {
		// $.get('/static/json/trouble_count.json', param, function(data) {
		var _html = getCountHtml(data)
		$('.chartdetail-box').html(_html);
	});
}