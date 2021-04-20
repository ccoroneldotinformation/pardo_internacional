let sectionHeader = document.querySelector('#section-header')
let sectionMedia = document.querySelector('#section-media')
// console.log(sectionHeader)
let baseScroll = 0
window.addEventListener('scroll', function (event) {
    last_known_scroll_position = window.scrollY
    // console.log(sectionMedia.clientHeight)
    if (last_known_scroll_position >= Math.floor(sectionMedia.clientHeight)) {
        sectionHeader.classList.remove('bg-transparent')
        sectionHeader.classList.add('bg-light')
    } else {
        sectionHeader.classList.remove('bg-light')
        sectionHeader.classList.add('bg-transparent')
    }
})
