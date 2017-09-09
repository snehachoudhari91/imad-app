var button=document.getElementById("counter");

button.onclick=function()
{
    var request=new XMLhttpRequest();
    
    request.onreadyStateChange=function()
    {
        if(request.readyState==XMLhttpRequest.DONE)
        {
            
            if(reuest.status==200)
            {
                
                var counter=request.responseText;
                 var spam=document.getElementById("count");
    spam.innerHTML=counter.toString();
            }
        }
    };
    

   
    
    
};
