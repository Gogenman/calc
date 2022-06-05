'use strict'
function insert(num){
    document.form.textview.value = document.form.textview.value + num;
}

function clean(){
    document.form.textview.value = "";
}

function back(){
    document.form.textview.value = document.form.textview.value.slice(0,-1);
}

function calc(){
    (document.form.textview.value) ? document.form.textview.value = eval(document.form.textview.value) : document.form.textview.value = 'enter numbers';  
}