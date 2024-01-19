
const num1 = Math.ceil(Math.random() * 10)
const num2 = Math.ceil(Math.random() * 10)
const answer = num1 * num2

const question = document.getElementById("question")
question.innerText = `What is ${num1} multiply by ${num2}? `

const form = document.getElementById("form")
const input = document.getElementById("input")

let score = JSON.parse(localStorage.getItem("score"))
let cyle = JSON.parse(localStorage.getItem("cyle"))

let scoreWord = document.getElementById("score")

if (!score) {
    score = 0
}
if(!cyle){
    cyle = 0
}

form.addEventListener("submit", () => {
    const UserAns = +input.value
    cyle++
    if (UserAns === answer) {
        score++
        alert("correct");
    }else{
        alert("wrong")
    }
    update()

    if(cyle==5){
        alert("your score is "+score+" over 5");
        reset()
    }
})
console.log(cyle)
form.addEventListener("reset", () => {
   reset()
})

let reset = () =>{
    score = 0
    cyle = 0
    update()
}
scoreWord.innerText = `score: ${score}`
let update = () => {
    localStorage.setItem("score", JSON.stringify(score))
    // location.reload()
    scoreWord.innerText = `score: ${score}`
    localStorage.setItem("cyle", JSON.stringify(cyle))
}