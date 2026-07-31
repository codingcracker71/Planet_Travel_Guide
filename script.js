//*show more planets button error message*//
function myError() {
  alert("Sorry, we're still finding more safe planets! Come back when our page is updated!")
}

//* about us contact info toggle switch*//
function myFunction(){
  var x = document.getElementById("myInfo");
  if (x.innerHTML === "planetfinder@gmail.com") {
    x.innerHTML = "407-291-3048";
  } else {
    x.innerHTML = "planetfinder@gmail.com";
  }
}

