const content = document.getElementById("content");

const steps = [
    { text: "คนเก่ง", delay: 3000 },
    { text: "พร้อมไหมคะ", delay: 3000 },
    { text: "ถ้าพร้อมแล้วกดข้างล่างนี่สิ", delay: 7000, button: "Start" },
    { text: "จำได้ไหมเดทแรกของเราที่ไหน", choices: ["ท้องฟ้าจำลอง", "ดูหนัง", "กินของหวาน"] },
    { text: "จำได้ไหมวันนั้นยังเขินกันอยู่เลย ทั้งๆที่ก็เห็นหน้ากันมาตั้งนาน หรือเป็นเพราะความรู้สึกมันต่าง", delay: 10000 },
    { text: "ข้อต่อไป", delay: 3000 },
    { text: "ตอนแรกที่เดทกันรู้สึกยังไง", input: true },
    { text: "ชอบอะไรในตัวหนูที่สุด", input: true },
    { text: "หนูเองก็ชอบมองตาของพี่ที่สุด แม้แต่แสงไฟของทั้งเมือง ก็ไม่ส่องสว่างเท่าดวงตาของเธอ’ พอมองตาพี่แล้วประโยคนี้มันไม่เคยเกินจริงเลย", delay: 10000 },
    { text: "มองเห็นอนาคตเราอยู่ไหม มันเป็นยังไงนะ จำได้ไหมคะ", input: true },
    { text: "กว่าจะมีวันนั้นได้ เราคงต้องพยายามมากกว่านี้ สู้ไปกับหนูนะคนเก่ง", delay: 9000 },
    { text: "แต่กว่าจะมีวันนั้น คงมีอะไรหลายอย่างเข้ามา เราจะทะเลาะกันกว่านี้ไหม จะเสียใจมากกว่านี้ไหม เพราะฉะนั้น", delay: 9000 },
    { text: "เลิก...", delay: 6000, enlarge: true },
    { text: "เลิกเป็นเพื่อน แล้วมาเป็นแฟนกันได้แล้ว:-)", delay: 6000, button: "Yes" },
    { text: "รักนะคะ คุณแฟน", delay: 6000 },
    { text: "fully 7 months, i love you no matter what", delay: 20000 }
];

let stepIndex = 0;

function nextStep() {
    content.innerHTML = "";
    let step = steps[stepIndex];

    if (step.enlarge) {
        content.style.fontSize = "50px";
    } else {
        content.style.fontSize = "24px";
    }

    let textElement = document.createElement("div");
    textElement.textContent = step.text;
    content.appendChild(textElement);
    content.style.opacity = 1;

    if (step.button) {
        let button = document.createElement("button");
        button.textContent = step.button;
        button.onclick = () => {
            stepIndex++;
            nextStep();
        };
        content.appendChild(button);
    } else if (step.choices) {
        step.choices.forEach(choice => {
            let button = document.createElement("button");
            button.textContent = choice;
            button.onclick = () => {
                stepIndex++;
                nextStep();
            };
            content.appendChild(button);
        });
    } else if (step.input) {
        let input = document.createElement("input");
        let button = document.createElement("button");
        button.textContent = "Enter";
        button.onclick = () => {
            stepIndex++;
            nextStep();
        };
        content.appendChild(input);
        content.appendChild(button);
    } else {
        setTimeout(() => {
            stepIndex++;
            nextStep();
        }, step.delay);
    }
}

nextStep();