document.addEventListener('DOMContentLoaded', (event) => {
  

  let player = {
    position: 0,
    puntuacion: 0,
  }

  let clickPosition = " ";

  let currentQuestion;

  let time = undefined;
  let seconds = 0;
  let minutes = 5;

  function startChronometer(){
    const secondsDiv = document.getElementById("seconds")
    const minutesDiv = document.getElementById("minutes")
    time = setInterval(function(){
      finishGame()
      if(seconds === 0){
        minutes -= 1;
        minutesDiv.innerHTML = prettyNumbers(minutes);
        seconds = 59;
      }
      secondsDiv.innerHTML = prettyNumbers(seconds);
      seconds -= 1;
    }, 1000);
    
  }
  
  function prettyNumbers(num){
    if(num < 10){
      return "0" + num
    }else{
      return num
    }
  }
  

  const buttonStop = document.getElementById("stop");
  buttonStop.addEventListener("click", function(){
    clearInterval(time);
    window.location.href="gameover.html"
  })

  const buttonPause = document.getElementById("pause");
  buttonPause.addEventListener("click", function(){
    if (time) {
      clearInterval(time);
      time = undefined;
      //muestro la pagina de pause
      console.log('pausando..')
      buttonPause.innerText = 'CONTINUAR';
    } else {
      //quito el div
      buttonPause.innerText = 'PAUSE';
      startChronometer()
    }
  })



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

  function animateBox(position){
    let arrayBox = document.querySelectorAll("[id^='box']");
    setTimeout(function(){
      for(let i = 0; i < arrayBox.length; i++){
        if (arrayBox[i].id === `box${position}`) {
          arrayBox[i].classList.add("animated");
          arrayBox[i].classList.add("heartBeat");
        }
      }
    }, 1000) 
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

   function finishGame(){
     if(player.puntuacion === 100){
       window.location.href="winner.html"
     } 
     else if(minutes === 0 && seconds === 0){
      window.location.href="gameover.html"

     }
   }

  let button = document.getElementById("buttonStart");
  let divShowInformation = document.getElementById("center");
  let buttonTrue = document.getElementById("true")
  let buttonFalse = document.getElementById("false")
  let answerQuestion = document.getElementById("answerQuestion")
  let scoreSelected = document.getElementById("score");
  
  startChronometer()

  buttonTrue.addEventListener("click", function(){
    if(currentQuestion.answer === true){
      alert("Acertado")
      answerQuestion.style.display = "none";
      player.puntuacion =+ player.puntuacion +20;
      scoreSelected.innerHTML = `Score:  ${player.puntuacion}`;
      console.log(player.puntuacion)
      button.style.display = "block"
      finishGame()

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
      player.puntuacion =+ player.puntuacion +20 
      scoreSelected.innerHTML = `Score:  ${player.puntuacion}`;
      button.style.display = "block"
      finishGame()



    }else{
      alert("Error")
      answerQuestion.style.display = "none"
      button.style.display = "block"

    }
  })

  button.addEventListener("click", function(){
    let dice = randomNumber(1, 6);
    divShowInformation.innerHTML = `<img src="./images/result_${dice}.png" class="animated flip">`;
    clickPosition = dice + player.position;

    if (clickPosition > 45) {
      clickPosition = newPosition - 45
    } 

console.log(clickPosition)
    paintGrey(clickPosition);
    animateBox(clickPosition)
    button.style.display = "none"
  })  

  let arrayBox = document.querySelectorAll("[id^='box']");
  
  for(let i = 0; i < arrayBox.length; i++){
    arrayBox[i].addEventListener("click", function(event){
      //console.log('event', event.target.classList)
     // console.log('position', clickPosition);
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
