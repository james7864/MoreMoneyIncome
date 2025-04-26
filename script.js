document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const loginStatus = document.getElementById('loginStatus');
  const logoutBtn = document.getElementById('logoutBtn');

  if (username === 'admin' && password === 'password1234') {
    loginStatus.textContent = 'Login successful!';
    logoutBtn.style.display = 'block';
  } else {
    loginStatus.textContent = 'Incorrect username or password.';
  }
});

document.getElementById('logoutBtn').addEventListener('click', function() {
  document.getElementById('username').value = '';
  document.getElementById('password').value = '';
  document.getElementById('loginStatus').textContent = 'Logged out.';
  this.style.display = 'none';
});
