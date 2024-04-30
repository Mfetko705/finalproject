
let submit = document.getElementById("submit");


//infoForm.addEventListener("submit", checkEmail);
//let submit = document.getElementById("submit");

submit.addEventListener("click", checkEmail)

function checkEmail() {
    let emailInput = document.getElementById("emailInput").value;
    //let mailRegex = "^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$"
    let str = /^[^\s@]+@[^\s@]+\.[^\s@]/;

    let mailRegex = RegExp(str);
    let valid = str.test(emailInput);

    if (emailInput= "") {
        window.alert("Please enter your email address!")
    } else if (!valid){
        window.alert("Please enter a valid email address!");

} else {
    showPlanner()
    }
    }
    
    function showPlanner(){
    document.getElementById("emailInput").value = "";
    let myInfo = document.getElementById ("scheduleDiv");
    myInfo.innerHTML = "";


let title = document.createElement("h2");
title.textContent = "Create your meal plan!"
myInfo.appendChild(title);

let p5 = document.createElement("p");

let node5 = document.createTextNode("Sunday");

p5.appendChild(node5);
myInfo.appendChild(p5);

let ul = document.createElement('ul');

let li1 = document.createElement('li');
li1.appendChild(document.createTextNode("Sunday"));
let labelSunday = ["Breakfast", "Snack", "Lunch", "Snack", "Dinner"];
let inputSunday = ["text"];

for (let i = 0; i< labelSunday.length; i++){
    let liSun = document.createElement("li");
    
    let sunLabel = document.createElement("sunLabel");
    sunLabel.textContent = labelSunday[i];

    let inputSun =document.createElement("input");
    inputSun.type = inputSunday[i];
    inputSun.name = "Sunday";

    liSun.appendChild(sunLabel);
    liSun.appendChild(inputSun);

    myInfo.appendChild(liSun);

}

let p6 = document.createElement("p");

let node6 = document.createTextNode("Monday");

p6.appendChild(node6);
myInfo.appendChild(p6);
let li2 = document.createElement('li');
li2.appendChild(document.createTextNode("Monday"));
let labelMonday = ["Breakfast", "Snack", "Lunch", "Snack", "Dinner"];
let inputMonday = ["text"];

for (let i = 0; i< labelMonday.length; i++){
    let liMon = document.createElement("li");
    
    let monLabel = document.createElement("monLabel");
    monLabel.textContent = labelMonday[i];

    let inputMon =document.createElement("input");
    inputMon.type = inputMonday[i];

    liMon.appendChild(monLabel);
    liMon.appendChild(inputMon);

    myInfo.appendChild(liMon);

}
let p7 = document.createElement("p");

let node7 = document.createTextNode("Tuesday");

p7.appendChild(node7);
myInfo.appendChild(p7);



let li3 = document.createElement('li');
li3.appendChild(document.createTextNode("Tuesday"));
let labelTuesday = ["Breakfast", "Snack", "Lunch", "Snack", "Dinner"];
let inputTuesday = ["text"];

for (let i = 0; i< labelTuesday.length; i++){
    let liTues = document.createElement("li");
    
    let tuesLabel = document.createElement("tuesLabel");
    tuesLabel.textContent = labelTuesday[i];

    let inputTues =document.createElement("input");
    inputTues.type = inputTuesday[i];

    liTues.appendChild(tuesLabel);
    liTues.appendChild(inputTues);

    myInfo.appendChild(liTues);

}
let p8 = document.createElement("p");

let node8 = document.createTextNode("Wednesday");

p8.appendChild(node8);
myInfo.appendChild(p8);

let li4 = document.createElement('li');
li4.appendChild(document.createTextNode("Wednesday"));
let labelWednesday = ["Breakfast", "Snack", "Lunch", "Snack", "Dinner"];
let inputWednesday = ["text"];

for (let i = 0; i< labelWednesday.length; i++){
    let liWeds = document.createElement("li");
    
    let wedsLabel = document.createElement("wedsLabel");
    wedsLabel.textContent = labelWednesday[i];

    let inputWeds =document.createElement("input");
    inputWeds.type = inputWednesday[i];

    liWeds.appendChild(wedsLabel);
    liWeds.appendChild(inputWeds);

    myInfo.appendChild(liWeds);

}
let p9 = document.createElement("p");

let node9 = document.createTextNode("Thursday");

p9.appendChild(node9);
myInfo.appendChild(p9);


let li5 = document.createElement('li');
li5.appendChild(document.createTextNode("Thursday"));
let labelThursday = ["Breakfast", "Snack", "Lunch", "Snack", "Dinner"];
let inputThursday = ["text"];

for (let i = 0; i< labelThursday.length; i++){
    let liThurs = document.createElement("li");
    
    let thursLabel = document.createElement("thursLabel");
    thursLabel.textContent = labelThursday[i];

    let inputThurs =document.createElement("input");
    inputThurs.type = inputThursday[i];

    liThurs.appendChild(thursLabel);
    liThurs.appendChild(inputThurs);

    myInfo.appendChild(liThurs);

}
let p10 = document.createElement("p");

let node10 = document.createTextNode("Friday");

p10.appendChild(node10);
myInfo.appendChild(p10);

let li6 = document.createElement('li');
li6.appendChild(document.createTextNode("Friday"));
let labelFriday = ["Breakfast", "Snack", "Lunch", "Snack", "Dinner"];
let inputFriday = ["text"];

for (let i = 0; i< labelFriday.length; i++){
    let liFri = document.createElement("li");
    
    let friLabel = document.createElement("friLabel");
    friLabel.textContent = labelFriday[i];

    let inputFri =document.createElement("input");
    inputFri.type = inputFriday[i];

    liFri.appendChild(friLabel);
    liFri.appendChild(inputFri);

    myInfo.appendChild(liFri);

}
let p11 = document.createElement("p");

let node11 = document.createTextNode("Saturday");

p11.appendChild(node11);
myInfo.appendChild(p11);

let li7 = document.createElement('li');
li7.appendChild(document.createTextNode("Saturday"));
let labelSaturday = ["Breakfast", "Snack", "Lunch", "Snack", "Dinner"];
let inputSaturday = ["text"];

for (let i = 0; i< labelSaturday.length; i++){
    let liSat = document.createElement("li");
    
    let satLabel = document.createElement("satLabel");
    satLabel.textContent = labelSaturday[i];

    let inputSat =document.createElement("input");
    inputSat.type = inputSaturday[i];

    liSat.appendChild(satLabel);
    liSat.appendChild(inputSat);

    myInfo.appendChild(liSat);

}
ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);
ul.appendChild(li4);
ul.appendChild(li5);
ul.appendChild(li6);
ul.appendChild(li7);

let break1= document.createElement("br");
myInfo.appendChild(break1);

let submit2 = document.createElement("button");
submit2.innerText = "Submit"
myInfo.appendChild(submit2);
    
let break2= document.createElement("br");
myInfo.appendChild(break2);

let reset = document.createElement("button");
reset.innerText = "Clear"
myInfo.appendChild(reset);

let break3= document.createElement("br");
myInfo.appendChild(break3);
    
let print = document.createElement("button");
print.innerText = "Print";
myInfo.appendChild(print)

let break4= document.createElement("br");
myInfo.appendChild(break4);

let downLoad = document.createElement("button");
downLoad.innerText = "Download"
myInfo.appendChild(downLoad);

submit2.addEventListener("click", newWeb)
    }
function newWeb(){
    let planner = ""
    for (let i=0; i<myInfo.children.length; i++){
        let child = myInfo.children[i];
        if (child.tagName ==="input"){
        planner +=`${child.previousElementSibling.textContent}: ${child.value}<br>`;
        }
    }
    //let mealPlan= document.getElementById("myInfo")
    let newPage= window.open("", "_blank");
    //newPage.document.write("Meal Plan");
    //newPage.document.write(mealPlan)
    newPage.document.write(planner);
    }
 
