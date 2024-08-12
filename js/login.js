document.getElementById("btn").addEventListener("click", () => {
  //
  let InputOne = document.getElementById("inputone").value.toLowerCase();
  let InputTwo = document.getElementById("inputtwo").value.toLowerCase();
  let InputThree = document.getElementById("inputthree").value.toLowerCase();

  let UserName = "a";
  let UserEmail = "b";
  let Password = "0";
  if (InputOne == UserName && InputTwo == UserEmail && InputThree == Password) {
    window.location.href = "login.html";
    // InputOne == "", InputTwo == "", InputThree == "";
  } else if (InputOne == "" && InputTwo == "" && InputThree == "") {
    FildMas.innerText = "Fill Info";
  } else {
    FildMas.innerText = "Wrong Password";
  }
});

//
let FildMas = document.getElementById("fildmas");

//
let Icon = document.getElementById("icon");
let IconTwo = document.getElementById("icontwo");

//

Icon.addEventListener("click", () => {
  IconTwo.style.display = "block";
  Icon.style.display = "none";
  let ShowPassword = document.getElementById("inputthree");
  if (ShowPassword.type === "password") {
    ShowPassword.type = "text";
  } else {
    ShowPassword.type = "password";
  }
});
//
IconTwo.addEventListener("click", () => {
  let ShowPassword = document.getElementById("inputthree");
  Icon.style.display = "block";
  IconTwo.style.display = "none";
  ShowPassword.type = "password";
});

//
