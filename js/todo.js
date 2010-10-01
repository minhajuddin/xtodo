var addTask = function(){
  var task = $("#task-title").val();
  if(task == null || task.trim().length == 0) return;
  $("#tasks").append("<li><input type='checkbox' /><span>"+ task +"</span></li>");
  $("#task-title").val('');
};

$(function(){
  $("#task-title").focus();
  $("#add-task").click(addTask);
  $("input:checkbox").live('click', function(){
    console.log('test');
    $(this).parent().toggleClass('strike');
  });
  $("#task-title").keydown(function(event){
    if(event.keyCode == '13'){
      addTask();
    }
  });
});
