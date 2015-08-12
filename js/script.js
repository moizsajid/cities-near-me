$('.btn').click(function() {
  
  $('.text').text('scroll down!');
  
  $.ajax({
    type:"GET",
    url:"https://api.meetup.com/2/cities",
    success: function(data) {
      $('.text').html('');
      for (var i = 0; i < data.results.length; i++) {
        var place = data.results[i].city + ", " + data.results[i].country.toUpperCase();
        $('.text').append('<p>' + place + '</p>');
      }

      // Simple Vibration Test
      navigator.vibrate = navigator.vibrate ||
                  navigator.webkitVibrate ||
                  navigator.mozVibrate || 
                  navigator.msVibrate;

      if (navigator.vibrate) {
        console.log('we can vibrate');
        window.navigator.vibrate(1000); 
      } else {
        console.log('no vibration for you :-(');
      }
    },
    dataType: 'jsonp',
  }); 
});