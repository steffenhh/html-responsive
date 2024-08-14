function reportWindowSize() {
    console.log('Window: ' + window.innerWidth + 'x' + window.innerHeight);
}

function reportGridItemsSize() {
    var gridContainer = document.getElementById('myGridContainer');
    var myGridItems = gridContainer.getElementsByTagName('div');
    for (var i = 0; i < myGridItems.length; i++) {
        j = i + 1;
        console.log('Cell ' + j + ': ' + myGridItems[i].clientWidth + "x" +myGridItems[i].clientHeight);
    }
}

function onMyResize() {
    reportWindowSize();
    reportGridItemsSize();
}

window.onresize = onMyResize;