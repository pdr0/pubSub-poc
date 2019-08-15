import topics from '../topics'

const onMessage = (msg, data) => console.log(`TOPIC: ${msg} - payload: ${data}`);

const container = document.querySelector('#vertical-4');
container.addEventListener('click', evt => {
    console.log(`V4: I've been clicked `);
    window.messages.publishSync(topics["lotto.container-4.click"], true)
});

window.messages.subscribe(topics["lotto.main.header.expanded"], onMessage);
window.messages.subscribe(topics["lotto.container-1.click"], onMessage);
window.messages.subscribe(topics["lotto.container-2.click"], onMessage);
window.messages.subscribe(topics["lotto.container-3.click"], onMessage);
