//declare variables
let button = document.getElementById("button");
let list = document.getElementById("list");
let input = document.getElementById("input");
let doneList = document.getElementById("doneList");
var visDone=  document.getElementById("doneListHeader").style.visibility="hidden";
var visDo = document.getElementById("doListHeader").style.visibility="hidden";
button.addEventListener("click",function(){
    //add if statement so that input box cannot be empty
    if(input.value === ""){
        window.alert("empty box");
    }else{
    //declare a variable that create a <p> tag for elements in the list
    var item = document.createElement("p");
    //adding the input value to item declared above
    item.innerText = input.value;
    visDo = document.getElementById("doListHeader").style.visibility="visible";
    //adding the item to the list
    list.appendChild(item);
    //setting the input box to be empty after button is clicked
    input.value = "";
    //event which will the item in the list with a line if is clicked one time
    item.addEventListener("click", function(){
        item.style.textDecoration = "line-through";
        item.style.color = "red";
    })
    //event that remove the item from the list if double clicked
    item.addEventListener("dblclick", function(){
        visDone =  document.getElementById("doneListHeader").style.visibility="visible";
       var done = document.createElement("p");
        done.innerText = item.textContent;
        done.style.color="red";
        doneList.appendChild(done);
        list.removeChild(item);
        
    })
}
})