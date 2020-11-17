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
