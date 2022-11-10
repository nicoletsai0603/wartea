<!--
	var theobject=document.all? document.all.scrollinfoshow : document.getElementById("scrollinfoshow")
	var iebody=(document.compatMode && document.compatMode != "BackCompat")? document.documentElement : document.body

	if (document.all||document.getElementById)
	theobject.style.display="none"

	function showhide(){
	if (document.all||document.getElementById){
	if (theobject.style.display=="none"){
	doit=setInterval("positionit()",100)
	theobject.style.display="block"
	}
	else{
	theobject.style.display="none"
	clearInterval(doit)
	}
	}
	}


	function positionit(){
	var dsocleft=document.all? iebody.scrollLeft : pageXOffset
	var dsoctop=document.all? iebody.scrollTop : pageYOffset
	if (document.all||document.getElementById){
	theobject.innerHTML='<big>('+dsocleft+','+dsoctop+')</big>'
	}
	}
-->