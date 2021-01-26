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


