const btn = document.querySelector('#button'); 

btn.addEventListener('click', function() {
    btn.textContent = 'click';

    setTimeout(() => {
        btn.textContent = 'button';
    }, 250);
});