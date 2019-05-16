/*banner图*/

var slider = document.getElementsByClassName('bannerImg');
var pagination = document.getElementsByClassName('pagination');
var bannerNavBig = document.getElementsByClassName('banner-nav-big');
var menu = document.getElementsByClassName('menu');
var bannerNav = document.getElementsByClassName('banner-nav');
var h1 = document.getElementsByTagName('h1');
var ul = document.getElementsByTagName('ul');
var user = document.getElementsByClassName('nav-user');
var indexA = 1;
var zindex = 0;


pagination[0].children[0].style.width = 10 + 'px';
pagination[0].children[0].style.height = 10 + 'px';
pagination[0].children[0].style.border = '1px solid gray';
pagination[0].children[0].style.backgroundColor = 'blue';

var timer = setInterval(function(){
	for(var i = 0;i<7;i++){
		slider[i].style.display = 'none';
	}
	
	indexA++;
	var x = indexA%7;
	slider[x].style.display = 'block';
},7000)



var time = setInterval(function(){
	
	zindex++;
	if(zindex===7){
		zindex=0;
	}
	pagination[0].children[zindex].style.width = 10 + 'px';
	pagination[0].children[zindex].style.height = 10 + 'px';
	pagination[0].children[zindex].style.border = '1px solid gray';
	pagination[0].children[zindex].style.backgroundColor = 'blue';
	
	for(var j = 0;j<7;j++){
		if(j!= zindex){
			pagination[0].children[j].style.width = 8 + 'px';
			pagination[0].children[j].style.height = 8 + 'px';
			pagination[0].children[j].style.border = '';
			pagination[0].children[j].style.backgroundColor = 'white';
		}
		
	}
	
},7000)

for(var k = 0;k<7;k++){
	pagination[0].children[k].onclick = function(){
		clearInterval(time);
		clearInterval(timer);
		zindex = k;
		indexA = k;
	}
}


/*下拉菜单*/


bannerNavBig[0].onmouseenter = function(evt){
	
	var e = evt || window.event;
	var target = e.target || e.srcElement;
	menu[0].style.display = 'block';
	bannerNav[0].style.backgroundColor = 'snow';
	h1[0].children[0].style.color = 'skyblue';
	for(var p = 0,len = ul[0].children.length ;p<len;p++){
		ul[0].children[p].children[0].style.color = 'black';
	}
	
	console.log(h1[0].children)
		
}

bannerNavBig[0].onmouseleave = function(evt){
	var e = evt || window.event;
	var target = e.target || e.srcElement;
	//if(target.nodeName.className === )
	menu[0].style.display = 'none';
	bannerNav[0].style.backgroundColor = '';
	h1[0].children[0].style.color = '';
	for(var p = 0,len = ul[0].children.length ;p<len;p++){
		ul[0].children[p].children[0].style.color = '';
	}
}
