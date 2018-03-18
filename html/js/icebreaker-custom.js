/****   Index - background video swithcher  ****/

document.getElementById("index-play-button").addEventListener("click", play_button);
document.getElementById("volume-off").addEventListener("click", play_remove);

function play_button() {
    var arr = get_front_elements();
    
    fade_many_elements(arr);
    
    var header_logo = document.getElementById("logo");
    header_logo.style.display = "none";
    fade_element(header_logo);
    
    var val = document.getElementById('volume-off');
    val.style.display = "block";
    unfade_element(val);
    
    var hori_borders = [];
    var verti_borders = [];
    
    hori_borders.push("#frame-right");
    hori_borders.push("#frame-left");
    verti_borders.push("#frame-top");
    verti_borders.push("#frame-bottom");
    
    border_horiz_fade(hori_borders);
    border_vertical_fade(verti_borders);
    
    var video = document.getElementById('background-video');
    video.muted = false;
    
}

function get_front_elements () {
    var arr = [];
    
    var middle_logo = document.getElementsByClassName("text-slider-inn middle-ux");
    arr.push(middle_logo[0]);
    
    var play_logo = document.getElementById("index-play-button");
    arr.push(play_logo);
    
    
    
    return arr;
}

function border_horiz_fade(element) {
    for(var i = 0; i < element.length; i++) {
        jQuery(element[i]).animate({ width: '0'});
    }
}

function border_horiz_unfade(element) {
    for(var i = 0; i < element.length; i++) {
        jQuery(element[i]).animate({ width: '25px'});
    }
}

function border_vertical_fade(element) {
    for(var i = 0; i < element.length; i++) {
        jQuery(element[i]).animate({ height: '0'});
    }
}

function border_vertical_unfade(element) {
    for(var i = 0; i < element.length; i++) {
        jQuery(element[i]).animate({ height: '25px'});
    }
}

function fade_element(element) {
    var op = 1;
    var timer = setInterval(function(){
        if (op <= 0.1) {
            clearInterval(timer);
            element.style.display = "none";
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.1;
    }, 50);
}

function unfade_element(element) {
    var op = 0.1;  // initial opacity
    element.style.display = 'block';
    var timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1;
    }, 10);
}

function fade_many_elements(elements) {
    for (i = 0; i < elements.length; i++) {
        fade_element(elements[i]);
    }
}

function unfade_many_elements(elements) {
    for (i = 0; i < elements.length; i++) {
        unfade_element(elements[i]);
    }
}

function play_remove() {
        var elements = get_front_elements();
        unfade_many_elements(elements);
        
        var hori_borders = [];
        var verti_borders = [];
    
        hori_borders.push("#frame-right");
        hori_borders.push("#frame-left");
        verti_borders.push("#frame-top");
        verti_borders.push("#frame-bottom");
        
        border_vertical_unfade(verti_borders);
        border_horiz_unfade(hori_borders);
        
        var video = document.getElementById('background-video');
        video.muted = true;
        
        var val = document.getElementById('volume-off');
        val.style.display = "none";
        
        var header_logo = document.getElementById("logo");
        header_logo.style.display = "block";
        unfade_element(header_logo);
}

/****   Index - background video swithcher - END ****/

/****   Multi layer parallax  ****/
  
window.addEventListener('scroll', function(event) {
    console.log("scrollar");
  const topDistance = this.pageYOffset; 
  const layers = document.querySelectorAll("[data-type='parallax']");
  
  for (let layer of Array.from(layers)) {
    const depth = layer.getAttribute('data-depth');
    const movement = -(topDistance * depth);
    const translate3d = `translate3d(0, ${movement}px, 0)`;
    layer.style['-webkit-transform'] = translate3d;
    layer.style['-moz-transform'] = translate3d;
    layer.style['-ms-transform'] = translate3d;
    layer.style['-o-transform'] = translate3d;
    layer.style.transform = translate3d;
  }
});
/****   Multi layer parallax - END ****/

/****     ****/



/****    - END ****/
