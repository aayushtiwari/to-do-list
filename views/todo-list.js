$(document).ready(function(){

  $('form').on('submit', function(){

      var item = $('form input');
      var todo = {item: item.val()};

      $.ajax({
        type: 'POST',
        url: '/todo',
        data: todo,
        success: function(data){
          location.reload();
        }
      });

      return false;

  });

    $('.jumbotron ul li').on('click', function() {
        var txt = $(this).text().trim() ;
        $.ajax({
            type: 'DELETE',
            url: '/todo?item='+txt,
            success: function(data) {
                location.reload();
            }
        });
        return false;
    });



});
