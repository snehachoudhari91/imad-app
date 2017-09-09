var button=document.getElementById("counter");
spam.innerHTML=counter.toString();

button.onclick=function()
{
//create a request object
    var request=new XMLhttpRequest();
    
    //capture the response and store it in a variable
    
    request.onreadyStateChange=function()
    {
        if(request.readyState==XMLhttpRequest.DONE)
        {
            //take the action
            
            if(reuest.status==200)
            {
                
                var counter=request.responseText;
                 var spam=document.getElementById("count");
    spam.innerHTML=counter.toString();
            }
        }
    };
    
//make the request
request.open('GET','http://snehamcse.imad.hasura-app.io/counter',true);
request.send(null);

   
    
    
};
