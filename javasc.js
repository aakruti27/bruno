function dochange()
{
	k=confirm("uhm hi i guess");
	if (k==true) {
		alert("ok hehe thenks")
	}
	else
	{
		alert("why cancel :( ")
	}
}
function chgtxt()
{
	var del1= document.getElementById("d1");
	var del2= document.getElementById("d2");
	del1.innerHTML="I love you to infinity and beyond";
	del2.innerHTML="🥺🥺 ab change dikha?";
}
function chclr()
{
	var e1= document.getElementById("k1");
	var e2= document.getElementById("k2");
	e1.className="yellowback";
	e2.className="blueback";
}
function makepur()
{
	var v= document.getElementById("b");
	v.className="colpur";
}
function makepe()
{
	var v=document.getElementById("b");
	v.className="colpea";
}
function makewh()
{
	var v=document.getElementById("b");
	v.className="colwhi";
}
