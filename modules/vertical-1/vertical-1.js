import topics from '../topics'

const onMessage = (msg, data) => console.log(`TOPIC: ${msg} - payload: ${data}`);

const container = document.querySelector('#vertical-1');
container.addEventListener('click', evt => {
    console.log(`V1: I've been clicked `);
    window.messages.publishSync(topics["lotto.container-1.click"], true)
});

window.messages.subscribe(topics["lotto.main.header.expanded"], onMessage);
window.messages.publishSync(topics["lotto.container-1.loaded"], true);