let quiz={
    questions:["1. What is the fastest swimming stroke?",'2. Which swimming stroke is also known as the "crawl"?',"3. In competitive swimming, how many individual medley events are there in the Olympics?","4. Who holds the record for the most Olympic gold medals in swimming?","5. What is the standard length of an Olympic swimming pool?"],
    options:[[ "Backstroke","Breaststroke","Butterfly","Freestyle"],["Backstroke","Breaststroke","Butterfly","Freestyle"],[1,2,3,4],["Mark Spitz","Katie Ledecky"," Ian Thorpe","Michael Phelps"],["25m","50m","100m","200m"]],
    answers:[3,3,1,3,1],
};
let k=0; // currenquestion
let i=0; 
// let j=0;
let score=0;
let currentQuestion=quiz.questions[i]
let quest=document.querySelector("#question").innerText=quiz.questions[k]
let opt1=document.querySelector("#a_text").innerText=quiz.options[i][0]
let opt2=document.querySelector("#b_text").innerText=quiz.options[i][1]
let opt3=document.querySelector("#c_text").innerText=quiz.options[i][2]
let opt4=document.querySelector("#d_text").innerText=quiz.options[i][3]
let radio=document.querySelectorAll(".option")
let submit=document.querySelector("#submit")
submit.addEventListener("click",() => {
    const checkedans=document.querySelector('input[type="radio"]:checked')
    if(checkedans===null){
        alert("please select an answer");
    }
    else{
        if(checkedans.nextElementSibling.textContent===quiz.options[i][quiz.answers[i]]){
            score++;
            
           
        }
        i++;
        
        if(i<quiz.questions.length){
             quest=document.querySelector("#question").innerText=quiz.questions[i];
             opt1=document.querySelector("#a_text").innerText=quiz.options[i][0];
             opt2=document.querySelector("#b_text").innerText=quiz.options[i][1];
             opt3=document.querySelector("#c_text").innerText=quiz.options[i][2];
             opt4=document.querySelector("#d_text").innerText=quiz.options[i][3];
             checkedans.checked=false;

        }
        else{
            alert("your score is "+score);
            location.reload();
        }
    }   
});
