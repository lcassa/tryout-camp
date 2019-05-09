document.querySelector('#video').addEventListener('click', (evt) => {
    if(evt.target.paused) {
        evt.target.play();
        document.querySelector('.video-overlay').style.display = 'none'
    }
    else {
        evt.target.pause();
        document.querySelector('.video-overlay').style.display = ''
    }
});

let rangeLabel = document.querySelector('#range-label');
let slider = document.querySelector('#slider');
let html = document.querySelector('html');
let morePictures = document.querySelector('.more-pictures');

morePictures.addEventListener('click', () => {
    window.location.href = 'gallery.html';
});

let updateLabel = () => {
    rangeLabel.textContent = slider.value + "px";
};

let refreshFontSize = () => {
    let fontSize = window.getComputedStyle(html).getPropertyValue('font-size');
    slider.value = fontSize.split(/\s*px/)[0];
    updateLabel();
};
let updateFontSize = () => {
    html.style.fontSize = slider.value + "px";
    updateLabel();
};

slider.addEventListener('input', updateFontSize, false);
slider.addEventListener('change', updateFontSize, false);
document.body.addEventListener('load', updateFontSize, false);

// window.matchMedia('(orientation: portrait)').onchange
var small = window.matchMedia('(max-width: 480px)');
var medium = window.matchMedia('(min-width: 600px) and (max-width: 1000px)');
var large = window.matchMedia('(min-width: 1000px)');
let mediaQueryChanged = (evt) => {
    // clean up javascript because it has precedence over media query changes
    html.style.fontSize = null;
    let fontSize = window.getComputedStyle(html).getPropertyValue('font-size');
    slider.value = fontSize.split(/\s*px/)[0];
    updateLabel();
};
small.onchange = mediaQueryChanged;
medium.onchange = mediaQueryChanged;
large.onchange = mediaQueryChanged;
