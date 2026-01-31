if(typeof(Storage)!=="undefined")
        	{
        	    if(isNaN(Number(localStorage.money)))
    			{
    				localStorage.money=0;
    			}

				// 更改初始市值或修改公司 check标签
				if(isNaN(Number(localStorage.check7)))
    			{
    				localStorage.check7=0;
					init_dtbs();
    			}
    			if(isNaN(Number(localStorage.sel1)))
    			{
    				localStorage.sel1=0;
    			}
    			if(isNaN(Number(localStorage.buy1)))
    			{
    				localStorage.buy1=0;
    			}
    			if(isNaN(Number(localStorage.sel2)))
    			{
    				localStorage.sel2=0;
    			}
    			if(isNaN(Number(localStorage.buy2)))
    			{
    				localStorage.buy2=0;
    			}
    			if(isNaN(Number(localStorage.sel3)))
    			{
    				localStorage.sel3=0;
    			}
    			if(isNaN(Number(localStorage.buy3)))
    			{
    				localStorage.buy3=0;
    			}
                if(isNaN(Number(localStorage.sel4)))
                {
                    localStorage.sel4=0;
                }
                if(isNaN(Number(localStorage.buy4)))
                {
                    localStorage.buy4=0;
                }
                if(isNaN(Number(localStorage.p4)))
                {
                    localStorage.p4=0;
                }
                if(isNaN(Number(localStorage.d4)))
                {
                    localStorage.d4=0;
                }
    			if(isNaN(Number(localStorage.nn)))
    			{
    				localStorage.nn=1;
    			}
    			if(isNaN(Number(localStorage.nq)))
    			{
    				localStorage.nq=0;
    			}
				if(isNaN(Number(localStorage.d1)))
    			{
    				localStorage.d1=0;
    			}
    			if(isNaN(Number(localStorage.d2)))
    			{
    				localStorage.d2=0;
    			}
    			if(isNaN(Number(localStorage.d3)))
    			{
    				localStorage.d3=0;
    			}
    			if(isNaN(Number(localStorage.p1)))
    			{
    				localStorage.p1=500;
    			}
    			if(isNaN(Number(localStorage.p2)))
    			{
    				localStorage.p1=500;
    			}
    			if(isNaN(Number(localStorage.p3)))
    			{
    				localStorage.p1=500;
    			}
    			if(Number(localStorage.nn)==1&&Number(localStorage.money)==0)
    			{
    				localStorage.name="新用户"+Math.floor(Math.random()*(100000-0+1));
    				localStorage.nn=0;
    			}
        	    let nnn=Number(localStorage.money);
        	    document.addEventListener("DOMContentLoaded", function(){
        	        document.getElementById("gplb").innerText = "Hi(碘化氢），"+localStorage.name+"。你还剩 " + nnn.toFixed(2) + " Vial币。快去支持你的虚拟公司吧。";
        	        document.getElementById("h1h1").innerText = "你好，"+localStorage.name+"。";
        	        document.getElementById("news").innerText = "1. Ognesson炸各虚拟公司被反击\n2.Vial网站上新2.0版本\n3.一秒化钉机改良无需换化钉液";
        	        if(localStorage.sel4!="0")
        	        	document.getElementById("gp1").innerText = "你购买了虚拟 "+buycheckname(localStorage.sel4)+ " 股票共"+localStorage.buy4+" Vial币。去看看走势怎么样了吧。";
        	        if(localStorage.sel2!="0")
        	        	document.getElementById("gp2").innerText = "你购买了虚拟 "+buycheckname(localStorage.sel2)+ " 股票共"+localStorage.buy2+" Vial币。去看看走势怎么样了吧。";
        	        if(localStorage.sel3!="0")
        	        	document.getElementById("gp3").innerText = "你购买了虚拟 "+buycheckname(localStorage.sel3)+ " 股票共"+localStorage.buy3+" Vial币。去看看走势怎么样了吧。";
        	    });
        	}
        	else
        	{
        	    document.addEventListener("DOMContentLoaded", function() {
        	        alert("您的设备可能不支持 localStorge，暂时无法正常使用Vial网站。")
        	    });
        	}

        	function Check(isc)
        	{
        		var code=document.getElementById("code");
        		var value=code.value;
        		localStorage.name=value;
        		alert("更改完成，新用户名为 "+ localStorage.name + "。");
        		window.location.href="../index.html";
        	}

        	function Checkm(isc)
        	{
        		var code=document.getElementById("code1");
        		var value=code.value;
        		if(isc==true)
        		{
        			let ss=String(localStorage.us);
        			if(ss.indexOf(String(value))!=-1)
        			{
        				alert("该兑换码已经被使用，不能用于兑换。");
        			}
        			else if(Number(value)%131==0&&Number(value)>0&&Number(value)!=Number(localStorage.us)&&Number(value)>10000)
        			{
        				//document.getElementById("otp").innerText = "本兑换码你可以兑换 10 Orgent币。";
        				localStorage.money=Number(localStorage.money)+10;
        				code.innerText="";
						var s=String(localStorage.us);
        				s=String(s)+String(value);
        				localStorage.us=s;
        				alert("已成功兑换 10 Orgent币。余额 " + localStorage.money + " Orgent币。");
        				window.location.href="../index.html";
        			}
					else if(Number(value)%331==0&&Number(value)>0&&Number(value)!=Number(localStorage.us)&&Number(value)>10000)
        			{
        				//document.getElementById("otp").innerText = "本兑换码你可以兑换 50 Orgent币。";
        				localStorage.money=Number(localStorage.money)+50;
        				code.innerText="";
						var s=String(localStorage.us);
        				s=String(s)+String(value);
        				localStorage.us=s;
        				alert("已成功兑换 50 Orgent币。余额 " + localStorage.money + " Orgent币。");
        				window.location.href="../index.html";
        			}
        			else
        			{
        				alert("兑换码无效哦。");
        			}
        		}
        	}

        	function Buyt(name,cos,link)
            {
                if(cos>Number(localStorage.money))
                {
                    alert("Vial币不够啦。");
                }
                else
                {
                    if(!confirm("确定要购买/下载 " + name + " 共 " + cos + " Vial币吗？")) return;
                    alert("操作成功完成。");
                    localStorage.money=Number(Number(localStorage.money)-Number(cos));
                    window.location.href=link;
                }
            }
