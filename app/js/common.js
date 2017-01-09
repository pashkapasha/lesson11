var menuElem = document.getElementById('sweeties');
var titleElem = menuElem.querySelector('.title');

titleElem.onclick = function () {
    menuElem.classList.toggle('open');
};

$(document).ready(function(){
    $('.bxslider').bxSlider();
    slider.startAuto();

});