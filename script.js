// let allElem = document.querySelectorAll('.elem');

// allElem.forEach(function(elem){
//  elem.childNodes[3].addEventListener('click', function(){
//     if(elem.childNodes[3].innerHTML == 'Add Freind'){
//         elem.childNodes[3].innerHTML = 'Remove Freind'
//     }
//     else{
//         elem.childNodes[3].innerHTML = 'Add Freind'
//     }
//  })
// })


let allBtn = document.querySelectorAll('button');

allBtn.forEach(function(elem){
    elem.addEventListener('click', function(){
        if( elem.innerHTML == 'Follow'){
            elem.innerHTML = 'Requested'
            elem.style.backgroundColor = `rgba(69, 69, 69, 1)`;
            setTimeout(() => {
                
                elem.innerHTML = 'Following'
                elem.style.backgroundColor = `rgba(69, 69, 69, 1)`;
            }, 400);
        }
        else{
            elem.innerHTML  = 'Follow'
            elem.style.backgroundColor = `rgba(37, 69, 183, 1)`;
        }
    })
})