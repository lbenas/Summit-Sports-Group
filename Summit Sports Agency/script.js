//animated nav
const toggle = document.getElementById('toggle');
const nav = document.getElementById('nav');

toggle.addEventListener('click', () => nav.classList.toggle('activeAni'))
//sticky nav
const navi = document.querySelector('nav');
window.addEventListener('scroll', fixNav)

function fixNav(){
    if(window.scrollY > navi.offsetHeight + 150){
        nav.classList.add('activeStick');
    }else{
        nav.classList.remove('activeStick')
    }
}
//faq
const toggles =document.querySelectorAll('.faq-toggle');

toggles.forEach(toggle => {
    toggle.addEventListener('click', () =>{
        toggle.parentNode.classList.toggle('active')
    })
})
//inspire

const button = document.getElementById('button');
const toasts = document.getElementById('toasts');

const messages = [
    '“Only he who can see the invisible can do the impossible.” - Frank L. Gaines',
    '“The man who has no imagination has no wings.” - Muhammad Ali',
    '“A trophy carries dust. Memories last forever.” - Mary Lou Retton',
    '“It is not the size of a man but the size of his heart that matters.” - Evander Holyfield',
    '“The more difficult the victory, the greater the happiness in winning.” - Pele',
    '“You have to expect things of yourself before you can do them.”   - Michael Jordan',
    '“You were born to be a player. You were meant to be here. This moment is yours.” - Herb Brooks'
]

button.addEventListener('click', () => createNotification());

function createNotification(){
    const notif = document.createElement('div');
    notif.classList.add('toast');

    notif.innerText = getRandomMessage();

    toasts.appendChild(notif);

    setTimeout(() => {
        notif.remove()
    }, 3000)
}

function getRandomMessage(){
    return messages[Math.floor(Math.random() * messages.length)]
}
