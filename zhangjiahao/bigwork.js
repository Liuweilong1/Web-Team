/*
* @Author: 73152
* @Date:   2019-12-22 16:16:45
* @Last Modified by:   73152
* @Last Modified time: 2019-12-22 18:21:59
*/
	//这是学习部分的js
var cf1=document.getElementById("cf1");
cf1.onmouseover=function(){
	startMove(0);
}
cf1.onmouseout=function(){
	startMove(-200);
}
var a;
function startMove(target){
	clearInterval(a);
	a=setInterval(function(){
		var speed=0;
		if(cf1.offsetLeft<target){
			speed=10;
		}else{
			speed=-10;
		}
		if(cf1.offsetLeft==target){
			clearInterval(a);
		}else{
			cf1.style.left=cf1.offsetLeft+speed+"px";
		}
	},30);
}
//这是猜数部分的js

var cf3=document.getElementById("cf3");
cf3.onmouseover=function(){
	startMove1(0);
}
cf3.onmouseout=function(){
	startMove1(-200);
}
var b;
function startMove1(target){
	clearInterval(b);
	b=setInterval(function(){
		var speed=0;
		if(cf3.offsetLeft<target){
			speed=10;
		}else{
			speed=-10;
		}
		if(cf3.offsetLeft==target){
			clearInterval(b);
		}else{
			cf3.style.left=cf3.offsetLeft+speed+"px";
		}
	},30);
}
var target=Math.floor(Math.random()*100+1);
var array1=new Array();
var j=0;
function guess(){
	var i=window.prompt("请输入你猜的数字");
	process(i);
}
function process(i){
	if(j>4){
		alert("不好意思，o(╥﹏╥)o下次再来吧");
	}
	else
	{
		if(i<target){
			alert("有点小哦");
		}
		else if(i>target){
			alert("大了，大了");
		}
		else if(i==target){
			alert("恭喜你成功猜中，你将获得趣买它50元通用券(*￣︶￣)");
		}
		array1[j]=i;
		j++;
	}
}
var pout=document.getElementById("pout");
function printt(){
	console.log(array1);
	pout.innerHTML="这里将输出你猜过的每一个数字"
	for(var c=0;c<j;c++){
		pout.innerHTML+=array1[c];
		pout.innerHTML+=" ";

	}
	
}
var aa;
function lastMove(target){
	clearInterval(aa);
	aa=setInterval(function(){
		var speed=0;
		if(cf1.offsetLeft<target){
			speed=10;
		}else{
			speed=-10;
		}
		if(cf1.offsetLeft==target){
			
		}else{
			cf1.style.left=cf1.offsetLeft+speed+"px";
		}
	},30);
}


//鼠标移动框框
var bodybig=document.getElementById("bodybig");
var lis=document.getElementsByTagName("li");
for(var i=0;i<lis.length;i++){
    lis[i].onmouseover=function(e){
        var e=e||window.event;//兼容性
        this.myTitle=this.innerHTML;
        var tooltip=document.createElement("div");
        tooltip.style.left=e.clientX+10+"px";
        tooltip.style.top=e.clientY+20+"px";
        bodybig.appendChild(tooltip);
        tooltip.id="tooltip";
        tooltip.innerHTML=this.myTitle;

    }
    lis[i].onmousemove=function(e){
        var e=e||window.event;
        var tooltip=document.getElementById("tooltip");
        tooltip.style.left=e.clientX+10+"px";
        tooltip.style.top=e.clientY+20+"px";
    }
    lis[i].onmouseout=function(){
        var tooltip=document.getElementById("tooltip");
        bodybig.removeChild(tooltip);
    }
}
var dream=document.getElementById("dream");
var li5=document.getElementById("li5");
var li6=document.getElementById("li6");
dream.onclick=function(){
	var neirong=window.prompt("写下你的愿望吧");
	if(neirong.length>10){
		neirong="不要太贪心哦(￣.￣)";
	}	
	li5.innerHTML+=neirong;
	li6.innerHTML+="新的一年开开心心呀(*￣∇￣*)"
	setInterval(function(){
		pout.innerHTML="最后祝愿大家逢考必过，考的都会，蒙的都对。老师判着不累(*￣∇￣*)";
	}, 8000)	
};
