var dayDisplay= document.querySelector("#currentDay");
var saveButtons= Array.from(document.querySelectorAll(".saveBtn"));
var tasks= Array.from(document.querySelectorAll("textarea"));
var sTasks= new Array(9);

function init(){
    setContent();
}

function setContent(){
    sTasks= JSON.parse(localStorage.getItem("tasks"));
    var currTime= parseInt(moment().format("k"));
    dayDisplay.innerHTML= moment().format("[Today is ] dddd");
    for(i=0;i<tasks.length;i++){
        tasks[i].innerHTML= sTasks[i];
        if(i+9<currTime){
            $(tasks[i]).addClass("past");
        } else if(i+9>currTime){
            $(tasks[i]).addClass("future");
        } else{
            $(tasks[i]).addClass("present");
        }
    }
}

function saveTask(event){
    var index= saveButtons.indexOf(event.target);
    sTasks[index]= $(event.target).siblings("textarea").val();
    localStorage.setItem("tasks", JSON.stringify(sTasks));
}

$(".saveBtn").on("click", function(event){
    saveTask(event);
});


init();