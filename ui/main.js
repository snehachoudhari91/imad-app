console.log('Loaded!');
var e=document.getElementById("img");
function moveLeft()
{
    var marginLeft=0;
    marginLeft=marginLeft-10;
    e.style.marginLeft=marginLeft+"1px";
};
e.onclick=function()
{
    var interval=setInterval(moveLeft,50);

};