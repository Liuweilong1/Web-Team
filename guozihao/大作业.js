/*
* @Author: 16284
* @Date:   2019-12-20 07:58:21
* @Last Modified by:   16284
* @Last Modified time: 2019-12-25 15:18:46
*/

function getStyle(obj, attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	} else {
		return getComputedStyle(obj, null)[attr];
	}
}
function animate(obj,json,callback){
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		var isStop = true;
		for(var attr in json){
			var now = 0;
			if(attr == 'opacity'){
				now = parseInt(getStyle(obj,attr)*100);
			}else{
				now = parseInt(getStyle(obj,attr));
			}
			var speed = (json[attr] - now) / 8;
			speed = speed>0?Math.ceil(speed):Math.floor(speed);
			var cur = now + speed;
			if(attr == 'opacity'){
				obj.style[attr] = cur / 100;
			}else{
				obj.style[attr] = cur + 'px';
			}
			if(json[attr] !== cur){
				isStop = false;
			}
		}
		if(isStop){
			clearInterval(obj.timer);
			callback&&callback();
		}
	}, 30)
}

setInterval(function(){
	var now = new Date();
	var h = now.getHours();
	var m = now.getMinutes();
	var s = now.getSeconds();
		
	var _date = [
		h<10?0:Math.floor(h/10), h%10,
		m<10?0:Math.floor(m/10), m%10,
		s<10?0:Math.floor(s/10), s%10
		]	
	var imgs = document.getElementById("time").getElementsByTagName("img");
	for(var i=0; i<imgs.length; i++){
		imgs[i].src = "img/"+_date[i]+".png";
	}
}, 1000);

var laba = document.getElementById("laba");
	document.body.onload = function(){
		var time1 = setInterval(function(){
			var now = parseInt(getStyle(laba,"right"));
			laba.style.right = now + 1 + "px";
			if(now == 800){
				laba.style.right = -200 + "px";
				now = 0;
			}
		},20);
	}

var on = document.getElementById("on");
var insert = document.getElementById("insert");
on.onclick = function(){
	window.open("https://liuweilong1.github.io/Web-Team/liutianyi/sign in.html");
};
insert.onclick= function(){
	window.open("https://liuweilong1.github.io/Web-Team/liutianyi/sign on.html");
};

var t = true;
var search = document.getElementById("search");
search.onclick = function(){
	search.value = "";
	search.style.color = "black";
	search.style.border = "5px solid lightblue";
	search.style.margin = "0px 6px 0px 0px";
}
search.onblur = function(){
		search.value = "      你想搜点什么呢？";
		search.style.color = "gray";
		search.style.border = "3px solid orange";
		search.style.margin = "0px 10px 0px 0px";
}


var pans = document.getElementById("pans");
pans.onclick = function(){
	window.open("https://liuweilong1.github.io/Web-Team/liyongjian/11.html");
}

var searchB = document.getElementById("searchB");
var search = document.getElementById("search");
	searchB.onclick = function(){
		searchB.value = "啾咪";
		searchB.style.backgroundColor = "lightblue";
		searchB.style.fontWeight = 1000;
		window.open("https://liuweilong1.github.io/Web-Team/liyanbo/work.html");
	}
	searchB.onblur = function(){
		searchB.value = "搜索";
		searchB.style.backgroundColor = "pink";
		searchB.style.fontWeight = 500;
	}

var carmer = document.getElementById("carmer");
	carmer.onmousemove = function(){
		animate(carmer,{opacity:30});
	}
	carmer.onmouseout = function(){
		animate(carmer,{opacity:100});
	}

var bo = document.getElementById("bo");
	var ull = document.getElementById("ull").children;
	var pans = document.getElementById("pans");
	var left = document.getElementById("left");
	var right = document.getElementById("right");
	var ge = 1;
	var time = setInterval(next,1500);
	var tag = false;
	function next(){
		if(tag){
			return;
		}
		tag = true;
		ge++;
		ullmove();
		animate(pans,{left:-600*ge}, function(){
			if(ge == 6){
				pans.style.left = '-600px';
				ge = 1;
			}
			tag = false;
		});
	}
	function prev(){
		if(tag){
			return;
		}
		tag = true;
		ge--;
		ullmove();
		animate(pans,{left:-600*ge},function(){
			if(ge == 0){
				pans.style.left = '-3000px';
				ge = 5;
			}
			tag = false;
		});
	}
	bo.onmouseover = function(){
		animate(left,{opacity:50});
		animate(right,{opacity:50});
		clearInterval(time);
	}
	bo.onmouseout = function(){
		animate(left,{opacity:0});
		animate(right,{opacity:0});
		time = setInterval(next,1500);
	}

	right.onclick = next;
	left.onclick = prev;

	for(var i=0;i<ull.length;i++){
		ull[i].ge = i;
		ull[i].onclick = function(){
			ge = this.ge +1;
			ullmove();
			animate(pans,{left:-600*ge});
		}
	}
	
	function ullmove(){
		for(var i = 0;i < ull.length;i++){
			ull[i].className = "";
		}
		if(ge > 5){
			ull[0].className = "action";
		}
		else if(ge <= 0){
			ull[4].className = "action";
		}
		else{
			ull[ge-1].className = "action";
		}
	}

var onDiv = document.getElementById("cf1");
    onDiv.onmouseover = function(){
        startMove(0);
    }
    onDiv.onmouseout = function(){
        startMove(-300);
    }
    var timer;
    function startMove(target){clearInterval(timer);
        timer =  setInterval(function(){
            var speed = 0;
            if(onDiv.offsetLeft < target){
                speed = 5;
            }
            else{
                speed = -2;
            }
          if(onDiv.offsetLeft == target){
            clearInterval(timer);
          }  
          else{
            onDiv.style.left = onDiv.offsetLeft + speed + "px";
          }
        }, 30);
    }

    var box = document.getElementById("box");
	var arrLI = box.children[0].children;
	var bigbox = document.getElementById("bigp");
	for(var i=0; i<arrLI.length && i != 4; i++){
		
		arrLI[i].onmouseover = (function(num){
			return function(){
				this.onmousemove = function(evt){
					var e = evt || event;
					var x = e.clientX;
					var y = e.clientY;
					if(x >= (document.body.offsetWidth - bigbox.offsetWidth)) {
						bigbox.style.left = x + 10 - bigbox.offsetWidth +"px";
						bigbox.style.top = y + 10 +"px";
					} else {
						bigbox.style.left = x + 10 +"px";
						bigbox.style.top = y + 10 +"px";
					}
				}
				bigbox.style.display = "block";
				
				var oImg = document.createElement("img");
				oImg.src = "img/dao"+(num+1)+".png";
				bigbox.innerHTML = "";
				bigbox.appendChild(oImg);
			}
		})(i);
		arrLI[i].onmouseout = function(){
			bigbox.style.display = "none";
		}
	};
	function hualihushao(tag){
		if(tag){
	    var  pp = ['趣买它！','买不到吃亏','买不到上当','还在犹豫什么','快点双击抢购吧',"犹豫就会错过"];
	    var colo = ["blue","yellow","black","pink","purple","red"];
	   	var big = document.getElementById("big");
			big.onmousemove = function(e){
					var p = document.createElement("p");
					var e = event || window.event;
					p.className = "small";
					p.style.left = e.clientX + 5 + 'px';
					p.style.top = e.clientY + 5 + 'px';
					big.appendChild(p);
					var i=0;
					var time = null;
					time= setInterval(function(){
						var j = Math.floor(Math.random()*6);
						i+=5;
						p.style.opacity = (50 + i)/50;
						p.style.width = (100+i) +'px';
						p.style.height = (100+i) +'px';
						p.style.color = colo[j];
						p.innerHTML = pp[j];
					},200)
					setTimeout(function(){
						clearInterval(time)
						big.removeChild(p)
						},1000)
				}
			}
			else{
				var big = document.getElementById("big");
				big.onmousemove = function(){}
			}
		}
function yanbo(){
	window.open("https://liuweilong1.github.io/Web-Team/liyanbo/work.html");
}

function huodong(){
		window.open("https://liuweilong1.github.io/Web-Team/liuweilong/活动界面.html");
	};
function jiahao(){
		window.open("https://liuweilong1.github.io/Web-Team/zhangjiahao/bigwork.html");
	}

