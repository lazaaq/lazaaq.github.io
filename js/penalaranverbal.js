let soals = [];
let currentQuestion = 0;
let score = 0;
let selectedOption = null;

// Fungsi untuk mengacak array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Fungsi untuk memuat soal dari file JSON
async function loadSoal() {
    try {
        const response = await fetch('../json/soal_sinonim.json');  // Load dari file soal.json
        soals = await response.json();
        shuffle(soals);  // Acak urutan soal
        loadQuestion();   // Tampilkan soal pertama
    } catch (error) {
        console.error("Gagal memuat soal:", error);
    }
}

// Fungsi untuk menampilkan soal
function loadQuestion() {
    const questionEl = document.getElementById('question');
    const optionsEl = document.getElementById('options');
    const soal = soals[currentQuestion];

    questionEl.textContent = soal.soal;
    optionsEl.innerHTML = '';

    soal.jawaban.forEach((jawaban, index) => {
        const option = document.createElement('div');
        option.textContent = `${String.fromCharCode(65 + index)}. ${jawaban}`;
        option.className = 'option';
        option.onclick = () => selectOption(option, index + 1);
        optionsEl.appendChild(option);
    });
}

// Fungsi untuk memilih jawaban
function selectOption(option, index) {
    const allOptions = document.querySelectorAll('.option');
    allOptions.forEach(opt => opt.classList.remove('selected'));
    option.classList.add('selected');
    selectedOption = index;
}

// Fungsi untuk soal selanjutnya
function nextQuestion() {
    if (selectedOption === null) return;

    const correctAnswer = soals[currentQuestion].kunci;
    if (selectedOption === correctAnswer) {
        score++;
    }

    currentQuestion++;
    selectedOption = null;

    if (currentQuestion < soals.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

// Fungsi untuk menampilkan hasil
function showResult() {
    document.getElementById('quiz-container').classList.add('hidden');
    document.getElementById('result').classList.remove('hidden');
    document.getElementById('score').textContent = `Skor Anda: ${score} dari ${soals.length}`;
}

// Fungsi untuk mengulang kuis
function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    selectedOption = null;
    shuffle(soals);
    loadQuestion();
    document.getElementById('quiz-container').classList.remove('hidden');
    document.getElementById('result').classList.add('hidden');
}

// Panggil fungsi untuk memuat soal saat halaman dimuat
loadSoal();
