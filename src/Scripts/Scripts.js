function Scripts() {
    var text = "Hi, I'm Oscar.";
    var textindex = 0;
    var intervalID;
    var intervalID2;
    var flash = false;
        function typestart() {
        intervalID = setInterval(typeinc,100);
    }
    function typeinc() {
        textindex++;
        document.querySelector("#tickerheading").innerHTML = text.substring(0, textindex) + '_';
        if (textindex >= text.length) {
            clearInterval(intervalID);
            flashstart();
        }
    }

    function flashinc() {
        if (flash && Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0) > 768) {
            document.querySelector("#tickerheading").innerHTML = text + '_';
            flash = false;
        } else {
            document.querySelector("#tickerheading").innerHTML = text;
            flash = true;          
        }
    }
    function flashstart() {
        intervalID2 = setInterval(flashinc,500);
    }
    document.addEventListener("DOMContentLoaded", typestart);
} 
export default Scripts;