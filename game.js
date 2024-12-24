let score = 0;
let currentStep = 0;

const textElement = document.getElementById('text');
const nextButton = document.getElementById('nextButton');
const options = {
    "A": ["哈魯", "maggie", "喝酒"],
    "B": ["AOI", "lynn", "喝爆幹多酒"]
};

const steps = [
    { text: "第1張圖 - [在你的好友呂協助之下，你到達了桃園機場，並且跟你的女朋友ET告別，讓她成為了你的前女友]" },
    { text: "第2張圖 - [你在加拿大拉麵店找到了工作，結交到了一群豬朋狗友（他們都比不上呂）]" },
    { text: "第3張圖 - [你碰到讓你怦然心動的女孩，她是？]", options: ["A", "B"] },
    { text: "第4張圖 - [你們交往不順利，最後還是分手了]" },
    { text: "第5張圖 - [你換到了台灣餐廳工作，有兩個女同事看起來很閒，你要跟誰搭話]", options: ["A", "B"] },
    { text: "第6張圖 - [你跟Maggie情投意合，再三考慮後還是在一起了]" },
    { text: "第7張圖 - [你覺得維持關係很累，似乎什麼事都做不好，所以你開始逃避，每天晚上你都]", options: ["A", "B"] },
    { text: "第8張圖 - [聖誕節你去了加拿大宜蘭，留下美好回憶]" },
    { text: "第9張圖 - [回台灣的時刻到了！下飛機之後你看到的第一個認識的人是？]" },
    { text: "結局 - [根據分數顯示不同結局]" }
];

function displayText(text) {
    textElement.innerText = text;
}

function chooseOption(choice) {
    // 处理选择后更新分数和步骤
    if (choice === "B") score++;
    
    // 不管选择哪个，都会推进到下一步
    currentStep++;
    
    // 判断下一步是有选项的还是直接显示文本
    if (currentStep < steps.length) {
        // 检查如果当前步骤需要选项，直接显示选项按钮
        if (steps[currentStep].options) {
            showOptions();
        } else {
            hideOptions();
            displayText(steps[currentStep].text);
        }
    } else {
        // 游戏结束，显示结局
        displayEnding();
    }
}

function showOptions() {
    // 显示选择按钮
    document.querySelector('.options').style.display = 'block';
    nextButton.style.display = 'none';  // 隐藏“下一页”按钮
    textElement.innerText = steps[currentStep].text;
}

function hideOptions() {
    // 隐藏选择按钮
    document.querySelector('.options').style.display = 'none';
    nextButton.style.display = 'block';  // 显示“下一页”按钮
}

function displayEnding() {
    hideOptions();
    let endingText = '';
    if (score === 3) {
        endingText = "結局 10-1 - [竟然是江！！！他見到你後熱情的接過你的行李，對你說\"我早知道你在加拿大的淫亂事跡，快跟我分享吧\]";
    } else if (score === 1 || score === 2) {
        endingText = "結局 10-2 - [你搞砸了一切!你自己回來台灣，你太難過了於是自己坐在角落哭，抬起頭卻發現來接機的呂！因為他是你最好的兄弟]";
    } else {
        endingText = "結局 10-3 - [是Maggie！你認真對待感情，她決定提早跟你一起回來共同生活"]";
    }
    displayText(endingText);
}

function nextPage() {
    if (currentStep < steps.length) {
        // 对于第3、5、7步，有选项时可以选择一个并继续到下一页
        if (currentStep === 2 || currentStep === 4 || currentStep === 6) {
            return;
        }
        
        // 直接显示下一页文本
        displayText(steps[currentStep].text);
        currentStep++;
        
        if (currentStep < steps.length) {
            if (steps[currentStep].options) {
                showOptions();
            } else {
                hideOptions();
                displayText(steps[currentStep].text);
            }
        } else {
            displayEnding();
        }
    }
}

window.onload = function() {
    // 游戏开始时只显示第一个情节文本，并隐藏选项按钮
    displayText(steps[currentStep].text);
    hideOptions();
    
    nextButton.addEventListener('click', nextPage);  // 按下“下一页”按钮触发
}
