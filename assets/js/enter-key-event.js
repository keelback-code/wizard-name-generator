document.addEventListener("DOMContentLoaded", function () {

    document.getElementById("biscuit-input").addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            startRoll("biscuit");
            rotationStart += 60;
            document.getElementsByTagName("button")[0].style.transform = 'rotate(' + rotationStart + 'deg)';
        }
    });
});