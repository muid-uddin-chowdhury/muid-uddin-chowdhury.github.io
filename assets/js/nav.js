// Mobile menu: the rail is visible by default on desktop and toggled on small
// screens. No framework, no build step — this is the only JavaScript on the site.
(function () {
  var button = document.querySelector('[data-menu-button]');
  var rail = document.querySelector('[data-rail]');
  if (!button || !rail) return;

  var mobile = window.matchMedia('(max-width: 860px)');

  function sync() {
    if (mobile.matches) {
      rail.hidden = true;
      button.setAttribute('aria-expanded', 'false');
    } else {
      rail.hidden = false;
    }
  }

  button.addEventListener('click', function () {
    var open = rail.hidden;
    rail.hidden = !open;
    button.setAttribute('aria-expanded', String(open));
  });

  mobile.addEventListener('change', sync);
  sync();
})();
