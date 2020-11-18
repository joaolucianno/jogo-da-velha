//Start
var panel = document.querySelector('#panel');
var menu  = document.querySelector('#menu');
var bntBack = document.querySelector('#btnBack');

function displayPanel(){
    panel.style.visibility = 'visible';
    menu.style.visibility = 'hidden';
    bntBack.style.visibility = 'visible';
    
};

function hiddenPanel(){
    bntBack.style.visibility = 'hidden';
    panel.style.visibility = 'hidden';
    menu.style.visibility = 'visible';
};

// ========= Game ========= 

var game = [];
var panelGame = [];
var tab = [];
var gameOn = false;
var lvl = 1;
var delay = 2000;
// user = 0; cpu = 1;
var userTurn = 0; 
var cpuTurn = 1;
var turn = userTurn;
var turnStart;
var panelX = document.querySelector('#panelX');
var panelO = document.querySelector('#panelO');
// Check Winner
var checkWinner;


//Functions
function choosenLvl(x){
    lvl = x;
}

function start(){
    document.getElementById('resetAlert').style.visibility = 'hidden';
    gameOn = true;
    turnStart = turn;
    game = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ];
    tab = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ]
    panelGame = [
        [document.querySelector('#p1'), document.querySelector('#p2'), document.querySelector('#p3')],
        [document.querySelector('#p4'), document.querySelector('#p5'), document.querySelector('#p6')],
        [document.querySelector('#p7'), document.querySelector('#p8'), document.querySelector('#p9')]
    ];
    refreshPanel();
    if(turnStart == cpuTurn){
        setTimeout(() => {cpuPlay();}, delay);
    }
    
};

function reset(){
    if(turnStart == userTurn){
        turn = cpuTurn;
    } else{
        turn = userTurn;
    }
    document.getElementById('resetAlert').style.visibility = 'visible';
    setTimeout(() =>{start();}, 1000)
    
};

function refreshPanel(){
    if(turn == userTurn){
        panelX.style.color = 'red';
        panelX.style.textShadow = '1px 1px 4px  #ffffff70';
        panelO.style.color = 'rgba(173, 216, 230, 0.205)';
        panelO.style.textShadow = 'none';
    } else{
        panelO.style.color = 'lightblue';
        panelO.style.textShadow = '1px 1px 4px  #ffffff70';
        panelX.style.color = 'rgba(255, 0, 0, 0.205)';
        panelX.style.textShadow = 'none';
    }
    var imgX = new Image;
    imgX.src = 'images/x.png';
    var imgO = new Image;
    imgO.src = 'images/o.png';
    for(var r = 0; r < 3; r++){
        for(var c = 0; c < 3; c++){
            //User X
            if(game[r][c] == 'x'){
                if(tab[r][c] == ''){
                    panelGame[r][c].appendChild(imgX);
                    panelGame[r][c].style.cursor = 'default';
                    tab[r][c] = 'marcado';
                }
            } else 
            //CPU
            if(game[r][c] == 'o'){
                if(tab[r][c] == ''){
                    panelGame[r][c].appendChild(imgO);
                    panelGame[r][c].style.cursor = 'default';
                    tab[r][c] = 'marcado';
                }
            } else{
                panelGame[r][c].innerHTML = '';
                panelGame[r][c].style.cursor = 'pointer';
            }
        }
    }
};

function userPlay(p){
    if((gameOn == true) && (turn == userTurn)){
        
        switch(p){
            case 1:
                if(game[0][0] == ''){
                    game[0][0] = 'x';
                    refreshPanel();
                    turn = cpuTurn;
                }
                break;
            case 2:
                if(game[0][1] == ''){
                    game[0][1] = 'x';
                    refreshPanel();
                    turn = cpuTurn;
                }
                break;
            case 3:
                if(game[0][2] == ''){
                    game[0][2] = 'x';
                    refreshPanel();
                    turn = cpuTurn;
                }
                break;
            case 4:
                if(game[1][0] == ''){
                    game[1][0] = 'x';
                    refreshPanel();
                    turn = cpuTurn;
                }
                break;
            case 5:
                if(game[1][1] == ''){
                    game[1][1] = 'x';
                    refreshPanel();
                    turn = cpuTurn;
                }
                break;
            case 6:
                if(game[1][2] == ''){
                    game[1][2] = 'x';
                    refreshPanel();
                    turn = cpuTurn;
                }
                break;
            case 7:
                if(game[2][0] == ''){
                    game[2][0] = 'x';
                    refreshPanel();
                    turn = cpuTurn;
                }
                break;
            case 8:
                if(game[2][1] == ''){
                    game[2][1] = 'x';
                    refreshPanel();
                    turn = cpuTurn;
                }
                break;
            case 9:
                if(game[2][2] == ''){
                    game[2][2] = 'x';
                    refreshPanel();
                    turn = cpuTurn;
                }
                break;
        }
        panelO.style.color = 'lightblue';
        panelO.style.textShadow = '1px 1px 4px  #ffffff70';
        panelX.style.color = 'rgba(255, 0, 0, 0.205)';
        panelX.style.textShadow = 'none';
        setTimeout(() => {cpuPlay();}, delay);
        
    }
};

function cpuPlay(){
    //Level 1
    if(lvl == 1){
        var r;
        var c;
        if((gameOn == true) && (turn == cpuTurn)){
            do{
                r = Math.ceil(Math.random() * 2);
                c = Math.ceil(Math.random() * 2);
            }while(game[r][c] != '')
            game[r][c] = 'o';
            refreshPanel();
            panelX.style.color = 'red';
            panelX.style.textShadow = '1px 1px 4px  #ffffff70';
            panelO.style.color = 'rgba(173, 216, 230, 0.205)';
            panelO.style.textShadow = 'none';
            turn = userTurn;
            
        }
    }
    
};

function result(){
    
}