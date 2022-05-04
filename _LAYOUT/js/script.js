window.onload = function () {
    // nav toggle
    let navToggle = document.querySelector(".nav-toggle");

    console.log(navToggle);
    navToggle.onclick = e => {
        console.log(e.target);
    }
};
