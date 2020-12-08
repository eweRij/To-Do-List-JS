
const add = document.querySelector("#addTaskButton");
const input = document.querySelector("#taskInput");
const list = document.querySelector("#taskList");
const removeAllButt = document.querySelector("#removeFinishedTasksButton");
const counter = document.querySelector("#counter");
const importance = document.querySelector(".importance");
let count = 0;
function addFunc(event) {
    let newTask = input.value;
    const newLi = document.createElement("li");
    newLi.innerHTML = `
    <h1>${newTask}</h1>
    <div class = "buttons">
    <button class="delete">Delete</button>
    <button class= "complete">Complete</button>
    </div>
    `;
    let whereToAdd = importance.value;
    if(newTask.length > 5 && newTask.length <100 && whereToAdd ===  0) {//stawia warunek kiedy ma się dodawać zadanie
        list.appendChild(newLi);//dodaje nowe zadanie na koniec listy
        count++;
        counter.innerText = `Tasks to do : ${count}`;
        input.value = " ";///"czyści inputa" po nowym zadaniu!
        importance.value = " ";
    } else {
        list.insertBefore(newLi, list.children[whereToAdd-1]);//dodaje nowe zadanie, w okreslone miejsce w zaleznosci od priorytetu!!
        count++;
        counter.innerText = `Tasks to do : ${count}`;
        input.value = " ";///"czyści inputa" po nowym zadaniu!
        importance.value = " ";
    }
    //button complete działanie
    const completeButt = document.querySelectorAll(".complete");
        completeButt.forEach(function(button) {
            button.addEventListener("click", function(event) {
                if(this.parentElement.parentElement.firstElementChild.getAttribute("class") !== "completed") {//black
                   this.parentElement.parentElement.firstElementChild.classList.add("completed");
                   event.stopImmediatePropagation();//wazne!!!
                    } else {
                       this.parentElement.parentElement.firstElementChild.classList.remove("completed");
                       event.stopImmediatePropagation();///!! wazneee!działa w konccu, przyciskajac przycisk , przyciskala sie reszta!
                    }//nie działa dobrze!!!!!:/ robi co chce......
                })
              })
   //button delete dzialanie
    const deleteButt = document.querySelectorAll(".delete");
    console.log(deleteButt);
    deleteButt.forEach(function(button) {
    button.addEventListener("click", function(event) {
        this.parentElement.parentElement.parentElement.removeChild(newLi);
        count--;//licznik działa!!! ważna kolejnosc pamietaj!!
        counter.innerText = `Tasks to do : ${count}`;
    })
 });
}
add.addEventListener("click", addFunc);//jak nieanonimowa to to bez nawiasów callback!
//ponizej guzik ktory bedzie usuwac wszystko
removeAllButt.addEventListener("click", function(event) {
    const tasksCompleted = document.querySelectorAll("li");
    console.log(tasksCompleted);
    tasksCompleted.forEach(function(task) {
        if(task.firstElementChild.getAttribute("class") === "completed") {
            task.parentElement.removeChild(task);
            count--;//ten licznik działa
            counter.innerText = `Tasks to do : ${count}`
        }//dziala!
    })
});
counter.innerText = `Tasks to do : ${count}`;
const button = document.querySelectorAll("button");
button.forEach(function(element) {
    element.addEventListener("mouseover", function(event) {
        this.style.backgroundColor = "rgba( 242, 73, 135, .3)"
    })
    element.addEventListener("mouseout", function(event) {
        this.style.backgroundColor = "rgba( 242, 73, 135)"
    })

})