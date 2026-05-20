// Menambahkan efek interaktif sederhana saat tombol detail diklik
document.querySelectorAll('.btn-action').forEach((button, index) => {
    button.addEventListener('click', () => {
        alert(`Kamu memilih untuk melihat detail Animasi Cici ke-${index + 1}! Efek interaktif bisa ditambahkan di sini.`);
    });
});

// Efek log di konsol browser untuk memastikan script terhubung
console.log("Website Animasi Cici berhasil dimuat!");