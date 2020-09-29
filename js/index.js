// mouseover
const navBar = document.querySelector('header.main-navigation')
navBar.addEventListener('mouseover', function(event){
    event.target.style.backgroundColor = 'skyblue'
})

//mouseenter
navBar.addEventListener('mouseenter', function(event){
    event.target.style.backgroundColor = 'white'
})

// keydown
document.addEventListener('keydown', function(event){
    const keyName = event.key;
    if (event.key === 'Control'){
        return;
    }

    if(event.ctrlKey){
        alert(`Combination of ctrlKey + ${keyName}`)
    } else {
        alert(`Key pressed: ${keyName}`);
    }
}, false);

// wheel

// load 

// focus

// resize 

// scroll

// select

// dbclick

// drag and drop
