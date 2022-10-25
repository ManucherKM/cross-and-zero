const buttons:NodeListOf<Element> = document.querySelectorAll(".btn");

let isFlag: Boolean = true;

buttons.forEach(item => {
    item.addEventListener("click", () => {
        if (isFlag) {
            item.classList.add("krestik")
            isFlag = !isFlag
        } else {
            item.classList.add("krug")
            isFlag = !isFlag
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
    })
})

function checkGameOver(): Boolean {
    let one: Boolean = buttons[0].classList.contains("krestik") && buttons[1].classList.contains("krestik") && buttons[2].classList.contains("krestik") || buttons[0].classList.contains("krug") && buttons[1].classList.contains("krug") && buttons[2].classList.contains("krug");
    let two: Boolean = buttons[3].classList.contains("krestik") && buttons[4].classList.contains("krestik") && buttons[5].classList.contains("krestik") || buttons[3].classList.contains("krug") && buttons[4].classList.contains("krug") && buttons[5].classList.contains("krug")
    let three: Boolean = buttons[6].classList.contains("krestik") && buttons[7].classList.contains("krestik") && buttons[8].classList.contains("krestik") || buttons[6].classList.contains("krug") && buttons[7].classList.contains("krug") && buttons[8].classList.contains("krug")
    let four: Boolean = buttons[0].classList.contains("krestik") && buttons[3].classList.contains("krestik") && buttons[6].classList.contains("krestik") || buttons[0].classList.contains("krug") && buttons[3].classList.contains("krug") && buttons[6].classList.contains("krug");
    let five: Boolean = buttons[1].classList.contains("krestik") && buttons[4].classList.contains("krestik") && buttons[7].classList.contains("krestik") || buttons[1].classList.contains("krug") && buttons[4].classList.contains("krug") && buttons[7].classList.contains("krug")
    let six: Boolean = buttons[2].classList.contains("krestik") && buttons[5].classList.contains("krestik") && buttons[8].classList.contains("krestik") || buttons[2].classList.contains("krug") && buttons[5].classList.contains("krug") && buttons[8].classList.contains("krug")
    let seven: Boolean = buttons[0].classList.contains("krestik") && buttons[4].classList.contains("krestik") && buttons[8].classList.contains("krestik") || buttons[0].classList.contains("krug") && buttons[4].classList.contains("krug") && buttons[8].classList.contains("krug")
    let eight: Boolean = buttons[2].classList.contains("krestik") && buttons[4].classList.contains("krestik") && buttons[6].classList.contains("krestik") || buttons[2].classList.contains("krug") && buttons[4].classList.contains("krug") && buttons[6].classList.contains("krug")

    if (one || two || three || four || five || six || seven || eight) {
        return true
    }
    return false
}

function clearGame(): void {
    buttons.forEach(item => {
        if (item.classList.contains("krestik")) {
            item.classList.remove("krestik");
        }
        item.classList.remove("krug");
    })
}

function btnEnd() {
    let btnNone = true;

    buttons.forEach(item => {
        if (item.classList[1] === undefined) {
            btnNone = false
        }
    })

    return btnNone
}