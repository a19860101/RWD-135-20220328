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
            let modal = e.target.getAttribute('href');
            document.querySelector(modal).classList.add("active");
            e.preventDefault();
            return false;
        };
    }

    document.body.onclick = (e) => {
        if (e.target.className.indexOf("modal-close") > -1) {
            document.querySelector(".modal.active").classList.remove("active");
            e.preventDefault();
            return false;
        }
        
    };
    let w = document.body.scrollWidth;
    console.log(w);
    let imgs = [...document.querySelectorAll('.slider-item')];
    let totalImgs = imgs.length;
    let imgWidth = w;
    let wrapperWidth = imgWidth * totalImgs;
    let wrapper = document.querySelector('.slider-wrapper');
    wrapper.style.width = wrapperWidth + 'px';
    let next = document.querySelector('.slider-next');
    let prev = document.querySelector('.slider-prev');
    let currentIndex = 0;

    next.onclick = () => { show('next'); }
    prev.onclick = () => { show('prev'); }

    function show(direction){
        if(direction == 'prev' ){
            currentIndex = currentIndex == 0 ? totalImgs : currentIndex;
            currentIndex = (currentIndex - 1) % totalImgs;
        }else{
            currentIndex = (currentIndex + 1) % totalImgs;
            console.log(currentIndex);
        }

        wrapper.style.marginLeft = -(imgWidth * currentIndex) + 'px';
    }
    // setInterval('show("next")',3000);
    // setInterval(show,3000);
    

};

