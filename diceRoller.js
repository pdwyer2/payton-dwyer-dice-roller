function RollDice(){

    //handles random number generation between 1 and 6
    var numRolled = 0;
    numRolled = Math.floor(Math.random()*6) + 1;


    //if else statements to add dice images based on each number rolled
    //uses html DOM images to create image element
    if (numRolled == 1){
        var link1 = document.createElement("img");
        link1.setAttribute("src", "diceNum1.png");
        link1.setAttribute("id", "1");
        link1.setAttribute("width", "50");
        link1.setAttribute("height", "50");
        document.body.appendChild(link1);
    } else if (numRolled == 2){
        var link2 = document.createElement("img");
        link2.setAttribute("src", "diceNum2.png");
        link2.setAttribute("id", "2");
        link2.setAttribute("width", "50");
        link2.setAttribute("height", "50");
        document.body.appendChild(link2);
    } else if (numRolled == 3){
        var link3 = document.createElement("img");
        link3.setAttribute("src", "diceNum3.png");
        link3.setAttribute("id", "3");
        link3.setAttribute("width", "50");
        link3.setAttribute("height", "50");
        document.body.appendChild(link3);
    } else if (numRolled == 4){
        var link4 = document.createElement("img");
        link4.setAttribute("src", "diceNum4.png");
        link4.setAttribute("id", "4");
        link4.setAttribute("width", "50");
        link4.setAttribute("height", "50");
        document.body.appendChild(link4);
    } else if (numRolled == 5){
        var link5 = document.createElement("img");
        link5.setAttribute("src", "diceNum5.png");
        link5.setAttribute("id", "5");
        link5.setAttribute("width", "50");
        link5.setAttribute("height", "50");
        document.body.appendChild(link5);
    } else {
        var link6 = document.createElement("img");
        link6.setAttribute("src", "diceNum6.png");
        link6.setAttribute("id", "6");
        link6.setAttribute("width", "50");
        link6.setAttribute("height", "50");
        document.body.appendChild(link6);
    }
}

//function that clears all of the rolled dice images by removing the elements by ID
function ClearTable(){
    do {
    var num2 = (document.getElementById("1"))||
    (document.getElementById("2"))||
    (document.getElementById("3"))||
    (document.getElementById("4"))||
    (document.getElementById("5"))||
    (document.getElementById("6"));
    num2.parentNode.removeChild(num2);
    } while(0<1);

}


