let myInfo = document.getElementById("infoDiv");
let p1 = document.createElement("p");

let node1 = document.createTextNode("Fill out your information:");

p1.appendChild(node1);
myInfo.appendChild(p1);

//let ul = document.createElement('ul');

let nameLabel= document.createElement("name");
nameLabel.innerHTML= "Enter your name ";
myInfo.appendChild(nameLabel);

let nameBox= document.createElement("input");
nameBox.type= "text";
myInfo.appendChild(nameBox);

//let break1= document.createElement("br")
//nameBox.appendChild(break1);

let emailLabel= document.createElement("email");
emailLabel.innerHTML= "Enter your email address ";
myInfo.appendChild(emailLabel);

let emailBox= document.createElement("input");
emailBox.type= "text";
myInfo.appendChild(emailBox);

//document.appendChild(document.createElement("br"));

let goalLabel= document.createElement("goal");
goalLabel.innerHTML= "What is your goal this week?  ";
myInfo.appendChild(goalLabel);

let goalBox= document.createElement("input");
goalBox.type= "text";
myInfo.appendChild(goalBox);

//function- validate email and populate meal plan inputs?
let submitButton = document.createElement("button");
submitButton.textContent = "Submit";
myInfo.appendChild(submitButton);






let mySchedule = document.getElementById("scheduleDiv");
//mySchedule.appendChild(h1);

let p2 = document.createElement("p");

let node2 = document.createTextNode("Fill out your weekly meal plan!");

p2.appendChild(node2);
mySchedule.appendChild(p2);

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

    mySchedule.appendChild(liSun);

}
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

    mySchedule.appendChild(liMon);

}




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

    mySchedule.appendChild(liTues);

}


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

    mySchedule.appendChild(liWeds);

}


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

    mySchedule.appendChild(liThurs);

}


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

    mySchedule.appendChild(liFri);

}


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

    mySchedule.appendChild(liSat);

}
ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);
ul.appendChild(li4);
ul.appendChild(li5);
ul.appendChild(li6);
ul.appendChild(li7);

//mySchedule.appendChild(ul);
function checkEmail(emailBox){
    let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    //return regex.test(emailBox);
    if (regex.test = true){
        document.write(mySchedule)
    } else {
        window.alert("Invalid email address! Please try again.")
    }
}

submitButton.addEventListener("click", checkEmail()) ;
    //{if (true){
      //  window.alert("Invalid email address! Please try again.")
    //} else {
     //   document.write(mySchedule);
//}
//};
