
let btn=document.getElementById("submit")
const output=document.getElementById("output");
output.style.backgroundColor="grey"
const mails=["giulio@mail","franco@mail","claudio@mail","andrea@mail","alessio@mail","marco@mail","sandro@mail","lucia@mail","alessia@mail","francesca@mail"];

btn.addEventListener("click",function(){
    
    let emailIns=document.getElementById("input").value;
    
    console.log(emailIns);
    console.log(mails);

    output.style.padding="10px";
    output.style.borderRadius="10px"
    
    if(emailIns==""){
        output.innerHTML=("Non hai inserito la tua e-mail")
    }
    else{
        
        for (let i =0 ; i <= mails.length; i++) {
            let Elementmail=mails[i];
            
            if(emailIns=Elementmail){
                output.innerHTML=("la tua e-mail già esiste!");
                break;
            }
            
            else if(!(emailIns==Elementmail)){
                output.innerHTML=("La tua e-mail è valida,benvenuto!");
                break;
            } 
            
        }
    }
    

})





























