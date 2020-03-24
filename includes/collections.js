/********************************************************************************** 
ScrollText 
* Copyright (C) 2001 <a href="/dhtmlcentral/thomas_brattli.asp">Thomas Brattli</a> 
* This script was released at DHTMLCentral.com 
* Visit for more great scripts! 
* This may be used and changed freely as long as this msg is intact! 
* We will also appreciate any links you could give us. 
* 
* Made by <a href="/dhtmlcentral/thomas_brattli.asp">Thomas Brattli</a> 
*********************************************************************************/ 
function lib_bwcheck(){ //Browsercheck (needed) 
    this.ver=navigator.appVersion 
    this.agent=navigator.userAgent 
    this.dom=document.getElementById?1:0 
    this.opera5=(navigator.userAgent.indexOf("Opera")>-1 && document.getElementById)?1:0
    this.ie5=(this.ver.indexOf('MSIE 5')>-1 && this.dom && !this.opera5)?1:0; 
    this.ie6=(this.ver.indexOf('MSIE 6')>-1 && this.dom && !this.opera5)?1:0; 
    this.ie7=(this.ver.indexOf('MSIE 7')>-1 && this.dom && !this.opera5)?1:0;
    this.ie4=(document.all && !this.dom && !this.opera5)?1:0; 
    this.ie=this.ie4||this.ie5||this.ie6 
    this.mac=this.agent.indexOf('Mac')>-1 
    this.ns6=(this.dom && parseInt(this.ver) >= 5) ?1:0; 
    this.ns4=(document.layers && !this.dom)?1:0; 
    this.bw=(this.ie7 || this.ie6 || this.ie5 || this.ie4 || this.ns4 || this.ns6 || this.opera5) 
    return this ;
} 
var bw=new lib_bwcheck() ;


/***************** 

You set the width and height of the divs inside the style tag, you only have to 
change the divScrollTextCont, Remember to set the clip the same as the width and height. 
You can remove the divUp and divDown layers if you want. 
This script should also work if you make the divScrollTextCont position:relative. 
Then you should be able to place this inside a table or something. Just remember 
that Netscape crash very easily with relative positioned divs and tables. 

Updated with a fix for error if moving over layer before pageload. 

****************/ 


//If you want it to move faster you can set this lower, it's the timeout: 
var speed = "30" ;

//Sets variables to keep track of what's happening 
var loop, timer ;

//Object constructor 
function makeObj(obj,nest){ 
    nest=(!nest) ? '':'document.'+nest+'.' 
    this.el=bw.dom?document.getElementById(obj):bw.ie4?document.all[obj]:bw.ns4?eval(nest+'document.'+obj):0; 
    this.css=bw.dom?document.getElementById(obj).style:bw.ie4?document.all[obj].style:bw.ns4?eval(nest+'document.'+obj):0; 
    this.scrollHeight=bw.ns4?this.css.document.height:this.el.offsetHeight 
    this.clipHeight=bw.ns4?this.css.clip.height:this.el.offsetHeight 
    this.scrollWidth=bw.ns4?this.css.document.width:this.el.offsetWidth
    this.clipWidth=bw.ns4?this.css.clip.width:this.el.offsetWidth
    this.left=goLeft;
    this.right=goRight; 
    this.moveIt=moveIt; this.x=0;
    this.obj = obj + 'Object' 
    eval(this.obj + '=this') 
    return this 
} 

// A unit of measure that will be added when setting the position of a layer. 
var px = bw.ns4||window.opera?'':'px'; 

function moveIt(x){ 
    this.x = x;
    this.css.left = this.x+px;
} 

//Makes the object go left 
function goRight(move,idZone){
    oCont = eval('oCont'+idZone);
    tailleMax = this.scrollWidth + oCont.clipWidth + 50;
    laposX = -(this.x);
    if (laposX < tailleMax)
    { 
        this.moveIt(this.x-move) ;
        if (loop) setTimeout(this.obj+'.right('+move+','+idZone+')',speed) ;
    } 
} 
//Makes the object go right 
function goLeft(move){ 
    if (this.x <0 )
    { 
        this.moveIt(this.x-move); 
        if (loop) setTimeout(this.obj+'.left('+move+')',speed) ;
    } 
} 

//Calls the scrolling functions. Also checks whether the page is loaded or not. 
function scroll(speed,idZone){ 
    oScroll = eval('oScroll'+idZone);
    if (scrolltextLoaded){ 
        loop = true; 
        if (speed>0) oScroll.right(speed,idZone) ;
        else oScroll.left(speed) ;
    } 
} 

//Stops the scrolling (called on mouseout) 
function noScroll(){ 
    loop = false ;
    if (timer) clearTimeout(timer) ;
} 
//Makes the object 
var scrolltextLoaded = false ;

function scrolltextInit(){
/* //MLE - no longer use of ScrollText
    oCont1 = new makeObj('divScrollTextCont1') ;
    oScroll1 = new makeObj('divText1','divScrollTextCont1');
    oScroll1.moveIt(0) ;
    oCont1.css.visibility = 'visible';
*/
     
    /*
    oCtrl1 = new makeObj('ctrl1') 
    oCtrl1.css.visibility = 'visible'
    
    oCtrl2 = new makeObj('ctrl2') 
    oCtrl2.css.visibility = 'visible'
    */
    scrolltextLoaded = true ;
} 
//Call the init on page load if the browser is ok... 
//onload = preloadImages
//if (bw.bw) onload = scrolltextInit
