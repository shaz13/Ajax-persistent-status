$(document).ready(function(){
 $('#scrl').hide();

	setInterval(function() {
  $.ajax({
    type: "GET",
    url: "https://www.example.org/",
    dataType: "script",

    success: function(data) {

      $("#box").fadeIn(900);

			    $('#ia').css("color","#4caf50");
			  $('#box').css("background-color","#99cbe6");
			$('#box').html("<div class=text>User is Online</div>");
      $('#status').html("<b>Online</b>");
      $('#toast').css("background","#4caf50");
				$("#scrl").fadeIn(2400);

    },
    error: function() {

      $("#box").fadeIn(900);
			$("#scrl").fadeIn(2400);
			  $('#ia').css("color","#d60f0f");
			$('#box').css("background-color","#bab8bb");
		$('#box').html("<div class=text>Connection lost</div>");
       $('#status').html("<b>Offline</b>");
			 $('#scrl').html("<b>It Works!</b>");
			  $('#scrl').css("left", "28%");
       $('#toast').css("background","#d60f0f");

    }
  });

}, 90 * 10);

});
