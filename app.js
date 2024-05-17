var inp = document.getElementById("inp");
var tol_income = document.getElementById("tol_income");
var tol_expenditure = document.getElementById("tol_expenditure");
var saving = document.getElementById("saving");


var value = inp.value;

function income() {
    tol_income.innerText = inp.value;
    tol_income.style.color = "lightgreen";
    saving.innerText = inp.value;
    saving.style.color = "lightgreen";
    inp.value = "";
}
function expenditure() {
    tol_expenditure.innerText = inp.value;
    tol_expenditure.style.color = "rgb(133, 37, 37)";
    saving.innerText = tol_income.innerText - inp.value;
    inp.value = "";


    if (saving.innerText <= 0) {
        saving.style.color = "red";

    } else {

        saving.style.color = "lightgreen";
    }

}

if (saving > 0) {
    saving.style.color = red;

} else {
    saving.style.color = "lightgreen";

}