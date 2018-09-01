// Video switch functions
function switchGraphic(className) {
    $(className + ' video').toggle();
    $(className + ' img').toggle();
};

function recursiveCoolness() {
    switchGraphic('.AoT');

    setTimeout(function() {
        switchGraphic('.AoT');
        switchGraphic('.DragonBall');
    }, 38000);

    setTimeout(function() {
        switchGraphic('.DragonBall');
        switchGraphic('.Totoro');
    }, 38000 + 38000);

    setTimeout(function() {
        switchGraphic('.Totoro');
        switchGraphic('.SpongeBob');
    }, 38000 + 38000 + 38000);

    setTimeout(function() {
        switchGraphic('.SpongeBob');
        switchGraphic('.Chopper');
    }, 38000 + 38000 + 38000 + 26000);

    setTimeout(function() {
        switchGraphic('.Chopper');
        recursiveCoolness();
    }, 38000 + 38000 + 38000 + 26000 + 37000);
}

// Mouse hover function
function mouseHover(name) {
    $(name).hover(function() {
        switchGraphic(name);
    }, function() {
        switchGraphic(name);
    });
};

// Navigation function
var open = 0;
function openClose() {
    if (open === 0) {
        document.getElementById("myNav").style.height = "100%";
        open = 1;
    } else {
        document.getElementById("myNav").style.height = "0%";
        open = 0;
    }
};

// Top function
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
};

$(document).ready(function() {
    recursiveCoolness();
    mouseHover('.AoT');
    mouseHover('.DragonBall');
    mouseHover('.Totoro');
    mouseHover('.SpongeBob');
    mouseHover('.Chopper');
    $('#nav-icon2').click(function(){
		$(this).toggleClass('open');
	});
});




