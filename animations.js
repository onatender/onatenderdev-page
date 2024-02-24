function renkDegistir() {

    let i = 0;
    let darken = false;
    setInterval(function () {
        let text = `2px 0px 222px rgb(${i}, ${i}, ${i})`;
        $('.photo').css('box-shadow', text);
        if (darken) {
            i--;
        }
        else {
            i++;
        }
        if (i == 166) darken = true;
        if (i == 0) darken = false;
    }, 50);
}

function boyutDegistir() {

    let i = 1;
    let largen = true;
    setInterval(function () {
        $('.photo').css('scale', `${i}`);
        if (largen) {
            i+=0.0005;
        }
        else {
            i-=0.0005;
        }
        if (i > 1.1) largen = false;
        if (i < 1) largen = true;
    }, 30);
}

renkDegistir();
boyutDegistir();
