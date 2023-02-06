
window.onload = function () {
    var yesBtn = document.getElementById("yes");
    var noBtn = document.getElementById("no");

    // rest of your code goes here
    // const noBtn = document.getElementById("no");
    // const yesBtn = document.getElementById("yes");

    yesBtn.addEventListener("click", function () {
        noBtn.style.left = "";
        noBtn.style.top = "";
        window.location.href = "./response.html";
    });

    noBtn.addEventListener("mouseover", function () {
        const maxX = 500;
        const maxY = 500;
        const randomX = 50 % - maxX / 2 + Math.floor(Math.random() * maxX);
        const randomY = Math.random() * maxY;
        // left: calc(50% - 250px + Math.floor(Math.random() * 500) + "px");
        // top: Math.floor(Math.random() * 500) + "px";
        // noBtn.style.left = randomX + "px";
        noBtn.style.top = randomY + "px";
        noBtn.style.right = randomX + "px";
        // noBtn.style.left = Math.random() * window.innerWidth + "px";
        // noBtn.style.top = Math.random() * window.innerHeight + "px";
    });
};
