let button_modal_lima = $('#cardLima')
let modal_lima = $('#modalInfoLima')
let iframe_video_lima = $('#modalInfoLima iframe')

button_modal_lima.on('click', function (event) {
    iframe_video_lima.attr('src', 'https://www.youtube.com/embed/lC5rhPwyyqk')
    modal_lima.modal('show')
})
modal_lima.on('hidden.bs.modal', function () {
    iframe_video_lima.attr('src', null)
})

let button_modal_ayacucho = $('#cardAyacucho')
let modal_ayacucho = $('#modalInfoAyacucho')
let iframe_video_ayacucho = $('#modalInfoAyacucho iframe')

button_modal_ayacucho.on('click', function (event) {
    iframe_video_ayacucho.attr(
        'src',
        'https://www.youtube.com/embed/wzTzvoinXKI'
    )
    modal_ayacucho.modal('show')
})
modal_ayacucho.on('hidden.bs.modal', function () {
    iframe_video_ayacucho.attr('src', null)
})
