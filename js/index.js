
// Navigation Bar selector
const navBar = document.querySelector('header.main-navigation')

// Use mouseover to change the navigation bar to blue
navBar.addEventListener('mouseover', function(event){
    event.target.style.backgroundColor = 'skyblue'
})

// Use mouseenter to change the navigation bar to white
navBar.addEventListener('mouseenter', function(event){
    event.target.style.backgroundColor = 'white'
})

// Use keydown to console.log whenever the user clicks a button on their keyboard
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

// Use load to console.log when the page has been fully loaded
// Use window
window.addEventListener('load', (event) => {
    console.log('The page is fully loaded!')
});

// Use wheel to resize an image on the page

// focus

// resize 

// scroll

// select

// dbclick

// drag and drop
