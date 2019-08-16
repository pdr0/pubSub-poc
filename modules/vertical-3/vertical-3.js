import topics from '../topics'

const container = document.querySelector('#vertical-3');

const onMessage = (msg, data) => {
    console.log(`TOPIC: ${msg} - payload: ${data}`);
    if (msg === topics["lotto.main.help.click"]) {
        container.className = '';
        container.classList.add('on-help');
    }
    if (msg === topics["lotto.main.login.click"]) {
        container.className = '';
        container.classList.add('on-login');
    }

    if (msg === topics["lotto.container-2.click"]) {
        container.className = '';
        container.classList.add('on-payment');
    }

    if (msg === topics["lotto.container-4.click"]) {
        container.className = '';
        container.classList.add('on-lotto');
    }
};

container.addEventListener('click', evt => {
    window.messages.publishSync(topics["lotto.container-3.click"], true)
});

window.messages.subscribe(topics["lotto.main.header.expanded"], onMessage);
window.messages.subscribe(topics["lotto.container-1.click"], onMessage);
window.messages.subscribe(topics["lotto.container-2.click"], onMessage);
window.messages.subscribe(topics["lotto.container-3.click"], onMessage);
window.messages.subscribe(topics["lotto.container-4.click"], onMessage);
window.messages.subscribe(topics["lotto.main.help.click"], onMessage);
window.messages.subscribe(topics["lotto.main.login.click"], onMessage);
