var geoCoordMap = {}, myChart_troublemap;

init_trouble_map_chart();

function init_trouble_map_chart(param) {
	var myparam = param ? param : {
		pid : '102'
	};
	$.get('/trouble/getTroubleMap', myparam, function(data) {
		// console.log('=========trouble map')
		// console.log(data)
		if (myChart_troublemap) {
			myChart_troublemap.clear();
		} else {
			myChart_troublemap = echarts.init(document.getElementById('faultarea'));
			var mapFeatures = echarts.getMap('china').geoJson.features;
			mapFeatures.forEach(function(v) {
				// 地区名称
				var name = v.properties.name;
				// 地区经纬度
				geoCoordMap[name] = v.properties.cp;
			});
		}
		var troulemap_option = gettroulemap_option(data, myparam.month);

		// 指定图表的配置项和数据
		if (troulemap_option && typeof troulemap_option === "object") {
			myChart_troublemap.setOption(troulemap_option, true);
		}

		myChart_troublemap.setOption(addPie(myChart_troublemap, data), true);

		myChart_troublemap.on('georoam', function(params) {
			var op = resetPie(myChart_troublemap, params, geoCoordMap);
			myChart_troublemap.setOption(op, true);
		});

		myChart_troublemap.on('datarangeselected', function(params) {
			var op = resetPie(myChart_troublemap, params, geoCoordMap);
			myChart_troublemap.setOption(op, true);
		});

		window.addEventListener("resize", function() {
			myChart_troublemap.resize();
			var op = resetPie(myChart_troublemap, 0, geoCoordMap);
			myChart_troublemap.setOption(op, true);
		})
		myChart_troublemap.on('click', function(data) {
			var province;
			switch (data.seriesType) {
			case 'map':
				province = data.name
				break;
			case 'pie':
				province = data.seriesName
				break;
			default:
				break;
			}
			myparam.provice = province;
			console.log(myparam);
			init_trouble_tree_pie(myparam);
			init_trouble_history(myparam);
			init_trouble_count_data(myparam);
		})
	});
}

function gettroulemap_option(data, month) {
	var option = {
		title : {
			text : '全国故障分布',
			left : 'center',
			textStyle : {
				color : color_cinfig.title_color
			},
			subtext : month
		},
		tooltip : {
			trigger : 'item',
			formatter : function(params) {
				if (params.value) {
					return params.name + "<br/>故障总数: " + params.value;
				}
			}
		},
		selectedMode : 'single',
		visualMap : {
			min : 0,
			left : '-100%',
			top : 'bottom',
			text : [ 'High', 'Low' ],
			seriesIndex : 0,
			inRange : {
				color : 'rgba(51, 69, 89, .5)'
			},
			calculable : true
		},
		geo : {
			map : 'china',
			roam : true,
			z : 1,
			label : {
				emphasis : {
					show : true
				}
			},
			itemStyle : {
				normal : {
					color : 'rgba(51, 69, 89, .5)', // 地图背景色
					borderColor : '#ccc' // 省市边界线
				},
				emphasis : {
					color : '#1F95BB'// 悬浮背景
				}
			}
		},
		series : [ {
			name : 'chinaMap',
			type : 'map',
			mapType : 'china',
			zlevel : 3,
			geoIndex : 0,
			roam : true,
			label : {
				normal : {
					show : true
				},
				emphasis : {
					show : true
				}
			},
			data : convertMapDta(data),
		/* zlevel:3 */
		} ]
	};
	return option;
}

function convertMapDta(data) {
	var mapData = [];
	data.forEach(function(v) {
		var sumval = 0;
		v.childs.forEach(function(v1) {
			sumval += parseInt(v1.value);
		})
		mapData.push({
			'name' : v.provice,
			'value' : sumval
		});
	});
	return mapData;
}

function resetPie(chart, params, geoCoordMap) {
	var op = chart.getOption();
	var ops = op.series;
	ops.forEach(function(v, i) {
		if (i > 0) {
			var geoCoord = geoCoordMap[v.name];
			var p = chart.convertToPixel({
				seriesIndex : 0
			}, geoCoord);
			v.center = p;
			// if (params != 0 && params.zoom) {
			// v.radius = v.radius * params.zoom;
			// }
			if (params != 0 && params.selected) {
				var rangeFirstNumber = params.selected[0];
				var rangeSecondNumber = params.selected[1];
				var pd = v.data[0].value;
				if (pd < rangeFirstNumber || pd > rangeSecondNumber) {
					v.itemStyle.normal.opacity = 0;
				} else {
					v.itemStyle.normal.opacity = 1;
				}
			}
		}
	});
	return op;
}

function addPie(chart, data) {
	var op = chart.getOption();
	var sd = op.series;
	for (var i = 0; i < data.length; i++) {
		var radius = 15;
		var geoCoord = geoCoordMap[data[i].provice];
		if (geoCoord) {
			var vr = [];
			(data[i].childs).map(function(v, j) {
				vr.push({
					name : v.name,
					value : v.value
				});
			});
			var p = chart.convertToPixel({
				seriesIndex : 0
			}, geoCoord);
			sd.push({
				name : data[i].provice,
				type : 'pie',
				tooltip : {
					formatter : function(params) {
						return params.seriesName + "<br/>" + params.name + " : " + params.value;
					}
				},
				color : color_cinfig.map_pie_color,
				radius : radius,
				center : p,
				data : vr,
				zlevel : 4,
				label : {
					normal : {
						show : false,
					},
				},
				labelLine : {
					normal : {
						show : false
					}
				},
				itemStyle : {
					mormal : {
						opacity : 1
					}
				}
			});
		}
	}
	return op;
}
