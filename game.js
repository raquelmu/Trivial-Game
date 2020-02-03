document.addEventListener('DOMContentLoaded', (event) => {
  

  let player = {
    position: 0,
    puntuacion: 0,
  }

  let clickPosition = " ";

  let currentQuestion;


  function randomNumber(min, max){
    return Math.floor(Math.random() * (max - min + 1 ) + min);
  }

  function clearGrey() {
    let arrayBox = document.querySelectorAll("[id^='box']");
    for(let i = 0; i < arrayBox.length; i++){
      arrayBox[i].classList.remove("grey");
    }
  }

  function paintGrey(exclude){
    let arrayBox = document.querySelectorAll("[id^='box']");
    for(let i = 0; i < arrayBox.length; i++){
      if (arrayBox[i].id !== `box${exclude}`) {
        arrayBox[i].classList.add("grey");
      }
    }
  }

  function movePlayer(newPosition){
    player.position = newPosition;
  }

  function showQuestion(category){
    const questionsCategory = []
    for(let i = 0; i < questions.length; i++){
      if(questions[i].category === category){
        questionsCategory.push(questions[i])
      }
    }
    const resultQuestionIndex = randomNumber(0, questionsCategory.length);

    return questionsCategory[resultQuestionIndex];
  }


  let button = document.getElementById("buttonStart");
  let divShowInformation = document.getElementById("center");
  let buttonTrue = document.getElementById("true")
  let buttonFalse = document.getElementById("false")
  let answerQuestion = document.getElementById("answerQuestion")
  let scoreSelected = document.getElementById("score");

  buttonTrue.addEventListener("click", function(){
    if(currentQuestion.answer === true){
      alert("Acertado")
      answerQuestion.style.display = "none";
      player.puntuacion =+ player.puntuacion +10;
      scoreSelected.innerHTML = `Score:  ${player.puntuacion}`;
      console.log(player.puntuacion)
      button.style.display = "block"


    }else{
      alert("Error")
      answerQuestion.style.display = "none"
      button.style.display = "block"

    }
  })

  buttonFalse.addEventListener("click", function(){
    if(currentQuestion.answer === false){
      alert("Acertado")
      answerQuestion.style.display = "none";
      player.puntuacion =+ player.puntuacion +10 
      scoreSelected.innerHTML = `Score:  ${player.puntuacion}`;
      button.style.display = "block"



    }else{
      alert("Error")
      answerQuestion.style.display = "none"
      button.style.display = "block"

    }
  })

  button.addEventListener("click", function(){
    let dice = randomNumber(1, 6);
    divShowInformation.innerHTML = `<img src="./images/result_${dice}.png">`;
    clickPosition = dice + player.position;
    paintGrey(clickPosition);
    button.style.display = "none"
  })  

  let arrayBox = document.querySelectorAll("[id^='box']");
  
  for(let i = 0; i < arrayBox.length; i++){
    arrayBox[i].addEventListener("click", function(event){
      console.log('event', event.target.classList)
      console.log('position', clickPosition);
      const box = event.target.classList[1];
      const category = event.target.classList[0];
      if (box === `box${clickPosition}`) {
        movePlayer(clickPosition);
        currentQuestion = showQuestion(category);
        divShowInformation.innerHTML= currentQuestion.question;
        answerQuestion.style.display = "block"
        clearGrey();
      } else {
        alert('No te columpies')
      }
    })
  }
  
})
