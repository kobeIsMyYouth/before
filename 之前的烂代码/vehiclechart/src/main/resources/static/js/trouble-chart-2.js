var myChart_troublepie;
init_trouble_tree_pie();
function init_trouble_tree_pie(param) {
	var myparam = param ? param : {
		pid : '102'
	};
	$.get('/trouble/getTroubleTree', myparam, function(data) {
		var treedata = fmtData(data);
		// console.log('=============getTroubleTree');
		// console.log(treedata);
		if (myChart_troublepie) {
			myChart_troublepie.setOption(gettroublepie_option(treedata));
		} else {
			myChart_troublepie = echarts.init(document.getElementById('faultcategory'));
			myChart_troublepie.setOption(gettroublepie_option(treedata));

			myChart_troublepie.on('click', function(data) {
				console.log(data);
				if (data.seriesIndex == 0 && data.data.type != '102') {
					myparam.pid = data.data.type.substring(0, data.data.type.length - 2);
				} else {
					myparam.pid = data.data.type;
					myChart_troublepie.clear();
				}
				init_trouble_map_chart(myparam);
				init_trouble_tree_pie(myparam);
				init_trouble_history(myparam);
				init_trouble_count_data(myparam);
			})

			window.addEventListener("resize", function() {
				myChart_troublepie.resize();
			})
		}
	});

	function fmtData(data) {
		if (!data || data.length == 0) {
			return;
		}
		var startleavel = Math.floor(data[0].type.length / 2)
		var arrs = [ [] ];
		for (var i = 0; i < data.length; i++) {
			item = data[i];
			var leavel = Math.floor(item.type.length / 2);
			if (arrs.length <= leavel - startleavel)
				for (var j = arrs.length; j <= leavel - startleavel; j++) {
					arrs.push([]);
				}
			arrs[leavel - startleavel].push(item);
		}

		return arrs;
	}
}

function gettroublepie_option(data) {
	var ss = [];
	if (data && data.length >= 0) {
		ss.push({
			name : data[0][0].name + '总数',
			type : 'pie',
			clockWise : true,
			hoverAnimation : true,
			center: ['50%', '55%'],
			radius : [ 0, '20%' ],
			label : {
				normal : {
					position : 'center'
				}
			},
			data : [ {
				type : data[0][0].type,
				value : data[0][0].value,
				label : {
					normal : {
						formatter : data[0][0].name + '\n故障总数',
						textStyle : {
							color : '#000'
						}
					}
				}
			}, {
				type : data[0][0].type,
				tooltip : {
					show : false
				},
				label : {
					normal : {
						formatter : '' + data[0][0].value,
						textStyle : {
							color : '#fff'
						}
					}
				}
			} ]
		});
		for (var i = 1; i < data.length; i++) {
			var radius = Math.floor(100 / data.length) - 5;
			radius = radius < 1 ? 1 : radius;
			ss.push({
				type : 'pie',
				selectedMode : 'single',
				center: ['50%', '55%'],
				radius : [ (radius * i + 5) + '%', (radius * (i + 1)) + '%' ],
				color : color_cinfig.pie_range_color,
				label : {
					normal : {
						show : false
					}
				},
				labelLine : {
					normal : {
						show : false
					}
				},
				data : data[i]
			});
		}
	} else {
		myChart_troublepie.clear();
	}

	var option = {
		title : {
			text : '故障类别比例',
			left : 'center',
			textStyle : {
				color : color_cinfig.title_color
			}
		},
		tooltip : {
			trigger : 'item',
			formatter : "{a} <br/>{b}: {c} ({d}%)"
		},
		toolbox : {
			show : true,
			orient : 'vertical',
			left : 'right',
			top : 'center'
		},
		series : ss
	};
	return option;
}
