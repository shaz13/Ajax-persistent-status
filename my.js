$(document).ready(function(){

function online(){
	
	
	setInterval(function() {
	var x=navigator.onLine;
	
if(x==true){
	
	$("#box").fadeOut(700);
  $('#status').html("<b>Online</b>");
  $('#toast').css("background","#4caf50");
	}
	
	
else if(x==false)
	{
		
$("#box").fadeIn(700);
 $('#status').html("<b>Offline</b>");
 $('#toast').css("background","#bab8bb");
	}
	}, 10 * 10); 
	
}
online();




});



