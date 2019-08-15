import topics from '../topics'

const onMessage = (msg, data) => console.log(msg, data);
console.log(`V1: init`);
const container = document.querySelector('#vertical-1');
container.addEventListener('click', evt => {
    console.log(`V1: I've been clicked `);
    window.messages.publishSync(topics["lotto.container-1.click"], true)
});
console.log('subscribe')
window.messages.subscribe(topics["lotto.main.header.expanded"], onMessage);
window.messages.publishSync(topics["lotto.container-1.loaded"], true);