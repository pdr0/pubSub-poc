import topics from '../topics'

const onMessage = (msg, data) => console.log(msg, data);

const container = document.querySelector('#vertical-2');
container.addEventListener('click', evt => {
    console.log(`V2: I've been clicked `);
    window.messages.publishSync(topics["lotto.container-2.click"], true)
});

window.messages.subscribe(topics["lotto.container-1.click"], onMessage);
