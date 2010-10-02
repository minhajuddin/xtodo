var init = function(){

  Storage.prototype.setObject = function(key, value) {
      this.setItem(key, JSON.stringify(value));
  }

  Storage.prototype.getObject = function(key) {
      return JSON.parse(this.getItem(key));
  }

  localStorage.setObject('tasks', {});
  localStorage.nextKey = localStorage.nextKey || 1

};

var renderTasks = function(){
  var tasks = localStorage.getObject('tasks');
  for(var key in tasks){
    var task = tasks[key];
    console.log(task);
    $("#tasks").append("<li><input type='checkbox' checked='"+task.isComplete+"' /><span>"+ task.title +"</span></li>");
  }
};

var addTask = function(){
  var title = $("#task-title").val();
  if(title == null || title.trim().length == 0) return;
  var task = new Task(title);
  console.log(typeof task);
  $("#task-title").val('');
  tasks = localStorage.getObject('tasks');
  tasks[task.id] = task;
  localStorage.setObject('tasks', tasks);
  renderTasks();
};

var nextKey = function(){
  return localStorage.nextKey++;
}

var Task = function(title){
  this.id = nextKey();
  this.title = title;
  this.isComplete = false;
}

$(function(){
    init();
    $("#task-title").focus();

    $("#add-task").click(addTask);

    $("input:checkbox").live('click', function(){
      $(this).parent().toggleClass('strike');
      });

    $("#task-title").keydown(function(event){
      if(event.keyCode == '13'){
      addTask();
      }
      });

    renderTasks();

    });
