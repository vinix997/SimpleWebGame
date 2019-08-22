$(document).ready(function(){
let goalScore = Math.floor(Math.random() * 135 + 25);
$('#req_score').text(goalScore);
var score = 0;
let firstValue = Math.floor(Math.random() * 15 + 1);
let secondValue = Math.floor(Math.random() * 15 + 1);
let thirdValue = Math.floor(Math.random() * 15 + 1);
let fourthValue = Math.floor(Math.random() * 15 + 1);
$('#your_score').text(score);
document.getElementById("firstBtn").onclick=firstBtn;
document.getElementById("secondBtn").onclick=secondBtn;
document.getElementById("thirdBtn").onclick=thirdBtn;
document.getElementById("fourthBtn").onclick=fourthBtn;
function firstBtn()
{
    score+= firstValue;
    $('#your_score').text(score);
    console.log(score);
    if(score === goalScore)
    {
        alert("Win");
        location.reload();
    }
    else if(score > goalScore)
    {
        alert("Lose");
        location.reload();
    }
}
function secondBtn()
{
    score+= secondValue;
    $('#your_score').text(score);
    if(score === goalScore)
    {
        alert("Win");
        location.reload();
    }
    else if(score > goalScore)
    {
        alert("Lose");
        location.reload();
    }
}
function thirdBtn()
{
    score+= thirdValue;
    $('#your_score').text(score);
    if(score === goalScore)
    {
        alert("Win");
        location.reload();
    }
    else if(score > goalScore)
    {
        alert("Lose");
        location.reload();
    }
}
function fourthBtn()
{
    score+= fourthValue;
    $('#your_score').text(score);
    if(score === goalScore)
    {
        alert("Win");
        location.reload();
    }
    else if(score > goalScore)
    {
        alert("Lose");
        location.reload();
    }
}
$('#button').on('click',restartBtn);
function restartBtn()
{
   location.reload();
}
});