let para = document.querySelector('h3');
let text = para.innerText;

let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
let charsArray = characters.split('');

let intervalId; // ✅ FIX 1

para.addEventListener('mouseenter', () => {
  let iteration = 0;

  clearInterval(intervalId); // stop previous animation

  intervalId = setInterval(() => {
    let str = text
      .split('')
      .map((char, index) => {
        if (index < iteration) {
          return text[index];
        }
        return charsArray[Math.floor(Math.random() * charsArray.length)];
      })
      .join('');

    para.innerText = str;

    iteration += 0.25;

    // ✅ FIX 2 & 4
    if (iteration >= text.length) {
      clearInterval(intervalId);
      para.innerText = text;
    }
  }, 30);
});
