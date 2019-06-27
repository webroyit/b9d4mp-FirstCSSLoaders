const loader = document.querySelector('.loader');
const content = document.querySelector('.main');

function init(){
    setTimeout(() => {
        // hide the loader
        loader.style.opacity = 0;
        loader.style.display = 'none';

        // show the content
        content.style.opacity = 1;
        content.style.display = "block";
    }, 3000);
}

init();