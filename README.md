
📘 GiziKu Chatbot Web Application

🔄 Flow Aplikasi GiziKu

1. Pengguna membuka website GiziKu melalui browser pada perangkat desktop atau mobile.

2. Sistem menampilkan halaman utama yang terdiri dari navbar responsif, header (hero section), serta area chatbot dengan tampilan modern dan tema warna biru.

3. Pengguna mengetikkan pertanyaan seputar gizi, nutrisi, atau pola makan sehat ke dalam kolom input chatbot.

4. Setelah tombol kirim ditekan atau tombol Enter digunakan, JavaScript mengambil teks pertanyaan dari input pengguna.

5. JavaScript mengirimkan data pertanyaan tersebut ke backend menggunakan metode HTTP POST dalam format JSON.

6. Data JSON dikirim ke endpoint n8n Webhook yang telah dikonfigurasi sebelumnya.

7. n8n menerima data dari webhook dan memprosesnya melalui workflow yang telah dibuat, seperti pemrosesan teks, logika tertentu, atau integrasi dengan sistem AI.

8. Setelah proses selesai, n8n mengirimkan hasil jawaban kembali ke website dalam bentuk response JSON.

9. Website menerima response JSON dari n8n dan melakukan validasi data.

10. Sistem membersihkan format markdown seperti tanda bintang atau bullet agar teks jawaban tampil rapi.

11. Jawaban chatbot yang telah diproses ditampilkan pada area chat sebagai balasan dari bot.

12. Seluruh proses pengiriman dan penerimaan data dicatat pada browser console untuk keperluan debugging.

13. Jika terjadi error seperti webhook tidak aktif atau response gagal diterima, sistem akan menampilkan pesan error kepada pengguna.

14. Pengguna dapat melanjutkan percakapan dengan mengirimkan pertanyaan berikutnya.
Flow ini menggambarkan alur kerja aplikasi GiziKu secara menyeluruh, mulai dari interaksi pengguna di sisi frontend hingga pemrosesan data di backend n8n dan penampilan hasil secara real-time.
