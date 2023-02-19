//Question database
const quesDataBase = [
    {
        
            id:1,
            question: "Which language runs in a web browser?",
            a: "Java",
            b: "C",
            c: "Python",
            d: "javascript",
            correct: "d",
        },
        {
            id:2,
            question: "What does CSS stand for?",
            a: "Central Style Sheets",
            b: "Cascading Style Sheets",
            c: "Cascading Simple Sheets",
            d: "Cars SUVs Sailboats",
            correct: "b",
        },
        {
            id:3,
            question: "What does HTML stand for?",
            a: "Hypertext Markup Language",
            b: "Hypertext Markdown Language",
            c: "Hyperloop Machine Language",
            d: "Helicopters Terminals Motorboats Lamborginis",
            correct: "a",
        },
        {
            id:4,
            question: "What year was JavaScript launched?",
            a: "1996",
            b: "1995",
            c: "1994",
            d: "none of the above",
            correct: "b",
        },
        {
            id:5,
            question: "Which language runs in a web browser?",
            a: "Java",
            b: "C",
            c: "Python",
            d: "javascript",
            correct: "d",
        },
        {
            id:6,
            question: "What does CSS stand for?",
            a: "Central Style Sheets",
            b: "Cascading Style Sheets",
            c: "Cascading Simple Sheets",
            d: "Cars SUVs Sailboats",
            correct: "b",
        },
        {
            id:7,
            question: "What does HTML stand for?",
            a: "Hypertext Markup Language",
            b: "Hypertext Markdown Language",
            c: "Hyperloop Machine Language",
            d: "Helicopters Terminals Motorboats Lamborginis",
            correct: "a",
        },
        {
            id:8,
            question: "What year was JavaScript launched?",
            a: "1996",
            b: "1995",
            c: "1994",
            d: "none of the above",
            correct: "b",
        },
    {
        id:9,
      question: "Q5: How do you write Hello World in an alert box ?",
      a: "a. alert(Hello world)",
      b: "b. conosle.log(alert)",
      c: "c. console.log(Hello world)",
      d: "d. msg(Hello world)",
      ans: "a",
    },
    {

        id:10,
      question: "Q6: What is the full form of HTTP ?",
      a: "a. Hypertext transfer protocol",
      b: "b. Hypertext transfer policy",
      c: "c. Hypertext text protocol",
      d: "d. Hypertect text policy",
      ans: "a",
    },
  ];
  
  //i represents index
  let i = 0;
  const getQues = () => {
    document.getElementById("question-container").innerHTML = "";
    let ques = quesDataBase[i];
  
    let quesHeading = document.createElement("h3");
    quesHeading.innerText = ques.question;
  
    let row1 = document.createElement("row");
    row1.setAttribute("id", "row1");
    row1.style.display = "flex";
  
    let row2 = document.createElement("row");
    row2.setAttribute("id", "row2");
    row2.style.display = "flex";
  
    let row3 = document.createElement("row");
    row3.setAttribute("id", "row3");
    row3.style.display = "flex";
  
    let row4 = document.createElement("row");
    row4.setAttribute("id", "row4");
    row4.style.display = "flex";
  
    let option1 = document.createElement("p");
    option1.setAttribute("id", "option1");
    let input1 = document.createElement("input");
    input1.setAttribute("id", "input1");
    input1.setAttribute("type", "radio");
    input1.setAttribute("name", "radio");
    option1.append(input1);
    option1.innerText = ques.a;
    row1.append(input1, option1);
  
    let option2 = document.createElement("p");
    option2.setAttribute("id", "option2");
    let input2 = document.createElement("input");
    input2.setAttribute("id", "input2");
    input2.setAttribute("type", "radio");
    input2.setAttribute("name", "radio");
    option2.append(input2);
    option2.innerText = ques.b;
    row2.append(input2, option2);
  
    let option3 = document.createElement("p");
    option3.setAttribute("id", "option3");
    let input3 = document.createElement("input");
    input3.setAttribute("id", "input3");
    input3.setAttribute("type", "radio");
    input3.setAttribute("name", "radio");
    option3.append(input3);
    option3.innerText = ques.c;
    row3.append(input3, option3);
  
    let option4 = document.createElement("p");
    option4.setAttribute("id", "option4");
    let input4 = document.createElement("input");
    input4.setAttribute("id", "input4");
    input4.setAttribute("type", "radio");
    input4.setAttribute("name", "radio");
    option4.append(input4);
    option4.innerText = ques.d;
    row4.append(input4, option4);
  
    document
      .getElementById("question-container")
      .append(quesHeading, row1, row2, row3, row4);
  };
  getQues();
  
  let userResult = []; // userResult will store the response of user in local Storage
  
  //Creating a global object score, keeping the total score of the user
  let score = 0;
  
  //Handle next button functionality
  const handleNext = () => {
    let checked1 = document.getElementById("input1").checked;
    let checked2 = document.getElementById("input2").checked;
    let checked3 = document.getElementById("input3").checked;
    let checked4 = document.getElementById("input4").checked;
  
    let ques = quesDataBase[i];
    let ans = ques.ans;
  
    let userAns = {
      question: ques.question,
      userAns: "",
      correctAns: ans,
    };
    
  
    //Checks - user will not be able to go to next question without answering previous
    if (!checked1 && !checked2 && !checked3 && !checked4) {
      alert("Please select any option to continue");
      return;
    } else if (checked1 && ans === "a") {
      userAns.userAns = document.getElementById("option1").innerHTML;
      score= score + 1;
    } else if (checked2 && ans === "b") {
      userAns.userAns = document.getElementById("option2").innerHTML;
      score = score+ 1;
    } else if (checked3 && ans === "c") {
      userAns.userAns = document.getElementById("option3").innerHTML;
      score = score + 1;
    } else if (checked4 && ans === "d") {
      userAns.userAns = document.getElementById("option4").innerHTML;
      score= score + 1;
    } else if (checked1 && ans !== "a") {
      userAns.userAns = document.getElementById("option1").innerHTML;
    } else if (checked2 && ans !== "b") {
      userAns.userAns = document.getElementById("option2").innerHTML;
    } else if (checked3 && ans !== "c") {
      userAns.userAns = document.getElementById("option3").innerHTML;
    } else if (checked4 && ans !== "d") {
      userAns.userAns = document.getElementById("option4").innerHTML;
    }
    userResult.push(userAns);
    localStorage.setItem("report", JSON.stringify(userResult));
    localStorage.setItem("score", JSON.stringify(score));
    i++;
    if (i  == 10) {
      Quiz.innerHTML ="Please check your result"
      document.getElementById("submit").hidden = true;
      // alert("Voilla, Quiz completed!! Fetching your report");
      // location = "report.html"
    }
    getQues();
  };
  var skip=0;
  //Skip button functionality
  const handleSkip = () => {
     skip++;
    i++;
    if(i < quesDataBase.length) {
      getQues();
  } else {
      
      Quiz.innerHTML ="Please check your result"
  }
   
  };
  
  
  
  
  
  
  
  
  
  
  
  
  const quizbtn=document.querySelector('.quizbtn');
  const resultbtn=document.querySelector('.resultbtn');
  const movebtn=document.querySelector('.movebtn');
  const Quiz=document.querySelector('.quiz');
  const Result=document.querySelector('.result');
  
  let Score= localStorage.getItem('score');
  
  resultbtn.addEventListener('click',()=>{
      movebtn.classList.add('rightbtn');
      Result.classList.add('resultForm');
      Quiz.classList.remove('quizForm');
      movebtn.innerHTML="Result"
      if(i <quesDataBase.length ) {
          Result.innerHTML ="Result Not Generated please complete the quiz"
          getQues();
      }else{
          Result.innerHTML =` <h3>Total Marks obtained: ${score}</h3>
          <h3>Skipped Questions : ${skip}</h3>
          <h3>Right Questions : ${score}</h3>
          <h3>wrong Questions : ${i-score-skip}</h3>
  
          `
      }
         
      }
      
      // Result.innerHTML="Result Not Generated "
      
  )
  quizbtn.addEventListener('click',()=>{
      movebtn.classList.remove('rightbtn');
      Result.classList.remove('resultForm');
      Quiz.classList.add('quizForm');
      movebtn.innerHTML="Quiz"
    
      if(i <quesDataBase.length ) {
         
         
      }else{
          Quiz.innerHTML ="please check your result Result generated" 
      }
    
     
  })
  
  
  
  
  
  