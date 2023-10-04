
function Typewriter() {
    /*
    function isElementInViewport(elem) {
        var rect = elem.getBoundingClientRect();
        return (
            (window.innerHeight - rect.top) >= 0 || rect.bottom >= 0 
        );
    }
    var elements = document.getElementsByClassName('typewriter');
    var elementstrings = [];
    var elementinuse = [];
    for(var i = 0; i < elements.length; i++){
        elementstrings.push(" " + elements[i].innerHTML);
        elementinuse.push(false);
        elements[i].innerHTML = "";
    }

    function visibleCheck() {
        for (var i = 0; i < elements.length; i++) {
            if (isElementInViewport(elements[i]) && elements[i].innerHTML == "" && !elementinuse[i]) {
                elementinuse[i] = true;
                var intervalreturn = setInterval(typeinc, 100, i, intervalreturn);
            }
        }
    }
    for (var i = 0; i < elementstrings.length; i++) {
        console.log(elementstrings[i]);
    }
    function typeinc(n, interval) {
        if (elements[n].innerHTML.length < elementstrings[n].length) {
            if (elements[n].innerHTML.length > 0) {
                elements[n].innerHTML = elements[n].innerHTML.substring(0, elements[n].innerHTML.length - 1);
            }
            elements[n].innerHTML = elements[n].innerHTML + elementstrings[n][elements[n].innerHTML.length + 1] + '_';
        } else {
            if (elements[n].innerHTML[elements[n].innerHTML.length - 1] == '_') { 
                elements[n].innerHTML = elements[n].innerHTML.substring(0, elements[n].innerHTML.length - 1);
            } 
            clearInterval(interval);
        }
    }
    document.addEventListener("DOMContentLoaded", visibleCheck);
    document.addEventListener("scroll", visibleCheck);
    */
} 
export default Typewriter;