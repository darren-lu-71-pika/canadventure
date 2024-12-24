<!DOCTYPE html>
<html lang="zh-Hant">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>加拿大冒險遊戲</title>
    <style>
        body { font-family: Arial, sans-serif; }
        #game-container { margin: 20px; }
        #text { font-size: 18px; margin-bottom: 10px; }
        .options { margin-top: 10px; display: none; }
        button { margin: 5px; }
    </style>
</head>
<body>
    <div id="game-container">
        <h1>歡迎來到加拿大冒險！</h1>
        <p id="text"></p>
        
        <!-- 选项按钮 (默认隐藏) -->
        <div class="options">
            <button onclick="chooseOption('A')">A</button>
            <button onclick="chooseOption('B')">B</button>
        </div>

        <!-- 下一页按钮 -->
        <button id="nextButton">下一頁</button>
    </div>
    <script src="game.js"></script>
</body>
</html>
