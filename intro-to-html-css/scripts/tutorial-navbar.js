var navigate_button = document.getElementById('navigate-to-link');
var navigate_selection = document.getElementById('select-a-link');

navigate_button.onclick = function() {
    var link = navigate_selection.value;
    if (link != 'null') {
        window.location = link;
    }

    return null;
}