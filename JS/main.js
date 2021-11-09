let itemsFlower = document.querySelectorAll('#flower-items .item');
const items = [];
itemsFlower.forEach((item, idx) =>

    item.addEventListener('click', function (e) {
        console.log(this);
        let item = {
            id: idx + 1,
            no: 1,
        };
        let name = this.children[0].nextElementSibling.children[0].children[0].textContent;
        let price = this.children[0].nextElementSibling.children[1].children[1].textContent;
        let customizedPrice = price.slice(1);
        item.name = name;
        item.customizedPrice = customizedPrice;
        if (JSON.parse(localStorage.getItem('items')) === null) {
            items.push(item);
            localStorage.setItem('items', JSON.stringify(items));
        } else {
            const localItems = JSON.parse(localStorage.getItem('items'));
            window.location.reload();
            localItems.map(data => {
                if (item.id == data.id) {
                    item.no = data.no + 1
                } else {
                    items.push(data);
                }
            });
            items.push(item);
            localStorage.setItem('items', JSON.stringify(items));
            window.location.reload();
        }

    }));
let itemsInBag = document.querySelector('.shopping-bag-icon .items-in-bag');
let numberInBag = 0;
JSON.parse(localStorage.getItem('items')).map(data => {
    numberInBag = numberInBag + data.no;
})
itemsInBag.innerHTML = numberInBag;



let cartBasket = document.querySelector('.cart-basket');
let row = document.createElement('li');
row = '';
if (cartBasket) {
    cartBasket.append(row);
    if (JSON.parse(localStorage.getItem('items'))[0] === null) {
        row += `Bele bir product yoxdur`
    } else {
        JSON.parse(localStorage.getItem('items')).map(data => {
            row += `Product id:${data.id }  Product no: ${data.no}  Product name :${data.name}  product price :${data.customizedPrice}`;
        })
    }
    cartBasket.innerHTML = row;

}

console.log(cartBasket);



// mini-slider function 
$('.content').slick({
    prevArrow: '<i class="fas fa-long-arrow-alt-left prev-style"></i>',
    nextArrow: '<i class="fas fa-long-arrow-alt-right next-style"></i>',

});


// filter items function
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


// scrolling header function
$(document).ready(function () {
    $(window).scroll(function () {
        if ($(window).scrollTop() < 370) {
            $('header .nav-list').removeClass('fixed-header')
            $('.main-nav').removeClass('fixed')
            $('.main-logo').removeClass('fixed-logo')
            $('.search-icon').css('visibility', 'visible')
            $('.cart-info').css('visibility', 'visible')
            $('.shopping-bag-icon').css('visibility', 'visible')
        } else {
            $('header .nav-list').addClass('fixed-header')
            $('.main-nav').addClass('fixed')
            $('.main-logo').addClass('fixed-logo')
            $('.search-icon').css('visibility', 'hidden')
            $('.cart-info').css('visibility', 'hidden')
            $('.shopping-bag-icon').css('visibility', 'hidden')
        }
    })
})




// accordion function
$(document).ready(function () {
    $(".element").click(function () {
        $(".element-context").not($(this).next()).slideUp(1000)
        $(this).next().slideToggle(1000);
        $(".active").removeClass("active")
        $(this).addClass("active");
    })
    if ($('.gallerys').length) {
        $('.gallerys').magnificPopup({
            type: 'image',
            delegate: 'a',
            gallery: {
                enabled: true
            }
        });
    }
})


// right bottom button scroll to top function
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

// tabs and counter function

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
if (addBtn) {
    addBtn.addEventListener("click", function (e) {
        quantityNumber.innerText++;
    })
}


if (removeBtn) {
    removeBtn.addEventListener("click", function (e) {
        if (quantityNumber.innerText <= 0) {
            alert("there is no negative number of products");
        } else {
            quantityNumber.innerText--;
        }
    })
}

// basket function