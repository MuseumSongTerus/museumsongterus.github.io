$(document).ready(function () {
    const correctAnswers = localStorage.getItem('correctAnswers') || 0; // Get the score from localStorage
    $('#final-score').text(correctAnswers); // Display the score on the final score page

    if (correctAnswers >= 8) {
		$('#score-title').text('Selamat!');
        $('#souvenir').text('Tunjukan skor ini ke resepsionis dan dapatkan suvenirnya.');
        $('img').attr('src', 'images/berhasil.png'); // Update image source
        $('img').attr('alt', 'Berhasil'); // Update alt text
    } else {
		$('#score-title').text('Anda kurang beruntung!');
        $('#souvenir').text('Jawab dengan benar minimal 8 pertanyaan untuk mendapatkan suvenir di resepsionis.');
        $('img').attr('src', 'images/gagal.png'); // Update image source
        $('img').attr('alt', 'Gagal'); // Update alt text
    }
});
