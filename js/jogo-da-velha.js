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
var lvl;
// user = 0; cpu = 1;
var userTurn = 0; 
var cpuTurn = 1;
var turn;
// Check Winner
var checkWinner;



function start(){
    gameOn = true;
    turn = userTurn;
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
};

function reset(){
    start();
};



function refreshPanel(){
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
        cpuPlay();
    }
};

function cpuPlay(){
    var r;
    var c;
    if((gameOn == true) && (turn == cpuTurn)){
        do{
            r = Math.ceil(Math.random() * 2);
            c = Math.ceil(Math.random() * 2);
        }while(game[r][c] != '')
        game[r][c] = 'o';
        refreshPanel();
        turn = userTurn;
    }
    
};