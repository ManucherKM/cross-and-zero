var buttons = document.querySelectorAll(".btn");
var isFlag = true;
buttons.forEach(function (item) {
    item.addEventListener("click", function () {
        if (isFlag) {
            item.classList.add("krestik");
            isFlag = !isFlag;
        }
        else {
            item.classList.add("krug");
            isFlag = !isFlag;
        }
        if (checkGameOver()) {
            clearGame();
            if (!isFlag) {
                alert("Игра окончена, победили крестики");
            }
            else {
                alert("Игра окончена, победили нолики");
            }
        }
        if (btnEnd()) {
            alert("Игра окончена, ничья");
        }
    });
});
function checkGameOver() {
    var one = buttons[0].classList.contains("krestik") && buttons[1].classList.contains("krestik") && buttons[2].classList.contains("krestik") || buttons[0].classList.contains("krug") && buttons[1].classList.contains("krug") && buttons[2].classList.contains("krug");
    var two = buttons[3].classList.contains("krestik") && buttons[4].classList.contains("krestik") && buttons[5].classList.contains("krestik") || buttons[3].classList.contains("krug") && buttons[4].classList.contains("krug") && buttons[5].classList.contains("krug");
    var three = buttons[6].classList.contains("krestik") && buttons[7].classList.contains("krestik") && buttons[8].classList.contains("krestik") || buttons[6].classList.contains("krug") && buttons[7].classList.contains("krug") && buttons[8].classList.contains("krug");
    var four = buttons[0].classList.contains("krestik") && buttons[3].classList.contains("krestik") && buttons[6].classList.contains("krestik") || buttons[0].classList.contains("krug") && buttons[3].classList.contains("krug") && buttons[6].classList.contains("krug");
    var five = buttons[1].classList.contains("krestik") && buttons[4].classList.contains("krestik") && buttons[7].classList.contains("krestik") || buttons[1].classList.contains("krug") && buttons[4].classList.contains("krug") && buttons[7].classList.contains("krug");
    var six = buttons[2].classList.contains("krestik") && buttons[5].classList.contains("krestik") && buttons[8].classList.contains("krestik") || buttons[2].classList.contains("krug") && buttons[5].classList.contains("krug") && buttons[8].classList.contains("krug");
    var seven = buttons[0].classList.contains("krestik") && buttons[4].classList.contains("krestik") && buttons[8].classList.contains("krestik") || buttons[0].classList.contains("krug") && buttons[4].classList.contains("krug") && buttons[8].classList.contains("krug");
    var eight = buttons[2].classList.contains("krestik") && buttons[4].classList.contains("krestik") && buttons[6].classList.contains("krestik") || buttons[2].classList.contains("krug") && buttons[4].classList.contains("krug") && buttons[6].classList.contains("krug");
    if (one || two || three || four || five || six || seven || eight) {
        return true;
    }
    return false;
}
function clearGame() {
    buttons.forEach(function (item) {
        if (item.classList.contains("krestik")) {
            item.classList.remove("krestik");
        }
        item.classList.remove("krug");
    });
}
function btnEnd() {
    var btnNone = true;
    buttons.forEach(function (item) {
        if (item.classList[1] === undefined) {
            btnNone = false;
        }
    });
    return btnNone;
}
