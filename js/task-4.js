const form = document.querySelector('.login-form');
form.addEventListener('submit', event => {
  event.preventDefault();
  const login = form.elements.email.value.trim();
  const password = form.elements.password.value.trim();
  if (login === '' || password === '') {
    alert('All form fields must be filled in');
    return;
  }
  const data = {
    email: login,
    password: password,
  };
  console.log(data);
  form.reset();
});
