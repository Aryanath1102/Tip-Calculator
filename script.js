const amount=document.querySelector("#amount");
const guest=document.querySelector("#guest");
const quality=document.querySelector("#quality");
const tipamount=document.querySelector("#tipammount");


let calculated=()=>{
    
    let tip=((amount.value * quality.value)/guest.value).toFixed(2);
    
    amount.value="";
    quality.value="";
    guest.value="";

    if(tip === "NaN"){
        tipamount.textContent="Tip ₹0 each";
        showTipamount();
    }
    else{
        tipamount.textContent="Tip ₹"+tip +" each";
        showTipamount();
    }
}

let showTipamount=()=>{

    let x=document.querySelector("#tipammount");
    x.className="show";

    setTimeout(function(){
        x.className=x.className.replace("show","");    },3000 );

}