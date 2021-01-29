//challenge in days
function ageinDays(){
    var birthyear = prompt('What is your birthyear?');
    var ageInDays = (2021 - birthyear) * 365;
    var h1 = document.createElement('h1');
    var textAns = document.createTextNode('You are ' + ageInDays + ' days old.');
    h1.setAttribute('id','ageinDays');
    h1.appendChild(textAns);
    document.getElementById('flex-box-result').appendChild(h1);
}

function reset(){
    document.getElementById('ageinDays').remove();
}

//Challenge 2
function GenerateImg(){
   var image = document.createElement('img');
   image.src = "https://media0.giphy.com/media/NhWZxXB1zoMapS1jtN/giphy.gif";
   document.getElementById('bitcoin').appendChild(image)
}

//Challenge 3

 //storing original value for replay
 var rock_1 = document.getElementById('rock');
 var paper_1 = document.getElementById('paper');
 var scissors_1 = document.getElementById('scissors');

 //function to play rock paper scissor game
function play_rps(yourchoice){
    console.log(yourchoice);
    var humanchoice, botchoice;
    humanchoice = yourchoice.id;
    console.log('human choice :' ,humanchoice);
    botchoice = number_for_bot(random_input());
    console.log('computer choice: ', botchoice);   
    var result = decidewinner(humanchoice, botchoice); //(0.5, 0.5), (1, 0), (0, 1)
    console.log(result);
    var message = finalmessage(result); //{message:you won, color:''green}
    console.log(message);
    rps_frontend(humanchoice, botchoice, message);
      
    function random_input(){
        return Math.floor(Math.random() * 3);
    }

    function number_for_bot(number){
        return ['rock', 'paper', 'scissors'][number];
    }

    function decidewinner(yourchoice, computerchoice) {
       //smth similar to json
        var rpsDB = {
            'rock' : {'scissors' : 1, 'rock' : 0.5, 'paper' : 0},
            'paper' : {'rock' : 1, 'paper' : 0.5, 'scissors': 0},
            'scissors' : {'rock' : 0, 'paper' : 1, 'scissors': 0.5}
        }

        var yourscore = rpsDB[yourchoice][computerchoice];
        var computerscore = rpsDB[computerchoice][yourchoice];

        return [yourscore, computerscore];
    }

    function finalmessage([yourscore, computerscore]){
        if (yourscore === 0 ){
            return {'message' : 'You Lost!', 'color': 'red'};
        }

        else if (yourscore === 0.5) {
            return {'message' : "It's a Tie", 'color': 'yellow'};

        }

        else {
            return {'message' : 'You Won!', 'color': 'green'};
        }
           
    }

    function rps_frontend(yourchoiceimg, computerchoiceimg, message) {
        var imgDB = {
            'rock' : document.getElementById('rock').src,
            'paper' : document.getElementById('paper').src,
            'scissors' : document.getElementById('scissors').src
        }

        //remove current images

        document.getElementById('rock').remove();
        document.getElementById('paper').remove();
        document.getElementById('scissors').remove();
        
        //create divs
        var humanDiv = document.createElement('div');
        var botDiv = document.createElement('div');
        var msgDiv = document.createElement('div');

        console.log(message['color']);

        //human choice image
        humanDiv.innerHTML = "<img src = ' " + imgDB[yourchoiceimg] + "' width = 180 height = 150 style = 'box-shadow: 10px 5px 5px " + message['color'] + ";' >";
        document.getElementById('flex-box-rps').appendChild(humanDiv);

        //message
        msgDiv.innerHTML = "<h1 style = 'color : " + message['color'] + "; font-size : 60px; padding :30px;' >" + message['message'] + "</h1>";
        document.getElementById('flex-box-rps').appendChild(msgDiv);
        
        //computer choice
        botDiv.innerHTML = "<img src = ' " + imgDB[computerchoiceimg] + "' width = 180 height = 150 style = 'box-shadow: 10px 5px 5px " + message['color'] + ";' >";
        document.getElementById('flex-box-rps').appendChild(botDiv);   
    }
}

//function for replay button

function replay_rps() {
    
    var replay = document.getElementById('flex-box-rps');
     
    
    while (replay.hasChildNodes()){
        replay.removeChild(replay.firstChild);
    }

    replay.appendChild(rock_1);
    replay.appendChild(paper_1);
    replay.appendChild(scissors_1);
   
}


//Challenge 4: Change the color of all buttons

var all_buttons = document.getElementsByTagName('button');

var copy_buttons =[];

for(let i = 0; i < all_buttons.length; i++){
    copy_buttons.push(all_buttons[i].classList[1]); //copying initial setting of buttons
}

function ButtonColorChange(button_color){
    if (button_color.value == 'red'){
        buttonsRed();
    }
    else if (button_color.value == 'blue'){
        buttonsBlue();
    }
    else if (button_color.value == 'green'){
        buttonsGreen();
    }
    else if (button_color.value == 'random'){
        buttonsRandom();
    }
    else if (button_color.value == 'reset'){
        buttonsReset();
    }

}

function buttonsRed() {
    for( let i = 0; i < all_buttons.length; i++){
        all_buttons[i].classList.replace(all_buttons[i].classList[1], 'btn-danger');
    
    }
}

function buttonsBlue() {
    for( let i = 0; i < all_buttons.length; i++){
        all_buttons[i].classList.replace(all_buttons[i].classList[1], 'btn-primary');
    
    }
}

function buttonsGreen() {
    for( let i = 0; i < all_buttons.length; i++){
        all_buttons[i].classList.replace(all_buttons[i].classList[1], 'btn-success');
    
    }
}

function buttonsReset(){
    for (let i = 0; i < all_buttons.length; i++){
        all_buttons[i].classList.replace(all_buttons[i].classList[1] , copy_buttons[i]);
    }
}

function buttonsRandom() {
    var choices = ['btn-primary', 'btn-info', 'btn-success', 'btn-danger', 'btn-warning'];
    for (let i = 0; i < all_buttons.length; i++){
        all_buttons[i].classList.replace(all_buttons[i].classList[1] , choices[Math.floor(Math.random() * 5)]);
    }
}