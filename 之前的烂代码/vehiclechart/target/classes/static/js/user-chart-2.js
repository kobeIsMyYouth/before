var myChart_user_activepos;

function init_user_activepos_Data(param) {
	$.get('/user/getUserPos', param, function(data) {
		if (myChart_user_activepos) {
			var op = myChart_user_activepos.getOption();
			// var timelinedatas = [];
			// for (var i = 0; i < data.length; i++) {
			// timelinedatas.push(data[i].timefmt);
			// }
			// op.timeline.data = timelinedatas;
			op.option = makeOptionData(data);
		} else {
			var myChart_user_activepos = echarts.init(document.getElementById('sitedistribution'));

			myChart_user_activepos.setOption(makeOptionData(data));
			window.addEventListener("resize", function() {
				myChart_user_activepos.resize();
			})
		}
	});

}

function makeOptionData(data) {
	var latlimit = [ data[0].lat, data[0].lat ];
	var lnglimit = [ data[0].lng, data[0].lng ];
	var idatas = [];
	for (var i = 0; i < data.length; i++) {
		if (latlimit[0] > data[i].lat) {
			latlimit[0] = data[i].lat
		}
		if (latlimit[1] < data[i].lat) {
			latlimit[1] = data[i].lat
		}
		if (lnglimit[0] > data[i].lng) {
			lnglimit[0] = data[i].lng
		}
		if (lnglimit[1] < data[i].lng) {
			lnglimit[1] = data[i].lng
		}
		idatas.push([ data[i].lng, data[i].lat ]);
	}

	var color = [ '#c23531', '#2f4554', '#61a0a8', '#d48265', '#91c7ae', '#749f83', '#ca8622', '#bda29a', '#6e7074', '#546570', '#c4ccd3' ];
	var series = {
		name : '活动点',
		type : 'scatter',
		label : {
			emphasis : {
				show : true
			}
		},
		animation : true,
		data : idatas
	};

	return {
		tooltip : {
			trigger : 'axis'
		},
		grid : {
			top : "10px",
			left : '40px',
			right : '30px',
			bottom : '30px',
			show : true,
			x : 50,
			y2 : 50
		},
		xAxis : {
			min : lnglimit[0],
			max : lnglimit[1],
			axisLine : {
				lineStyle : {
					color : '#fff'
				}
			}
		},
		yAxis : {
			min : latlimit[0],
			max : latlimit[1],
			axisLine : {
				lineStyle : {
					color : '#fff'
				}
			}
		},
		series : series,
		color : color
	};

}
