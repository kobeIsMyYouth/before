var myChart_user_safetygrade;
function init_user_safetygrade(param) {

	$.get('/user/getSafetyGrade', param, function(result) {
		if (result) {
			var xdata = [], data = [];

			for (var i = 0; i < result.length; i++) {
				xdata.push({
					name : result[i].item_name,
					max : result[i].max_value
				});
				data.push(result[i].value);
			}
			var ndata = [data];
			if (myChart_user_safetygrade) {
				var op = myChart_user_safetygrade.getOption();
				op.radar.indicator = xdata;
				op.series[0].data = ndata;
				myChart_user_safetygrade.setOption(op);
			} else {
				myChart_user_safetygrade = echarts.init(document.getElementById('drivingsafe'));
				myChart_user_safetygrade.setOption(getOption(xdata, ndata));
				
				window.addEventListener("resize", function() {
					myChart_user_safetygrade.resize();
				})
			}
			
			init_user_label(result);
		}
	});

	function getOption(xdata, data) {
		var op = {
			backgroundColor : 'transparent',
			radar : {
				indicator : xdata,
				shape : 'circle',
				splitNumber : 5,
				name : {
					textStyle : {
						color : '#FFF'
					}
				},
				splitLine : {
					lineStyle : {
						color : [ 'rgba(238, 197, 102, 0.1)', 'rgba(238, 197, 102, 0.2)', 'rgba(238, 197, 102, 0.4)' ]
								.reverse()
					}
				},
				splitArea : {
					show : false
				},
				axisLine : {
					lineStyle : {
						color : '#fff'
					}
				}
			},
			series : [ {
				name : '驾驶安全等级',
				type : 'radar',
				lineStyle : {
					normal : {
						width : 1,
						opacity : 0.5
					}
				},
				data : data,
				symbol : 'none',
				itemStyle : {
					normal : {
						color : '#fff'
					}
				},
				areaStyle : {
					normal : {
						opacity : 0.1
					}
				}
			} ]
		};
		return op;
	}
}
