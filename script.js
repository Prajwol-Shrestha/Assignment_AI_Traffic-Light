const checkPointEl = document.querySelector('.checkpoint')
const carEl = document.querySelector('.car-container')
const wheelEl = document.querySelectorAll('.wheel')
const lightEl = document.querySelector('.light')


let currentLight = 'R'

function changeLightColor() {
    if (currentLight === 'R') {
        lightEl.style.backgroundColor = 'red'
    } else if (currentLight === 'W') {
        lightEl.style.backgroundColor = 'yellow'
    } else {
        lightEl.style.backgroundColor = 'green'
    }
}

function changeLight() {
    if (currentLight === 'R') {
        currentLight = 'W'
        return
    }
    if (currentLight === 'W') {
        currentLight = 'G'
        return
    }
    if (currentLight === 'G') {
        currentLight = 'R'
    }

}

function moveCar() {
    if (Math.abs(checkPointEl.offsetLeft - (carEl.offsetLeft + 50)) <= 50) {
        if (currentLight === 'R' || currentLight === 'W') {
            carEl.classList.add('animation-pause')
            wheelEl.forEach(wheel => wheel.classList.add('animation-pause'))
        }
    }

    if (currentLight === 'G') {
        carEl.classList.remove('animation-pause')
        wheelEl.forEach(wheel => wheel.classList.remove('animation-pause'))
    }
}


setInterval(changeLightColor, 100)

setInterval(changeLight, 5000)

setInterval(moveCar ,100)

