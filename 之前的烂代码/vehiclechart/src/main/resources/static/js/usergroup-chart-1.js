var myChart_usergroup_map;
init_usergroup_map_Chart();

function init_usergroup_map_Chart() {
	// 基于准备好的dom，初始化echarts实例
	myChart_usergroup_map = echarts.init(document.getElementById('usergroup'));

	var option_usergroup_map = null;
	var data = [];
	var geoCoordMap = {};

	initData(function(cdata) {
		data = cdata;

		// 指定图表的配置项和数据
		option_usergroup_map = {
			title : {
				text : '全国用户分布',
				top : '20px',
				left : 'center',
				textStyle : {
					color : color_cinfig.title_color
				}
			},
			tooltip : {
				trigger : 'item',
				formatter : function(params) {
					if (params.value) {
						return params.name + "<br/>用户总数: " + params.value;
					}
				}
			},
			legend : {
				orient : 'vertical',
				left : 'left',
				bottom : 'bottom',
				inactiveColor : '#CCC',
				data : getuserType(),
				textStyle : {
					color : color_cinfig.legend_textColor
				}
			},
			geo : {
				map : 'china',
				roam : true,
				label : {
					emphasis : {
						show : true
					}
				},
				itemStyle : {
					normal : {
						areaColor : '#323c48',// 地图块
						borderColor : '#ccc'// 地图边线
					},
					emphasis : {
						areaColor : '#2a333d'
					}
				}
			},
			visualMap : {
				min : 0,
				left : '-100%',
				top : 'bottom',
				text : [ 'High', 'Low' ],
				seriesIndex : 0,
				inRange : {
					color : '#323c48'
				},
				calculable : true
			},
			series : [ {
				name : 'chinaMap',
				type : 'map',
				roam : true,
				zlevel : 3,
				geoIndex : 0,
				rippleEffect : {
					brushType : 'stroke'
				},
				label : {
					normal : {
						show : true
					},
					emphasis : {
						show : true
					}
				},
				itemStyle : {
					normal : {
						color : '#46bee9'
					}
				},
				data : convertMapDta(data),
			/* zlevel:3 */
			} ]
		};

		if (option_usergroup_map && typeof option_usergroup_map === "object") {
			myChart_usergroup_map.setOption(option_usergroup_map, true);
		}
		myChart_usergroup_map.setOption(addPie(myChart_usergroup_map, data), true);

		myChart_usergroup_map.on('georoam', function(params) {
			resetPie(myChart_usergroup_map, params, geoCoordMap);
		});

		myChart_usergroup_map.on('datarangeselected', function(params) {
			resetPie(myChart_usergroup_map, params, geoCoordMap);
		});

		window.addEventListener("resize", function() {
			myChart_usergroup_map.resize();
			resetPie(myChart_usergroup_map, 0, geoCoordMap);
		})

		myChart_usergroup_map.on('click', function(params) {
			console.log(params)
			var province;
			switch (params.seriesType) {
			case 'map':
				province = params.name
				break;
			case 'pie':
				province = params.seriesName
				break;
			default:
				break;
			}
			if (province) {
				window.location.href = '/view/user?province=' + province
			}
		});

		myChart_usergroup_map.on("legendselectchanged", function(param) {
			var selected = param.selected;
			var selectitem = [];
			for ( var i in selected) {
				if (selected[i] == true) {
					selectitem.push(i);
				}
			}
			init_usergroup_drivingtype({
				user_type : selectitem.join(',')
			})
			init_usergroup_label_Data({
				user_type : selectitem.join(',')
			})
			init_usergroup_count_Data({
				user_type : selectitem.join(',')
			})
		});
	});

	function getuserType() {
		var resultdata;
		$.ajax({
			type : 'POST',
			url : "/usergroup/getUserType",
			datatype : 'json',
			async : false,
			success : function(data) {
				resultdata = data;
			}
		});
		return resultdata;
	}

	function initData(callback) {
		$.get('/usergroup/getMapList', function(data) {
			var mapFeatures = echarts.getMap('china').geoJson.features;

			mapFeatures.forEach(function(v) {
				// 地区名称
				var name = v.properties.name;
				// 地区经纬度
				geoCoordMap[name] = v.properties.cp;
			});
			callback(data);
		})
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

	function resetPie(myChart_usergroup_map, params, geoCoordMap) {
		var op = myChart_usergroup_map.getOption();
		var ops = op.series;
		ops.forEach(function(v, i) {
			if (i > 0) {
				var geoCoord = geoCoordMap[v.name];
				var p = myChart_usergroup_map.convertToPixel({
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
		myChart_usergroup_map.setOption(op, true);
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
					radius : radius,
					color : [ '#EEA26F', '#F3D496', '#EA7E53' ],
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

}
