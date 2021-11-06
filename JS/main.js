$('.content').slick({
    prevArrow: '<i class="fas fa-long-arrow-alt-left prev-style"></i>',
    nextArrow: '<i class="fas fa-long-arrow-alt-right next-style"></i>',

});

$('.test').isotope({
    itemSelector: ".item",
    layoutMode: "fitRows"
});
$('.flower-categories ul li').click(function () {
    $('.flower-categories ul li').removeClass('active');
    $(this).addClass('active');

    var selector = $(this).attr('data-filter');
    $('.test').isotope({
        filter: selector
    });
    return false;

})

$('.options').isotope({
    itemSelector: ".item",
    layoutMode: "fitRows"
});
$('.flower-options-categories ul li').click(function () {
    $('.flower-options-categories ul li').removeClass('active');
    $(this).addClass('active');

    var selector = $(this).attr('data-filter');
    $('.options').isotope({
        filter: selector
    });
    return false;

})

$(document).ready(function () {
    $(".element").click(function () {
        console.log($(".element-context").not($(this).next()).slideUp(1000))
        $(this).next().slideToggle(1000);
        $(".active").removeClass("active")
        $(this).addClass("active");
    })
    $('.gallerys').magnificPopup({
        type: 'image',
        delegate: 'a',
        gallery: {
            enabled: true
        }
    });



})
$(document).ready(function () {
    $(window).scroll(function () {
        if ($(window).scrollTop() > 273) {
            $('.btnToTop').show();
        } else {
            $('.btnToTop').hide();
        }
    });
    $(".btnToTop").on("click", function () {
        $("html").animate({
            scrollTop: 0
        }, "slow");
    });
})


let allBodyTitle = document.querySelectorAll(".tab-menu  .content-title");
let allBodyItems = document.querySelectorAll(".tab-menu .content-body .item")

let addBtn = document.querySelector(".addBtn");
let removeBtn = document.querySelector(".removeBtn");
const quantityNumber = document.querySelector(".quantityNumber");


allBodyTitle.forEach(title => {
    title.addEventListener("click", function () {
        let active = document.querySelector(".active");
        active.classList.remove("active");
        this.classList.add("active");
        let id = title.getAttribute("data-id");
        allBodyItems.forEach(item => {
            if (item.getAttribute("data-id") == id) {
                item.classList.remove("d-none")
            } else {
                item.classList.add("d-none")
            }
        })

    })
})

addBtn.addEventListener("click", function (e) {
    quantityNumber.innerText++;
})
removeBtn.addEventListener("click", function (e) {
    if (quantityNumber.innerText <= 0) {
        return alert("Item doesn't have");
    }
    quantityNumber.innerText--;
})