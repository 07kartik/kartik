color1 = document.querySelector('.color1');
color2 = document.querySelector('.color2');
color3 = document.querySelector('.color3');
body = document.getElementById('rumour');
css = document.querySelector('h3');

// body.style.background = 'linear-gradient(to right, ' + red + ', ' + blue + ')';

function setnow() {
  body.style.background =
    'linear-gradient(to right, ' +
    color1.value +
    ', ' +
    color2.value +
    ',' +
    color3.value +
    ')';

  css.textContent = body.style.background + ';';
}

color1.addEventListener('input', setnow);
color2.addEventListener('input', setnow);
color3.addEventListener('input', setnow);

// function setGradient() {
//   body.style.background =
//     'linear-gradient(to right, ' + color1.value + ', ' + color2.value + ')';

//   css.textContent = body.style.background + ';';
// }

// color1.addEventListener('input', setGradient);

// color2.addEventListener('input', setGradient);
