// Map each product to its checkout link.
// Replace these placeholder URLs with your real Stripe Payment Links.
// Add a new line here every time you add a new product card anywhere on the site,
// using the same key you put in that card's data-product attribute.
const CHECKOUT_LINKS = {
  halloween: "https://buy.stripe.com/REPLACE_WITH_HALLOWEEN_LINK",
  toddler: "https://buy.stripe.com/REPLACE_WITH_TODDLER_LINK"
};

document.querySelectorAll('.buy').forEach(function(btn){
  btn.addEventListener('click', function(e){
    e.preventDefault();
    const key = btn.getAttribute('data-product');
    const url = CHECKOUT_LINKS[key];
    if(url && url.indexOf('REPLACE_WITH') === -1){
      window.location.href = url;
    } else {
      alert('Add your Stripe Payment Link for "' + key + '" in script.js (CHECKOUT_LINKS section).');
    }
  });
});
