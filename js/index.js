function run(){
location.href="viewer.html";
localStorage.src=document.getElementById('in').value;
}
function out(){
localStorage.src='';
location.href="index.html";
}
