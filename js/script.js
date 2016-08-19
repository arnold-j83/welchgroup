$(document).on('click','.navbar-collapse.in',function(e) {
    if( $(e.target).is('.toggleThis')) {
        $(this).collapse('hide');
    }
});

    $(document).ready(function(){
      $('body').append('<div id="toTop" class="btn btn-info"><i class="fa fa-arrow-up"></i><span class="glyphicon glyphicon-road"></span> Back to Top <span class="glyphicon glyphicon-road"></div>');
      $(window).scroll(function () {
      if ($(this).scrollTop() != 0) {
        $('#toTop').fadeIn();
      } else {
        $('#toTop').fadeOut();
      }
    }); 
    $('#toTop').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });
});

    $(document).ready(function(){
      $(".btn-primary").mouseenter(function(){
        $(this).fadeTo(500, 0.5);
      });

      $(".btn-primary").mouseleave(function(){
        $(this).fadeTo(500, 1.0);
      });
    });