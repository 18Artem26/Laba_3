document.addEventListener('DOMContentLoaded', function () {
    let displayWindow = true;
    let displayWindowStorage = localStorage.getItem("displayWindow");

    if (displayWindowStorage === "false") {
        displayWindow = false;
    }

    let nonModalWindow = document.getElementById("nonModalWindow");

    setInterval(() => {
        if (displayWindow) {
            nonModalWindow.style.display = "block";
        }
    }, 1000);

    let declineWindowBtn = document.getElementById("declineWindowBtn");
    let agreeWindowBtn = document.getElementById("agreeWindowbtn");

    agreeWindowBtn.addEventListener("click", function () {
        console.log("Agree button clicked");
        nonModalWindow.style.display = "none";
        clickedAccept();
    });

    declineWindowBtn.addEventListener("click", function () {
        console.log("Decline button clicked");
        nonModalWindow.style.display = "none";
    });

    function clickedAccept() {
        displayWindow = false;
        localStorage.setItem("displayWindow", "false");
    }
});
