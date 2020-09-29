
// Navigation Bar selector
const navBar = document.querySelector('header.main-navigation')

// 1. Use mouseover to change the navigation bar to blue
navBar.addEventListener('mouseover', function(event){
    event.target.style.backgroundColor = 'skyblue'
});

// 2. Use mouseenter to change the navigation bar to white
navBar.addEventListener('mouseenter', function(event){
    event.target.style.backgroundColor = 'limegreen'
});

// 3. Use keydown to console.log whenever the user clicks a button on their keyboard
// Use document
document.addEventListener('keydown', function(event){
    const keyName = event.key;
    if (event.key === 'Control'){
        return;
    }

    if(event.ctrlKey){
        console.log(`Combination of ctrlKey + ${keyName}`)
    } else {
        console.log(`Key pressed: ${keyName}`);
    }
}, false);

// 4. Use load to console.log when the page has been fully loaded
// Use window
window.addEventListener('load', (event) => {
    console.log('The page is fully loaded!')
});

// 5. Online
window.addEventListener('online', (event) => {
    console.log('You are now connected to the network')
});

// 6. Use dblclick to change the color of a container
const card = document.querySelector('.content-section')
card.addEventListener('dblclick', function (event){
    card.style.backgroundColor = 'royalblue'
});

// 7. Use resize to change background color
const mainContainer = document.querySelector('.home')
window.addEventListener('resize', (event) => {
    mainContainer.style.backgroundColor = 'red'
});

// 8. Use click event to rotate images
const images = document.querySelectorAll('img')
window.addEventListener('click', () => {
    images.forEach(element => {
        element.style.transform = "rotate(180deg)";
    })
});

// scroll event
const text = document.querySelectorAll('.text-content')
window.addEventListener('scroll', () => {
    text.forEach(element => {
        element.style.transform = "rotate(90deg)";
    })
});

// select