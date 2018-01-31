/*
**   Copyright Greysphere Ltd 2005
**   
**
**
**
**
*/


var numtabs = 5;
var tabs = new Array();
var leftoffset = 0;
var rightoffset = 500;
var tabwidth = 40;

var tabids = new Array("plumbing","service","property","general","contact");

for(c=0; c<numtabs; c++){
	tabs[c] = new Array();
	tabs[c][0] = tabids[c];
	tabs[c][1] = leftoffset + (tabwidth*c);
	tabs[c][2] = rightoffset + (tabwidth*c);
	tabs[c][3] = "in";
	
}

function writeDate(){
	var months=new Array("January","February","March","April","May","June","July","August","September","October","November","December");
	var days=new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");
	var nowdate=new Date();
	var today=nowdate.getDate();
	var year=nowdate.getFullYear();
	var TodaysDate=days[nowdate.getDay()]+", "+today+" "+months[nowdate.getMonth()]+" "+year;
	document.write(TodaysDate);	
}

function loadPopup(url){
	var newwin=window.open(url,'popup', 'height=600,width=750,scrollbars,status=no,toolbar=no',0);
	newwin.focus();
}


function findObj(n, d) { 
	var p,i,x;  
	if(!d) d=document;
	if((p=n.indexOf("?"))>0&&parent.frames.length) {
		d=parent.frames[n_substring(p+1)].document; n=n_substring(0,p);
	}
	if(!(x=d[n])&&d.all) x=d.all[n]; 
	for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
	for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=findObj(n,d.layers[i].document);
	if(!x && d.getElementById) x=d.getElementById(n);
	return x;
}

function slideObj() { 

	if (arguments.length < 4) {return;}
		
	var sD = arguments[0]; if (sD == "") {return;}

	var oD = eval("findObj('" + sD + "')"); if (oD == null) {return;}
	var iNX = parseInt(arguments[1]), iNY = parseInt(arguments[2]);
	//slide isnt smooth in firefox so just move straight out
	if(navigator.userAgent.indexOf("MSIE")==-1){
		iS=1;
	}else{
		iS = parseInt(arguments[3]);
	}
	var iPx = (arguments.length > 4) ? parseInt(arguments[4]) : 0;
	var iR = (arguments.length > 5) ? parseInt(arguments[5]) : 0;
	var iT = 10, sS = ""; if (!document.layers) {oD = oD.style;} 
	if (oD.tT != null) {clearTimeout(oD.tT);}
	
	var iCX = parseInt(oD.left), iCY = parseInt(oD.top);
	if (iR != 0) { // relative
		if (iR == 1) {iNX = iCX - iNX; iNY = iCY;} // left
		else if (iR == 2) {iNX = iCX + iNX; iNY = iCY;} // right
		else if (iR == 3) {iNY = iCY - iNY; iNX = iCX;} // up
		else {iNY = iCY + iNY; iNX = iCX;} // down
	}

	var iX = iNX, iY = iNY;

	//alert("iCX="+iCX+"---- iNX="+iNX+"---- iCY="+iCY+"---- iNY="+iNY);

	if ((iCX != iNX) || (iCY != iNY)) {

		if (iPx > 0) { iT = iS;
			var iPxX = iPx, iPxY = iPx, iMX = Math.abs(iCX - iNX), iMY = Math.abs(iCY - iNY);
			if (iMX < iMY) {iPxY = (iMX != 0) ? ((iMY/iMX)*iPx) : iPx;}
			else {iPxX = (iMY != 0) ? ((iMX/iMY)*iPx) : iPx;}
			if (iPxX >= iMX) {iPxX = Math.min(Math.ceil(iPxX), iPx);}
			if (iPxY >= iMY) {iPxY = Math.min(Math.ceil(iPxY), iPx);}
			if ((iCX < iNX) && (iCX + iPxX < iNX)) {iNX = iCX + iPxX;}
			if ((iCX > iNX) && (iCX - iPxX > iNX)) {iNX = iCX - iPxX;}
			if ((iCY < iNY) && (iCY + iPxY < iNY)) {iNY = iCY + iPxY;}
			if ((iCY > iNY) && (iCY - iPxY > iNY)) {iNY = iCY - iPxY;}
		}
		else {
			var iMX = ((iNX - iCX) / iS); 
			iMX = (iMX > 0) ? Math.ceil(iMX) : Math.floor(iMX);
			iNX = iCX + iMX; 
			var iMY = ((iNY - iCY) / iS); 
			iMY = (iMY > 0) ? Math.ceil(iMY) : Math.floor(iMY);
			iNY = iCY + iMY;
		}
		
		if ((parseInt(navigator.appVersion)>4 || navigator.userAgent.indexOf("MSIE")>-1) && (!window.opera)) {sS="px";}
		if (iMX != 0) {eval("oD.left = '" + iNX + sS + "'");}
		if (iMY != 0) {eval("oD.top = '" + iNY + sS + "'");}
		var sFunction = "slideObj('" + sD + "'," + iX + "," + iY + "," + iS + "," + iPx + ",0)";
		//alert(iMX);
		oD.tT = setTimeout(sFunction,iT);
	}
	else {
		//alert("iCX="+iCX+"---- iNX="+iNX+"---- iCY="+iCY+"---- iNY="+iNY);

	}
}


function preloadImages() {
	var doc=document; 
	if(doc.images){
		if(!doc.p) doc.p=new Array();
		var i,j=doc.p.length,a=preloadImages.arguments;
		for(i=0; i<a.length; i++){
			if (a[i].indexOf("#")!=0){ 
				doc.p[j]=new Image; doc.p[j++].src=a[i];
			}
		}
	}
}


function ClickTab(tabNo){
	//alert(navigator.appVersion);
	//window.status = "clicked   "+tabNo;

	if (tabs[tabNo][3] != "in"){
		PushBackTab(tabNo);
		
	}else{
		PullOutTab(tabNo);
	}
	
}

function PullOutTab(tabNo) {
	for(var i=tabNo; i>=0; i--){	
		
		//alert("sliding "+ tabs[i][0]);
		slideObj(tabs[i][0], tabs[i][1], 0, 10,0);
		tabs[i][3]="out";
		//switch arrow image
		imgswitch = "document.getElementById('tabarrow"+i+"').src='images/rightarrow.gif'";
		//alert(imgswitch);
		eval(imgswitch);
		
	}
}

function PushBackTab(tabNo) {
	for(var i=tabNo; i<tabs.length; i++){
		slideObj(tabs[i][0], tabs[i][2], 0, 10,0);
		tabs[i][3]="in";	
		//switch arrow image
		imgswitch = "document.getElementById('tabarrow"+i+"').src='images/leftarrow.gif'";
		//alert(imgswitch);
		eval(imgswitch);
	}	
}
function loadFR(){
	alert("Version française venant bientôt");
}

