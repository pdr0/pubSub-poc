import topics from '../topics'
const container = document.querySelector('#vertical-1');

const onMessage = (msg, data) => {
    console.log(`TOPIC: ${msg} - payload: ${data}`);
    if (msg === topics["lotto.main.search.click"]) {
        container.className = '';
        container.classList.add('on-search');
    }

    if (msg === topics["lotto.container-2.click"]) {
        container.className = '';
        container.classList.add('on-payment');
    }
}

container.addEventListener('click', evt => {
    window.messages.publishSync(topics["lotto.container-1.click"], true)
});

window.messages.subscribe(topics["lotto.main.search.click"], onMessage);
window.messages.subscribe(topics["lotto.container-2.click"], onMessage);

window.messages.publishSync(topics["lotto.container-1.loaded"], true);
