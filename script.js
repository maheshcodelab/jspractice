let main = document.querySelector('main');
let btn = document.querySelector('button');

btn.addEventListener('click', function () {

    let arr = [
  "Code wins arguments.",
  "It works on my machine.",
  "Always be coding.",
  "Debugging is detective work.",
  "Keep it simple, stupid (KISS).",
  "The best code is no code.",
  "Refactor early, refactor often.",
  "Syntax errors are job security.",
  "Coffee is a developer's fuel.",
  "Write self-documenting code.",
  "Commit often, push rarely.",
  "Don't repeat yourself (DRY).",
  "The compiler is your friend.",
  "Read the documentation.",
  "Version control saves lives.",
  "Automate the boring stuff.",
  "Done is better than perfect.",
  "Learning never stops.",
  "Think before you code.",
  "Sleep is just a code-compile cycle."
]   

let ar = Math.floor(Math.random()*arr.length)
console.log(arr[ar]);
    


    let h1 = document.createElement('h1');
    h1.innerHTML = arr[ar];
    main.appendChild(h1)

    let c1 = Math.random() * 256
    let c2 = Math.random() * 256
    let c3 = Math.random() * 256
    let x = Math.random() * 100
    let y = Math.random() * 100
    let rot = Math.random() * 360
    let scl = Math.random() * 3

    h1.style.top = x+'%'
    h1.style.left = y+'%'
    h1.style.position = 'absolute'
    h1.style.rotate = rot+'deg'
    h1.style.scale = (scl)
    h1.style.color = `rgb(${c1},${c2},${c3})`
    

})


