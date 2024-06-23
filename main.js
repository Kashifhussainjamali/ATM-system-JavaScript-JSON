let re={
    "Waqar":"03093654601",
    "Kashif":"03033156626",
    "Aqdas":"03003255445"
}
// let up=JSON.stringify(accnums)
// localStorage.setItem("Accounts",up)


// let value = Object.values(re);
// for (let i = 0 ; i < value.length; i++){
//     if (value[i]="03033156626")
//         console.log("Wellcome")
// }

// function check(){
//     let key=document.getElementById("cardno").value
//     let value = Object.values(re);
//     for (let i = 0 ; i < value.length; i++){
//         if (value[i]==key)
//             console.log("Wellcome")
//         else{
//             alert("Invalid Account")
//         }
// }

// }


function check() {
    let key = document.getElementById("cardno").value;
    let value = Object.values(re);
    let found = false;

    for (let i = 0; i < value.length; i++) {
        if (value[i] == key) {
            found = true;
            break;
        }
    }

    if (found) {
        document.getElementById("csbtns").style.visibility="visible"
    } else {
        alert("Invalid Account");
    }
}
function amount(){
    document.getElementById("mainscreen").style.visibility="visible"
    document.getElementById("buton").style.visibility="visible"
    document.getElementById("buton1").style.visibility="visible"
}


let balance=""
let avaliable=1000000
const d = new Date();



function one(){
    balance=balance+"1"
    document.getElementById("amount").value=balance
}
function two(){
    balance=balance+"2"
    document.getElementById("amount").value=balance
}
function three(){
    balance=balance+"3"
    document.getElementById("amount").value=balance
}
function four(){
    balance=balance+"4"
    document.getElementById("amount").value=balance
}
function five(){
    balance=balance+"5"
    document.getElementById("amount").value=balance
}
function six(){
    balance=balance+"6"
    document.getElementById("amount").value=balance
}
function seven(){
    balance=balance+"7"
    document.getElementById("amount").value=balance
}

function eight(){
    balance=balance+"8"
    document.getElementById("amount").value=balance
}

function nine(){
    balance=balance+"9"
    document.getElementById("amount").value=balance
}
function dot(){
    balance=balance+"."
    document.getElementById("amount").value=balance
}

function zero(){
    balance=balance+"0"
    document.getElementById("amount").value=balance
}
function doubblezero(){
    balance=balance+"00"
    document.getElementById("amount").value=balance
}
function enter(){
    let p=document.getElementById("cardno").value
    avaliable=avaliable-Number(balance)
    document.getElementById("balance").innerHTML=`Remaning Balance : ${avaliable}`
    document.getElementById("withdraw").innerHTML=`Withdraw Amount: ${Number(balance)}`
    document.getElementById("accno").innerHTML=`Acc No: ${p}`
    document.getElementById("date").innerHTML=d
}
function cleaning(){
    balance=""
    document.getElementById("amount").value=balance
}
function recept(){
    document.getElementById("td2").style.visibility="visible"
    document.getElementById("thankyou").style.visibility="visible"
}
function back(){
    document.getElementById("mainscreen").style.visibility="hidden"
    document.getElementById("buton").style.visibility="hidden"
    document.getElementById("buton1").style.visibility="hidden"
    document.getElementById("thankyou").style.visibility="hidden"
}



