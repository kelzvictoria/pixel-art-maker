
$(function () {
    $("input").keydown(function (){
      $(this).data("old",$(this).val());  
    });
    $("input").keyup(function (){
        if (parseInt($(this).val())>=1 && parseInt ($(this).val())>=0);
        else
        $(this).val($(this).data("old"));
    });
    
});

//function that creates the grid for pixel art
$('#sizePicker').submit(function makeGrid(event) { 
  $('table tr').remove();                          
var rows=$('#input_height').val();  //stores the value the user entered for the grid height
var cells=$('#input_width').val();  //stores the value the user entered for the grid height
  for (var i=1;i<=rows;i++) { //loop that increases the size of the grid based on entered height and width
    $('table').append("<tr></tr>");
    for (var j=1;j<=cells;j++) {
      $( 'tr:last').append("<td></td>");  
      $('td').attr('class','pixel');
    }
  }
  event.preventDefault();                       
});

//
$('#pixel_canvas').on('click','.pixel',function(){  //updates changes made to the table
  var pen=$('#colorPicker').val();
  $(this).css('background-color',pen);
});

