$(document).ready(function(){
	setInterval(function() {
  $.ajax({
    type: "GET",
    url: "https://www.example.org/",
    dataType: "script",

    success: function(data) {

      $("#box").fadeIn(700);
			    $('#ia').css("color","#4caf50");
			  $('#box').css("background-color","#99cbe6");
			$('#box').html("<div class=text>Synchronising Data</div>");
      $('#status').html("<b>Online</b>");
      $('#toast').css("background","#4caf50");

    },
    error: function() {

      $("#box").fadeIn(700);
			  $('#ia').css("color","#d60f0f");
			$('#box').css("background-color","#bab8bb");
		$('#box').html("<div class=text>Connection lost</div>");
       $('#status').html("<b>Offline</b>");
       $('#toast').css("background","#d60f0f");

    }
  });

}, 90 * 10);

});
