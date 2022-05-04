window.onload = function () {
    // nav toggle
    let navToggle = document.querySelector(".nav-toggle");

    console.log(navToggle);
    navToggle.onclick = e => {
        let navGroup = document.querySelector('.nav-group');
        navGroup.classList.toggle('open');
        if(navGroup.style.height){
            navGroup.style.height = null;
        }else{
            navGroup.style.height = navGroup.scrollHeight + 'px';
        }
    }
};
