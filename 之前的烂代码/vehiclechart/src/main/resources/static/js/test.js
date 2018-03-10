//ecStat 是 ECharts 的统计扩展，需要额外添加扩展脚本，参加上方“脚本”
// 详情请移步 https://github.com/ecomfe/echarts-stat
// 右图可视化聚类算法动态分割的过程（聚类算法可以支持多维数值属性）

var latlimit = [ 3.86, 53.55 ];
var lnglimit = [ 73.66, 135.05 ];
var seriesdatas = [];
function initData(callback) {
	for (var i = 0; i < 10; i++) {
		var itemdata = [];
		for (var j = 0; j < 20; j++) {
			var vlat = Math.random() * (latlimit[1] - latlimit[0]) + latlimit[0];
			var vlng = Math.random() * (lnglimit[1] - lnglimit[0]) + lnglimit[0];
			itemdata.push([ vlat, vlng ])
		}
		seriesdatas.push(itemdata);
	}
	callback(seriesdatas[0]);
}

initData(function(data) {
	var clusterNumber = 6;
	var step = ecStat.clustering.hierarchicalKMeans(data, clusterNumber, true);
	var result;
	var option = {
		timeline : {
			top : 'center',
			right : 35,
			height : 300,
			width : 10,
			inverse : true,
			playInterval : 2500,
			symbol : 'none',
			orient : 'vertical',
			axisType : 'category',
			autoPlay : true,
			label : {
				normal : {
					show : true
				}
			},
			data : []
		},
		baseOption : {
			xAxis : {
				type : 'value'
			},
			yAxis : {
				type : 'value'
			},
			series : [ {
				type : 'scatter'
			} ]
		},
		options : []
	};

	for (var i = 0; i < seriesdatas.length; i++) {
		option.options.push(getOption(seriesdatas[i], i));
		option.timeline.data.push(i + '');

	}
	var myChart = echarts.init(document.getElementById('main'));

	myChart.setOption(option);

});

function getOption(result, k) {
	var color = [ '#c23531', '#2f4554', '#61a0a8', '#d48265', '#91c7ae', '#749f83', '#ca8622', '#bda29a', '#6e7074', '#546570', '#c4ccd3' ];
	var series = {
		name : '活动点' + k,
		type : 'scatter',
		label : {
			emphasis : {
				show : true
			}
		},
		animation : true,
		data : result
	};

	return {
		tooltip : {
			trigger : 'axis',
			axisPointer : {
				type : 'cross'
			}
		},
		series : series,
		color : color
	};
}