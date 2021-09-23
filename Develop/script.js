var time = moment();
var currentDate = function(){
    var currentTime = document.querySelector("#currentDay");
    currentTime.textContent = time.format('dddd, MMMM Do');
}
var saveBtnHandler = function(){
    $("saveItem"+ i).on("click", function(){
        saveTask(i);
    })
}
var saveTask = function(id) {
    var currentTask = JSON.parse(localStorage.getItem("event"));
    var inputTask = $(`#input${id}`).val();
    currentTask[id] = inputTask;
    localStorage.setItem("event", JSON.stringify(currentTask));
}
var storage = function(){
    var events = JSON.parse(localStorage.getItem("events"));
    if(!events){
        localStorage.setItem("events", JSON.stringify([]));
        return;
    }
    for(var i = 0; i < 9; i++){
        var taskEl = $(`#input${i}`);
        if(events[i]){
            taskEl.val(events[i]);
        }
    }
}
var colors = function(){
    var current = time.format("H");
    for(var i = 0; i < 9; i++){
        var hourSection = $(`#input${i}`);
        var hour = hourSection.attr("data-hour");
        if(current > hour){
            hourSection.addClass("bg-secondary");
        }
        else if (current < hour){
            hourSection.addClass("bg-success");
        }
        else if (current == hour){
            hourSection.addClass("bg-danger");
        }
    }
}
var pageHandler = function() {
    currentDate();
    saveBtnHandler();
    storage();
}
setInterval(function(){
    for(var i = 0; i < 9; i++){
        var hourSection = $(`#input${i}`);
        hourSection.removeClass("bg-secondary")
        hourSection.removeClass("bg-success");
        hourSection.removeClass("bd-danger");
    }
    colors()
}(1000 * 60))
pageHandler();