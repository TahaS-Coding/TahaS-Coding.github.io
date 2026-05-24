document.addEventListener("DOMContentLoaded", function () {
    function timeoutFunction(img, newSrc){
        let transition;
        switch(img){
            case jurassicImage:
                transition = jurassicTransition;
                break;
            case calculatorImage:
                transition = calculatorTransition;
                break;
            case battleshipImage:
                transition = battleshipTransition;
                break;
        }
        transition.style.opacity = 1;
        setTimeout(() => {
            img.setAttribute("src", newSrc);
            transition.style.opacity = 0;
        }, 150);
    }

    // jurassic carousel
    let jurassicLeft = document.getElementById("jurassicLeft");
    let jurassicRight = document.getElementById("jurassicRight");
    let jurassicImage = document.getElementById("jurassicImage") ;
    let jurassicTransition = document.getElementById("jurassicTransition");
    jurassicLeft.addEventListener("click", function(){
        switch (jurassicImage.getAttribute("src")){
            case "images/jurassic-two.jpeg":
                jurassicLeft.style.backgroundColor = "#437aa1";
                timeoutFunction(jurassicImage, "images/jurassic-one.jpeg");
                break;
            case "images/jurassic-three.jpeg":
                timeoutFunction(jurassicImage, "images/jurassic-two.jpeg");
                break;
            case "images/jurassic-four.jpeg":
                timeoutFunction(jurassicImage, "images/jurassic-three.jpeg");
                break;
            case "images/jurassic-five.jpeg":
                timeoutFunction(jurassicImage, "images/jurassic-four.jpeg");
                break;
            case "images/jurassic-six.jpeg":
                timeoutFunction(jurassicImage, "images/jurassic-five.jpeg");
                break;
            case "images/jurassic-seven.jpeg":
                jurassicRight.style.backgroundColor = "#5091BF";
                timeoutFunction(jurassicImage, "images/jurassic-six.jpeg");
                break;
        }
    });
    jurassicRight.addEventListener("click", function(){
        switch (jurassicImage.getAttribute("src")){
            case "images/jurassic-one.jpeg":
                jurassicLeft.style.backgroundColor = "#5091BF";
                timeoutFunction(jurassicImage, "images/jurassic-two.jpeg");
                break;
            case "images/jurassic-two.jpeg":
                timeoutFunction(jurassicImage, "images/jurassic-three.jpeg");
                break;
            case "images/jurassic-three.jpeg":
                timeoutFunction(jurassicImage, "images/jurassic-four.jpeg");
                break;
            case "images/jurassic-four.jpeg":
                timeoutFunction(jurassicImage, "images/jurassic-five.jpeg");
                break;
            case "images/jurassic-five.jpeg":
                timeoutFunction(jurassicImage, "images/jurassic-six.jpeg");
                break;
            case "images/jurassic-six.jpeg":
                jurassicRight.style.backgroundColor = "#437aa1";
                timeoutFunction(jurassicImage, "images/jurassic-seven.jpeg");
                break;
        }
    });

    //calculator carousel
    let calculatorLeft = document.getElementById("calculatorLeft");
    let calculatorRight = document.getElementById("calculatorRight");
    let calculatorImage = document.getElementById("calculatorImage") ;
    let calculatorTransition = document.getElementById("calculatorTransition");
    calculatorLeft.addEventListener("click", function(){
        switch (calculatorImage.getAttribute("src")){
            case "images/calculator-two.jpeg":
                calculatorLeft.style.backgroundColor = "#437aa1";
                timeoutFunction(calculatorImage, "images/calculator-one.jpeg");
                break;
            case "images/calculator-three.jpeg":
                calculatorRight.style.backgroundColor = "#5091BF";
                timeoutFunction(calculatorImage, "images/calculator-two.jpeg");
                break;
        }
    });
    calculatorRight.addEventListener("click", function(){
        switch (calculatorImage.getAttribute("src")){
            case "images/calculator-one.jpeg":
                calculatorLeft.style.backgroundColor = "#5091BF";
                timeoutFunction(calculatorImage, "images/calculator-two.jpeg");
                break;
            case "images/calculator-two.jpeg":
                calculatorRight.style.backgroundColor = "#437aa1";
                timeoutFunction(calculatorImage, "images/calculator-three.jpeg");
                break;
        }
    });

    //battleship carousel
    let battleshipLeft = document.getElementById("battleshipLeft");
    let battleshipRight = document.getElementById("battleshipRight");
    let battleshipImage = document.getElementById("battleshipImage") ;
    let battleshipTransition = document.getElementById("battleshipTransition");
    battleshipLeft.addEventListener("click", function(){
        switch (battleshipImage.getAttribute("src")){
            case "images/battleship-two.jpeg":
                battleshipLeft.style.backgroundColor = "#437aa1";
                timeoutFunction(battleshipImage, "images/battleship-one.jpeg");
                break;
            case "images/battleship-three.jpeg":
                battleshipRight.style.backgroundColor = "#5091BF";
                timeoutFunction(battleshipImage, "images/battleship-two.jpeg");
                break;
        }
    });
    battleshipRight.addEventListener("click", function(){
        switch (battleshipImage.getAttribute("src")){
            case "images/battleship-one.jpeg":
                battleshipLeft.style.backgroundColor = "#5091BF";
                timeoutFunction(battleshipImage, "images/battleship-two.jpeg");
                break;
            case "images/battleship-two.jpeg":
                battleshipRight.style.backgroundColor = "#437aa1";
                timeoutFunction(battleshipImage, "images/battleship-three.jpeg");
                break;
        }
    });
});