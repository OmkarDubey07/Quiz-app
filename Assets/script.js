"use strict";

const questions = [
    {
        que: "Which of the following is a markup language ?",
        a: "HTML",
        b: "CSS",
        c: "Javascript",
        d: "PHP",
        correct: "a",
    },
    {
        que: "What does CSS stands for ?",
        a: "Hypertext Markup Language",
        b: "Cascading Style Sheet",
        c: "Jason Object Notation",
        d: "Senior Citizen Savings Scheme",
        correct: "b",
    },
    {
        que: "What year was JavaScript Launched ?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of above",
        correct: "b",
    },
    {
        que: "Which of the following methods can be used to display data in some form using Javascript?",
        a: "Document.write()",
        b: "Console.log()",
        c: "Window.alert()",
        d: "All of above",
        correct: "d",
    },
    {
        que: "How can a datatype be declared to be a constant type?",
        a: "constant",
        b: "var",
        c: "const",
        d: "let",
        correct: "c",
    },
    {
        que: "Which of the following methods is used to access HTML elements using Javascript?",
        a: "getElementById()",
        b: "getElementByClassName()",
        c: "Both A and B",
        d: "None of the above",
        correct: "c",
    },
];

let index = 0;
const total = questions.length;
let right = 0 , wrong = 0 ;
const quesBox = document.getElementById("quesBox");
const optionInputs = document.querySelectorAll(".options");

const loadQuestion = () => {
    if(index === total){
        return endQuiz();
    }
    reset();
    const data = questions[index];
    quesBox.innerText = `${index + 1}) ${data.que}`;
    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;
};

const submitQuiz = () => {
    const data = questions[index];
    const ans = getAnswer();
    if (ans === data.correct) {
        right++ ;
    }else{
        wrong++ ;
    }
    index++;
    loadQuestion()
    return ;
};

const getAnswer = () => {
    let answer ;
    optionInputs.forEach((input) => {
        if (input.checked) {
            answer = input.value;
            
        }
    });
    return answer;
};

const reset = () =>{
    optionInputs.forEach(
        (input) =>{
            input.checked = false ;
        }
    )
}   

const endQuiz = () =>{
    document.getElementById('box').innerHTML = `
    <div style="text-align:center">
        <h3>Thank you for playing the quiz</h3>
        <h2>${right} / ${total} are correct </h2>
    </div>`;
}

loadQuestion();
