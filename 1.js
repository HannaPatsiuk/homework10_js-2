document.getElementById('get_result').onclick=fAge;
function fAge () {
var a = document.getElementById('user_age').value;
a=parseInt(a);
if(a<=17){
		var b='20'+a;
		b=parseInt(b);
		var c='19'+a;
		c=parseInt(c);
		var age = 2017-b;
		var age1 = 2017-c;
		alert('Ваш возраст '+age+ ' или '+age1+' лет');
	}
	else if(a<100){
		b='19'+a;
		b=parseInt(b);
		var age = 2017-b;
		alert('Ваш возраст '+age+' лет');
	}
	else {
		var age = 2017-a;
		age = parseInt(age);
		alert('Ваш возраст '+age+' лет');
	}
}

// Task#2

document.getElementById("ok2").onclick=f2;
function f2 () {
	var a = document.getElementById('i1').value;
	var b = document.getElementById('i2').value;
	a=parseInt(a);
	b=parseInt(b);
	if(a>b){
		alert(a);
	}
	else if(a<b){
		alert(b);
	}
	else {
		alert('equal');
	}
}

// Task#3
document.getElementById("ok3").onclick=f3; //onclick is event, f1 is function name
function f3 () {
	var a = document.getElementById('user3').value;
	if(a<=20){
		alert('1-й подъезд');
	}
	else if(a>20 && a<=48){
		alert('2-й подъезд');
	}
	else if(a>48 && a<=91){
		alert('3-й подъезд');
	}
	else {
		alert('Квартира не найдена');
	}
}

// Task#4
document.getElementById("ok4").onclick=f4;
function f4 () {
	var a = document.getElementById('d1').value;
	var b = document.getElementById('d2').value;
	if(a=='ivan' && b=='333'){
		alert('Добро пожаловать');
	}
	else if(a=='ssss' && b=='666'){
		alert('Добро пожаловать');
	}
	else if(a=='gibs' && b=='0000'){
		alert('Добро пожаловать');
	}
	else {
		alert('Ошибка входа');
	}
}

// Task#5
document.getElementById("ok5").onclick=f5; //onclick is event, f1 is function name
function f5 () {
	var a = document.getElementById('j1').value;
	var b = document.getElementById('j2').value;
	var c = document.getElementById('j3').value;
	var m =Math.max(a,b,c);
	alert(m);
}

// Task#6
var p=document.getElementById('output'); 
for(var i=0; i<101; i=i+2){
p.innerHTML+=i+'<br>';
}

// Task#7
var p=document.getElementById('output7'); 
for(var i=200; i>-1; i=i-1){
p.innerHTML+=i+'<br>';
}

// Task#8
var p=document.getElementById('output8'); 
var sum=0;
for(var i=0; i<=101; i=i+1){
sum=sum+i;
}
p.innerHTML=sum;

// Task#9
document.getElementById("ok9").onclick=f1;
var result=document.getElementById('output9'); 

function f1 () {
	var a = document.getElementById('number').value;
	var b = document.getElementById('stepen').value;
	var sum=1;
	for (var i=0; i<b; i=i+1){
	sum=sum*a;
	}
result.innerHTML=sum;
}

// Task#10

var q=document.getElementById('output10'); 
var multipl=document.getElementById('output10'); 
var out='';
for(var i=1; i<=10; i=i+1){
out+=i+'*7 = '+i*7+'<br>';
multipl.innerHTML=out;
}

// Task#11
var u=document.getElementById('output11'); 
var multiple=1;
for(var i=1; i<=50; i=i+1){
multiple=multiple*i;
}
u.innerHTML=multiple;

//Task#12
var w=document.getElementById('output12'); 
var out12 = '';
for(var i=1000; i<2001; i=i+1){
out12+='&#'+i+';';
}
w.innerHTML=out12;
