// Client facing scripts here
document.addEventListener("DOMContentLoaded", function() {
  console.log("Test");
});

$.ajax({
  url: "/tweets",
  method: "POST",
  data: data,
  success: function(result) {
    // Reversing error message if input provided after no input
    $(".error-no-message").addClass("display-none");
    $(".error-length").addClass("display-none");

    // Reseting color along with chaining html method to reset counter action
    $(".counter").removeClass("red").html(140);
        
    // Emptying text area
    $("#tweet-text").val("");
    loadTweets();
  },
  error: function(error) {
    //Jquery sending error message if post does not work
    $(".error-no-message").removeClass("display-none");
  },
});