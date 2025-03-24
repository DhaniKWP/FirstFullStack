const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const app = express();
require('dotenv').config();

console.log('Environment variables:');
console.log('DB_HOST:', process.env.DB_HOST);
console.log('DB_USER:', process.env.DB_USER);
console.log('DB_PASSWORD:', process.env.DB_PASSWORD);
console.log('DB_NAME:', process.env.DB_NAME);
console.log('PORT:', process.env.PORT);

app.use(express.json()); // Untuk parsing body JSON
app.use(cors()); // Mengizinkan komunikasi dengan frontend

// Koneksi ke MySQL pakai variabel lingkungan
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

db.connect((err) => {
    if (err) {
        console.error('Gagal terhubung ke MySQL:', err);
        return;
    }
    console.log('Terhubung ke MySQL!');
});

// Endpoint untuk menyimpan nama
app.post('/api/users', (req, res) => {
    const { name } = req.body;
    if (!name) {
        return res.status(400).json({ message: 'Nama diperlukan!' });
    }

    const query = 'INSERT INTO users (name) VALUES (?)';
    db.query(query, [name], (err, result) => {
        if (err) {
            console.error('Gagal menyimpan data:', err);
            return res.status(500).json({ message: 'Gagal menyimpan data!' });
        }
        res.json({ message: `Halo, ${name}! Data berhasil disimpan!` });
    });
});

// Jalankan server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server berjalan di port ${PORT}`);
});