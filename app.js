function $ToDhconverter(){
    var amount=document.getElementById("amount").value;
    var resulte=amount*9;
    if(amount===""){
        message.innerHTML= "Please enter an amount this field can't be empty";
    }else if(amount==="0"){
        message.innerHTML="The value sould not be 0 ";
    }else if(amount<0){
        message.innerHTML="Please enter a positive number"
    }else if(isNaN(amount)){
        message.innerHTML="This field can only accept numbers"
    }else{
        message.innerHTML= amount +" United States Dollar equals " + resulte +" Moroccan Dirham "
    }
}