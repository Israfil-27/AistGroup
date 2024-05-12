const form = document.getElementById('my-Form');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const successMessage = document.getElementById('successMessage');

form.addEventListener('submit',  (event) => {
  event.preventDefault();

  const emailValue = emailInput.value.trim();
  const passwordValue = passwordInput.value.trim();
  if (emailValue.length == 0) {
    emailError.textContent = 'Zəhmət olmasa bir e-poçt ünvanı daxil edin';
  } else if (passwordValue.length < 8) {
    passwordError.textContent = 'Şifrə ən azı 8 simvoldan ibarət olmalıdır';
  } else {
    emailError.textContent = '';
    passwordError.textContent = '';
    successMessage.textContent = 'Form uğurla göndərildi!';
    form.reset();
  }
});

