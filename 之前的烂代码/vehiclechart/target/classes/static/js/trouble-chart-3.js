var myChart_trouble_history;
init_trouble_history();
function init_trouble_history(param) {
	var myparam = param ? param : {
		pid : '102'
	};
	$.get('/trouble/getHistoryList', myparam, function(data) {
		if (myChart_trouble_history) {
			myChart_trouble_history.clear();
			myChart_trouble_history.setOption(get_option(data));
		} else {
			myChart_trouble_history = echarts.init(document.getElementById('faulttime'));
			myChart_trouble_history.setOption(get_option(data));

			window.addEventListener("resize", function() {
				myChart_trouble_history.resize();
			});
			myChart_trouble_history.on('click', function(data) {
				if (myparam.month == data.name) {
					myparam.month = '';
				} else {
					myparam.month = data.name;
				}
				console.log(myparam);
				myChart_troublepie.clear();
				init_trouble_map_chart(myparam);
				init_trouble_tree_pie(myparam);
				init_trouble_history(myparam);
				init_trouble_count_data(myparam);
			});

		}
	});

	function get_option(data) {
		var lineData = [];
		var xdata = [];
		var ss = [];
		if (data && data.length > 0) {
			for (var i = 0; i < data[0].childs.length; i++) {
				xdata.push(data[0].childs[i].name);
			}
			for (var i = 0; i < data.length; i++) {
				var itemdata = [];
				for (var j = 0; j < data[i].childs.length; j++) {
					var ival = data[i].childs[j].value ? parseInt(data[i].childs[j].value) : 0;
					if (!lineData[j]) {
						lineData[j] = ival;
					} else {
						lineData[j] += ival;
					}
					itemdata.push({
						name : data[i].childs[j].name,
						value : data[i].childs[j].value,
						type : data[i].trouble_type
					});
				}
				ss.push({
					name : data[i].trouble_name,
					type : "bar",
					stack : "",
					barMaxWidth : 35,
					barGap : "10%",
					data : itemdata,
				});
			}
			// console.log(lineData);
		}
		ss.push({
			name : '总数',
			type : 'line',
			label : {
				normal : {
					show : false
				}
			},
			lineStyle : {
				normal : {
					color : 'red'
				}
			},
			data : lineData
		})
		var option = {
			color : color_cinfig.map_pie_color,
			title : {
				text : "故障时间分布",
				left : "center",
				textStyle : {
					color : color_cinfig.title_color
				}
			},
			tooltip : {
				trigger : "axis",
				axisPointer : {
					type : "shadow"
				}
			},
			grid : {
				borderWidth : 0,
				top : 80,
				bottom : 110,
				textStyle : {
					color : color_cinfig.grid_color
				}
			},
			calculable : true,
			xAxis : [ {
				type : "category",
				name : '月份',
				axisLine : {
					lineStyle : {
						color : color_cinfig.title_color
					}
				},
				splitLine : {
					show : false
				},
				axisTick : {
					show : false
				},
				splitArea : {
					show : false
				},
				axisLabel : {
					interval : 0,
					rotate : 30
				},
				data : xdata
			} ],
			yAxis : [ {
				type : "value",
				name : '个数',
				splitLine : {
					show : false
				},
				axisLine : {
					lineStyle : {
						color : color_cinfig.title_color
					}
				},
				axisTick : {
					show : false
				},
				axisLabel : {
					interval : 0,
				},
				splitArea : {
					show : false
				}
			} ],
			dataZoom : [ {
				show : true,
				height : 30,
				xAxisIndex : [ 0 ],
				bottom : 30,
				start : 0,
				end : 40,
				handleIcon : 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
				handleSize : '110%',
				handleStyle : {
					color : "#d3dee5",
				},
				textStyle : {
					color : "#fff"
				},
				borderColor : "#90979c"
			}, {
				type : "inside",
				show : true,
				height : 15,
				start : 1,
				end : 35
			} ],
			series : ss
		}
		return option;
	}

}
