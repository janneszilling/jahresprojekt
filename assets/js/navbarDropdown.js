let dropdown1 = document.getElementById("dropdown-content-1");
let dropdown2 = document.getElementById("dropdown-content-2");
let dropdown3 = document.getElementById("dropdown-content-3");
let dropdown4 = document.getElementById("dropdown-content-4");
let dropdown5 = document.getElementById("dropdown-content-5");

//dropDownMenu onclick function
function dropDownMenu(num) {
        document.getElementById("dropdown-content-" + num).classList.toggle("open");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
    if (!e.target.matches("#item-dropdown-1")) {
        dropdown1;
        if (!e.target.matches("#dropdown-content-1")){
            if (dropdown1.classList.contains("open")) {
                dropdown1.classList.remove("open");
          }
        }
    } 
    if (!e.target.matches("#item-dropdown-2")) {
        dropdown2;
            if (dropdown2.classList.contains("open")) {
                dropdown2.classList.remove("open");
          }
    }
    if (!e.target.matches("#item-dropdown-3")) {
        dropdown3;
            if (dropdown3.classList.contains("open")) {
                dropdown3.classList.remove("open");
          }
    }
    if (!e.target.matches("#item-dropdown-4")) {
        dropdown4;
            if (dropdown4.classList.contains("open")) {
                dropdown4.classList.remove("open");
          }
    }
    if (!e.target.matches("#item-dropdown-5")) {
        dropdown5;
            if (dropdown5.classList.contains("open")) {
                dropdown5.classList.remove("open");
          }
    }
}