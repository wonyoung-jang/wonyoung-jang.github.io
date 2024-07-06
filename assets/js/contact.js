document.addEventListener("DOMContentLoaded", function () {
  var form = document.querySelector(".contact-form");
  var submitButton = form.querySelector('button[type="submit"]');

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    var isValid = true;

    if (isValid) {
      submitButton.disabled = true;
      fetch(form.action, {
        method: form.method,
        body: new FormData(form),
        headers: {
          Accept: "application/json",
        },
      })
        .then(function (response) {
          if (response.ok) {
            // Display success message
            alert('{{ i18n "contact_submitted" }}');
            form.reset();
            submitButton.disabled = false;
          } else {
            // Display error message
            alert('{{ i18n "contact_error" }}');
            submitButton.disabled = false;
          }
        })
        .catch(function (error) {
          // Display error message
          alert('{{ i18n "contact_error" }}');
          submitButton.disabled = false;
        });
    }
  });
});
