const getRandomNumInRange = (min, max) => {
    const randomNum =  (Math.random() * (max - min) + min).toFixed(0);
    return randomNum;
}

const getTask = () => {
    const symbol = (Math.random() > 0.5) ? "+": "-";
    const task = `${getRandomNumInRange(0, 100)} ${symbol} ${getRandomNumInRange(0, 100)}`;
    gameState.rightAnswer = eval(task);
    return task;
}

const toggleGameState = () => {
    gameState.taskInProcess = !gameState.taskInProcess;
}

const gameElements = document.getElementById("my_game").children;
const title = gameElements[0];
const userTask = gameElements[1];
const userAnswer = gameElements[2];
const btnGame = gameElements[3];

const gameState = {
    taskInProcess: false,
    rightAnswer: null,

}

// btnGame.onclick = () => {
//     if (!gameState.taskInProcess) {
//         title.innerText = "Game is start";
//         userAnswer.value = "";
//         userTask.innerText = getTask();
//         userAnswer.hidden = false;
//         btnGame.innerHTML = "Check!"
//         toggleGameState();
//     } else {
//         const isRight = gameState.rightAnswer == userAnswer.value;
//         userTask.innerText = userTask.innerText + " = " + gameState.rightAnswer;
//         title.innerText = (isRight) ? "You winner!" : "You lost!"
//         btnGame.innerHTML = "Start new game"; 
//         toggleGameState();
//     }
// }

const startGameFunc = () => {
    if (!gameState.taskInProcess) {
        title.innerText = "Game is start";
        userAnswer.value = "";
        userTask.innerText = getTask();
        userAnswer.hidden = false;
        btnGame.innerHTML = "Check!"
        toggleGameState();
    } else {
        const isRight = gameState.rightAnswer == userAnswer.value;
        userTask.innerText = userTask.innerText + " = " + gameState.rightAnswer;
        title.innerText = (isRight) ? "You winner!" : "You lost!"
        btnGame.innerHTML = "Start new game"; 
        toggleGameState();
    }
}

btnGame.addEventListener("click", startGameFunc);
userAnswer.addEventListener("keydown", (e) => {
    // console.log(e);
    if (e.key === "Enter") {
        startGameFunc();
    } else if (e.key === "Escape") {
        userAnswer.blur();
    }
});



//console.dir(document);
const choosedEl = document.querySelectorAll(".choosed_block-container > div");
const counterEl = document.querySelector(".choosed_block span")

const choosedState = {
    countElements: 0,
    setCountValue (value) {
        this.countElements += value; 
        counterEl.innerText = this.countElements;
    } 
}

const eventFunc = (e) => {
    //choose element, highlight with class
    //choosedEl[i].className = "choosed_element";
    // console.log(e);
    //start counter
    if (e.target.className === "") {
        e.target.className = "choosed_element";
        choosedState.setCountValue(1);
    } else {
        e.target.className = "";
        choosedState.setCountValue(-1);
    }
}

for (let i = 0; i < choosedEl.length; i++) {
    choosedEl[i].addEventListener("click", eventFunc)
}
choosedEl[2].removeEventListener("click", eventFunc)