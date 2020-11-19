//Start
var panel = document.querySelector('#panel');
var menu  = document.querySelector('#menu');
var bntBack = document.querySelector('#btnBack');
var lvlLabel = 'Easy';
var loading = document.querySelector('#loading');

function displayPanel(){
    panel.style.visibility = 'visible';
    menu.style.visibility = 'hidden';
    bntBack.style.visibility = 'visible';
    
};

function hiddenPanel(){
    bntBack.style.visibility = 'hidden';
    panel.style.visibility = 'hidden';
    loading.style.visibility = 'visible';
    setTimeout(() =>{menu.style.visibility = 'visible';}, 1000);
    setTimeout(() =>{loading.style.visibility = 'hidden';}, 1000);
    document.querySelector('#xWin').style.visibility = 'hidden';
    document.querySelector('#oWin').style.visibility = 'hidden';
    document.querySelector('#draw').style.visibility = 'hidden';
    document.querySelector('#resetAlert').style.visibility = 'hidden';
};

function levelLabel(){
    if(lvl == 1){
        lvlLabel = 'Easy';
        document.querySelector('#curLvl').innerHTML = 'Lvl: Easy';
    } else if (lvl == 2){
        lvlLabel = 'Hard';
        document.querySelector('#curLvl').innerHTML = 'Lvl: Hard';
    }
};

window.onload = function(){levelLabel()};



// ========= Game ========= 

var game = [];
var panelGame = [];
var tab = [];
var gameOn = false;
var lvl = 1;
var delay = 2000;
// user = 0; cpu = 1;
var turnCounter = 0;
var userTurn = 0; 
var cpuTurn = 1;
var turn = userTurn;
var turnStart;
var panelX = document.querySelector('#panelX');
var panelO = document.querySelector('#panelO');
var resetAlert = document.querySelector('#resetAlert');
// Check Winner
var checkWinner;


//Start
function choosenLvl(x){
    lvl = x;
}

function start(){
    hideReset();
    gameOn = true;
    turnStart = turn;
    checkWinner = '';
    turnCounter = 0;
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


//Reset
function reset(){
    resetAlert.innerHTML = 'Reset';
    resetAlert.style.visibility = 'hidden';
    if(turnStart == userTurn){
        turn = cpuTurn;
    } else{
        turn = userTurn;
    }
    document.querySelector('#xWin').style.visibility = 'hidden';
    document.querySelector('#oWin').style.visibility = 'hidden';
    document.querySelector('#draw').style.visibility = 'hidden';
    showReset();
    setTimeout(() =>{incReset();}, 500);
    setTimeout(() =>{incReset();}, 1000);
    setTimeout(() =>{incReset();}, 1500);
    setTimeout(() =>{start();}, 2000);
    
};
function showReset(){
    resetAlert.style.visibility = 'visible';
};
function hideReset(){
    resetAlert.style.visibility = 'hidden';
};
function incReset(){
    resetAlert.innerHTML += '.';
};

//Refresh
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

//Players
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
        result();
        if(checkWinner != ''){
            gameOn = false;
            if(checkWinner == 'x'){
                setTimeout(() =>{document.querySelector('#xWin').style.visibility = 'visible';}, 500);
            } else if(checkWinner == 'draw'){
                setTimeout(() =>{document.querySelector('#draw').style.visibility = 'visible';}, 500);     
            } 
        } else{
            panelO.style.color = 'lightblue';
            panelO.style.textShadow = '1px 1px 4px  #ffffff70';
            panelX.style.color = 'rgba(255, 0, 0, 0.205)';
            panelX.style.textShadow = 'none';
            turnCounter++;
            setTimeout(() => {cpuPlay();}, 1000);
        }
    }   
};

function cpuPlay(){
    //Level 1
    if(lvl == 1){
        var r;
        var c;
        if((gameOn == true) && (turn == cpuTurn)){
            do{
                r = Math.round(Math.random() * 2);
                c = Math.round(Math.random() * 2);
            }while(game[r][c] != '')
            game[r][c] = 'o';
            refreshPanel();
            result();
        }    
            if(checkWinner != ''){
                gameOn = false;
                if(checkWinner == 'o'){
                    setTimeout(() =>{document.querySelector('#oWin').style.visibility = 'visible';}, 500);
                } else if(checkWinner == 'draw'){
                    setTimeout(() =>{document.querySelector('#draw').style.visibility = 'visible';}, 500);
                }
            } else{
                panelX.style.color = 'red';
                panelX.style.textShadow = '1px 1px 4px  #ffffff70';
                panelO.style.color = 'rgba(173, 216, 230, 0.205)';
                panelO.style.textShadow = 'none';
                turnCounter++;
                turn = userTurn;
            }
    } else
    //Level 2
    if(lvl == 2){
        if(turnCounter < 3){
            var r;
            var c;
            if((gameOn == true) && (turn == cpuTurn)){
                do{
                    r = Math.round(Math.random() * 2);
                    c = Math.round(Math.random() * 2);
                }while(game[r][c] != '')
                game[r][c] = 'o';
                refreshPanel();
                result();
            }    
            panelX.style.color = 'red';
            panelX.style.textShadow = '1px 1px 4px  #ffffff70';
            panelO.style.color = 'rgba(173, 216, 230, 0.205)';
            panelO.style.textShadow = 'none';
            turnCounter++;
            turn = userTurn;
                
        } else{

            // ************************ ATAQUE ************************
            //Linha 1
            if((game[0][0] == 'o') && (game[0][1] == 'o') && (game[0][2] == '')){
                game[0][2] = 'o';
            } else if((game[0][1] == 'o') && (game[0][2] == 'o') && (game[0][0] == '')){
                game[0][0] = 'o';
            } else if((game[0][0] == 'o') && (game[0][2] == 'o') && (game[0][1] == '')){
                game[0][1] = 'o';
            } else
            //Linha 2
            if((game[1][0] == 'o') && (game[1][1] == 'o') && (game[1][2] == '')){
                game[1][2] = 'o';
            } else if((game[1][1] == 'o') && (game[1][2] == 'o') && (game[1][0] == '')){
                game[1][0] = 'o';
            } else if((game[1][0] == 'o') && (game[1][2] == 'o') && (game[1][1] == '')){
                game[1][1] = 'o';
            } else
            //Linha 3
            if((game[2][0] == 'o') && (game[2][1] == 'o') && (game[2][2] == '')){
                game[2][2] = 'o';
            } else if((game[2][1] == 'o') && (game[2][2] == 'o') && (game[2][0] == '')){
                game[2][0] = 'o';
            } else if((game[2][0] == 'o') && (game[2][2] == 'o') && (game[2][1] == '')){
                game[2][1] = 'o';
            } else
            //Coluna 1
            if((game[0][0] == 'o') && (game[1][0] == 'o') && (game[2][0] == '')){
                game[2][0] = 'o';
            } else if((game[1][0] == 'o') && (game[2][0] == 'o') && (game[0][0] == '')){
                game[0][0] = 'o';
            } else if((game[0][0] == 'o') && (game[2][0] == 'o') && (game[1][0] == '')){
                game[1][0] = 'o';
            } else
            //Coluna 2
            if((game[0][1] == 'o') && (game[1][1] == 'o') && (game[2][1] == '')){
                game[2][1] = 'o';
            } else if((game[1][1] == 'o') && (game[2][1] == 'o') && (game[0][1] == '')){
                game[0][1] = 'o';
            } else if((game[0][1] == 'o') && (game[2][1] == 'o') && (game[1][1] == '')){
                game[1][1] = 'o';
            } else
            //Coluna 3
            if((game[0][2] == 'o') && (game[1][2] == 'o') && (game[2][2] == '')){
                game[2][2] = 'o';
            } else if((game[1][2] == 'o') && (game[2][2] == 'o') && (game[0][2] == '')){
                game[0][2] = 'o';
            } else if((game[0][2] == 'o') && (game[2][2] == 'o') && (game[1][2] == '')){
                game[1][2] = 'o';
            } else
            //Diagonais
            if((game[0][0] == 'o') && (game[1][1] == 'o') && (game[2][2] == '')){
                game[2][2] = 'o';
            } else if((game[1][1] == 'o') && (game[2][2] == 'o') && (game[0][0] == '')){
                game[0][0] = 'o';
            } else if((game[0][0] == 'o') && (game[2][2] == 'o') && (game[1][1] == '')){
                game[1][1] = 'o';
            } else if((game[2][0] == 'o') && (game[1][1] == 'o') && (game[0][2] == '')){
                game[0][2] = 'o';
            } else if((game[0][2] == 'o') && (game[1][1] == 'o') && (game[2][0] == '')){
                game[2][0] = 'o';
            } else if((game[0][2] == 'o') && (game[2][0] == 'o') && (game[1][1] == '')){
                game[1][1] = 'o';
            } else

            // ************************ DEFESA ************************
            if((game[0][0] == 'x') && (game[0][1] == 'x') && (game[0][2] == '')){
                game[0][2] = 'o';
            } else if((game[0][1] == 'x') && (game[0][2] == 'x') && (game[0][0] == '')){
                game[0][0] = 'o';
            } else if((game[0][0] == 'x') && (game[0][2] == 'x') && (game[0][1] == '')){
                game[0][1] = 'o';
            } else
            //Linha 2
            if((game[1][0] == 'x') && (game[1][1] == 'x') && (game[1][2] == '')){
                game[1][2] = 'o';
            } else if((game[1][1] == 'x') && (game[1][2] == 'x') && (game[1][0] == '')){
                game[1][0] = 'o';
            } else if((game[1][0] == 'x') && (game[1][2] == 'x') && (game[1][1] == '')){
                game[1][1] = 'o';
            } else
            //Linha 3
            if((game[2][0] == 'x') && (game[2][1] == 'x') && (game[2][2] == '')){
                game[2][2] = 'o';
            } else if((game[2][1] == 'x') && (game[2][2] == 'x') && (game[2][0] == '')){
                game[2][0] = 'o';
            } else if((game[2][0] == 'x') && (game[2][2] == 'x') && (game[2][1] == '')){
                game[2][1] = 'o';
            } else
            //Coluna 1
            if((game[0][0] == 'x') && (game[1][0] == 'x') && (game[2][0] == '')){
                game[2][0] = 'o';
            } else if((game[1][0] == 'x') && (game[2][0] == 'x') && (game[0][0] == '')){
                game[0][0] = 'o';
            } else if((game[0][0] == 'x') && (game[2][0] == 'x') && (game[1][0] == '')){
                game[1][0] = 'o';
            } else
            //Coluna 2
            if((game[0][1] == 'x') && (game[1][1] == 'x') && (game[2][1] == '')){
                game[2][1] = 'o';
            } else if((game[1][1] == 'x') && (game[2][1] == 'x') && (game[0][1] == '')){
                game[0][1] = 'o';
            } else if((game[0][1] == 'x') && (game[2][1] == 'x') && (game[1][1] == '')){
                game[1][1] = 'o';
            } else
            //Coluna 3
            if((game[0][2] == 'x') && (game[1][2] == 'x') && (game[2][2] == '')){
                game[2][2] = 'o';
            } else if((game[1][2] == 'x') && (game[2][2] == 'x') && (game[0][2] == '')){
                game[0][2] = 'o';
            } else if((game[0][2] == 'x') && (game[2][2] == 'x') && (game[1][2] == '')){
                game[1][2] = 'o';
            } else
            //Diagonais
            if((game[0][0] == 'x') && (game[1][1] == 'x') && (game[2][2] == '')){
                game[2][2] = 'o';
            } else if((game[1][1] == 'x') && (game[2][2] == 'x') && (game[0][0] == '')){
                game[0][0] = 'o';
            } else if((game[0][0] == 'x') && (game[2][2] == 'x') && (game[1][1] == '')){
                game[1][1] = 'o';
            } else if((game[2][0] == 'x') && (game[1][1] == 'x') && (game[0][2] == '')){
                game[0][2] = 'o';
            } else if((game[0][2] == 'x') && (game[1][1] == 'x') && (game[2][0] == '')){
                game[2][0] = 'o';
            } else if((game[0][2] == 'x') && (game[2][0] == 'x') && (game[1][1] == '')){
                game[1][1] = 'o';
            } else{
                do{
                    r = Math.round(Math.random() * 2);
                    c = Math.round(Math.random() * 2);
                }while(game[r][c] != '')
                game[r][c] = 'o';
            }
            refreshPanel();
            result();
            if(checkWinner != ''){
                gameOn = false;
                if(checkWinner == 'o'){
                    setTimeout(() =>{document.querySelector('#oWin').style.visibility = 'visible';}, 500);
                } else if(checkWinner == 'draw'){
                    setTimeout(() =>{document.querySelector('#draw').style.visibility = 'visible';}, 500);
                }
            } else{
                panelX.style.color = 'red';
                panelX.style.textShadow = '1px 1px 4px  #ffffff70';
                panelO.style.color = 'rgba(173, 216, 230, 0.205)';
                panelO.style.textShadow = 'none';
                turnCounter++;
                turn = userTurn;
            }

        }
    }
    
};

//Result
function result(){
    if((gameOn == true) && ((turnCounter > 3) && (turnCounter < 9))){
        //Linhas
        if((game[0][0] == game[0][1]) && (game[0][1] == game[0][2])){
            checkWinner = game[0][0];
        } else if((game[1][0] == game[1][1]) && (game[1][1] == game[1][2])){
            checkWinner = game[1][0];
        } else if((game[2][0] == game[2][1]) && (game[2][1] == game[2][2])){
            checkWinner = game[2][0];
        } else
        //Colunas
        if((game[0][0] == game[1][0]) && (game[1][0] == game[2][0])){
            checkWinner = game[0][0];
        } else if((game[0][1] == game[1][1]) && (game[1][1] == game[2][1])){
            checkWinner = game[0][1];
        } else if((game[0][2] == game[1][2]) && (game[1][2] == game[2][2])){
            checkWinner = game[0][2];
        } else
        //Diagonais
        if((game[0][0] == game[1][1]) && (game[1][1] == game[2][2])){
            checkWinner = game[0][0];
        } else if((game[2][0] == game[1][1]) && (game[1][1] == game[0][2])){
            checkWinner = game[2][0];
        } else if(turnCounter == 8){
            checkWinner = 'draw';
        } else{
            checkWinner = '';
        }
    }
    
};