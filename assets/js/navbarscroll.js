let navbar = document.querySelector('#section-header .navbar')
console.log(navbar)
let baseScroll = 0
window.addEventListener('scroll', function (event) {
    last_known_scroll_position = window.scrollY
    if (
        last_known_scroll_position >= Math.floor(window.visualViewport.height)
    ) {
        navbar.classList.remove('bg-transparent')
        navbar.classList.add('bg-light')
    } else {
        navbar.classList.remove('bg-light')
        navbar.classList.add('bg-transparent')
    }
})
