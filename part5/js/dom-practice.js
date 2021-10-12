//STEP 1
function displayMsg1() {
    return window.alert("I have been clicked (STEP 1)");
}

//STEP 2
window.onload = function () {
    let button1 = window.document.getElementById("button1");
    function displayMsg2() {
        return window.alert("I have been clicked (STEP 2)");
    }
    button1.onclick = displayMsg2;
};

//STEP 3
function displayMsg3() {
    return window.alert("I have been clicked (STEP 3)");
}

window.addEventListener("load", function () {
    let button2 = window.document.getElementById("button2");
    button2.addEventListener("click", displayMsg3);
});

//STEP 4
window.addEventListener("load", function () {
    let button3 = window.document.getElementById("button3");
    button3.addEventListener("click", function () {
        return window.alert("I have been clicked (STEP 4)");
    });
});
