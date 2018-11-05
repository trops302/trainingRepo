
var ul=document.createElement("ul");
    for(let i=1;i<=100;i++)
    {
        let li=document.createElement("li");

        if(i % 3 ===0 && i %5 ===0){
            //console.log("FizzBuzz");
            li.innerHTML= "FizzBuzz";
        }
    
        else if(i % 5 ===0){
            //console.log("Buzz");
            li.innerHTML= "Buzz";
        }
        else if(i % 3===0){
            li.innerHTML= "Fizz";
        }
        else li.innerHTML = i;

        ul.appendChild(li);
    }
    document.getElementById("order").appendChild(ul);

    $("li").mouseenter(function(){
        $("li").css("background-color", "red");
        
    });

    $("li").mouseleave(function(){
        $("li").css("background-color", "green");
        
    });

    
    
    

    

    

    


      

