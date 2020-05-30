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

let projects = document.getElementsByClassName('project-item')
let options = document.getElementsByClassName('option-select')

for (cat of options) {
    let category = cat.innerHTML
    let check = {
        'HTML / CSS': 'static-html',
        'RUBY / RAILS': 'ruby',
        'JAVASCRIPT': 'javascript',
        'MERN': 'mern'
    }
    cat.addEventListener('click', () => {
        for (project of projects) {
            project.setAttribute('id', 'invisible')
        }
        if (category === "ALL") {
            for (project of projects) {
                project.setAttribute('id', 'visible')
                console.log(project)
            }
        } else {
            for(item of Object.keys(check)) {
                if (item === category) {
                    let displayList = document.getElementsByClassName(check[item])
                    for (project of displayList) {
                        // project.setAttribute('class', 'option-select')
                        project.setAttribute('id', 'visible')
                    } 
                } 
            }
        }
    })
}

