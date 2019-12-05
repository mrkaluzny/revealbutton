window.onload = function () {
  console.log('Reveal initiated')
  var buttons = document.getElementsByClassName('revealButton');
  console.log(buttons)
  Array.prototype.forEach.call(buttons, function(el) {
    console.log(el.getElementsByClassName('revealButton__content')[0]);
    el.getElementsByClassName('revealButton__content')[0].style.display = "none";
    el.onclick = function () {
      this.getElementsByClassName('revealButton__fake')[0].style.display = "none";
      this.getElementsByClassName('revealButton__content')[0].style.display = "inline-block";
    }
  });
}
