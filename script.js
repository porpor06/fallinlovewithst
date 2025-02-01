document.addEventListener("DOMContentLoaded", function() {
    const messages = [
        { text: "คนเก่ง", delay: 3000 },
        { text: "พร้อมไหมคะ", delay: 3000 },
        { text: "ถ้าพร้อมแล้วกดข้างล่างนี่สิ", delay: 3000 }
    ];

    const questions = [
        { 
            text: "จำได้ไหมเดทแรกของเราที่ไหน", 
            type: "choice", 
            options: ["ท้องฟ้าจำลอง", "ดูหนัง", "กินของหวาน"] 
        },
        { 
            text: "ตอนแรกที่เดทกันรู้สึกยังไง", 
            type: "text" 
        },
        { 
            text: "ชอบอะไรในตัวหนูที่สุด", 
            type: "text" 
        },
        { 
            text: "มองเห็นอนาคตเราอยู่ไหม มันเป็นยังไงนะ จำได้ไหมคะ", 
            type: "text" 
        }
    ];

    const transitions = [
        { text: "จำได้ไหมวันนั้นยังเขินกันอยู่เลย...", delay: 8000 },
        { text: "ข้อต่อไป", delay: 3000 },
        { text: "หนูเองก็ชอบมองตาของพี่ที่สุด...", delay: 8000 },
        { text: "กว่าจะมีวันนั้นได้ เราคงต้องพยายามมากกว่านี้...", delay: 6000 },
        { text: "แต่กว่าจะมีวันนั้น คงมีอะไรหลายอย่างเข้ามา...", delay: 8000 },
        { text: "เลิก...", delay: 5000 },
        { text: "เลิกเป็นเพื่อน แล้วมาเป็นแฟนกันได้แล้ว :-)", delay: 3000 }
    ];

    const messageBox = document.getElementById("message-box");
    const startButton = document.getElementById("start-btn");
    const questionContainer = document.getElementById("question-container");
    const questionText = document.getElementById("question-text");
    const answerOptions = document.getElementById("answer-options");
    const textAnswer = document.getElementById("text-answer");
    const submitAnswer = document.getElementById("submit-answer");

    let step = 0;

    function displayMessage(index) {
        if (index < messages.length) {
            messageBox.textContent = messages[index].text;
            setTimeout(() => displayMessage(index + 1), messages[index].delay);
        } else {
            startButton.style.display = "block";
        }
    }

    function startSequence() {
        startButton.style.display = "none";
        askQuestion(0);
    }

    function askQuestion(index) {
        if (index < questions.length) {
            messageBox.textContent = "";
            questionText.textContent = questions[index].text;
            questionContainer.classList.remove("hidden");

            if (questions[index].type === "choice") {
                answerOptions.innerHTML = "";
                questions[index].options.forEach(option => {
                    const btn = document.createElement("button");
                    btn.textContent = option;
                    btn.onclick = () => askQuestion(index + 1);
                    answerOptions.appendChild(btn);
                });
            } else {
                answerOptions.innerHTML = "";
                textAnswer.classList.remove("hidden");
                submitAnswer.classList.remove("hidden");
                submitAnswer.onclick = () => {
                    if (textAnswer.value.trim() !== "") {
                        textAnswer.value = "";
                        textAnswer.classList.add("hidden");
                        submitAnswer.classList.add("hidden");
                        askQuestion(index + 1);
                    }
                };
            }
        } else {
            displayTransition(0);
        }
    }

    function displayTransition(index) {
        if (index < transitions.length) {
            messageBox.textContent = transitions[index].text;
            setTimeout(() => displayTransition(index + 1), transitions[index].delay);
        } else {
            displayFinalChoice();
        }
    }

    function displayFinalChoice() {
        messageBox.textContent = "รักนะคะ คุณแฟน";
        setTimeout(() => {
            messageBox.textContent = "fully 7 months, i love you no matter what";
        }, 3000);
    }

    displayMessage(0);
});