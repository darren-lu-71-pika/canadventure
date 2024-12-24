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
    if (choice === "B") score++;

    // 选择后，自动跳到下一步
    currentStep++;

    // 判断是否有选项的页面
    if (currentStep < steps.length) {
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
    // 显示选项按钮
    document.querySelector('.options').style.display = 'block';
    nextButton.style.display = 'none';  // 隐藏下一页按钮
    textElement.innerText = steps[currentStep].text;
}

function hideOptions() {
    // 隐藏选项按钮
    document.querySelector('.options').style.display = 'none';
    nextButton.style.display = 'block';  // 显示下一页按钮
}

function displayEnding() {
    hideOptions();
    let endingText = '';
    if (score === 3) {
        endingText = "結局 10-1 - [是Maggie！你認真對待感情，她決定提早跟你一起回來共同生活]";
    } else if (score === 1 || score === 2) {
        endingText = "結局 10-2 - [你搞砸了一切!你自己回來台灣，你太難過了於是自己坐在角落哭，抬起頭卻發現來接機的呂！因為他是你最好的兄弟]";
    } else {
        endingText = "結局 10-3 - [竟然是江！！！他見到你後熱情的接過你的行李，對你說\"我早知道你在加拿大的淫亂事跡，快跟我分享吧\"]";
    }
    displayText(endingText);
}

// 直接点击“下一页”按钮跳到下一步
function nextPage() {
    if (currentStep < steps.length) {
        // 如果有选项，跳过“下一页”按钮的点击逻辑
        if (steps[currentStep].options) {
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

// 确保游戏初始化时显示第一个页面
window.onload = function() {
    // 游戏开始时只显示第一个情节文本，并隐藏选项按钮
    displayText(steps[currentStep].text);
    hideOptions();

    // 给 "下一頁" 按钮绑定事件
    nextButton.addEventListener('click', nextPage);  // 按下“下一页”按钮触发
}
