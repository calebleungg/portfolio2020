let nightToggle = document.getElementsByClassName('nightmode-toggle')[0]
let bodyDiv = document.body
let toggleNight = 0

nightToggle.addEventListener('click', () => {
    if(toggleNight === 0) {
        bodyDiv.setAttribute('class', 'nightmode')
        toggleNight = 1
    } else {
        bodyDiv.setAttribute('class', 'daymode')
        toggleNight = 0
    }
})