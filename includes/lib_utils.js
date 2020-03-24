//MLE

function MM_openBrWindow(theURL,winName,features) { //v2.0
  window.open(theURL,winName,features);
}
        
function montre(id) 
{
    var NbSubMenu = 3;    
    var d = document.getElementById(id);
    for (var i = 1; i<= NbSubMenu; i++) {
            if (document.getElementById('smenu'+i)) {document.getElementById('smenu'+i).style.display='none';}
    }
    if (d) {d.style.display='block';}
}

function montreMLE(id, gamme) 
{
    Nom = navigator.appName;
    Version = navigator.appVersion;
    ie = (Nom == 'Microsoft Internet Explorer' && navigator.appVersion.indexOf("MSIE 7.0") ==-1) ? 1:0;
    var d = document.getElementById(id);
    //var d2 = document.getElementById(gamme);
    
    var NbSubMenu = 3;
    
     for (var i = 1; i<=NbSubMenu; i++)
     {
     var d3 = document.getElementById('smenu'+i)
     if (d3)
     {
        d3.style.display='none';
        if (ie) 
         {
            d3.style.visibility='visible';
     
            //voirSelect('visible');
         }
     }
    
     }
    if (d)
    {
     d.style.display='block';
     if(ie) {
        
        d.style.visibility='hidden';
        //voirSelect('hidden');
        }
    }
}





/* A INSERER - POP UP



         <script language="JavaScript">
            <!--
            //PLF- http://www.jejavascript.net/
            var cheminImage = "../images/menu/en.jpg"; //image gif
            var lienpopup = "http://www.thieum.net/";
            monImage = new Image;
            monImage.src = cheminImage;
            var taillebg = monImage.width; //largeur popup
            var position_x = (screen.width-monImage.width)/2; //(largeur ecran - largeur image)/2
            var position_y = (screen.height-monImage.height-10)/2; //(hauteur ecran - hauteur image)/2
            
           
            
            function ouvrir_menu()
            {
            //var cheminImage = "../images/menu/en.jpg"; //image gif
            //var lienpopup = "http://www.thieum.net/";
            //monImage = new Image;
            //monImage.src = cheminImage;
            //var taillebg = monImage.width //largeur popup
            //var position_x = (screen.width-monImage.width)/2 //(largeur ecran - largeur image)/2
            //var position_y = (screen.height-monImage.height-10)/2 //(hauteur ecran - hauteur image)/2
            document.getElementById("menu_context").style.top = position_y;
            document.getElementById("menu_context").style.left = position_x;
            document.getElementById("menu_context").style.visibility = "visible";
            deactiv_pop = setTimeout("fermer_menu()",10000)
            }
            
            function fermer_menu()
            {
            document.getElementById("menu_context").style.visibility = "hidden";
            //activ_pop = setTimeout("ouvrir_menu()",3000)
            }

            
            
            //-->
        </script>
                    
        <script language="JavaScript">
        <!--
        //PLF- http://www.jejavascript.net/
        document.write('<div id=menu_context style="z-index:500;position:absolute;width:'+taillebg+'px; border:0px solid #9D9DA1; cursor:default; visibility:hidden;padding:3">');
        document.write('<table width="100%" border="0" ><tr><td align="right" bgcolor="#000099"><a href="#" onClick="fermer_menu()"><font color="#FF0000" face="Verdana" size="3">x</font></a></td></tr>');
        document.write('<tr><td align="left"><a href="'+lienpopup+'" target="_blank"><img src="'+cheminImage+'" border=0 align="top"></a></td></tr></table>');
        //-->
        </script>

*/

//window.onload = ouvrir_menu;


//window.onload=  montre(''); 


function montrePalette()
{
//ImagePalette.style.display='block';
//ImagePalette.style.visibility = "visible";
document.getElementById("menu_palette").style.visibility = "visible";
document.getElementById("menu_palette").style.display='block';
}


function cachePalette()
{
//ImagePalette.style.display='none';
//ImagePalette.style.visibility = "hidden";
document.getElementById("menu_palette").style.visibility = "hidden";
document.getElementById("menu_palette").style.display='none';
}




//## //MLE Select et Option liés au Prenom Tryptique

function AddCouleurLink()
{    
    var SelectColor = null;    
    var oSelects = document.getElementsByTagName('SELECT');
    if (oSelects.length > 0) 
    {
        for (i = 0; i < oSelects.length; i++) {
        oSlt = oSelects[i];
        if (oSlt.name == 'id[6]') // couleur
            {
            SelectColor = oSlt;
            }
        }
    }    
    if (SelectColor)
    {
        var row = SelectColor.parentNode.parentNode;
        var pTD = document.createElement("TD");
        
        var pDIV = document.createElement("DIV");
        //pDIV.setAttribute("id", "'menu_palette_div'");
        var pDL = document.createElement("DL");
        var pDT = document.createElement("DT");
        pDT.setAttribute("onmouseover", "javascript:montrePalette();");
        pDT.setAttribute("onmouseout", "javascript:cachePalette();");
        var pSPAN = document.createElement("SPAN");
        pSPAN.setAttribute("id", "'artist_campaign_icon_panel'");
        pSPAN.setAttribute("onmouseover", "javascript:montrePalette();");
        pSPAN.setAttribute("onmouseout", "javascript:cachePalette();");
        
        var pA = document.createElement("A");
        //pA.setAttribute("onmouseover", "javascript:montrePalette();");
        //pA.setAttribute("onmouseout", "javascript:cachePalette();");
        pA.onmouseover = montrePalette;
        pA.onmouseout = cachePalette;
        pA.setAttribute("href", "javascript:MM_openBrWindow('http://pourpre.com','test','');\ "); //'Pourpre.com','');"); //'toolbar=yes,location=yes,directories=yes,status=yes,menubar=yes,scrollbars=yes,resizable=yes,copyhistory=no');");
        
        var pIMG = document.createElement("IMG");
        pIMG.setAttribute("id", "'artist_campaign_icon'");
        pIMG.setAttribute("src", "images/menu/palette.gif");
        
        
        var pDIV2 = document.createElement("DIV");
        pDIV2.setAttribute("id", "'menu_palette'");
        pDIV2.setAttribute("style", "display:none;");
        var pIMG2 = document.createElement("IMG");
        pIMG2.setAttribute("src", "images/menu/palette_complete.jpg");

        pA.appendChild(pIMG);
        //pDT.appendChild(pSPAN);
        //pDL.appendChild(pDT);  
        
        //pDIV2.appendChild(pIMG2);
        //pDL.appendChild(pDIV2);
        
        pDIV.appendChild(pA);

        pTD.appendChild(pDIV);
        
        row.appendChild(pTD);
    }
}



function AddInputPrenom()
{    
    var SelectPrenom = null;    
    var oSelects = document.getElementsByTagName('SELECT');
    if (oSelects.length > 0) 
    {
        for (i = 0; i < oSelects.length; i++) {
        oSlt = oSelects[i];
        if (oSlt.name == 'id[8]') //i_Prenom
            {
            SelectPrenom = oSlt;
            }
        }
    }    
    if (SelectPrenom)
    {    
        var pTR_PRENOM = SelectPrenom.parentNode.parentNode;
        var pTable = pTR_PRENOM.parentNode;
        
        var pTR1 = document.createElement("TR");
        var pTD1 = document.createElement("TD");
        var pTEXT = document.createTextNode("Tapez votre Prénom:");
        var pTD2 = document.createElement("TD");
        
        var pINPUT = document.createElement("INPUT");
        pINPUT.setAttribute("maxlength", "13");
        pINPUT.setAttribute("id", "Prenom");
        //if (document.all) { code pour ie }
        pINPUT.name='Prenom';
        pINPUT.type='text';        
        pINPUT.onkeyup=ChangePrenom;
        pINPUT.onchange=ChangePrenom;
        
        pTD1.appendChild(pTEXT);
        pTD2.appendChild(pINPUT);
        pTR1.appendChild(pTD1);
        pTR1.appendChild(pTD2);
        
        pTable.insertBefore(pTR1, pTR_PRENOM);
        
        //alert(pTD2.innerHTML);

        //pTable.appendChild(pTR1);
        //Tapez votre Prénom:<input type="text" name="Prenom" id="Prenom" MAXLENGTH=13 onkeyup="javascript:ChangePrenom();" >

    }
}


function restore(e) 
{
   // if (e.options[e.selectedIndex].disabled) 
    {
        e.selectedIndex = window.select_current[e.id];
        e.selected = 'selected';
    }
}

function emulate(e) 
{
   for (var i=0, option; option = e.options[i]; i++) 
   {
       //if (option.disabled) 
       {
       option.style.color = "graytext";
       }
       //else {
       //option.style.color = "menutext";
       //}
   }
}

function GrisePersonalisation()
{  

    var SelectNbLettre = null;    
    var oSelects = document.getElementsByTagName('SELECT');
    if (oSelects.length > 0) 
    {
        window.select_current = new Array();
        
        for (i = 0; i < oSelects.length; i++) {
        oSlt = oSelects[i];
        oSlt.id = i;        
        if (oSlt.name == 'id[12]') //Personnalisation
            {
            SelectNbLettre = oSlt;
            }
        }
    }    
    if (SelectNbLettre)
    {
        //SelectNbLettre.disabled='true';
        //SelectNbLettre.readonly='readonly';
        
        SelectNbLettre.onfocus = function(){ window.select_current[this.id] = this.selectedIndex; };
        SelectNbLettre.onchange = function(){ restore(this); };
        emulate(SelectNbLettre);    
    }
   
}

function GriseNbLettre()
{  

    var SelectNbLettre = null;    
    var oSelects = document.getElementsByTagName('SELECT');
    if (oSelects.length > 0) 
    {
        window.select_current = new Array();
        
        for (i = 0; i < oSelects.length; i++) {
        oSlt = oSelects[i];
        oSlt.id = i;        
        if (oSlt.name == 'id[10]') // Nb de lettre
            {
            SelectNbLettre = oSlt;
            }
        }
    }    
    if (SelectNbLettre)
    {
        //SelectNbLettre.disabled='true';
        //SelectNbLettre.readonly='readonly';
        
        SelectNbLettre.onfocus = function(){ window.select_current[this.id] = this.selectedIndex; };
        SelectNbLettre.onchange = function(){ restore(this); };
        emulate(SelectNbLettre);    
    }
   
}

function GriseSelectPrenom()
{    

    var SelectNbLettre = null;    
    var oSelects = document.getElementsByTagName('SELECT');
    if (oSelects.length > 0) 
    {
        for (i = 0; i < oSelects.length; i++) {
        oSlt = oSelects[i];
        oSlt.id = i;
        if (oSlt.name == 'id[8]')  // i_Prenom
            {
            SelectPrenom = oSlt;
            }
        }
    }    
    if (SelectPrenom)
    {
        //SelectPrenom.disabled='true';
            
        var pROW = SelectPrenom.parentNode.parentNode;
        pROW.style.visibility='hidden';
        
                 
        //SelectPrenom.onfocus = function(){ window.select_current[this.id] = this.selectedIndex; };
        //SelectPrenom.onchange = function(){ restore(this); };
        //emulate(SelectPrenom);    
    }
   
}



function DeGriseSelectPrenom()
{    

    var SelectNbLettre = null;    
    var oSelects = document.getElementsByTagName('SELECT');
    if (oSelects.length > 0) 
    {
        for (i = 0; i < oSelects.length; i++) {
        oSlt = oSelects[i];
        oSlt.id = i;
        if (oSlt.name == 'id[8]')  // i_Prenom
            {
            SelectPrenom = oSlt;
            }
        }
    }    
    if (SelectPrenom)
    {
        SelectPrenom.disabled='false';
        SelectPrenom.selected = 'selected';
        
        //SelectPrenom.onfocus = function(){ window.select_current[this.id] = this.selectedIndex; };
        //SelectPrenom.onchange = function(){ restore(this); };
        //emulate(SelectPrenom);    
    }
   
}



function ChangePrenom()
{

//MLE WARNING en dur 

    var bOK = ChangeNbLettre();
    if (!bOK)
        return bOK;
		

    bOK = ChangePersonalisation();
    if (!bOK)
        return bOK;		

    //select name="id[7]" disabled=true
    var SelectPrenom = null;    
    var oSelects = document.getElementsByTagName('SELECT');
    if (oSelects.length > 0) 
    {
        for (i = 0; i < oSelects.length; i++) {
        oSlt = oSelects[i];
        if (oSlt.name == 'id[8]') //i_Prenom
            {
            SelectPrenom = oSlt;
            }
        }
    }    
    
    var Prenom = document.getElementById('Prenom');
    if (SelectPrenom && Prenom)
    {
        var PrenomString = Prenom.value;
        //SelectPrenom.options[1].id = '19';
        var bPrenomFound = false;
        var oPrenom = SelectPrenom.options[1];
        //alert('//MLE Find');
        
        for (i = 0; (i < SelectPrenom.options.length - 1) & (bPrenomFound == false); i++) 
        {
            //alert('//MLE SelectPrenom.options[i]=' + SelectPrenom.options[i].text);
            oPrenom = SelectPrenom.options[i];
            if (oPrenom.text == PrenomString)
                {
                bPrenomFound = true;
                //alert('//MLE Found');
                }
        }   
        
        if (bPrenomFound == false)
        {
            //alert('//MLE Not Found');
            //oPrenom.id ='666';
            oPrenom.value = document.getElementById('NewPrenomId').value;  
            oPrenom.text = PrenomString;
            //oPrenom.selected = 'selected';      
        }
        
        oPrenom.selected = 'selected';    
    }
}

function RechargePrenom()
{
    var bOK = true;

    //select name="id[7]" disabled=true
    var SelectPrenom = null;    
    var oSelects = document.getElementsByTagName('SELECT');
    if (oSelects.length > 0) 
    {
        for (i = 0; i < oSelects.length; i++) {
        oSlt = oSelects[i];
        if (oSlt.name == 'id[8]')  // i_Prenom
            {
            SelectPrenom = oSlt;
            }
        }
    }    
    
    var Prenom = document.getElementById('Prenom');
    if (SelectPrenom && Prenom)
    {
        var PrenomString = SelectPrenom.options[SelectPrenom.selectedIndex].text;
        Prenom.value = PrenomString;   
        
        bOK = ChangeNbLettre();
        
    }
    
    return bOK;
}


function ChangeNbLettre()
{
    var bOK = true;
    
    //select name="id[7]" disabled=true
    var SelectNbLettre = null;    
    var oSelects = document.getElementsByTagName('SELECT');
    if (oSelects.length > 0) 
    {
        for (i = 0; i < oSelects.length; i++) {
        oSlt = oSelects[i];
        if (oSlt.name == 'id[10]')  // Nb Lettre
            {
            SelectNbLettre = oSlt;
            }
        }
    }    
    
    var Prenom = document.getElementById('Prenom');
    if (SelectNbLettre && Prenom)
    {
        var PrenomString = Prenom.value;
        var Index = PrenomString.length - 1;
        var SelectOption = null;
        
        if (Index >= 0 & Index < SelectNbLettre.options.length )
        {  SelectOption = SelectNbLettre.options[Index]; }
        
        if (SelectOption)
        { 
            SelectOption.selected = 'selected';
        }
        else
        {
            bOK = false; // pas le bon bon nb de lettre, OU initialisation (différence entre prenom vide et lettre = 1)
            //alert("Attention , le prenom que vous saissisez n'a pas le bon nombre de lettre.");
        }
    }
    
    return bOK;
    
}



function ChangePersonalisation()
{
    var bOK = true;
    
    var SelectPersonalisation = null;    
    var oSelects = document.getElementsByTagName('SELECT');
    if (oSelects.length > 0) 
    {
        for (i = 0; i < oSelects.length; i++) {
        oSlt = oSelects[i];
        if (oSlt.name == 'id[12]')  // Personnalisation
            {
            SelectPersonalisation = oSlt;
            }
        }
    }    
    
    var Prenom = document.getElementById('Prenom');
    if (SelectPersonalisation && Prenom)
    {
        var PrenomString = Prenom.value;
        var Index = PrenomString.length - 1;
        var SelectOption = null;
        
        if (Index >= 0 & 2 == SelectPersonalisation.options.length )
        {  SelectOption = SelectPersonalisation.options[1]; } // On peut mettre personalisable
		else
		{  SelectOption = SelectPersonalisation.options[0];}
        
        if (SelectOption)
        { 
            SelectOption.selected = 'selected';
        }
        else
        {
            bOK = false;
            alert("MLE Personalisation pb");
        }
    }
    
    return bOK;
    
}

function initAllPersonalisation()
{
	AddCouleurLink();
	AddInputPrenom();
	RechargePrenom();
	GriseNbLettre();
	GriseSelectPrenom();
	GrisePersonalisation();
}