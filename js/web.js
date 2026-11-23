/**
 * 
 */


const helloButton = 
document.
querySelector("#helloButton");
const colors = [
	"초록", 
	"파랑", 
	"노랑"
];

/*

function () {
alert("stop");
}); 
*/

function sayHello() {
alert("stop");
}
sayHello();

helloButton.addEventListener("click",sayHello); 
console.log(colors[0]); // 초록
// 예제12
// 1. 컬러 배열 const colors = [""];
// 2. HTML tag button 
const page1=document.querySelector("#page1"); 
const page2=document.querySelector("#page2"); 
const page3=document.querySelector("#page3"); 
const task = {
title: "HTML 연습하기",
done: false
};
const reset=document.querySelector("#reset");

// 3. button 실행할 함수 
function page1Click() {
	alert("1" + buttonColor[0]);
}
function page2Click() {
	alert("2" + buttonColor[1]);
}
function page3Click() {
	alert("3" + buttonColor[2]);
}

function reset_click () {
	alert("reset");
	
}

reset.addEventListener("click", reset_click)


// 4. event 실행할 함수
page1.addEventListener("page1", page1Click);
page2.addEventListener("page2", page2Click);
page3.addEventListener("page3", page3Click);

// to_list
const list = 
document.querySelector("#list")
list.addEventListener(
	"list", function listDo () {
		alert("list")
		
	}
);
/*
function listDo () {
	alert("list")
	
}
*/

const input=
document.
querySelector("#taskInput");
// alert("list"+ input.value);

const item=
document.
activeElement("li");


// <ul>
const taskList=
document.
querySelector("#tasklist");
taskList.append(item);

const taskinput = 
document.
querySelector("#taskInput");
// alert("내용"+input.value);

// li
 input.value="";

if (input.Value.trim() === "") 
	alert("none");
	return;

// item
item.textContent = input.value;

const item=document.createElement("li");
item.textContent=input.value;

item.addEventListener(
	"item", function() {
		item.style.
		textDecoration=line-through;
	}
	
);


const fortune = [ "fortune"
	
];


let currentFortune="";
function drawFortune () {
	// Math.floor()
	math.floor()
	
	// floor(3.5) => 3 
	// Math.random() : 0.0 < 1.0
	const index = Math.floor ()
	math.random() * fortunes.length;
	
	
	alert("index="+index);
	currentFortune = fortunes[index];
	alert(
		index+
		"fortune"+
		currentFortune);
	document.
	querySelector("#result").
	textContent =
	currentFortune;
	}
	
	
function saveFortune () {
	if (currentFortune === "") {
	alert("먼저 행운을 뽑아 주세요!");
	return;
	}
	localStorage.setItem(
	"Fortune",
	currentFortune
	);
	alert("행운을 저장했어요!");
	}
	

function loadFortune () {
	const saved = localStorage.
	getItem("Fortune");
	if (saved === null) {
	alert("저장된 행운이 없어요!");
	return;
	}
	currentFortune=saved;
	document.
	querySelector("#result").
	textContent=saved;
	textContent=currentFortune;
	}
	
	
function deleteFortune () {
	localStorage.
	removeItem("Fortune");
	currentFortune = "";
	document.
	querySelector("#result").
	textContent =
	"저장된 행운을 삭제했어요!";
	alert("삭제 완료!");
	}
