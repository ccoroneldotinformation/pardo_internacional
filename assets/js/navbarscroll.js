let sectionHeader = document.querySelector('#section-header')
console.log(sectionHeader)
let baseScroll = 0
window.addEventListener('scroll', function (event) {
    last_known_scroll_position = window.scrollY
    if (
        last_known_scroll_position >= Math.floor(window.visualViewport.height)
    ) {
        sectionHeader.classList.remove('bg-transparent')
        sectionHeader.classList.add('bg-light')
    } else {
        sectionHeader.classList.remove('bg-light')
        sectionHeader.classList.add('bg-transparent')
    }
})
