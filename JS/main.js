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
let allBodyTitle =document.querySelectorAll(".tab-menu  .content-title");
let allBodyItems=document.querySelectorAll(".tab-menu .content-body .item")

allBodyTitle.forEach(title=>{
    title.addEventListener("click",function(){
        let active =document.querySelector(".active");
        active.classList.remove("active");
        this.classList.add("active");
        let id = title.getAttribute("data-id");
        allBodyItems.forEach(item=>{
            if(item.getAttribute("data-id") ==id){
               item.classList.remove("d-none")
            }else{
                item.classList.add("d-none")
            }
        })

    })
})