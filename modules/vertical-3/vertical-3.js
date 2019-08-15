import topics from '../topics'

const onMessage = (msg, data) => console.log(msg, data);

const container = document.querySelector('#vertical-3');
container.addEventListener('click', evt => {
    console.log(`V3: I've been clicked `);
    window.messages.publishSync(topics["lotto.container-3.click"], true)
});

window.messages.subscribe(topics["lotto.main.header.expanded"], onMessage);
