  const form = document.getElementById("signUpForm");
  const thankYouPopup = document.getElementById("thankYouPopup");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Clear previous errors
    const fields = ["name", "email", "skill", "portfolio"];
    let hasError = false;

    fields.forEach((field) => {
      const input = document.getElementById(field);
      const errorDiv = document.getElementById(field + "Error");
      input.classList.remove("error");
      errorDiv.textContent = "";

      if (!input.value.trim()) {
        input.classList.add("error");
        errorDiv.textContent = "This field is required.";
        hasError = true;
      } else {
        if (field === "email" && !validateEmail(input.value)) {
          input.classList.add("error");
          errorDiv.textContent = "Enter a valid email.";
          hasError = true;
        }

        if (field === "portfolio" && !isValidURL(input.value)) {
          input.classList.add("error");
          errorDiv.textContent =
            "Enter a valid URL starting with http or https.";
          hasError = true;
        }
      }
    });

    if (!hasError) {
      form.style.display = "none";
      thankYouPopup.style.display = "flex";
    }
  });

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email.toLowerCase());
  }

  function isValidURL(url) {
    try {
      const u = new URL(url);
      return u.protocol === "http:" || u.protocol === "https:";
    } catch (_) {
      return false;
    }
  }

