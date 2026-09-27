(function () {
  // Floating wrapper
  var wrap = document.createElement('div');
  wrap.style.cssText = 'position:fixed;top:120px;right:20px;width:280px;z-index:999;box-shadow:0 4px 20px rgba(0,0,0,0.15);border-radius:12px;overflow:hidden;';
  wrap.innerHTML =
    '<div id="mlb2-46378512" class="ml-form-embedContainer ml-subscribe-form ml-subscribe-form-46378512">' +
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

  // Basic styling (kept minimal so it renders cleanly regardless of page CSS)
  var style = document.createElement('style');
  style.textContent =
    '#mlb2-46378512{font-family:Arial,sans-serif;background:#f6f6f6;}' +
    '#mlb2-46378512 .ml-form-embedBody{padding:20px;}' +
    '#mlb2-46378512 h4{margin:0 0 8px;font-size:20px;}' +
    '#mlb2-46378512 p{margin:0 0 14px;font-size:13px;color:#333;}' +
    '#mlb2-46378512 input[type=email]{width:100%;box-sizing:border-box;padding:10px;border:1px solid #ccc;border-radius:4px;margin-bottom:10px;font-size:14px;}' +
    '#mlb2-46378512 button{width:100%;padding:10px;background:#000;color:#fff;border:none;border-radius:4px;font-weight:bold;cursor:pointer;}' +
    '#mlb2-46378512 button:hover{background:#333;}';
  document.head.appendChild(style);

  document.body.appendChild(wrap);

  // Hidden iframe + redirect fallback
  var frame = document.createElement('iframe');
  frame.name = 'ml_hidden_frame';
  frame.style.display = 'none';
  document.body.appendChild(frame);

  var form = wrap.querySelector('.ml-block-form');
  frame.addEventListener('load', function () {
    if (form.dataset.submitted) {
      window.location.href = 'https://bookly-shop.com/free-pages-thanks.html';
    }
  });
  form.addEventListener('submit', function () {
    form.dataset.submitted = 'true';
  });

  // Load MailerLite's account script (needed for tracking/automation matching)
  var ml = document.createElement('script');
  ml.src = 'https://assets.mailerlite.com/js/universal.js';
  ml.onload = function () {
    if (window.ml) window.ml('account', '2660595');
  };
  document.head.appendChild(ml);
})();
