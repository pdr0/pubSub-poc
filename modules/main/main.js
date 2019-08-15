import topics from '../topics'

const onMessage = (msg, data) => console.log(`TOPIC: ${msg} - payload: ${data}`);

window.messages.publishSync(topics['lotto.main.header.expanded'], true);

window.messages.subscribe(topics['lotto.container-1.click'], onMessage);
window.messages.subscribe(topics['lotto.container-2.click'], onMessage);
window.messages.subscribe(topics['lotto.container-3.click'], onMessage);
window.messages.subscribe(topics['lotto.container-4.click'], onMessage);


const container = document.querySelector('header');
container.addEventListener('click', evt => {
    window.messages.publishSync(topics["lotto.main.header.expanded"], true)
});

window.messages.publishSync(topics['lotto.main.loaded'], true);



