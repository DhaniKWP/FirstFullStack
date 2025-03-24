document.getElementById('nameForm').addEventListener('submit', async function(event) {
  event.preventDefault(); // Mencegah reload halaman

  const name = document.getElementById('nameInput').value;
  const welcomeMessage = document.getElementById('welcomeMessage');

  try {
      const response = await fetch('http://localhost:3000/api/users', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name })
      });
      const data = await response.json();

      if (response.ok) {
          welcomeMessage.textContent = data.message;
      } else {
          welcomeMessage.textContent = data.message || 'Terjadi kesalahan!';
      }
  } catch (error) {
      welcomeMessage.textContent = 'Gagal terhubung ke server!';
      console.error('Error:', error);
  }

  document.getElementById('nameInput').value = ''; // Reset input
});