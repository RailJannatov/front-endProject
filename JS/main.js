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

$('.options').isotope({
    itemSelector:".item",
    layoutMode:"fitRows"
});
$('.flower-options-categories ul li').click(function(){
    $('.flower-options-categories ul li').removeClass('active');
    $(this).addClass('active');
    
    var selector = $(this).attr('data-filter');
    $('.options').isotope({
        filter:selector
    });
    return false;

})

$(document).ready(function(){
    $(".element").click(function(){
     console.log( $(".element-context").not($(this).next()).slideUp(1000))  
        $(this).next().slideToggle(1000);
        $(".active").removeClass("active")
        $(this).addClass("active");
    })
})
