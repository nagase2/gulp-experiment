function generateColor() {
    return "#" + ((1 << 24) * Math.random() | 0).toString(16);
}

function main() {
    var appComponent = document.getElementById('rainbow')
    console.log('main called')
    setInterval(function () {
        appComponent.style['border-color'] = generateColor();
    },1500)
}