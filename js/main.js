// Copy email to clipboard
function copyEmail(btn) {
  var email = 'maheswarakavuru@outlook.com';
  var hint = btn.querySelector('.copy-hint');
  navigator.clipboard.writeText(email).then(function () {
    btn.classList.add('copied');
    if (hint) hint.textContent = 'Copied!';
    setTimeout(function () {
      btn.classList.remove('copied');
      if (hint) hint.textContent = 'Click to copy';
    }, 2000);
  });
}

// Code sample tab switcher
function switchTab(id, btn) {
  document.querySelectorAll('.code-pane').forEach(function(pane) {
    pane.classList.remove('active');
  });
  document.querySelectorAll('.code-tab').forEach(function(tab) {
    tab.classList.remove('active');
  });
  document.getElementById('pane-' + id).classList.add('active');
  btn.classList.add('active');
}

// Smooth scroll for hero buttons
function scrollToSection(sectionId) {
  var el = document.getElementById(sectionId);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

// Highlight active nav link on scroll
(function () {
  var sections = ['about', 'skills', 'projects', 'code', 'contact'];

  window.addEventListener('scroll', function () {
    var scrollY = window.scrollY + 80;

    sections.forEach(function (id) {
      var el = document.getElementById(id);
      var link = document.querySelector('.nav-links a[href="#' + id + '"]');
      if (!el || !link) return;

      var top    = el.offsetTop;
      var bottom = top + el.offsetHeight;

      if (scrollY >= top && scrollY < bottom) {
        document.querySelectorAll('.nav-links a').forEach(function (a) {
          a.style.color = '';
          a.style.fontWeight = '';
        });
        link.style.color = '#1B3A6B';
        link.style.fontWeight = '600';
      }
    });
  });
})();
