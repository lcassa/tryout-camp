let main = document.querySelector('main');
document.querySelector('.switch').addEventListener('change', ()=> {
    if(main.classList.contains('gallery-grid-1')) {
        main.classList.remove('gallery-grid-1');
        main.classList.add('gallery-grid-2');
    }
    else if(main.classList.contains('gallery-grid-2')) {
        main.classList.remove('gallery-grid-2');
        main.classList.add('gallery-grid-1');
    }
});