$('.content').slick(
{ 
 prevArrow: '<i class="fas fa-long-arrow-alt-left prev-style"></i>',
    nextArrow: '<i class="fas fa-long-arrow-alt-right next-style"></i>',
    
  });

$('.test').isotope({
    itemSelector:".item",
    layoutMode:"fitRows"
});
$('.flower-categories ul li').click(function(){
    $('.flower-categories ul li').removeClass('active');
    $(this).addClass('active');
    
    var selector = $(this).attr('data-filter');
    $('.test').isotope({
        filter:selector
    });
    return false;

})