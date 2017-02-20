console.log('Hello');

alert('Zdrasti!');

let counter = 0;


document
.getElementById('btn')
.addEventListener('click', function (ev){
    ev.target.style.color = 'red';
})