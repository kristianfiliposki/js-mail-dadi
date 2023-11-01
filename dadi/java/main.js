let btn=document.getElementById("submit")
const output=document.getElementById("output");


btn.addEventListener("click",function(){
    
    const numeroPc =((Math.floor(Math.random() * 3))); 
    console.log(numeroPc);
    
    const NumberIns=document.getElementById("input").value;
    console.log(NumberIns);

    
    if( NumberIns < numeroPc){
       console.log("Ha vinto il tuo pc!")
        output.innerHTML=("Ha vinto il tuo pc!")
   }
    
    else if(NumberIns>numeroPc){
         output.innerHTML=("Hai vinto!")
         console.log("Hai vinto !")

    }

    else if(NumberIns == numeroPc) {
      output.innerHTML=("Pari!")
       console.log("pari!")

   }
    

}) 