// All variables from DOM
let start = document.querySelector('.start');
let namePet = document.querySelector('.name-pet');
let nameInput = document.querySelector('.name-input');
let feed = document.querySelector('.feed');
let sleep = document.querySelector('.sleep');
let play = document.querySelector('.play');
let hunger = document.querySelector('.hunger');
let sleepiness = document.querySelector('.sleepiness');
let boredom = document.querySelector('.boredom');
let age = document.querySelector('.age');
let dead = document.querySelector('.dead');
let dogName = document.querySelector('.dog-name');
let section = document.querySelector('section');
let quit = document.querySelector('.quit');

// variables i created
let startGame = false;

// class for my Tamagotchi
class pet {
    constructor() {
        this.hunger = 1;
        this.sleepiness = 1;
        this.boredom = 1;
        this.age = 0;
    }
    feedPet() {
        this.hunger -= 1;
    }
    playWithPet() {
        this.boredom -= 1;
    }
    sleep() {
        this.sleepiness -= 1;
    }
}

// start game event listener
start.addEventListener('click', () => {
    nameInput.classList.remove('hidden');
    namePet.classList.remove('hidden');
    start.classList.add('hidden');
})

// name pet event listener
namePet.addEventListener('click', nameDog);

// function to name the dog
function nameDog() {
    startGame = true;
    dogName.innerHTML += `${nameInput.value}`
    nameInput.value = null;
    nameInput.classList.add('hidden');
    namePet.classList.add('hidden');
    section.classList.remove('hidden');
    intervals();
}

// quit/reset event listener
quit.addEventListener('click', () => {
    startGame = false;
    section.classList.add('hidden');
    nameInput.classList.add('hidden');
    namePet.classList.add('hidden');
    start.classList.remove('hidden');
    age.innerHTML = '0';
    boredom.innerHTML = 'Boredom: 1';
    sleepiness.innerHTML = 'Sleepiness: 1'
    hunger.innerHTML = 'Hunger: 1'
    dead.innerText = '';
    dogName.innerHTML = '';
    clearInterval(dogAgeEverySecond);
    clearInterval(dogBoredomEverySecond);
    clearInterval(dogSleepinessEverySecond);
    clearInterval(dogHungerEverySecond);
    dog.hunger = 1;
    dog.sleepiness = 1;
    dog.boredom = 1;
    dog.age = 0;
})

// creating the pet: 'dog'
const dog = new pet;

// event listener to feed pet
feed.addEventListener('click', () => {
    if (startGame === true) {
        hunger.innerHTML = `Hunger: ${dog.hunger -= 1}`;
    }
})

// event listener to play with dog
play.addEventListener('click', () => {
    if (startGame === true) {
        boredom.innerHTML = `Boredom: ${dog.boredom -= 1}`;
    }
})

// event listener to have dog sleep
sleep.addEventListener('click', () => {
    if (startGame === true) {
        sleepiness.innerHTML = `Sleepiness: ${dog.sleepiness -= 1}`;
    }
})

// starting innerHTMLs of attributes
age.innerHTML = '0';
boredom.innerHTML = 'Boredom: 1';
sleepiness.innerHTML = 'Sleepiness: 1'
hunger.innerHTML = 'Hunger: 1'
dead.innerText = '';

// functions for the intervals
function dogAgeUp() {
    age.innerHTML = `${dog.age += 1}`
    if (dog.hunger >= 20 || dog.sleepiness >= 20 || dog.boredom >= 20 || dog.hunger < 1 || dog.sleepiness < 1 || dog.boredom < 1) {
        dead.innerHTML = `${dogName.innerHTML} has died at age ${age.innerHTML}! Press reset to play again!`;
        clearInterval(dogAgeEverySecond);
        clearInterval(dogBoredomEverySecond);
        clearInterval(dogSleepinessEverySecond);
        clearInterval(dogHungerEverySecond);
        startGame = false;
    } else if (dog.age === 100) {
        dead.innerHTML = `${dogName.innerHTML} has died at age ${age.innerHTML}! ${dogName.innerHTML} lived a healthy and happy life! Press reset to play again!`;
        clearInterval(dogAgeEverySecond);
        clearInterval(dogBoredomEverySecond);
        clearInterval(dogSleepinessEverySecond);
        clearInterval(dogHungerEverySecond);
        startGame = false;
    }
}

function dogBoredomUp() {
    boredom.innerHTML = `Boredom: ${dog.boredom += 1}`
    if (dog.hunger >= 20 || dog.sleepiness >= 20 || dog.boredom >= 20 || dog.hunger < 1 || dog.sleepiness < 1 || dog.boredom < 1) {
        dead.innerHTML = `${dogName.innerHTML} has died at age ${age.innerHTML}! Press reset to play again!`;
        clearInterval(dogAgeEverySecond);
        clearInterval(dogBoredomEverySecond);
        clearInterval(dogSleepinessEverySecond);
        clearInterval(dogHungerEverySecond);
        startGame = false;
    } else if (dog.age === 100) {
        dead.innerHTML = `${dogName.innerHTML} has died at age ${age.innerHTML}! ${dogName.innerHTML} lived a healthy and happy life! Press reset to play again!`;
        clearInterval(dogAgeEverySecond);
        clearInterval(dogBoredomEverySecond);
        clearInterval(dogSleepinessEverySecond);
        clearInterval(dogHungerEverySecond);
        startGame = false;
    }
}

function dogSleepinessUp() {
    sleepiness.innerHTML = `Sleepiness: ${dog.sleepiness += 1}`
    if (dog.hunger >= 20 || dog.sleepiness >= 20 || dog.boredom >= 20 || dog.hunger < 1 || dog.sleepiness < 1 || dog.boredom < 1) {
        dead.innerHTML = `${dogName.innerHTML} has died at age ${age.innerHTML}! Press reset to play again!`;
        clearInterval(dogAgeEverySecond);
        clearInterval(dogBoredomEverySecond);
        clearInterval(dogSleepinessEverySecond);
        clearInterval(dogHungerEverySecond);
        startGame = false;
    }
    else if (dog.age === 100) {
        dead.innerHTML = `${dogName.innerHTML} has died at age ${age.innerHTML}! ${dogName.innerHTML} lived a healthy and happy life! Press reset to play again!`;
        clearInterval(dogAgeEverySecond);
        clearInterval(dogBoredomEverySecond);
        clearInterval(dogSleepinessEverySecond);
        clearInterval(dogHungerEverySecond);
        startGame = false;
    }
}
function dogHungerUp() {
    hunger.innerHTML = `Hunger: ${dog.hunger += 1}`
    if (dog.hunger >= 20 || dog.sleepiness >= 20 || dog.boredom >= 20 || dog.hunger < 1 || dog.sleepiness < 1 || dog.boredom < 1) {
        dead.innerHTML = `${dogName.innerHTML} has died at age ${age.innerHTML}! Press reset to play again!`;
        clearInterval(dogAgeEverySecond);
        clearInterval(dogBoredomEverySecond);
        clearInterval(dogSleepinessEverySecond);
        clearInterval(dogHungerEverySecond);
        startGame = false;
    } else if (dog.age === 100) {
        dead.innerHTML = `${dogName.innerHTML} has died at age ${age.innerHTML}! ${dogName.innerHTML} lived a healthy and happy life! Press reset to play again!`;
        clearInterval(dogAgeEverySecond);
        clearInterval(dogBoredomEverySecond);
        clearInterval(dogSleepinessEverySecond);
        clearInterval(dogHungerEverySecond);
        startGame = false;
    }
}

// intervals
function intervals() {
    if (startGame === true) {
        dogAgeEverySecond = setInterval(dogAgeUp, 1000);
        dogBoredomEverySecond = setInterval(dogBoredomUp, 1000);
        dogSleepinessEverySecond = setInterval(dogSleepinessUp, 1000);
        dogHungerEverySecond = setInterval(dogHungerUp, 1000);
    }
}