这是updategp2.js：var news="aaa";

var llemon=900,lemon=900,bzlemon=0; // Lemon
var lvial=1100,vial=1100,bzvial=0; // Vial
var lutw=1500,utw=1500,bzutw=0; // Utw
var lcwmm=100,cwmm=100,bzcwmm=0; // CWMM
var luptc=100,uptc=100,bzuptc=0; // PTC
var lfivu=10,fivu=10,bzfivu=0; // 5U
var lecc=140,ecc=140,bzecc=0; // ECC
var lawm=80,awm=80,bzawm=0; // AWM
var lhsf=40,hsf=40,bzhsf=0; // HSF
var luvs=50,uvs=60,bzuvs=0; // UVS
var lubn=50,ubn=50,bzubn=0; // Ubn
var lforest=50,forest=50,bzforest=50; // FOREST
var lcuo=200,cuo=200,bzcuo=0; // CuO
var logn=30,ogn=30,bzogn=0; // Ognesson

var chart;
var updateInterval;

function init_dtbs()
{
	localStorage.llemon = llemon;
    localStorage.lemon = lemon;
    localStorage.bzlemon = bzlemon;
    localStorage.lvial = lvial;
    localStorage.vial = vial;
    localStorage.bzvial = bzvial;
    localStorage.lutw = lutw;
    localStorage.utw = utw;
    localStorage.bzutw = bzutw;
    localStorage.lcwmm = lcwmm;
    localStorage.cwmm = cwmm;
    localStorage.bzcwmm = bzcwmm;
    localStorage.luptc = luptc;
    localStorage.uptc = uptc;
    localStorage.bzuptc = bzuptc;
    localStorage.lfivu = lfivu;
    localStorage.fivu = fivu;
    localStorage.bzfivu = bzfivu;
    localStorage.lecc = lecc;
    localStorage.ecc = ecc;
    localStorage.bzecc = bzecc;
    localStorage.lawm = lawm;
    localStorage.awm = awm;
    localStorage.bzawm = bzawm;
    localStorage.lhsf = lhsf;
    localStorage.hsf = hsf;
    localStorage.bzhsf = bzhsf;
    localStorage.luvs = luvs;
    localStorage.uvs = uvs;
    localStorage.bzuvs = bzuvs;
    localStorage.lubn = lubn;
    localStorage.ubn = ubn;
    localStorage.bzubn = bzubn;
    localStorage.lforest = lforest;
    localStorage.forest = forest;
    localStorage.bzforest = bzforest;
    localStorage.lcuo = lcuo;
    localStorage.cuo = cuo;
    localStorage.bzcuo = bzcuo;
    localStorage.logn = logn;
    localStorage.ogn = ogn;
    localStorage.bzogn = bzogn;
}

function save_data()
{
	localStorage.llemon = Number(llemon);
    localStorage.lemon = Number(lemon);
    localStorage.bzlemon = Number(bzlemon);
    localStorage.lvial = Number(lvial);
    localStorage.vial = Number(vial);
    localStorage.bzvial = Number(bzvial);
    localStorage.lutw = Number(lutw);
    localStorage.utw = Number(utw);
    localStorage.bzutw = Number(bzutw);
    localStorage.lcwmm = Number(lcwmm);
    localStorage.cwmm = Number(cwmm);
    localStorage.bzcwmm = Number(bzcwmm);
    localStorage.luptc = Number(luptc);
    localStorage.uptc = Number(uptc);
    localStorage.bzuptc = Number(bzuptc);
    localStorage.lfivu = Number(lfivu);
    localStorage.fivu = Number(fivu);
    localStorage.bzfivu = Number(bzfivu);
    localStorage.lecc = Number(lecc);
    localStorage.ecc = Number(ecc);
    localStorage.bzecc = Number(bzecc);
    localStorage.lawm = Number(lawm);
    localStorage.awm = Number(awm);
    localStorage.bzawm = Number(bzawm);
    localStorage.lhsf = Number(lhsf);
    localStorage.hsf = Number(hsf);
    localStorage.bzhsf = Number(bzhsf);
    localStorage.luvs = Number(luvs);
    localStorage.uvs = Number(uvs);
    localStorage.bzuvs = Number(bzuvs);
    localStorage.lubn = Number(lubn);
    localStorage.ubn = Number(ubn);
    localStorage.bzubn = Number(bzubn);
    localStorage.lforest = Number(lforest);
    localStorage.forest = Number(forest);
    localStorage.bzforest = Number(bzforest);
    localStorage.lcuo = Number(lcuo);
    localStorage.cuo = Number(cuo);
    localStorage.bzcuo = Number(bzcuo);
    localStorage.logn = Number(logn);
    localStorage.ogn = Number(ogn);
    localStorage.bzogn = Number(bzogn);
}

function load_data()
{
	if (localStorage.getItem('llemon') === null)
	{
        init_dtbs();
    }
	llemon = Number(localStorage.llemon) || llemon;
    lemon = Number(localStorage.lemon) || lemon;
    bzlemon = Number(localStorage.bzlemon) || bzlemon;
    lvial = Number(localStorage.lvial) || lvial;
    vial = Number(localStorage.vial) || vial;
    bzvial = Number(localStorage.bzvial) || bzvial;
    lutw = Number(localStorage.lutw) || lutw;
    utw = Number(localStorage.utw) || utw;
    bzutw = Number(localStorage.bzutw) || bzutw;
    lcwmm = Number(localStorage.lcwmm) || lcwmm;
    cwmm = Number(localStorage.cwmm) || cwmm;
    bzcwmm = Number(localStorage.bzcwmm) || bzcwmm;
    luptc = Number(localStorage.luptc) || luptc;
    uptc = Number(localStorage.uptc) || uptc;
    bzuptc = Number(localStorage.bzuptc) || bzuptc;
    lfivu = Number(localStorage.lfivu) || lfivu;
    fivu = Number(localStorage.fivu) || fivu;
    bzfivu = Number(localStorage.bzfivu) || bzfivu;
    lecc = Number(localStorage.lecc) || lecc;
    ecc = Number(localStorage.ecc) || ecc;
    bzecc = Number(localStorage.bzecc) || bzecc;
    lawm = Number(localStorage.lawm) || lawm;
    awm = Number(localStorage.awm) || awm;
    bzawm = Number(localStorage.bzawm) || bzawm;
    lhsf = Number(localStorage.lhsf) || lhsf;
    hsf = Number(localStorage.hsf) || hsf;
    bzhsf = Number(localStorage.bzhsf) || bzhsf;
    luvs = Number(localStorage.luvs) || luvs;
    uvs = Number(localStorage.uvs) || uvs;
    bzuvs = Number(localStorage.bzuvs) || bzuvs;
    logn = Number(localStorage.logn) || logn;
    ogn = Number(localStorage.ogn) || ogn;
    bzogn = Number(localStorage.bzogn) || bzogn;
    lcuo = Number(localStorage.lcuo) || lcuo;
    cuo = Number(localStorage.cuo) || cuo;
    bzcuo = Number(localStorage.bzcuo) || bzcuo;
    lforest = Number(localStorage.lforest) || lforest;
    forest = Number(localStorage.forest) || forest;
    bzforest = Number(localStorage.bzforest) || bzforest;
    lubn = Number(localStorage.lubn) || lubn;
    ubn = Number(localStorage.ubn) || ubn;
    bzubn = Number(localStorage.bzubn) || bzubn;
}

function update_all() {
    load_data();
    
    function getRandomChange() {
        return Math.floor(Math.random() * 5) + 0;
    }

    // 更新lemon
    llemon = lemon;
    if (bzlemon === 1) {
        const change = getRandomChange();
        lemon = Number(lemon) + change;
    } else {
        const change = getRandomChange();
        const tempValue = Number(lemon) + (Math.random() > 0.5 ? change : -change);
        lemon = Math.max(0, tempValue); // 确保不小于0
    }

    // 更新vial
    lvial = vial;
    if (bzvial === 1) {
        const change = getRandomChange();
        vial = Number(vial) + change;
    } else {
        const change = getRandomChange();
        const tempValue = Number(vial) + (Math.random() > 0.5 ? change : -change);
        vial = Math.max(0, tempValue); // 确保不小于0
    }

    // 更新utw
    lutw = utw;
    if (bzutw === 1) {
        const change = getRandomChange();
        utw = Number(utw) + change;
    } else {
        const change = getRandomChange();
        const tempValue = Number(utw) + (Math.random() > 0.5 ? change : -change);
        utw = Math.max(0, tempValue); // 确保不小于0
    }

    // 更新cwmm
    lcwmm = cwmm;
    if (bzcwmm === 1) {
        const change = getRandomChange();
        cwmm = Number(cwmm) + change;
    } else {
        const change = getRandomChange();
        const tempValue = Number(cwmm) + (Math.random() > 0.5 ? change : -change);
        cwmm = Math.max(0, tempValue); // 确保不小于0
    }

    // 更新uptc
    luptc = uptc;
    if (bzuptc === 1) {
        const change = getRandomChange();
        uptc = Number(uptc) + change;
    } else {
        const change = getRandomChange();
        const tempValue = Number(uptc) + (Math.random() > 0.5 ? change : -change);
        uptc = Math.max(0, tempValue); // 确保不小于0
    }

    // 更新fivu
    lfivu = fivu;
    if (bzfivu === 1) {
        const change = getRandomChange();
        fivu = Number(fivu) + change;
    } else {
        const change = getRandomChange();
        const tempValue = Number(fivu) + (Math.random() > 0.5 ? change : -change);
        fivu = Math.max(0, tempValue); // 确保不小于0
    }

    // 更新ecc
    lecc = ecc;
    if (bzecc === 1) {
        const change = getRandomChange();
        ecc = Number(ecc) + change;
    } else {
        const change = getRandomChange();
        const tempValue = Number(ecc) + (Math.random() > 0.5 ? change : -change);
        ecc = Math.max(0, tempValue); // 确保不小于0
    }

    // 更新awm
    lawm = awm;
    if (bzawm === 1) {
        const change = getRandomChange();
        awm = Number(awm) + change;
    } else {
        const change = getRandomChange();
        const tempValue = Number(awm) + (Math.random() > 0.5 ? change : -change);
        awm = Math.max(0, tempValue); // 确保不小于0
    }

    // 更新 HSF
    lhsf = hsf;
    if (bzhsf === 1) {
        const change = getRandomChange();
        hsf = Number(hsf) + change;
    } else {
        const change = getRandomChange();
        const tempValue = Number(hsf) + (Math.random() > 0.5 ? change : -change);
        hsf = Math.max(0, tempValue); // 确保不小于0
    }

	// 更新 UVS
	luvs = uvs;
    if (bzuvs === 1) {
        const change = getRandomChange();
        uvs = Number(uvs) + change;
    } else {
        const change = getRandomChange();
        const tempValue = Number(uvs) + (Math.random() > 0.5 ? change : -change);
        uvs = Math.max(0, tempValue); // 确保不小于0
    }

    // 更新 ubn
    lubn = ubn;
    if (bzubn === 1) {
        const change = getRandomChange();
        ubn = Number(ubn) + change;
    } else {
        const change = getRandomChange();
        const tempValue = Number(ubn) + (Math.random() > 0.5 ? change : -change);
        ubn = Math.max(0, tempValue); // 确保不小于0
    }

    // 更新 forest
    lforest = forest;
    if (bzforest === 1) {
        const change = getRandomChange();
        forest = Number(forest) + change;
    } else {
        const change = getRandomChange();
        const tempValue = Number(forest) + (Math.random() > 0.5 ? change : -change);
        forest = Math.max(0, tempValue); // 确保不小于0
    }

    // 更新 cuo
    lcuo = cuo;
    if (bzcuo === 1) {
        const change = getRandomChange();
        cuo = Number(cuo) + change;
    } else {
        const change = getRandomChange();
        const tempValue = Number(cuo) + (Math.random() > 0.5 ? change : -change);
        cuo = Math.max(0, tempValue); // 确保不小于0
    }

    // 更新 ogn
    logn = ogn;
    if (bzogn === 1) {
        const change = getRandomChange();
        ogn = Number(ogn) + change;
    } else {
        const change = getRandomChange();
        const tempValue = Number(ogn) + (Math.random() > 0.5 ? change : -change);
        ogn = Math.max(0, tempValue); // 确保不小于0
    }
    save_data();
    updateChart();
    
}

function buychecknowprice(id)
{
	load_data();
	switch(Number(id))
	{
	case 0:
		return 0;
		break;
	case 1:
		return awm;
		break;
	case 2:
		return utw;
		break;
	case 3:
		return vial;
		break;
	case 4:
		return cwmm;
		break;
	case 5:
		return uvs;
		break;
	case 6:
		return hsf;
		break;
	case 7:
		return uptc;
		break;
	case 8:
		return fivu;
		break;
	case 9:
		return lemon;
		break;
	case 10:
		return ecc;
		break;
    case 11:
        return ubn;
        break;
    case 12:
        return forest;
        break;
    case 13:
        return cuo;
        break;
    case 14:
        return ogn;
        break;
	}
}

function buycheckpastprice(id)
{
	load_data();
	switch(Number(id))
	{
	case 0:
		return 0;
		break;
	case 1:
		return lawm;
		break;
	case 2:
		return lutw;
		break;
	case 3:
		return lvial;
		break;
	case 4:
		return lcwmm;
		break;
	case 5:
		return luvs;
		break;
	case 6:
		return lhsf;
		break;
	case 7:
		return luptc;
		break;
	case 8:
		return lfivu;
		break;
	case 9:
		return llemon;
		break;
	case 10:
		return lecc;
		break;
    case 11:
        return lubn;
        break;
    case 12:
        return lforest;
        break;
    case 13:
        return lcuo;
        break;
    case 14:
        return logn;
        break;
	}
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
		return "UVS";
		break;
	case 6:
		return "HSF";
		break;
	case 7:
		return "PTC";
		break;
	case 8:
		return "5U";
		break;
	case 9:
		return "Lemon";
		break;
	case 10:
		return "ECC";
		break;
    case 11:
        return "Ubn";
        break;
    case 12:
        return "FOREST";
        break;
    case 13:
        return "CuO";
        break;
    case 14:
        return "Ognesson";
        break;
	}

}

function makeop()
{
	load_data();
	option = {
        title: {
                text: '当前市值'
            },
  		xAxis: {
    		type: 'category',
    		data: ['AWM', 'Utw', 'Vial', 'CWMM', 'UVS', 'HSF', 'PTC', '5U', 'Lemon', 'ECC', 'Ubn', 'FOREST', 'CuO', 'Ognesson'],
    		axisLabel: {
      			interval: 0,
      			rotate: 0, 
      			margin: 20,
      			fontSize: 10,
      			formatter: function(value) {
        			if (value.length > 15) {
          				return value.substring(0, 15) + '...'; 
        			}
        			return value;
      			}
   	 		}
  		},
  		yAxis: {
    		type: 'value'
  		},
  		series: [
    		{
      			data: [awm,utw,vial,cwmm,uvs,hsf,uptc,fivu,lemon,ecc,ubn,forest,cuo,ogn],
      			type: 'bar',
      			showBackground: true,
      			label: {
        			show: true,
        			position: 'top',
        			distance: 15, 
        			verticalAlign: 'middle',
        			textStyle: {
          				color: '#424656',
          				fontSize: 10
        			},
        			formatter: function(params)
        			{
          
          				let num = buychecknowprice(params.dataIndex+1) / buycheckpastprice(params.dataIndex+1);
          				num = Math.round(num * 100) / 100;
          				var zf='+';
          				if(buychecknowprice(params.dataIndex+1)<buycheckpastprice(params.dataIndex+1)) zf='-';
          				return (
            				buychecknowprice(params.dataIndex+1) + '(' + zf + num + '%' + ')'
          				);
        			}
      			}
    		}
  		]
	};
	return option;
}

        function startRealTimeUpdate() {
            if (!updateInterval) {
                updateInterval = setInterval(update_all, 1000);
            }
        }

        function stopRealTimeUpdate() {
            if (updateInterval) {
                clearInterval(updateInterval);
                updateInterval = null;
                alert('已停止实时更新。执行 startRealTimeUpdate 来重新开始更新。');
            }
        }

function mygpp()
{
	var option = {
            title: {
                text: '我购买的股票'
            },
                xAxis: {
                    interval: 0,
                    data: [buycheckname(localStorage.sel1),buycheckname(localStorage.sel2),buycheckname(localStorage.sel3)],
                    axisLabel: {
      interval: 0,
      rotate: 0, 
      margin: 20,
      fontSize: 12,
      formatter: function(value) {
        if (value.length > 15) {
          return value.substring(0, 15) + '...'; 
        }
        return value;
      }
    }
                },
                yAxis: {},
                series: [
                    {
                        type: 'bar',
                        data: [localStorage.buy1,localStorage.buy2,localStorage.buy3]
                    },
                    {
                        type: 'bar',
                        data: [(buychecknowprice(localStorage.sel1)/localStorage.p1*1.000*localStorage.buy1),(buychecknowprice(localStorage.sel2)/localStorage.p2*1.000*localStorage.buy2),(buychecknowprice(localStorage.sel3)/localStorage.p3*1.000*localStorage.buy3)]
                    }
                ]  
        };
    return option;
}

function btsheet()
{
    var option = {
            title: {
                text: '市场份额'
            },
        tooltip: {
            trigger: 'item'
        },
        legend: {
            top: '8%',
            left: 'center'
        },
        series: [
            {
            name: '市场份额',
            type: 'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            itemStyle: {
                borderRadius: 10,
                borderColor: '#fff',
                borderWidth: 2
            },
            label: {
                show: false,
                position: 'center'
            },
            emphasis: {
                label: {
                show: true,
                fontSize: '40',
                fontWeight: 'bold'
                }
            },
            labelLine: {
                show: false
            },
            data: [
                { value: utw, name: 'Utw' },
                { value: vial, name: 'Vial' },
                { value: cwmm, name: 'CWMM' },
                { value: cuo, name: 'CuO' },
                { value: hsf, name: 'HSF' },
                { value: ecc, name: 'ECC' },
                { value: lemon, name: 'Lemon' },
                { value: awm, name: 'AWM' }
            ]
            }
        ]
    };
    return option;
}