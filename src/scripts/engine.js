const state = {
    view: {
        squares: document.querySelectorAll(".square"),
        timeLeft: document.querySelector(".menu-time h2:nth-child(2)"),
        score: document.querySelector(".menu-score h2:nth-child(2)"),
    },
    values: {
        timerId: null,
        countDownTimerId: null, 
        gameVelocity: 1000,
        result: 0,
        currentTime: 60, // Tempo inicial
    },
};

// Função de contagem regressiva
function countDown() {
    state.values.currentTime--;
    state.view.timeLeft.textContent = state.values.currentTime;
    if (state.values.currentTime <= 0) { 
        clearInterval(state.values.countDownTimerId); 
        clearInterval(state.values.timerId); 
        alert("Game Over! O seu resultado foi: " + state.values.result);
        resetGame(); 
    }
}

// Função para selecionar um quadrado aleatório
function randomSquare() {
    state.view.squares.forEach((square) => {
        square.classList.remove("enemy");
    });

    const randomNumber = Math.floor(Math.random() * state.view.squares.length);
    const randomSquare = state.view.squares[randomNumber];
    randomSquare.classList.add("enemy");
}

// Função para tocar som
function playSound(audioName) {
    const audio = new Audio(`./src/audios/${audioName}.m4a`);
    audio.volume = 0.2;
    audio.play();
}

// Função para mover o inimigo periodicamente
function moveEnemy() {
    state.values.timerId = setInterval(randomSquare, state.values.gameVelocity);
}

// Função para adicionar evento de clique nos quadrados
function addListenerHitBox() {
    state.view.squares.forEach((square) => {
        square.addEventListener("click", () => {
            if (square.classList.contains("enemy")) {
                square.classList.remove("enemy");
                updateScore();
                playSound("hit"); // Toca som ao acertar
            }
        });
    });
}

// Função para atualizar o placar
function updateScore() {
    state.values.result++;
    state.view.score.textContent = state.values.result;
}

// Função para reiniciar o jogo
function resetGame() {
    state.values.currentTime = 60; 
    state.view.timeLeft.textContent = state.values.currentTime; 
    state.view.score.textContent = "0"; 
    state.values.result = 0; 
    clearInterval(state.values.timerId); 
    moveEnemy(); 
    state.values.countDownTimerId = setInterval(countDown, 1000); 
}

// Função de inicialização
function initialize() {
    addListenerHitBox();
    moveEnemy();
    state.values.countDownTimerId = setInterval(countDown, 1000);
}

initialize();
