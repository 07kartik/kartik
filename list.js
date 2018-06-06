var a = document.getElementById('myField');
var b = document.getElementById('chalo');
var c = document.querySelector('div');

// function aaj(event) {
//   if (a.value.length > 0 && event.keyCode === 13) {
//     console.log(a.value);
//     a.value = '';
//   }
// }

// function aaj2() {
//   console.log(a.value);
//   a.value = '';
// }

function newElement() {
  var d = document.createElement('h3');
  d.appendChild(document.createTextNode(a.value));
  c.appendChild(d);
  a.value = '';
}

function onClick() {
  if (a.value.length > 0) {
    newElement();
  }
}

function onEnter(event) {
  if (a.value.length > 0 && event.which === 13) {
    newElement();
  }
}

a.addEventListener('keypress', onEnter);
b.addEventListener('click', onClick);
