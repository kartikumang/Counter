const addcount = document.querySelector('#addcountbtn');
const lowercount = document.querySelector('#lowercountbtn');

let counter = document.querySelector('.counter');

let count = 0;

addcount.addEventListener('click',incrementcounter);
lowercount.addEventListener('click',decrementcounter);

function incrementcounter (){
    count++;
    counter.innerHTML = count;
    if(counter.innerHTML>'0'){
        counter.style.color = '#4caf50';
    }
    else if(counter.innerHTML === '0'){
        counter.style.color = 'white';
    }

    counter.animate([{opacity:'0.2'},{opacity:'1.0'}],{duration:500,fill:'forwards'});
}

function decrementcounter () {
    count--;
    counter.innerHTML = count;
    if(counter.innerHTML<'0'){
        counter.style.color = 'red';
    }
    else if(counter.innerHTML === '0'){
        counter.style.color = 'white';
    }

    counter.animate([{opacity:'0.2'},{opacity:'1.0'}],{duration:500,fill:'forwards'});
}

