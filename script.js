document.getElementById('overlay').style.display = 'block';

const canvas = document.getElementById('farmCanvas');
const ctx = canvas.getContext('2d');

const GRID_SIZE = 50;
const COLS = 10;
const ROWS = 8;
canvas.width = COLS * GRID_SIZE;
canvas.height = ROWS * GRID_SIZE;

let gameState = {
    money: 100,
    stamina: 100,
    day: 1,
    selectedTool: 'none',
    inventory: [],
    tiles: [],
    trash: [],
    lastTime: 0,
    activeQuizTrash: null
};

const TRASH_TYPES = [
    { name: 'Organik', icon: '🍎' },
    { name: 'Organik', icon: '🍌' },
    { name: 'Non-Organik', icon: '🥤' },
    { name: 'Non-Organik', icon: '📦' },
    { name: 'B3', icon: '🔋' },
    { name: 'B3', icon: '🧪' }
];

// SELANJUTNYA: isi script sama persis seperti bagian <script> yang kamu kirim,
// mulai dari function closeTutorial() sampai window.onload.
// (Tidak ada perubahan logika sama sekali)