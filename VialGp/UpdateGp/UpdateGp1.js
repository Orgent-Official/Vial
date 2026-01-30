var g3=630;
var _3l=80; //AWM
var utw=1760;
var ndc=1120;
var cwmm=900;
var chy=100;
var nacl=250; //uptc
var _5u=50;
var eug=105; //ymcm
var ecc=140; // ECC  

function makeop()
{
	var option = {
			title: {
				text: '市值走势图'
			},
			tooltip: {
				trigger: 'axis'
			},
			legend: {
				data: ['AWM', 'Utw', 'Vial','CWMM','Chy','5U','3L','ECC','UPTC (PTC)','YMCM(YM)']
			},
			grid: {
				left: '3%',
				right: '4%',
				bottom: '10%',
				containLabel: true
			},
			xAxis: {
				type: 'category',
				boundaryGap: false,
				data: [ '8.31', '9.1', '9.4', '9.13', '9.19', '9.26', '10.2', '当前']
			},
				yAxis: {
				type: 'value'
			},
			series: [
			{
				name: 'AWM',
				type: 'line',
				data: [133,140,160,150,100,96,94,_3l]
			},
			{
				name: 'Utw',
				type: 'line',
				data: [1723,1790,1780,1781,1720,1730,1750,utw]
			},
			{
				name: 'Vial',
				type: 'line',
				data: [200,430,460,500,900,990,1023,ndc]
			},
			{
				name: 'UPTC (PTC)',
				type: 'line',
				data: [0,0,0,0,100,230,200,nacl]
			},
			{
				name: 'CWMM',
				type: 'line',
				data: [975,992,1000,1001,959,958,979,cwmm]
			},
			{
				name: 'Chy',
				type: 'line',
				data: [145,150,151,152,152,151,130,chy]
			},
			{
				name: '5U',
				type: 'line',
				data: [135,120,100,160,120,110,100,_5u]
			},
			{
				name: '3L',
				type: 'line',
				data: [620,660,700,690,599,610,600,g3]
			},
			{
				name: 'ECC',
				type: 'line',
				data: [98,93,96,96,98,110,120,ecc]
			},
			{
				name: 'YMCM(YM)',
				type: 'line',
				data: [0,0,20,30,60,80,95,eug]
			}
		]
		};
	return option;
}

document.oncontextmenu = function() {
return false;
}
document.onkeydown = function(e) {
if (e.keyCode == 123) {
return false;
} else if (e.ctrlKey && e.shiftKey && e.keyCode == 73) {
return false;
}
}

var l1=130,l2=1540,l3=499,l4=920,l5=370,l6=43,l7=165,l8=116;


function buychecknowprice(id)
{
	switch(Number(id))
	{
	case 0:
		return 0;
		break;
	case 1:
		return _3l;
		break;
	case 2:
		return utw;
		break;
	case 3:
		return ndc;
		break;
	case 4:
		return cwmm;
		break;
	case 5:
		return eug;
		break;
	case 6:
		return chy;
		break;
	case 7:
		return nacl;
		break;
	case 8:
		return _5u;
		break;
	case 9:
		return g3;
			break;
	case 10:
			return ecc;
			break;
	}
}

function buycheckpastprice(id)
{
	return id;
}

function buycheckname(id)
{
	switch(Number(id))
	{
	case 0:
		return "无";
		break;
	case 1:
		return "AWM";
		break;
	case 2:
		return "Utw";
		break;
	case 3:
		return "Vial";
		break;
	case 4:
		return "CWMM";
		break;
	case 5:
		return "YMCM(YM)";
		break;
	case 6:
		return "Chy";
		break;
	case 7:
		return "PTC";
		break;
	case 8:
		return "5U";
		break;
	case 9:
		return "3L(Lemon实验室)";
		break;
	case 10:
			return "ECC";
			break;
	}

}


