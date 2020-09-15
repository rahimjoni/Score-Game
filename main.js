const p1score = document.getElementById('player1score');
const p2score = document.getElementById('player2score');

const winingscore = document.getElementById('winscore');

const playerinput = document.getElementById('inputscore');
const player1btn = document.getElementById('player1btn');
const player2btn = document.getElementById('player2btn');
const resetbtn = document.getElementById('reset');

let player1setscore = 0;
let player2setscore = 0;
let winsscore = 5;
let gameover = false;

player1btn.addEventListener('click',()=>{
    if (!gameover){
        player1setscore ++;
        if ( player1setscore === winsscore ){
            gameover = true;
            player1btn.setAttribute('disabled','disabled')
            player2btn.setAttribute('disabled','disabled')
        }
        p1score.textContent = player1setscore;
    }

});

player2btn.addEventListener('click',()=>{
    if (!gameover){
        player2setscore ++;
        if ( player2setscore === winsscore ){
            gameover = true;
            player1btn.setAttribute('disabled','disabled');
            player2btn.setAttribute('disabled','disabled');
        }
        p2score.textContent = player2setscore;
    }
});

resetbtn.addEventListener('click',()=>{
    gameover = true;
    let player1setscore = 0;
    let player2setscore = 0;
    p1score.textContent = 0;
    p2score.textContent = 0;
    player1btn.removeAttribute('disabled',);
    player2btn.removeAttribute('disabled',);

});
playerinput.addEventListener('change',()=>{
    winsscore= Number(playerinput.value);
    winingscore.textContent = playerinput.value
})