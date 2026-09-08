// Mobile menu + theme switching. The only JavaScript on the site.
(function () {

  /* ---------- Theme ------------------------------------------------ */
  // The <head> of each page sets the theme before first paint so there is
  // no flash. This part only handles clicks on the toggle.

  var toggle = document.querySelector('[data-theme-toggle]');

  function currentTheme() {
    return document.documentElement.getAttribute('data-theme') === 'light'
      ? 'light' : 'dark';
  }

  function applyTheme(theme) {
    if (theme === 'light') {
      document.documentElement.setAttribute('data-theme', 'light');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
    if (toggle) {
      toggle.setAttribute('aria-pressed', String(theme === 'dark'));
    }
    try {
      localStorage.setItem('theme', theme);
    } catch (e) {
      // Private browsing or storage disabled — the choice just won't persist.
    }
  }

  if (toggle) {
    toggle.setAttribute('aria-pressed', String(currentTheme() === 'dark'));
    toggle.addEventListener('click', function () {
      applyTheme(currentTheme() === 'light' ? 'dark' : 'light');
    });
  }

  /* ---------- Mobile menu ------------------------------------------ */

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
