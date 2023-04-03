
// task_3


let i = 1;
while(i < 6) {

    let container = document.getElementById('container');
    const div = document.createElement('div');
    container.append(div);
    div.className = 'element';
    text = 'Element ';
    div.append(text + i)
    i++;
}


$(container.children).each(function () {
    this.innerHTML = this.innerHTML.replace( /(\w+)\s(\w+)/, '$1 <span>$2</span>' );
    
});

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

let span = document.querySelectorAll("span");
for (let s of span) {
    s.style.color = `${getRandomColor()}`;
}


