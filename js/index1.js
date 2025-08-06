$(document).ready(function(){
  $('#sec5_img').children().first().css('flex','3');
  $('#sec5_img').children().first().children('div').css('opacity','0');
  $('.sec5_box').click(function(){
    $(this).css({
      flex : "3",
      transition : "0.5s"
    })
    $(this).children('div').css({
      opacity : "0",
      transition : "0.5s"
    });
    $(this).siblings().css({
      flex : "1",
      transition : "0.5s"
    })
    $(this).siblings().children('div').css({
      opacity : "100%",
      transition : "0.5s"
    });
  })
});
