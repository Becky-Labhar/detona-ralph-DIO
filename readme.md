<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Detona Ralph - Jogo de Reflexos</title>
    
    <!-- Fontes -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Press+Start+2P&display=swap" rel="stylesheet">
    
    <!-- Estilos -->
    <link rel="stylesheet" href="./src/styles/reset.css">
    <link rel="stylesheet" href="./src/styles/main.css">
</head>
<body>
    <div class="container">
        <header class="menu">
            <div class="menu-time">
                <h2>Time Left</h2>
                <h2>60</h2>
            </div>
            <div class="menu-score">
                <h2>Your Score</h2>
                <h2>0</h2>
            </div>
        </header>

        <main class="panel">
            <div class="panel-row">
                <div class="square" id="1"></div>
                <div class="square" id="2"></div>
                <div class="square" id="3"></div>
            </div>
            <div class="panel-row">
                <div class="square" id="4"></div>
                <div class="square" id="5"></div>
                <div class="square" id="6"></div>
            </div>
            <div class="panel-row">
                <div class="square" id="7"></div>
                <div class="square" id="8"></div>
                <div class="square" id="9"></div>
            </div>
        </main>
    </div>
    
    <!-- Script -->
    <script defer src="./src/scripts/engine.js"></script>
</body>
</html>
