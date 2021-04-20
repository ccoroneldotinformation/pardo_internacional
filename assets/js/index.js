/**
 * controla la acción de enfoque en el boton de formulario al hacer click
 * en cualquier parte del control
 */
$('#section-search .input-group').on('click', function () {
    $(this).find('input')[0].focus()
})

$('#section-header button').on('click', function () {
    $('#section-header .collapse').toggleClass('bg-light')
})

/**
 * efectos del index
 */
const upLineSearch = $('#section-search #search-core').parent()
const upLineDescription = $('#section-description .row')
const formSearch = $('#search-core')
const imgSearch = $('#content-figure')
const imgDescription = $('#section-description .content-image')
const textDescription = $('#section-description .content-text-description')
const middleWindow = $(window).height() / 2
let appliedEfectSearch = 0
let appliedEfectDescription = 0
// console.log($(window).height())
$(window).on('scroll', function () {
    let windowLineUpVar = $(this).scrollTop()
    let distanceSearch = upLineSearch.offset().top - windowLineUpVar
    let distanceDescription = upLineDescription.offset().top - windowLineUpVar

    if (
        distanceSearch <= middleWindow &&
        middleWindow < distanceDescription &&
        appliedEfectSearch == 0
    ) {
        formSearch.addClass('animationIn-LeftToRight')
        formSearch.removeClass('invisible')
        imgSearch.addClass('animationIn-RightToLeft')
        imgSearch.removeClass('invisible')
    } else {
        if (
            middleWindow >= distanceDescription &&
            appliedEfectDescription == 0
        ) {
            imgDescription.addClass('animationIn-LeftToRight')
            imgDescription.removeClass('invisible')
            textDescription.addClass('animationIn-RightToLeft')
            textDescription.removeClass('invisible')
        }
    }
})
