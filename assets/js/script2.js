
    color = ''
    document.addEventListener('keydown', function (event) { 
        console.log(event.key)
        console.log(color)
        if (event.key === 'a') {
            color = 'red'
        } else if (event.key === 's') {
            color = 'blue'
        } else if (event.key === 'd') {
            color = 'yellow'
        }
    })
    const changeColor = (id) => {
        const element = document.getElementById(id)
        element.style.background = color
    }
