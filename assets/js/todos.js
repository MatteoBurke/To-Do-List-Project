// Check off specific todos by clicking
$("ul").on("click", "li", function(){
  // toggles the completed css class
  $(this).toggleClass("completed");
});

// click on X to delete todo
$("ul").on("click", "span", function(){
	// the .parent() fuction take the parent aka the li then,
	// fade out fades it out and uses a function to remove each li from the html doc
  $(this).parent().fadeOut(500, function(){
  	$(this).remove();
  });
  event.stopPropagation();
});

// if the user presses enter at the text input field, add todo
$("input[type='text']").keypress(function(event){
  if(event.which === 13){
  	// grab new todo text from input
    var todoText = $(this).val();
    $(this).val("");
    // create a new li and add to ul
    $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText +"</li>")
  }
});

// plus button toggle function to hide or show input
$(".fa-plus").click(function(){
  $("input[type='text']").fadeToggle();
});