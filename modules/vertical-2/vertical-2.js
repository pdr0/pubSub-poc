import topics from '../topics'

const container = document.querySelector('#vertical-2');
const onMessage = (msg, data) => {
    console.log(`TOPIC: ${msg} - payload: ${data}`);
    if (msg === topics["lotto.main.login.click"]) {
        container.className = '';
        container.classList.add('on-login');
    }
};


container.addEventListener('click', evt => {
    window.messages.publishSync(topics["lotto.container-2.click"], true)
});

window.messages.subscribe(topics["lotto.container-1.click"], onMessage);
window.messages.subscribe(topics["lotto.main.login.click"], onMessage);
