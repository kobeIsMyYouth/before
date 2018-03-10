var myChart_usergroup_drivingmode;
init_usergroup_drivingtype({
	user_type : 'all'
});
function init_usergroup_drivingtype(param) {
	$.get('/usergroup/getDrivingType', param, function(result) {
		var arrdata = [ [], [] ];
		if (result) {
			console.log(result);
			for (var i = 0; i < result.length; i++) {
				var itemdata = result[i];
				arrdata[0].push(itemdata.avg);
				arrdata[1].push(itemdata.max);
			}
		}
		console.log(arrdata);
		if (myChart_usergroup_drivingmode) {
			var op = myChart_usergroup_drivingmode.getOption();
			op.series[0].data = arrdata[0];
			op.series[1].data = arrdata[1];
			myChart_usergroup_drivingmode.setOption(op);
		} else {
			myChart_usergroup_drivingmode = echarts.init(document.getElementById('drivingmode'));
			myChart_usergroup_drivingmode.setOption(getusergroup_option2(arrdata));

			window.addEventListener("resize", function() {
				myChart_usergroup_drivingmode.resize();
			})
		}
	})
}

function getusergroup_option2(data) {
	var option = {
		title : [ {
			text : '驾驶模式分析',
			top : '20px',
			left : 'center',
			textStyle : {
				color : color_cinfig.title_color
			}
		} ],
		tooltip : {
			trigger : 'axis',
			backgroundColor : 'rgba(255,255,255,0.2)',
			axisPointer : {
				type : 'shadow',
				label : {
					show : true,
					backgroundColor : '#3259B8'
				}
			}
		},
		xAxis : {
			name : '时间/H',
			type : 'category',
			data : [ '0:00', '1:00', '2:00', '3:00', '4:00', '5:00', '6:00', '7:00', '8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00',
					'21:00', '22:00', '23:00' ],
			axisLine : {
				lineStyle : {
					color : color_cinfig.title_color
				}
			},
			axisLabel : {
				rotate : 30
			}
		},
		yAxis : {
			type : 'value',
			name : '里程/km',
			axisLine : {
				lineStyle : {
					color : color_cinfig.title_color
				}
			}
		},
		series : [ {
			name : '平均值',
			type : 'bar',
			barWidth : 10,
			itemStyle : {
				normal : {
					barBorderRadius : 10,
					color : 'red'
				}
			},
			data : data[0]
		}, {
			name : '最大值',
			type : 'bar',
			barGap : '-100%',
			barWidth : 10,
			itemStyle : {
				normal : {
					barBorderRadius : 10,
					color : new echarts.graphic.LinearGradient(0, 0, 0, 1, [ {
						offset : 0,
						color : 'rgba(255, 0, 0, 0.5)'
					}, {
						offset : 0.2,
						color : 'rgba(255, 0, 0, 0.3)'
					}, {
						offset : 1,
						color : 'rgba(255, 0, 0, 0)'
					} ])
				}
			},
			z : -12,
			data : data[1]
		} ]
	};
	return option;
}
