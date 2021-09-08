"use-strict";

/*  Love Saroha
    lovesaroha1994@gmail.com (email address)
    https://www.lovesaroha.com (website)
    https://github.com/lovesaroha  (github)
*/

// Themes.
const themes = [{ normal: "#5468e7", veryLight: "#eef0fd" }, { normal: "#e94c2b", veryLight: "#fdedea" }];

// Choose random color theme.
let colorTheme = themes[Math.floor(Math.random() * themes.length)];

// This function set random color theme.
function setTheme() {
    // Change css values.
    document.documentElement.style.setProperty("--primary", colorTheme.normal);
    document.documentElement.style.setProperty("--primary-very-light", colorTheme.veryLight);
}

// Set random theme.
setTheme();

// All keys defined.
var keys = [
    [97, "A"],
    [98, "B"],
    [99, "C"],
    [100, "D"],
    [101, "E"],
    [102, "F"],
    [103, "G"],
    [104, "H"],
    [105, "I"],
    [106, "J"],
    [107, "K"],
    [108, "L"],
    [109, "M"],
    [110, "N"],
    [111, "O"],
    [112, "P"],
    [113, "Q"],
    [114, "R"],
    [115, "S"],
    [116, "T"],
    [117, "U"],
    [118, "V"],
    [119, "W"],
    [120, "X"],
    [121, "Y"],
    [122, "Z"],
    [32, "Space"]
];

let words = 0;
let pause = true;
let seconds = 0;
let text = [];
let resultEl = document.getElementById("result_id");

// Show keys on page.
document.getElementById("keys").innerHTML = keys.map(key => {
    return `<div class="mx-w-sm text-center shadow-sm bg-primary-very-light p-2 px-4 m-2 border-2 border-transparent" id="${key[0]}"><h4 class="mb-0">${key[1]}</h4></div>`;
}).join('');


// This function start recording typing speed.
function startRecording(e) {
    if (e.key == "Enter") {
        pause = true;
        // Show result.
        resultEl.classList.remove("hidden");
        resultEl.innerHTML = `<h3 class="font-bold text-white mb-0">${((words / seconds)*60).toFixed(0)} per minute</h3>`;
        return;
    }
    let charCode = e.key.toLowerCase().charCodeAt(0);
    text.push(charCode);
    // Show.
    let key = document.getElementById(charCode);
    if (key != null) {
        if (!key.classList.contains("border-primary")) {
            key.classList.add("border-primary");
            setTimeout(function () {
                key.classList.remove('border-primary');
            }, 200);
        }
    }
    pause = false;
    resultEl.classList.add("hidden");
    // Update words.
    if (text.length > 1) {
        if (charCode == 32 && text[text.length - 2] != 32) {
            words++;
            document.getElementById("words_id").innerText = words;
        }
    }
}

// Timer function to check speed.
setInterval(function () {
    if (!pause) {
        seconds++;
        document.getElementById("time_id").innerHTML = seconds;
    }
}, 1000);