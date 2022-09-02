

const NOTIFICATION_DELAY = 3000;
let timeoutId = null;
const refs = document.querySelector('.js-alert');
const saveBtn = document.querySelector('.save-button')
console.log(refs)

refs.addEventListener('click', onNotificationClick);
saveBtn.addEventListener('click', showNotification);



function onNotificationClick() {
    hideNotification();
    clearInterval(timeoutId);
}

function showNotification() {
    refs.classList.add('is-visible');

    timeoutId = setTimeout(() => {
        hideNotification();
    }, NOTIFICATION_DELAY);
}
function hideNotification() {
    refs.classList.remove('is-visible');
}


const PROMPT_DELAY = 1000;
const MAX_PROMPT_ATTEMPTS = 3;

let promptCounter = 0;
let hasSubscribed = false;


