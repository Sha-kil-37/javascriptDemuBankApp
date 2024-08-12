document.getElementById("cashinbtn").addEventListener("click", () => {
  let MyBlance = document.getElementById("myblns");
  let CashIn = document.getElementById("cashin");
  let Userpinbox = document.getElementById("userpinbox");
  // let MyBlanceConvert = parseFloat(MyBlance.innerText);

  if (CashIn.value == "") {
    CashIn.style.border = "block";
    CashIn.style.borderColor = "red";
    Userpinbox.style.display = "none";
    CashInInputAlert = document.getElementById("inputalert");
    CashInInputAlert.style.display = "block";
    CashInInputAlert.style.color = "white";
  } else if (CashIn.value !== "") {
    Userpinbox.style.display = "block";
  }
});

let removepinbox = () => {
  let Userpinbox = document.getElementById("userpinbox");
  Userpinbox.style.display = "none";
};

let cashinfuntion = () => {
  let UsercashinpassInput = document.getElementById("usercashinpassinput");
  let UserCashInpass = "3636";
  let UserCashInpassConvert = parseFloat(UserCashInpass);
  let UsercashinpassAlert = document.getElementById("usercashinpassalert");

  if (UsercashinpassInput.value == UserCashInpassConvert) {
    let Notidiv = document.getElementById("notidiv");
    let CashIn = document.getElementById("cashin");
    let NotiItemdiv = document.createElement("div");
    NotiItemdiv.innerHTML = `<div id="deletparent" class='px-1 py-1 bg-[#F56DA1] rounded mb-2 flex items-center justify-between'>
    <h3 class=' text-white font-semibold'> Cashin Amount is ${CashIn.value} .tk</h3>
    <i id='deletchaild'onclick="Deletnotification()" class="fa-solid fa-minus cursor-pointer text-xl text-white"></i>
    </div>`;
    Notidiv.appendChild(NotiItemdiv);
    let MyBlance = document.getElementById("myblns");
    let MyBlanceConvert = parseFloat(MyBlance.innerText);
    let CashInConvert = parseFloat(CashIn.value);
    let CashInResult = MyBlanceConvert + CashInConvert;
    MyBlance.innerText = CashInResult;
    CashIn.value = "";
    let Userpinbox = document.getElementById("userpinbox");
    Userpinbox.style.display = "none";
    UsercashinpassInput.value = "";
  } else if (UsercashinpassInput.value == "") {
    let UsercashinpassAlert = document.getElementById("usercashinpassalert");
    UsercashinpassAlert.innerText = "Fill Info";
  } else {
    UsercashinpassAlert.innerText = "Wrong Password";
    UsercashinpassAlert.style.color = "red";
    UsercashinpassAlert.style.fontWeight = "600";
  }
};

let Deletnotification = () => {
  let DeletParent = document.getElementById("deletparent");
  let DeletChaild = document.getElementById("deletchaild");
  DeletParent.appendChild(DeletChaild);
  DeletChaild.parentElement.style.display = "none";
};

//
document.getElementById("cashoutbtn").addEventListener("click", () => {
  let CashOut = document.getElementById("cashout");
  let CashOutConvert = parseFloat(CashOut.value);
  let MyBlance = document.getElementById("myblns");
  let MyBlanceConvert = parseFloat(MyBlance.innerText);
  let CashOutResult = MyBlanceConvert - CashOutConvert;
  MyBlance.innerText = CashOutResult;
  CashOut.value = "";
});
//

document.getElementById("mobilerechargebtn").addEventListener("click", () => {
  let MyBlance = document.getElementById("myblns");
  let MyBlanceConvert = parseFloat(MyBlance.innerText);
  let MobileRecharge = document.getElementById("mobilerecharge");
  let MobileRechargeConvert = parseFloat(MobileRecharge.value);
  let MobileRechargeResult = MyBlanceConvert - MobileRechargeConvert;
  MyBlance.innerText = MobileRechargeResult;
  MobileRecharge.value = "";
});
//

document.getElementById("sendmoneybtn").addEventListener("click", () => {
  let MyBlance = document.getElementById("myblns");
  let MyBlanceConvert = parseFloat(MyBlance.innerText);
  let Sendmoney = document.getElementById("sendmoney");
  let SendmoneyConvert = parseFloat(Sendmoney.value);
  let SendmoneyResult = MyBlanceConvert - SendmoneyConvert;
  MyBlance.innerText = SendmoneyResult;
  Sendmoney.value = "";
});
//
