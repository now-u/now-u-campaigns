document.addEventListener('DOMContentLoaded', function () {
  var rellax = new Rellax('.rellax', { center: true });
  var destroyRellax = window.matchMedia('(max-width: 740px)');

  var header = document.getElementById('navigation');
  var btns = header.getElementsByClassName('btn');

  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', function () {
      var current = document.getElementsByClassName('active');

      if (current.length > 0) {
        current[0].className = current[0].className.replace(' active', '');
      }
      this.className += ' active';
    });
  }

  unloadFunction(destroyRellax);
  destroyRellax.addListener(unloadFunction);

  function unloadFunction(d) {
    if (destroyRellax.matches) {
      rellax.destroy();
    }
  }
});
