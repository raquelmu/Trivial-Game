document.addEventListener('DOMContentLoaded', (event) => {
  
  function diceResult(min, max){
    return Math.floor(Math.random() * (max - min + 1 ) + min);
  }



  function paintGrey(){
    let arrayBox = document.querySelectorAll("[id^='box']");
    for(let i = 0; i < arrayBox.length; i++){
      //arrayBox[i].style.backgroundColor = "grey";
      //if( arrayBox[i] == )
      arrayBox[i].classList.add("grey")
    }
  }



  function movePlayer(dice){
    player.position += dice;
    for(let i = 0; i < box.length; i++){
      if(box[i].number===player.position){
        let boxPlayer = document.getElementById(box[i].id)
        //boxPlayer.style.backgroundColor = "red";
        boxPlayer.classList.remove("grey")
      }
    }
  }



  function knowCategory(){
    for(let i = 0; i < box.length; i++){
      if(box[i].number===player.position){
        return box[i].category;
      }
    }
  }



  function showQuestion(){
    let questionsCategory = []
    for(let i = 0; i < questions.length; i++){
      if(questions[i].category == knowCategory()){
        //return questionResult()
        questionsCategory.push(questions[i])
      }
    }
    let resultQuestionIndex = diceResult(0, questionsCategory.length);
    return questionsCategory[resultQuestionIndex];
    
  }

    
  
  

  let player = {
    position: 0,
    puntuacion: 0,
  }


  let box = [
    {
      category: "",
      number: 0,
      id: "box0"
    },
    {
      category: "geography",
      number: 1,
      id: "box1"
    },
    {
      category: "science",
      number: 2,
      id: "box2",
    },
    {
      category: "arts",
      number: 3,
      id: "box3",
    },
    {
      category: "history",
      number: 4,
      id: "box4",
    },
    {
      category: "entertainment",
      number: 5,
      id: "box5",
    },
    {
      category: "sport",
      number: 6,
      id: "box6",
    },
    {
      category: "geography",
      number: 7,
      id: "box7",
    },
    {
      category: "science",
      number: 8,
      id: "box8",
    },
    {
      category: "arts",
      number: 9,
      id: "box9",
    },
    {
      category: "history",
      number: 10,
      id: "box10",
    },
    {
      category: "entertainment",
      number: 11,
      id: "box11",
    },
    {
      category: "sport",
      number: 12,
      id: "box12",
    },
    {
      category: "geography",
      number: 13,
      id: "box13",
    },
    {
      category: "science",
      number: 14,
      id: "box14",
    },
    {
      category: "arts",
      number: 15,
      id: "box15",
    },
    {
      category: "history",
      number: 16,
      id: "box16",
    },
    {
      category: "entertainment",
      number: 17,
      id: "box17",
    },
    {
      category: "sport",
      number: 18,
      id: "box18",
    },
    {
      category: "geography",
      number: 19,
      id: "box19",
    },
    {
      category: "science",
      number: 20,
      id: "box20",
    },
    {
      category: "arts",
      number: 21,
      id: "box21"
    },
    {
      category: "history",
      number: 22,
      id: "box22",
    },
    {
      category: "entertainment",
      number: 23,
      id: "box23",
    },
    {
      category: "sport",
      number: 24,
      id: "box24",
    },
    {
      category: "geography",
      number: 25,
      id: "box25",
    },
    {
      category: "science",
      number: 26,
      id: "box26",
    },
    {
      category: "arts",
      number: 27,
      id: "box27",
    },
    {
      category: "history",
      number: 28,
      id: "box28",
    },
    {
      category: "entertainment",
      number: 29,
      id: "box29",
    },
    {
      category: "sport",
      number: 30,
      id: "box30",
    },
    {
      category: "geography",
      number: 31,
      id: "box31"
    },
    {
      category: "science",
      number: 32,
      id: "box32",
    },
    {
      category: "arts",
      number: 33,
      id: "box33",
    },
    {
      category: "history",
      number: 34,
      id: "box34",
    },
    {
      category: "entertainment",
      number: 35,
      id: "box35",
    },
    {
      category: "sport",
      number: 36,
      id: "box36",
    },
    {
      category: "geography",
      number: 37,
      id: "box37",
    },
    {
      category: "science",
      number: 38,
      id: "box38",
    },
    {
      category: "arts",
      number: 39,
      id: "box39",
    },
    {
      category: "history",
      number: 40,
      id: "box40",
    },
     {
      category: "entertainment",
      number: 41,
      id: "box35",
    },
    {
      category: "sport",
      number: 42,
      id: "box42",
    },
    {
      category: "geography",
      number: 43,
      id: "box43",
    },
    {
      category: "science",
      number: 44,
      id: "box44",
    },
    {
      category: "arts",
      number: 45,
      id: "box45",
    },
   
  ]

  let questions = [
    {
      question: "The Indian Ocean is the third largest ocean in the world",
      answer: true,
      category: "geography",
      id: "question1",
    },
    {
      question: "pregunta ciencia 1",
      answer: true,
      category: "science",
      id: "question2",
    },
    {
      question: "ciencia 2",
      answer: false,
      category: "science",
      id: "question3",
    },
    {
      question: "science 3",
      answer: true,
      category: "science",
      id: "question4",
    },
    {
      question: "arts 1",
      answer: true,
      category: "arts",
      id: "question5",
    },
    {
      question: "arts 2",
      answer: true ,
      category: "arts",
      id: "question6",
    },
    {
      question: "There are more countries in Africa than Asia",
      answer: true,
      category: "georaphy",
      id: "question7",
    },
    
    {
      question: "arts 3",
      answer: false,
      category: "arts",
      id: "question8",
    },
    {
      question: "entertainment 1",
      answer: false,
      category: "entertainment",
      id: "question9",
    },
    {
      question: "entertainment 2",
      answer: false,
      category: "entertainment",
      id: "question10",
    },
    {
      question: "entertainment 3",
      answer: true,
      category: "entertainment",
      id: "question11",
    },
    {
      question: "history 1",
      answer: true,
      category: "history",
      id: "question12",
    },
    {
      question: "Madris is more easterly than London",
      answer: false,
      category: "geography",
      id: "question13",
    },
    {
      question: "history 2",
      answer: true,
      category: "history",
      id: "question14",
    },
    {
      question: "history 3",
      answer: false,
      category: "history",
      id: "question15",
    },
    {
      question: "sports 1",
      answer: true,
      category: "sport",
      id: "question16",
    },
    {
      question: "sports 2",
      answer: false,
      category: "sport",
      id: "question17",
    },
    {
      question: "sports 3",
      answer: false,
      category: "sport",
      id: "question18",
    },
    {
      question: "The currency of Switzerland is the Euro",
      answer: false,
      category: "geography",
      id: "question19",
    },/*
    {
      question: 
      answer: 
      category:
      id: "question20",
    },
    {
      question: 
      answer: ,
      category:
      id: "question21",
    },
    {
      question: 
      answer: ,
      category:
      id: "question22",
    },
    {
      question: 
      answer: ,
      category:
      id: "question23",
    },
    {
      question: 
      answer: ,
      category:
      id: "question24",
    },*/
    {
      question: "China borders the same numbers of countries as Russia",
      answer: true,
      category: "geography",
      id: "question25",
    },/*
    {
      question:
      answer: ,
      category:
      id: "question26",
    },
    {
      question: 
      answer: ,
      category: 
      id: "question27",
    },
    
    {
      question: 
      answer: ,
      category:
      id: "question28",
    },
    {
      question: 
      answer: ,
      category:
      id: "question29",
    },
    {
      question: 
      answer: ,
      category:
      id: "question30",
    },*/
    {
      question: "Rhode Island has a greater population than Mongolia",
      answer: false,
      category: "geography",
      id: "question31",
    },/*
    {
      question: 
      answer: ,
      category:
      id: "question32",
    },
    {
      question: 
      answer: ,
      category:
      id: "question33",
    },
    {
      question: 
      answer: ,
      category:
      id: "question34",
    },
    {
      question: 
      category:
      id: "question35",
    },
    {
      question: 
      answer: ,
      category:
      id: "question36",
    },*/
    {
      question: "Greenland is on the Eurasian tectonic plate",
      answer: false,
      category: "geography",
      id: "question37",
    },
    /*
    {
      question: 
      answer: ,
      category:
      id: "question38",
    },
    {
      question: 
      answer: ,
      category:
      id: "question39",
    },
    {
      question: 
      answer: ,
      category:
      id: "question40",
    },
    {
      question: 
      answer: ,
      category:
      id: "question41",
    },
    {
      question: ,
      answer: ,
      category:
      id: "question42",
    },*/
    {
      question: "Tallin is the capital city of Estonia",
      answer: true,
      category: "geography",
      id: "question43",
    },/*
    {
      question: ,
      answer: ,
      category:
      id: "question44",
    },
    {
      question: 
      answer: 
      category:
      id: "question45",
    },*/
    
  ]



  let button = document.getElementById("#buttonStart");
  let divShowInformation = document.getElementById("center");

  button.addEventListener("click", function(){
    let dice = diceResult(1, 6);
    divShowInformation.innerHTML = `<img src="./images/result_${dice}.png">`
    paintGrey();
    movePlayer(dice);
    

  })  
  /*setTimeout(function(){
      divShowInformation.innerHTML = '';
    }, 1000)*/
  

  let arrayBox = document.querySelectorAll("[id^='box']");
  
  for(let i = 0; i < arrayBox.length; i++){
    arrayBox[i].addEventListener("click", function(){     
      //divShowInformation.innerHTML = ("questions[43].question")
      let hashahs = showQuestion()
      divShowInformation.innerHTML= hashahs.question;
    })
  //en que categoria he caido
  }
  
})


