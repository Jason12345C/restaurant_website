function test() {
    var checkBox = document.getElementsByClassName('nav-toggle');
    var text = document.getElementsById('test');
    if (checkBox.checked == true) {
        text.style.display = 'block'
    }
    else {
        text.style.display = 'none';
    }
}