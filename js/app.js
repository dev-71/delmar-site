var main=function(){
    $('.article').click(function(){
       $('.article').removeClass('current');
       $('.description').hide();
       $(this).addClass();
       $(this).children('.description').show();
    });
}
$(document).ready(main);

