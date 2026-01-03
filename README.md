# bk-deep-learning
Web bimbingan dan konseling berbasis deep learning.

## Demo GitHub Pages (Frontend Only)
Aplikasi demo berjalan sepenuhnya di frontend (mock mode) tanpa backend/ai-service. Semua data (login, hasil asesmen, dan chat) disimpan di `localStorage`.

**Demo login**
- Username: bebas (contoh: `demo`)
- Role: pilih salah satu `Siswa`, `Konselor`, atau `Admin`

## Menjalankan Lokal
```bash
npm install
npm run dev
```

## Build untuk GitHub Pages
Konfigurasi Vite sudah menggunakan base path `/bk-deep-learning-web/` dan router menggunakan `HashRouter` agar reload tetap aman di GitHub Pages.

```bash
npm run build
```

## Catatan
- Backend/ai-service tidak digunakan pada demo ini.
- Riwayat asesmen dan chat tersimpan di perangkat lokal.
