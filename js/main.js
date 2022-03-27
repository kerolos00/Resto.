$(document).ready(()=>{
    $('.loadingPage').fadeOut(3000, ()=>{
        $('body').css('overflow','unset');
    });
})

// Owel Carousel
$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        loop: true,
        autoplay: true,
        items: 3,
        margin: 8,
        responsive: {
            0: {
                items: 1,
            },
            990: {
                items: 2,
            },
            1400: {
                items: 3,
            }
        }
    });
});

// NavBar change
$(window).scroll(() => {
    let aboutOffSet = $('#dishes').offset().top;
    let wscroll = $(window).scrollTop();
    if (wscroll > aboutOffSet) {
        $('.navbar').css('background-color', 'var(--light-navColorChenge)');
        $('#backHomeIcon').css('display', 'block')

    }
    else {
        $('.navbar').css('background-color', 'transparent');
        $('#backHomeIcon').css('display', 'none');

    }
})
// Search
let close = document.getElementById('close');
let searchButton = document.getElementById('searchButton');
let searchInput = document.getElementById('searchInput');
let alert = document.getElementsByClassName('alert');
let foodType;
// Search Area
$('#search').click(() => {
    $('.search').slideDown(1000).css({ 'display': 'flex' })
})
// Close search Arae
$('#close').click(() => {
    $('.search').css({ 'display': 'none' })
})
// KeyBoard-user
window.addEventListener('keyup', (e) => {
    console.log(e.code);
    if (e.code == 'Escape') {
        $('.search').css({ 'display': 'none' })
    } 
    // else if (e.code == 'Enter' && searchInput.value != '') {
    //     searchButton.parentElement.href = "food-window.html";
    // } 
    else if (e.code == 'Enter' && searchInput.value == '') {
        alert[0].classList.remove('d-none');
    }
})
// Mouse-User
searchButton.addEventListener('click', () => {
    if(searchInput.value == ''){
        alert[0].classList.remove('d-none');
    }
    else{
        localStorage.setItem('foodType',searchInput.value)
        searchButton.parentElement.href = "food-window.html";
    }
})
