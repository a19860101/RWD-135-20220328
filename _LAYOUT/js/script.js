window.onload = function () {
    // nav toggle
    let navToggle = document.querySelector(".nav-toggle");

    console.log(navToggle);
    navToggle.onclick = (e) => {
        let navGroup = document.querySelector(".nav-group");
        navGroup.classList.toggle("open");
        if (navGroup.style.height) {
            navGroup.style.height = null;
        } else {
            navGroup.style.height = navGroup.scrollHeight + "px";
        }
    };

    // modal
    let modalBtns = document.querySelectorAll(".modal-btn");
    for (modalBtn of modalBtns) {
        modalBtn.onclick = (e) => {
            // let modal = e.target.dataset.modal;
            let modal = e.target.getAttribute('href');
            document.querySelector(modal).classList.add("active");
            e.preventDefault();
            return false;
        };
    }

    document.body.onclick = (e) => {
        // console.log(e.target.className);
        // console.log(e.target.classList);
        if (e.target.className.indexOf("modal-close") > -1) {
            document.querySelector(".modal.active").classList.remove("active");
        }
        e.preventDefault();
        return false;
    };
};
