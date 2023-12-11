// document.addEventListener('DOMContentLoaded', init);

// let currentPlayer = 'X';
// let board = ['', '', '', '', '', '', '', '', ''];
// let scores = {
//     'X': 0,
//     'O': 0
// };

// function init() {
//     renderBoard();
//     updateScorecard();
// }

// function renderBoard() {
//     const boardElement = document.getElementById('board');
//     boardElement.innerHTML = '';

//     for (let i = 0; i < board.length; i++) {
//         const cell = document.createElement('div');
//         cell.classList.add('cell');
//         cell.setAttribute('data-index', i);
//         cell.textContent = board[i];
//         boardElement.appendChild(cell);
//     }
// }

// function handleCellClick(event) {
//     const index = event.target.getAttribute('data-index');
    
//     if (board[index] === '' && !isGameOver()) {
//         board[index] = currentPlayer;
//         renderBoard();

//         if (checkWinner()) {
//             displayWinner();
//             scores[currentPlayer]++;
//             updateScorecard();
//             resetGame();
//         } else if (isBoardFull()) {
//             displayDraw();
//             resetGame();
//         } else {
//             currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
//             updateMessage();
//         }
//     }
// }

// function checkWinner() {
//     const winPatterns = [
//         [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
//         [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
//         [0, 4, 8], [2, 4, 6]             // Diagonals
//     ];

//     for (const pattern of winPatterns) {
//         const [a, b, c] = pattern;
//         if (board[a] !== '' && board[a] === board[b] && board[a] === board[c]) {
//             return true;
//         }
//     }

//     return false;
// }

// function isBoardFull() {
//     return board.every(cell => cell !== '');
// }

// function isGameOver() {
//     return checkWinner() || isBoardFull();
// }

// function displayWinner() {
//     document.getElementById('message').textContent = `Player ${currentPlayer} wins!`;
// }

// function displayDraw() {
//     document.getElementById('message').textContent = 'It\'s a draw!';
// }

// function updateMessage() {
//     document.getElementById('message').textContent = `Player ${currentPlayer}'s turn`;
// }

// function updateScorecard() {
//     document.getElementById('score-x').textContent = scores['X'];
//     document.getElementById('score-o').textContent = scores['O'];
// }

// function resetGame() {
//     currentPlayer = 'X';
//     board = ['', '', '', '', '', '', '', '', ''];
//     updateMessage();
// }

// document.addEventListener('DOMContentLoaded', init);

// let currentPlayer = 'X';
// let board = ['', '', '', '', '', '', '', '', ''];
// let scores = {
//     'X': 0,
//     'O': 0
// };

// function init() {
//     renderBoard();
//     updateScorecard();
//     updateMessage();
// }

// function renderBoard() {
//     const boardElement = document.getElementById('board');
//     boardElement.innerHTML = '';

//     for (let i = 0; i < board.length; i++) {
//         const cell = document.createElement('div');
//         cell.classList.add('cell');
//         cell.setAttribute('data-index', i);
//         cell.textContent = board[i];
//         boardElement.appendChild(cell);
//     }
// }

// function handleCellClick(event) {
//     const index = event.target.getAttribute('data-index');

//     if (board[index] === '' && !isGameOver()) {
//         board[index] = currentPlayer;
//         renderBoard();

//         if (checkWinner()) {
//             scores[currentPlayer]++;
//             updateScorecard();
//             declareWinner(currentPlayer);
//             resetGame();
//         } else if (isBoardFull()) {
//             displayDraw();
//             resetGame();
//         } else {
//             currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
//             updateMessage();
//         }
//     }
// }

// function checkWinner() {
//     const winPatterns = [
//         [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
//         [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
//         [0, 4, 8], [2, 4, 6]             // Diagonals
//     ];

//     for (const pattern of winPatterns) {
//         const [a, b, c] = pattern;
//         if (board[a] !== '' && board[a] === board[b] && board[a] === board[c]) {
//             return true;
//         }
//     }

//     return false;
// }

// function isBoardFull() {
//     return board.every(cell => cell !== '');
// }

// function isGameOver() {
//     return checkWinner() || isBoardFull();
// }

// function declareWinner(winner) {
//     const winnerName = winner === 'X' ? 'Player X' : 'Player O';
//     alert(`${winnerName} wins!`);
// }

// function displayDraw() {
//     alert('It\'s a draw!');
// }

// function updateMessage() {
//     document.getElementById('message').textContent = `Player ${currentPlayer}'s turn`;
// }

// function updateScorecard() {
//     document.getElementById('score-x').textContent = scores['X'];
//     document.getElementById('score-o').textContent = scores['O'];
// }

// function resetGame() {
//     currentPlayer = 'X';
//     board = ['', '', '', '', '', '', '', '', ''];
//     updateMessage();
// }

document.addEventListener('DOMContentLoaded', init);

let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];
let scores = {
    'X': 0,
    'O': 0
};

function init() {
    renderBoard();
    updateScorecard();
    updateMessage();
}

function renderBoard() {
    const boardElement = document.getElementById('board');
    boardElement.innerHTML = '';

    for (let i = 0; i < board.length; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.setAttribute('data-index', i);
        cell.textContent = board[i];
        boardElement.appendChild(cell);
    }
}

function handleCellClick(event) {
    const index = event.target.getAttribute('data-index');

    if (board[index] === '' && !isGameOver()) {
        board[index] = currentPlayer;
        renderBoard();

        if (checkWinner()) {
            scores[currentPlayer]++;
            updateScorecard();
            declareWinner(currentPlayer);
            resetGame();
        } else if (isBoardFull()) {
            displayDraw();
            resetGame();
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            updateMessage();
        }
    }
}

function checkWinner() {
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6]             // Diagonals
    ];

    for (const pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (board[a] !== '' && board[a] === board[b] && board[a] === board[c]) {
            return true;
        }
    }

    return false;
}

function isBoardFull() {
    return board.every(cell => cell !== '');
}

function isGameOver() {
    return checkWinner() || isBoardFull();
}

function declareWinner(winner) {
    const winnerName = winner === 'X' ? 'Player X' : 'Player O';
    alert(`${winnerName} wins!`);
}

function displayDraw() {
    alert('It\'s a draw!');
}

function updateMessage() {
    document.getElementById('message').textContent = `Player ${currentPlayer}'s turn`;
}

function updateScorecard() {
    document.getElementById('score-x').textContent = scores['X'];
    document.getElementById('score-o').textContent = scores['O'];
}

function resetGame() {
    currentPlayer = 'X';
    board = ['', '', '', '', '', '', '', '', ''];
    renderBoard(); // Clear the board for the next round
    updateMessage();
}
