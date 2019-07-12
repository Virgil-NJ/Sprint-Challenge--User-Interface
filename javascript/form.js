var $form = $('contact-form'),
    url = 'https://script.google.com/macros/s/AKfycbwkScAY3H4oaBXZrqXLkowFTiR4Q0T8keNt4hCHWXle2LVtiTnX/exec'

$('#submit-form').on('click', function(e) {
  e.preventDefault();
  var jqxhr = $.ajax({
    url: url,
    method: "GET",
    dataType: "json",
    data: $form.serializeObject()
  }).success(
    // do something
  );
})