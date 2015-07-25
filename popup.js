$(document).ready(function() {
  var popup = localStorage.popup || 'igoogle';

  var frame = document.createElement('iframe');

  if (popup == 'gmail') {
    // open gmail gadget
    $('body').height(500).width(500);
    frame.setAttribute('src', 'http://www.rememberthemilk.com/services/modules/gmail/');
  }
  else if (popup == 'iphone') {
    // open iphone web app
    $('body').height(480).width(320);
    frame.setAttribute('src', 'http://i.rememberthemilk.com/');
  }
  else if (popup == 'mobile') {
    // open mobile web app
    $('body').height(500).width(500);
    frame.setAttribute('src', 'http://m.rememberthemilk.com/');
  }
  else {
    // igoogle and default
    $('body').height(600).width(600);
    frame.setAttribute('src', 'http://www.rememberthemilk.com/services/modules/googleig/');
  }

  document.body.appendChild(frame);
});