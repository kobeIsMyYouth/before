var myChart_user_drving_rate;
function init_user_drving_rate(param) {
	$.get('/user/getDrivingRate', param, function(result) {
		if (result) {
			var xdata = [], data = [];
			for (var i = 0; i < result.length; i++) {
				xdata.push(result[i].group_name);
				data.push(result[i].rate);
			}
			if (myChart_user_drving_rate) {
				var op = myChart_user_drving_rate.getOption();
				op.xAxis.data = xdata;
				op.series[0].data = data;
				myChart_user_drving_rate.setOption(op);
			} else {
				myChart_user_drving_rate = echarts.init(document.getElementById('drivingtime'));
				myChart_user_drving_rate.setOption(getOption(xdata, data));
				
				window.addEventListener("resize", function() {
					myChart_user_drving_rate.resize();
				})
			}
		}
	});

	function getOption(xdata, data) {
		var op = {
			color : [ '#3398DB' ],
			tooltip : {
				trigger : 'axis',
				axisPointer : { // 坐标轴指示器，坐标轴触发有效
					type : 'shadow' // 默认为直线，可选为：'line' | 'shadow'
				}
			},
			grid : {
				top : "10px",
				left : '10px',
				right : '20px',
				bottom : '10px',
				containLabel : true
			},
			xAxis : [ {
				type : 'category',
				axisLine : {
					lineStyle : {
						color : '#fff'
					}
				},
				data : xdata,
				axisTick : {
					alignWithLabel : true
				}
			} ],
			yAxis : [ {
				name : '频次',
				axisLine : {
					lineStyle : {
						color : '#fff'
					}
				},
				type : 'value',
			} ],
			series : [ {
				name : '驾驶频次',
				type : 'bar',
				barWidth : '60%',
				data : data
			} ]
		};
		return op;
	}
}
