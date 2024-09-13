const emojiePlace = document.querySelector('.js-emojie-value');
const emojieDescription = document.querySelector('.js-emojie-name');

let cart = [];

updateEmojie();
async function updateEmojie() {
    let response = await fetch('https://emoji-api.com/emojis?access_key=f3826c59bd7a766e8ec872c5bcaebde677313ab6')
    data = await response.json();
    console.log(data);

    for (let index = 0; index < 100; index++) {
        cart.push({
            emojieName: data[index].character,
            EmojieInfo: data[index].unicodeName
        });
        
    }
} 

emojiePlace.addEventListener('click', () => {
    const randomNumber = Math.floor(Math.random()*1300);
    emojiePlace.innerText = data[randomNumber].character;
    emojieDescription.innerText = data[randomNumber].unicodeName;
});