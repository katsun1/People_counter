let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr // innerText alternative mdn
    count = 0
    countEl.textContent = count
}

function reset() {
    count = 0
    saveEl.textContent = "Previous entries: "
    countEl.textContent = count
}

// add more responsiveness to the app window for mobile devices
if (window.innerWidth <= 768) {
    // Adjust styles for mobile devices
    document.body.style.fontSize = "18px";
    document.body.style.lineHeight = "1.5";
}
