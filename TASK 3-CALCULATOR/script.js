let display = document.getElementById('display');
let historyList = document.getElementById('history-list');
let nightModeToggle = document.querySelector('.night-mode-toggle');
let dayModeIcon = document.getElementById('day-mode-icon');
let nightModeIcon = document.getElementById('night-mode-icon');

let history = []; // To store calculation history

function appendToDisplay(value) {
    if (display.textContent === '0' && value !== '.') {
        display.textContent = value;
    } else {
        display.textContent += value;
    }
}

function clearDisplay() {
    display.textContent = '0';
}

function calculateResult() {
    try {
        let result = eval(display.textContent);
        let calculation = `${display.textContent} = ${result}`;
        addToHistory(calculation);
        display.textContent = result;
        display.classList.remove('error');
        setTimeout(clearDisplay, 2000); // Clear the display after 2 seconds (for user to see the result)
    } catch {
        display.textContent = 'Error';
        display.classList.add('error');
    }
}

function addToHistory(calculation) {
    history.push(calculation);
    updateHistoryDisplay();
}

function updateHistoryDisplay() {
    historyList.innerHTML = '';
    history.forEach(item => {
        let listItem = document.createElement('li');
        listItem.textContent = item;
        historyList.appendChild(listItem);
    });
}

nightModeToggle.addEventListener('click', function() {
    let isNightMode = document.body.classList.toggle('night-mode');
    document.querySelector('.calculator').classList.toggle('night-mode', isNightMode);
    document.querySelector('.history').classList.toggle('night-mode', isNightMode);
    document.querySelectorAll('.btn').forEach(btn => btn.classList.toggle('night-mode', isNightMode));
    
    // Toggle icons
    dayModeIcon.style.display = isNightMode ? 'none' : 'block';
    nightModeIcon.style.display = isNightMode ? 'block' : 'none';
});

document.getElementById('clear-history').addEventListener('click', () => {
    history = [];
    updateHistoryDisplay();
});
