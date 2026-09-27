(function () {
  var DELAY_MS = 6000;

  var style = document.createElement('style');
  style.textContent =
    '#signup-widget-wrap{position:fixed;bottom:20px;right:20px;width:280px;z-index:999;' +
    'box-shadow:0 4px 20px rgba(0,0,0,0.15);border-radius:12px;overflow:hidden;' +
    'opacity:0;transform:translateY(20px);transition:opacity 0.4s ease,transform 0.4s ease;}' +
    '#signup-widget-wrap.visible{opacity:1;transform:translateY(0);}' +
    '#mlb2-46378512{font-family:Arial,sans-serif;background:#f6f6f6;position:relative;}' +
    '#mlb2-46378512 .ml-form-embedBody{padding:20px;}' +
    '#mlb2-46378512 h4{margin:0 0 8px;font-size:20px;}' +
    '#mlb2-46378512 p{margin:0 0 14px;font-size:13px;color:#333;}' +
    '#mlb2-46378512 input[type=email]{width:100%;box-sizing:border-box;padding:10px;border:1px solid #ccc;border-radius:4px;margin-bottom:10px;font-size:14px;}' +
    '#mlb2-46378512 button{width:100%;padding:10px;background:#000;color:#fff;border:none;border-radius:4px;font-weight:bold;cursor:pointer;}' +
    '#mlb2-46378512 button:hover{background:#333;}' +
    '.signup-widget-close{position:absolute;top:8px;right:10px;background:none;border:none;font-size:18px;line-height:1;color:#666;cursor:pointer;padding:4px;}' +
    '.signup-widget-close:hover{color:#000;}' +
    '.signup-widget-thanks{padding:20px;font-family:Arial,sans-serif;text-align:center;}' +
    '.signup-widget-thanks h4{margin:0 0 6px;font-size:18px;}' +
    '.signup-widget-thanks p{margin:0;font-size:13px;color:#333;}';
  document.head.appendChild(style);

  var wrap = document.createElement('div');
  wrap.id = 'signup-widget-wrap';
  wrap.innerHTML =
    '<div id="mlb2-46378512" class="ml-form-embedContainer ml-subscribe-form ml-subscribe-form-46378512">' +
    '<button type="button" class="signup-widget-close" aria-label="Close">&times;</button>' +
    '<div class="ml-form-align-center ">' +
    '<div class="ml-form-embedWrapper embedForm">' +
    '<div class="ml-form-embedBody ml-form-embedBodyDefault row-form">' +
    '<div class="ml-form-embedContent" style=" ">' +
    '<h4>Get Your Free Coloring Pages</h4>' +
    '<p>Sign up and get a free printable activity book instantly</p>' +
    '</div>' +
    '<form class="ml-block-form" action="https://assets.mailerlite.com/jsonp/2660595/forms/199644019259606374/subscribe" data-code="" method="post" target="ml_hidden_frame">' +
    '<div class="ml-form-formContent">' +
    '<div class="ml-form-fieldRow ml-last-item">' +
    '<div class="ml-field-group ml-field-email ml-validate-email ml-validate-required">' +
    '<input aria-label="email" aria-required="true" type="email" class="form-control" name="fields[email]" placeholder="Email" autocomplete="email">' +
    '</div></div></div>' +
    '<input type="hidden" name="ml-submit" value="1">' +
    '<div class="ml-form-embedSubmit">' +
    '<button type="submit" class="primary">Send Me the Free Pages</button>' +
    '</div>' +
    '<input type="hidden" name="anticsrf" value="true">' +
    '</form></div></div></div></div>';

  document.body.appendChild(wrap);

  var frame = document.createElement('iframe');
  frame.name = 'ml_hidden_frame';
  frame.style.display = 'none';
  document.body.appendChild(frame);

  var form = wrap.querySelector('.ml-block-form');
  var closeBtn = wrap.querySelector('.signup-widget-close');
  var submitted = false;

  function hideWidget() {
    wrap.classList.remove('visible');
    setTimeout(function () { wrap.remove(); }, 400);
  }

  function showThanks() {
    wrap.innerHTML = '<div class="signup-widget-thanks"><h4>Thank you!</h4><p>Check your email for your free coloring pages.</p></div>';
    setTimeout(hideWidget, 2500);
  }

  closeBtn.addEventListener('click', hideWidget);

  form.addEventListener('submit', function () {
    submitted = true;
    setTimeout(showThanks, 300);
  });

  frame.addEventListener('load', function () {
    if (submitted) {
      setTimeout(showThanks, 0);
    }
  });

  setTimeout(function () {
    wrap.classList.add('visible');
  }, DELAY_MS);
})();
