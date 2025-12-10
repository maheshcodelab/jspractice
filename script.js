let img = document.querySelector('img')
let i = document.querySelector('#love')


img.addEventListener('dblclick', function(){
    i.style.opacity = '1';
    i.style.transform = 'translate(-50%, -50%) scale(1) rotate(0deg)';

    setTimeout(function() {
        i.style.transform = 'translate(-50%, -400%) scale(1) rotate(90deg)';
    }, 800);
    
    setTimeout(function() {
        i.style.opacity = '0';
        
    }, 1000);
    setTimeout(function() {
       
        i.style.transform = 'translate(-50%, -50%) scale(0) rotate(0deg)'
    }, 1200);
})