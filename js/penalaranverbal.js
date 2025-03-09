let soals = [];
let skor = 0;
let currentIndex = 0;
const pilihan = ["A", "B", "C", "D", "E"];

async function loadSoal() {
    const response = await fetch('../json/soal_sinonim.json');
    soals = await response.json();

    // Randomisasi urutan soal
    soals = soals.sort(() => Math.random() - 0.5);
}

function startQuiz() {
    skor = 0;
    currentIndex = 0;
    document.getElementById('result').innerHTML = '';
    tampilkanSoal();
}

function tampilkanSoal() {
    const quizContainer = document.getElementById('quiz-container');
    quizContainer.innerHTML = '';

    if (currentIndex < soals.length) {
        const soal = soals[currentIndex];
        const questionElement = document.createElement('div');
        questionElement.className = 'question';
        questionElement.innerHTML = `<strong>SOAL:</strong> ${soal.soal}`;

        const optionsElement = document.createElement('div');
        optionsElement.className = 'options';

        soal.jawaban.forEach((jawaban, index) => {
            const optionElement = document.createElement('div');
            optionElement.className = 'option';
            optionElement.innerHTML = `
                <label>
                    <input type="radio" name="jawaban" value="${index}">
                    ${pilihan[index]}. ${jawaban}
                </label>`;
            optionsElement.appendChild(optionElement);
        });

        quizContainer.appendChild(questionElement);
        quizContainer.appendChild(optionsElement);

        const submitButton = document.createElement('button');
        submitButton.textContent = 'Jawab';
        submitButton.onclick = periksaJawaban;
        quizContainer.appendChild(submitButton);
    } else {
        tampilkanHasil();
    }
}

function periksaJawaban() {
    const selectedOption = document.querySelector('input[name="jawaban"]:checked');
    if (!selectedOption) {
        alert('Silakan pilih jawaban!');
        return;
    }

    const jawabanUser = parseInt(selectedOption.value);
    const soal = soals[currentIndex];
    const kunciJawaban = soal.kunci - 1;

    if (jawabanUser === kunciJawaban) {
        skor += 1;
        tampilkanFeedback(true, kunciJawaban);
    } else {
        tampilkanFeedback(false, kunciJawaban);
    }
}

function tampilkanFeedback(isCorrect, kunciJawaban) {
    const feedback = document.createElement('div');
    feedback.className = 'result';
    if (isCorrect) {
        feedback.innerHTML = `<span class="correct">Jawaban benar! Skor Anda: ${skor}</span>`;
    } else {
        feedback.innerHTML = `<span class="wrong">Jawaban salah! Skor Anda: ${skor}. Jawaban yang benar: ${pilihan[kunciJawaban]}.</span>`;
    }
    document.getElementById('quiz-container').appendChild(feedback);

    currentIndex++;
    setTimeout(tampilkanSoal, 1500);
}

function tampilkanHasil() {
    const resultContainer = document.getElementById('result');
    resultContainer.innerHTML = `<h3>Latihan Selesai!</h3><p>Skor Akhir Anda: ${skor} dari ${soals.length}</p>`;
}

// Load soal saat halaman pertama kali dibuka
loadSoal();
