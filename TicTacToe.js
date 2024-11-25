const boxes = document.querySelectorAll(".box");
const resetBtn = document.querySelector(".reset");
const newGameBtn = document.querySelector(".new-btn");
const msgContainer = document.querySelector(".msg-container");
const msg = document.querySelector(".msg");

let turnO = true;

const winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

const checkWinner = () => {
    for (let pattern of winPatterns) {
        const [a, b, c] = pattern;
        const boxA = boxes[a].innerText;
        const boxB = boxes[b].innerText;
        const boxC = boxes[c].innerText;

        if (boxA && boxA === boxB && boxA === boxC) {
            msg.innerText = `Winner: ${boxA}`;
            msgContainer.classList.remove("hide");
            boxes.forEach(box => box.disabled = true);
            return;
        }
    }

    if (Array.from(boxes).every(box => box.innerText !== "")) {
        msg.innerText = "It's a Tie!";
        msgContainer.classList.remove("hide");
    }
};

boxes.forEach((box, index) => {
    box.addEventListener("click", () => {
        box.innerText = turnO ? "O" : "X";
        box.disabled = true;
        turnO = !turnO;
        checkWinner();
    });
});

resetBtn.addEventListener("click", () => {
    boxes.forEach(box => {
        box.innerText = "";
        box.disabled = false;
    });
    msgContainer.classList.add("hide");
    turnO = true;
});

newGameBtn.addEventListener("click", () => {
    boxes.forEach(box => {
        box.innerText = "";
        box.disabled = false;
    });
    msgContainer.classList.add("hide");
    turnO = true;
});
