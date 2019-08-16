import topics from '../topics'

const onMessage = (msg, data) => console.log(`TOPIC: ${msg} - payload: ${data}`);

const loginButton = document.querySelector('.login');
const helpButton = document.querySelector('.help');
const searchButton = document.querySelector('.search');

window.messages.subscribe(topics['lotto.container-1.click'], onMessage);
window.messages.subscribe(topics['lotto.container-2.click'], onMessage);
window.messages.subscribe(topics['lotto.container-3.click'], onMessage);
window.messages.subscribe(topics['lotto.container-4.click'], onMessage);



loginButton.addEventListener('click', evt => {
    window.messages.publish(topics["lotto.main.login.click"], true)
});

helpButton.addEventListener('click', evt => {
    window.messages.publish(topics["lotto.main.help.click"], true)
});

searchButton.addEventListener('click', evt => {
    window.messages.publish(topics["lotto.main.search.click"], true)
});

window.messages.publishSync(topics['lotto.main.loaded'], true);



