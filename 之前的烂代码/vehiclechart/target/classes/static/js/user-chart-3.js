var myChart_user_driving_mileage;
function init_user_driving_mileage(param) {
	$.get('/user/getDrivingMileage', param, function(result) {
		if (result) {
			var xdata = [], data = [];
			for (var i = 0; i < result.length; i++) {
				xdata.push(result[i].group_name);
				data.push(result[i].mileage);
			}
			if (myChart_user_driving_mileage) {
				var op = myChart_user_driving_mileage.getOption();
				op.xAxis.data = xdata;
				op.series[0].data = data;
				myChart_user_driving_mileage.setOption(op);
			} else {
				myChart_user_driving_mileage = echarts.init(document.getElementById('drivingmileage'));
				myChart_user_driving_mileage.setOption(getOption(xdata, data));
				
				window.addEventListener("resize", function() {
					myChart_user_driving_mileage.resize();
				})
			}
		}
	});
	function getOption(xdata, data) {
		var op = {
			tooltip : {
				trigger : 'axis'
			},
			grid : {
				top : "10px",
				left : '10px',
				right : '20px',
				bottom : '10px',
				containLabel : true
			},
			xAxis : {
				type : 'category',
				axisLine : {
					lineStyle : {
						color : '#fff'
					}
				},
				boundaryGap : false,
				data : xdata
			},
			yAxis : {
				name : '里程',
				type : 'value',
				axisLine : {
					lineStyle : {
						color : '#fff'
					}
				},
			},
			series : [ {
				name : '驾驶里程',
				type : 'line',
				data : data
			} ]
		};
		return op;
	}
}
