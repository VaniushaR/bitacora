//DOM EVENTS

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems);
});

const logIn = document.getElementById('login');
const access = document.getElementById('access');

access.style.display = 'none';

//logIn.style.display = 'none';
