document.onkeydown = keydown; 

function keydown (evt) { 

    if (!evt) evt = event; 

    if (evt.altKey && evt.keyCode === 74) {

        //alert("ALT + j"); 
        window.scrollBy(0,50); // horizontal and vertical scroll increments

    } else if (evt.altKey && evt.keyCode === 75) { 

        //alert("ALT + k");
        window.scrollBy(0,-50); // horizontal and vertical scroll increments

    } 

}