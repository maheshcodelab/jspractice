let count = 0;

let btn = document.querySelector('button');
let h1 = document.querySelector('h1');
let inner = document.querySelector('.innerbar');


btn.addEventListener('click', function () {

  let num = 50 + Math.floor(Math.random()*50);
  

  let int = setInterval(function () {
    count++;
    h1.innerHTML = count + '%';
    btn.innerHTML = 'Downloading...';
    inner.style.width = count + '%';
    btn.style.pointerEvents = 'none'

  }, num);

  setTimeout(() => {
    clearInterval(int);
    btn.innerHTML = 'Downloaded';
    btn.style.pointerEvents = 'none'
    console.log('Downloaded in ', num/10 , 'seconds')
  }, num*100);

})
