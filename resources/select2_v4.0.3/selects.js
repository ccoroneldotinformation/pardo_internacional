$(document).ready(function () {
    $('#origen').select2({
        placeholder: 'Lugar Origen',
        theme: 'classic',
    })
    $('#destino').select2({
        placeholder: 'Lugar Destino',
    })
    $('#fechaOrigen').select2()
    $('#fechaDestino').select2()
})
