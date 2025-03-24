FirstFullStack
FirstFullStack adalah aplikasi web full-stack sederhana yang memungkinkan pengguna memasukkan nama melalui form di frontend, lalu menyimpan data tersebut ke database MySQL via backend. Proyek ini dibuat sebagai contoh belajar untuk mengintegrasikan frontend dan backend menggunakan teknologi web modern.

Fitur
Form input nama di frontend.
Penyimpanan data ke database MySQL.
API sederhana untuk komunikasi frontend-backend.
Penggunaan variabel lingkungan untuk konfigurasi aman.
Teknologi
Frontend:
HTML: Struktur halaman.
CSS: Styling antarmuka.
JavaScript: Logika interaktivitas dan komunikasi API.
Backend:
Node.js: Runtime untuk server.
Express.js: Framework untuk API.
MySQL: Database relasional.
dotenv: Manajemen variabel lingkungan.
Lainnya:
Git: Version control.
Struktur Folder
text

Collapse

Wrap

Copy
FirstFullStack/
├── .gitignore          # Aturan untuk ignore file (node_modules, .env, dll.)
├── backend/            # Folder backend
│   ├── node_modules/   # Dependensi Node.js
│   ├── package.json    # Konfigurasi proyek backend
│   ├── server.js       # Logika server dan API
│   └── .env            # Variabel lingkungan (tidak diunggah)
├── frontend/           # Folder frontend
│   ├── index.html      # Halaman utama
│   ├── styles.css      # Styling
│   └── script.js       # Logika frontend
Cara Menjalankan
Prasyarat
Node.js terinstall.
MySQL terinstall dan berjalan (misalnya via XAMPP).
Git untuk clone repositori.
Langkah-langkah
Clone Repositori
bash

Collapse

Wrap

Copy
git clone https://github.com/username/FirstFullStack.git
cd FirstFullStack
Setup Backend
Masuk ke folder backend:
bash

Collapse

Wrap

Copy
cd backend
Install dependensi:
bash

Collapse

Wrap

Copy
npm install
Buat file .env di backend/ dengan isi:
text

Collapse

Wrap

Copy
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=rahasia123  # Ganti dengan password MySQL-mu
DB_NAME=simple_website
PORT=3000
Setup Database
Login ke MySQL:
bash

Collapse

Wrap

Copy
mysql -u root -p
Buat database dan tabel:
sql

Collapse

Wrap

Copy
CREATE DATABASE simple_website;
USE simple_website;
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
Jalankan Backend
Dari folder backend:
bash

Collapse

Wrap

Copy
node server.js
Pastikan muncul: Server berjalan di port 3000 dan Terhubung ke MySQL!.
Jalankan Frontend
Buka frontend/index.html di browser (misalnya dengan Live Server di VS Code atau langsung double-click).
Masukkan nama di form, klik "Kirim", dan lihat pesan konfirmasi.
Catatan
Jangan unggah file .env ke GitHub (sudah diignore di .gitignore).
Sesuaikan kredensial MySQL di .env dengan setup lokalmu.
Proyek ini sederhana dan bisa dikembangkan lebih lanjut (misalnya menampilkan data dari database di frontend).
Kontribusi
Silakan fork repositori ini, buat perubahan, dan ajukan pull request jika ingin berkontribusi!

Lisensi
Proyek ini bebas digunakan untuk belajar. Tidak ada lisensi resmi ditetapkan.
