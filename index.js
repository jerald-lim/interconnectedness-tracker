let count = 0
let countEl = document.getElementById("count-el")
let logEl = document.getElementById("log-el")

function incrementSmall() {
    count += 1
    countEl.textContent = count
}

function incrementMedium() {
    count += 3
    countEl.textContent = count
}

function incrementBig() {
    count += 5
    countEl.textContent = count
}

function saveCount() {
    logEl.textContent += count + " - "
    count = 0
    countEl.textContent = count
}
