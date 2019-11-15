document.addEventListener('DOMContentLoaded', function(){
    // h1 = document.$('h1');
    // h1.innerHTML = 
    fetch('http://127.0.0.1:3000/city/1')
        .then(resp => resp.json())
        .then(json => console.log(json));
})