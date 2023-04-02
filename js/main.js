// task_1

const makeString = (string) => {
    return console.log(document.getElementById(string).innerText)
}

makeString('string-3')
makeString('string-5')
makeString('string-2')
makeString('string-6')
makeString('string-4')
makeString('string-1')


// task_2

const makeColor = (elementNumber, elementColor) => {
    let a = document.getElementsByClassName('element')
    return a[elementNumber].style.color = elementColor
}

makeColor(0, 'red')
makeColor(1, 'red')
makeColor(2, 'red')
makeColor(3, 'green')
makeColor(4, 'green')
makeColor(5, 'green')


