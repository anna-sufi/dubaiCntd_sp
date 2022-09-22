function vacationCntd() {
    const days = document.querySelector('.days');
    const hours = document.querySelector('.hours');
    const minutes = document.querySelector('.minutes');
    const seconds = document.querySelector('.seconds');

    const now = new Date();
    const trip = new Date('October 31, 2022 00:00');
    const diff = trip - now;
    console.log(diff);
    const msInSec = 1000;
    const msInMin = 1000*60;
    const msInHour = 1000*60*60;
    const msInDay = 1000*60*60*24;

    const showDays = Math.floor(diff/msInDay);
    const showHours = Math.floor(diff%msInDay/msInHour);
    const showMinutes = Math.floor(diff%msInHour/msInMin);
    const showSeconds = Math.floor(diff%msInMin/msInSec);
    
    days.textContent = showDays;
    hours.textContent = showHours;
    minutes.textContent = showMinutes;
    seconds.textContent = showSeconds;

    if (diff<=0) {
        days.textContent = 0;
        hours.textContent = 0;
        minutes.textContent = 0;
        seconds.textContent = 0;
        
        clearInterval(timer);
        hooray();
    }
}

function hooray() {
    document.querySelector('.hooray').style.display='flex'
}

let timer = setInterval(vacationCntd, 1000);

const button = document.querySelector('#listen');
const song = document.querySelector('#song');

button.addEventListener('click', function() {
    if (song.paused) {
        button.innerHTML=`<img class='notes' src="https://img.icons8.com/cute-clipart/344/pause-squared.png" alt="play_button">`;
        song.play();
    } else {
        button.innerHTML=`<img class='notes' src="https://img.icons8.com/office/344/musical-notes.png" alt="play_button">`;
        song.pause();
    }
})

const photo = document.querySelector('.photo');
function changePhoto() {
    if (photo.classList.contains('d1')) {
        photo.classList.remove('d1');
        photo.classList.add('d2');
    } else {
    if (photo.classList.contains('d2')) {
        photo.classList.remove('d2');
        photo.classList.add('d3');
    } else {
    if (photo.classList.contains('d3')) {
        photo.classList.remove('d3');
        photo.classList.add('d4');
    } else {
    if (photo.classList.contains('d4')) {
        photo.classList.remove('d4');
        photo.classList.add('d1');
    }}}}
}

setInterval(changePhoto, 3000);

const list = document.querySelector('ul');
const input = document.querySelector('input');
const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
    if (input.value.trim().length === 0) return false
    else {
    const newBlock = document.createElement('div');
    newBlock.classList.add('newBlock');
    list.appendChild(newBlock);
    
    const item = document.createElement('li');
    item.innerText = input.value;
    item.classList.add('newItem');
    newBlock.appendChild(item);
    item.scrollIntoView();

    const check = document.createElement('input');
    check.type = "checkbox";
    check.classList.add('check');
    
    newBlock.appendChild(check);

    const del = document.createElement('button');
    del.classList.add("del");
    del.innerText = '❌';
    newBlock.appendChild(del);

    input.value = '';

    check.addEventListener('click', () => {
        if (check.checked === true) item.classList.add('itemDone');
        else item.classList.remove('itemDone');
    })

    del.addEventListener('click', () => {
            let yes = confirm('Вы уверены, что хотите удалить дело?');
            if (yes === true) list.removeChild(newBlock);
        })
    }
})