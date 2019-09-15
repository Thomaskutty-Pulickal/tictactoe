var close = document.getElementById("close");
var popcontainer = document.querySelector(".popcontainer");
var zselector = document.getElementById("firstpop");
var xselector = document.getElementById("secondpop");
var selected;
var first = document.getElementById("first");
var second = document.getElementById("second");
var third = document.getElementById("third");
var fourth = document.getElementById("fourth");
var fifth = document.getElementById("fifth");
var sixth = document.getElementById("sixth");
var seventh = document.getElementById("seventh");
var eighth = document.getElementById("eighth");
var ninth = document.getElementById("ninth");
var unselected;
var result = document.querySelector(".result");
var resultcontainer = document.getElementById("resultcontain");
var j = 0;
selected = "0";
unselected = "x";
columnarray = {'first':-1,'second':-1,'third':-1,'fourth':-1,'fifth':-1,'sixth':-1,'seventh':-1,'eighth':-1,'ninth':-1}

function resu(text){
result.textContent = text;
resultcontainer.style.display = "block";
}

function iswin(){
if((columnarray["first"] == columnarray["second"]) && (columnarray["first"] == columnarray["third"]) && columnarray["first"] == "0"){
resu("player-1 wins");
}
else if((columnarray["first"] == columnarray["second"]) && (columnarray["first"] == columnarray["third"]) && columnarray["first"] == "x"){
resu("player-2 wins");
}
if((columnarray["first"] == columnarray["fourth"]) && (columnarray["first"] == columnarray["seventh"]) && columnarray["first"] == "0"){
resu("player-1 wins");
}
else if((columnarray["first"] == columnarray["fourth"]) && (columnarray["first"] == columnarray["seventh"]) && columnarray["first"] == "x"){
resu("player-2 wins");
}
if((columnarray["first"] == columnarray["fifth"]) && (columnarray["first"] == columnarray["ninth"]) && columnarray["first"] == "0"){
resu("player-1 wins");
}
else if((columnarray["first"] == columnarray["fifth"]) && (columnarray["first"] == columnarray["ninth"]) && columnarray["first"] == "x"){
resu("player-2 wins");
}
if((columnarray["second"] == columnarray["fifth"]) && (columnarray["second"] == columnarray["eighth"]) && columnarray["second"] == "0"){
resu("player-1 wins");
}
else if((columnarray["second"] == columnarray["fifth"]) && (columnarray["second"] == columnarray["eighth"]) && columnarray["second"] == "x"){
resu("player-2 wins");
}
if((columnarray["third"] == columnarray["sixth"]) && (columnarray["third"] == columnarray["ninth"]) && columnarray["third"] == "0"){
resu("player-1 wins");
}
else if((columnarray["third"] == columnarray["sixth"]) && (columnarray["third"] == columnarray["ninth"]) && columnarray["third"] == "x"){
resu("player-2 wins");
}
if((columnarray["third"] == columnarray["fifth"]) && (columnarray["third"]  == columnarray["seventh"]) && columnarray["third"] == "0"){
resu("player-1 wins");
}
else if((columnarray["third"] == columnarray["fifth"]) && (columnarray["third"]  == columnarray["seventh"]) && columnarray["third"] == "x"){
resu("player-2 wins");
}
if((columnarray["fourth"] == columnarray["fifth"]) && (columnarray["fourth"] == columnarray["sixth"]) && columnarray["fourth"] == "0"){
resu("player-1 wins");
}
else if((columnarray["fourth"] == columnarray["fifth"]) && (columnarray["fourth"] == columnarray["sixth"]) && columnarray["fourth"] == "x"){
resu("player-2 wins");
}
if((columnarray["seventh"] == columnarray["eighth"]) && (columnarray["seventh"] == columnarray["ninth"]) && columnarray["seventh"] == "0"){
resu("player-1 wins");
}
else if((columnarray["seventh"] == columnarray["eighth"]) && (columnarray["seventh"] == columnarray["ninth"]) && columnarray["seventh"] == "x"){
resu("player-2 wins");
}
}

function isdraw(){
if(j >= 8){
resu("Draw");
}
}

function regi(j){
if(j%2 == 0){
selected = "0";
unselected = "x";
}
else{
selected = "x";
unselected = "0";
}
++j;
}

function firstfun(){
columnarray["first"] = selected;
first.textContent = selected;
isdraw();
regi(++j);
iswin();
first.removeEventListener("click",firstfun);
}
function secondfun(){
columnarray["second"] = selected;
second.textContent = selected;
isdraw();
regi(++j);
iswin();
second.removeEventListener("click",secondfun);
}
function thirdfun(){
columnarray["third"] = selected;
third.textContent = selected;
isdraw();
regi(++j);
iswin();
third.removeEventListener("click",thirdfun);
}
function fourthfun(){
columnarray["fourth"] = selected;
fourth.textContent = selected;
isdraw();
regi(++j);
iswin();
fourth.removeEventListener("click",fourthfun);
}
function fifthfun(){
columnarray["fifth"] = selected;
fifth.textContent = selected;
isdraw();
regi(++j);
iswin();
fifth.removeEventListener("click",fifthfun);
}
function sixthfun(){
columnarray["sixth"] = selected;
sixth.textContent = selected;
isdraw();
regi(++j);
iswin();
sixth.removeEventListener("click",sixthfun);
}
function seventhfun(){
columnarray["seventh"] = selected;
seventh.textContent = selected;
isdraw();
regi(++j);
iswin();
seventh.removeEventListener("click",seventhfun);
}
function eighthfun(){
columnarray["eighth"] = selected;
eighth.textContent = selected;
isdraw();
regi(++j);
iswin();
eighth.removeEventListener("click",eighthfun);
}
function ninthfun(){
columnarray["ninth"] = selected;
ninth.textContent = selected;
isdraw();
regi(++j);
iswin();
ninth.removeEventListener("click",ninthfun);
}
close.addEventListener("click",function(){
popcontainer.style.display = "none";
});

first.addEventListener("click",firstfun);
second.addEventListener("click",secondfun);
third.addEventListener("click",thirdfun);
fourth.addEventListener("click",fourthfun);
fifth.addEventListener("click",fifthfun);
sixth.addEventListener("click",sixthfun);
seventh.addEventListener("click",seventhfun);
eighth.addEventListener("click",eighthfun);
ninth.addEventListener("click",ninthfun);


