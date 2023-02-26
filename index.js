const questions =[
    {
        que :'Which of the following JavaScript cannot do?',
         a : ' JavaScript can react to events',
         b : 'JavaScript can manipulate HTML elements',
         c : 'JavaScript can be use to validate data',
         d : 'All of the Above',
        correct : 'd',
    },
    {
        que :'Whats so great about XML?',
        a : 'Easy data exchange',
        b : 'High speed on Network',
        c : 'Only B is correct',
        d : 'Both A & B',
       correct : 'd' , 
    },
    {
        que :'Twitter limits the number of characters per tweet is ?',
        a : '130',
        b : '140',
        c : '124',
        d : '160',
       correct : 'b',  
    },
    {
        que : 'Which HTML attribute is used to define inline styles?',
        a: 'font',
        b: 'class',
        c: 'styles',
        d: 'style',
        correct : 'c',
    },
    {
        que: 'How do you display hyperlinks without an underline?',
        a : 'a{text-decoration:none}',
        b: 'a{underline:none}',
        c: 'a {text-decoration:no underline}',
        d: 'a {decoration:no underline}',
        correct : 'a',
    }
]
let index=0
let total = questions.length
let right =0
let wrong = 0
const QueBox =document.getElementById("que-box")
const optionInput = document.querySelectorAll('.options')
const loadquestion=()=>{
    if (index === total){
        return endQuiz()
    }
    reset()
    const data = questions[index]
    QueBox.innerText= `${index+1} ${data.que}`
    optionInput[0].nextElementSibling.innerText=data.a
    optionInput[1].nextElementSibling.innerText=data.b
    optionInput[2].nextElementSibling.innerText=data.c
    optionInput[3].nextElementSibling.innerText=data.d
}

const submitQuiz=()=>{
    const data = questions[index]
    const ans = getAnswer()
    if(ans==null){
        alert('Please select an option')
    }else{
    if (ans ===  data.correct ){
        right++
        
    }else{
        wrong++
    }
    index++
    loadquestion()
}   
    return
  }
const getAnswer=()=>{
    let ans
    optionInput.forEach(
        (input)=>{
            if(input.checked){
                ans = input.value
            }
        }
    )
    return ans
}
const reset= ()=>{
    optionInput.forEach(
        (input)=>{
            input.checked=false
        }
    )
}
const endQuiz =()=>{
    document.getElementById("main").innerHTML= `
    <div style="text-align:center">
    <h3 id="h3">Thank you for Playing the Quiz 🥰</h3>
    <h2>You've scored ${right} / ${total} 🏆</h2>
    <button id="restart-btn" onclick="restart()">Restart 🔁</button>
    <button id="exit-btn" onclick="exit()">Exit 🚪</button>
    </div>
    `
}
function exit(){
    close()
}
function restart(){
    location.reload()
}

loadquestion(index)

