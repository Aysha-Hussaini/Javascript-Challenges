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

//Challenge 5: BLACKJACK Game

let blackjack = {
    'you' : {'resultSpan' : '#player-score','div' : '#player', 'score' : 0},
    'dealer' : {'resultSpan' : '#bot-score','div' : '#bot', 'score' : 0},
    'cards' : ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'A', 'J', 'K', 'Q' ],
    'score_object' : {'2' :2, '3' :3, '4' :4, '5' :5, '6' :6, '7' : 7, '8' :8, '9' :9, '10': 10, 'A' :[1, 11], 'K': 10, 'Q': 10, 'J' :10 },
    'turnsover' : false,
    'isStand' : false,
    'wins' : 0,
    'losses' : 0,
    'draw' : 0
}

const YOU = blackjack['you'];
const DEALER = blackjack['dealer'];

const hitsound = new Audio('style/sounds/swish.m4a');
const winsound = new Audio('style/sounds/cash.mp3');
const losesound = new Audio('style/sounds/aww.mp3');

document.querySelector('#hit-button').addEventListener('click', blackjackhit);
document.querySelector('#stand-button').addEventListener('click', blackjackstand);
document.querySelector('#deal-button').addEventListener('click', blackjackDeal);


function blackjackhit() {
    if (blackjack['isStand'] === false) {
        let card = randomcard();
        show_card(YOU, card);
        score_calculator(card, YOU);
        bust_logic(YOU);
    }
}
 
function show_card(active_player, Randomcard) {
    if(active_player['score'] <= 21){
        let card_img = document.createElement('img');
        card_img.src = `style/images/${Randomcard}.png`; //string templating
        //card_img.src = 'style/images/' + randomcard + '.png'; //string concatenation
        document.querySelector(active_player['div']).appendChild(card_img);
        hitsound.play();
    }
}

function blackjackDeal(){
    if (blackjack['turnsover'] === true){
        let yourImg = document.querySelector(YOU['div']).querySelectorAll('img');
        for (i = 0; i< yourImg.length ; i++) {
            yourImg[i].remove();
        } 
        
        let dealerImg = document.querySelector(DEALER['div']).querySelectorAll('img');
        for (i = 0; i< dealerImg.length ; i++) {
            dealerImg[i].remove();
        }
        
        YOU['score'] = 0;
        document.querySelector(YOU['resultSpan']).textContent = 0;
        document.querySelector(YOU['resultSpan']).style.color = 'rgb(240, 248, 255)';
        
        DEALER['score'] = 0;
        document.querySelector(DEALER['resultSpan']).textContent = DEALER['score'];
        document.querySelector(DEALER['resultSpan']).style.color = 'rgb(240, 248, 255)';

        document.querySelector('#blackjack-results').textContent = "Let's Play!";
        document.querySelector('#blackjack-results').style.color =  'black';
        blackjack['isStand'] = false;
        blackjack['turnsover'] = false;
    }
}


function randomcard() {
    let rand = Math.floor(Math.random() * 13 );
    let Randomcard = blackjack['cards'][rand];
    return Randomcard;
}

function score_calculator(card_value, active_player) {
    if (card_value === 'A') {
        if (active_player['score'] + blackjack['score_object'][card_value][1] <= 21) {
            active_player['score'] = active_player['score'] + blackjack['score_object'][card_value][1];
            console.log(active_player['score']);
        } else {
            active_player['score'] = active_player['score'] +  blackjack['score_object'][card_value][0];
        }
    }
    else{
        active_player['score'] = active_player['score'] +  blackjack['score_object'][card_value];
    }
    document.querySelector(active_player['resultSpan']).textContent = active_player['score'];
}

function bust_logic(active_player){
    if (active_player['score'] > 21){
        document.querySelector(active_player['resultSpan']).textContent = 'BUST!';
        document.querySelector(active_player['resultSpan']).style.color = 'red';    
    }
}

function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function blackjackstand() {
    blackjack['isStand'] = true;
    
    while(DEALER['score'] < 16 && blackjack['isStand'] === true){
        let card = randomcard();
        show_card(DEALER, card);
        score_calculator(card, DEALER);
        bust_logic(DEALER);
        await sleep(1000);
    }
    blackjack['turnsover'] = true;
    result();
}


function decide_winner(){
    let winner;
    if((YOU['score']) <= 21 ){
        if ((YOU['score'] > DEALER['score']) || (DEALER['score']) > 21){
            winner = YOU;
            
        } else if((YOU['score'] > DEALER['score']) && (DEALER['score'] < 21)){
            winner = YOU;
            
        }else if (YOU['score'] < DEALER['score']) {
            winner = DEALER;
            }
        else if (YOU['score'] === DEALER['score']) {
            winner = 'draw';
           
        }
        
    }
    else if(YOU['score'] > 21){
        if (DEALER['score'] <= 21){
            winner = DEALER;
            
        } else if(DEALER['score'] > 21){
            winner = 'draw';
            
        }
    }
    return winner;
}  

function show_result(winner){
    let message, messagecolor;
    if (blackjack['turnsover'] === true){
        if (winner === YOU){
            message = 'YOU WON';
            messagecolor = 'green';
            winsound.play();
        }
        else if (winner === DEALER){
            message = 'YOU LOSE';
            messagecolor = 'red';
            losesound.play();
        }
        else if (winner ==='draw'){
            message = "YOU DREW";
            messagecolor = 'blue';
        }

        document.querySelector('#blackjack-results').textContent = message;
        document.querySelector('#blackjack-results').style.color = messagecolor;
    }
}

function result(){
    let winner = decide_winner();
    show_result(winner);
    update_table(winner);
}        

function update_table(winner){
    if (winner === YOU){
        blackjack['wins'] ++;
        document.querySelector('#wins').textContent = blackjack['wins'];
    }else if (winner === DEALER){
        blackjack['losses'] ++;
        document.querySelector('#losses').textContent = blackjack['losses'];
    }
    else {
        blackjack['draw']++;
        document.querySelector('#draws').textContent = blackjack['draw'];
    }       
}