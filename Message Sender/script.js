var buttonSender=document.querySelector("#buttonSend");
var messageOne=document.querySelector("#messageInput");
var messageTwo=document.querySelector("#messageOutput");

buttonSender.addEventListener("click", messageSender)

function messageSender(){
    let content = messageOne.value;
    if(content === ""){
        alert("Enter Valid Value")
    } else{
    }
    messageTwo.innerHTML = content;
    messageOne.value = "";
}