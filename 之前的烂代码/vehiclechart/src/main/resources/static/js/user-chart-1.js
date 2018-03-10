var province = $('#province').val();
var geourl = '/static/js/echarts/province/' + provincemap[province] + '.json';
var myChart_user_map;
$.get(geourl, function(geoJson) {
	echarts.registerMap(province, geoJson);
	init_user_map_Data();
});

function init_user_map_Data() {
	$.get('/user/getMapList', {
		province : province
	}, function(data) {
		var jsondata = [];
		for (var i = 0; i < data.length; i++) {
			var itemdata = {};
			itemdata.user_id = data[i].user_id;
			itemdata.name = data[i].name;
			itemdata.value = data[i].value.split(',');
			jsondata.push(itemdata);
		}
		myChart_user_map = echarts.init(document.getElementById('userchart'));
		myChart_user_map.setOption(getusermap_option(jsondata));

		myChart_user_map.on('click', function(params) {
			if (params.componentType == 'series') {
				var user_id = params.data.user_id;
				console.log(user_id)

				init_user_activepos_Data({
					user_id : user_id
				});

				init_user_driving_mileage({
					user_id : user_id
				});

				init_user_charging({
					user_id : user_id
				});

				init_user_drving_rate({
					user_id : user_id
				});

				init_user_safetygrade({
					user_id : user_id
				});
			}
		});

		window.addEventListener("resize", function() {
			myChart_user_map.resize();
		})
	})
}

function getusermap_option(data) {

	option = {
		title : {
			text : province + '用户分布',
			top : '20px',
			left : 'center',
			textStyle : {
				color : color_cinfig.title_color
			}
		},
		tooltip : {
			trigger : 'item',
			formatter : function(param) {
				return param.data.user_id + '<br/>' + param.data.name;
			}
		},
		geo : {
			map : province,
			roam : true,
			z : 1,
			label : {
				emphasis : {
					show : true,
					color : '#fff'
				}
			},
			itemStyle : {
				normal : {
					areaColor : '#191E40',
					borderColor : '#40E0D0'
				},
				emphasis : {
					areaColor : '#323C48',
					opacity : 0.5
				}
			}
		},
		series : [ {
			name : province + '用户分布',
			type : 'scatter',
			coordinateSystem : 'geo',
			data : data,
			large : true,
			symbolSize : 10,
			label : {
				normal : {
					show : false
				},
				emphasis : {
					show : false
				}
			},
			itemStyle : {
				normal : {
					shadowBlur : 10,
					color : '#9370D4',
					shadowColor : '#9370D4'
				}
			}
		} ]
	};
	return option;
}
