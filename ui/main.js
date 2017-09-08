console.log('Loaded!');
var e=document.getElementById("img");
e.onclick=function()
{
    var interval=setInterval(moveLeft,100);
    e.style.marginLeft="100px";
};