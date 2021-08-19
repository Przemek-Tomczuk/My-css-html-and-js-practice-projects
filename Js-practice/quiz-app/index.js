let answer1 = ["Shopify", "To save time on things like store setups and migrations", "They are paid extremely well"]
let answer2 = ["WooCommerce", "To extend the limited design options and functionalities of themes with custom code", "There is a high demand for them"]
let answer3 = ["ShopCommerce", "To provide support with a deep understanding of how the platform works and what its limitations are", "They need to know web development, the platform itself, and the liquid template language"]
let answer4 = ["BigCommerce", "All the above", "All the above"]
let questions = ["Which of the following is not a real eCommerce platform?", "If Shopify is so good, why are Shopify developers necessary?", "Which of the following is true about Shopify developers?"]

let counter = 0;
let score = 0;

var ele = document.getElementsByName('option 1');
document.getElementById("questionary").style.display = "none";
let isChecked = function(answers) {
    let n = answers.length;
    while (n--) {
        if (answers[n].checked) {
            return true
        }
        
    }
}

let backBtn = document.getElementById("back");
document.getElementById("back").style.display = "none";

backBtn.addEventListener("click", function(){    

    if (counter === 0){
        document.getElementById("next").textContent = "Next >";
        document.getElementById("questionNumber").textContent = "Question " + (counter + 1) +" of " + 3 +":";
        document.getElementById("question").textContent = questions[counter];
        document.getElementById("answ1").textContent = answer1[counter];
        document.getElementById("answ2").textContent = answer2[counter];
        document.getElementById("answ3").textContent = answer3[counter];
        document.getElementById("answ4").textContent = answer4[counter];
    }else if ((counter === 1) && (isChecked(ele))) {
        counter = 0;
        document.getElementById("questionNumber").textContent = "Question " + (counter + 1) +" of " + 3 +":";
        document.getElementById("question").textContent = questions[counter];

        document.getElementById("answ1").textContent = answer1[0];
        document.getElementById("answ2").textContent = answer2[0];
        document.getElementById("answ3").textContent = answer3[0];
        document.getElementById("answ4").textContent = answer4[0];
        
        
    }else if ((counter === 2) && (isChecked(ele))) {
        counter = 1;
        document.getElementById("questionNumber").textContent = "Question " + (counter) +" of " + 3 +":";
        document.getElementById("question").textContent = questions[0];
        document.getElementById("back").style.display = "none";

        document.getElementById("answ1").textContent = answer1[0];
        document.getElementById("answ2").textContent = answer2[0];
        document.getElementById("answ3").textContent = answer3[0];
        document.getElementById("answ4").textContent = answer4[0];
        if (score > 0) {
            score --;
        }
    
    }else {
        if (isChecked(ele)) {
        
        counter = 2;
        document.getElementById("questionNumber").textContent = "Question " + (counter) +" of " + 3 +":";;
        document.getElementById("question").textContent = questions[1];
        document.getElementById("answ1").textContent = answer1[1];
        document.getElementById("answ2").textContent = answer2[1];
        document.getElementById("answ3").textContent = answer3[1];
        document.getElementById("answ4").textContent = answer4[1];
            if (score > 1) {
                score --;
            }
        }
    }

    
    
    
})

let btn = document.getElementById("next");
btn.addEventListener("click", function(){
    document.getElementById("questionary").style.display = "block";
    if (counter === 0){
        document.getElementById("next").textContent = "Next >";
        document.getElementById("questionNumber").textContent = "Question " + (counter + 1) +" of " + 3 +":";
        document.getElementById("question").textContent = questions[counter];
        document.getElementById("answ1").textContent = answer1[counter];
        document.getElementById("answ2").textContent = answer2[counter];
        document.getElementById("answ3").textContent = answer3[counter];
        document.getElementById("answ4").textContent = answer4[counter];
        counter = 1;
    }else if ((counter === 1) && (isChecked(ele))) {
        document.getElementById("back").style.display = "block";
        document.getElementById("questionNumber").textContent = "Question " + (counter + 1) +" of " + 3 +":";
        document.getElementById("question").textContent = questions[counter];

        document.getElementById("answ1").textContent = answer1[counter];
        document.getElementById("answ2").textContent = answer2[counter];
        document.getElementById("answ3").textContent = answer3[counter];
        document.getElementById("answ4").textContent = answer4[counter];
        if (ele[2].checked) {
            score ++;
        }
        counter = 2;
    }else if ((counter === 2) && (isChecked(ele))) {
        document.getElementById("questionNumber").textContent = "Question " + (counter + 1) +" of " + 3 +":";
        document.getElementById("question").textContent = questions[counter];

        document.getElementById("answ1").textContent = answer1[counter];
        document.getElementById("answ2").textContent = answer2[counter];
        document.getElementById("answ3").textContent = answer3[counter];
        document.getElementById("answ4").textContent = answer4[counter];
        if (ele[3].checked) {
            score ++;
        }
        counter = 3;
    
    }else {
        if (isChecked(ele)) {
        document.getElementById("questionNumber").textContent = "Finished";
        document.getElementById("question").textContent = questions[counter];
        if (ele[3].checked) {
            score ++;
        }
        document.getElementById("score").textContent = "Your score is " + score + " points";
        document.getElementById("questionary").style.display = "none";
        document.getElementById("next").style.display = "none";
        document.getElementById("back").style.display = "none";
        }
    }
})