$(document).ready(function () {
    // CARGA DE LOS DATOS DE ORIGENES Y DESTINOS
    $.ajax({
        type: 'GET',
        url: 'http://localhost:8080/ventas/api.acuarios/searchciudades',
        dataType: 'json',
        success: function (response) {
            // console.log(response)
            cboCantidadPasajeros = $('#cboCantidadMaximaPasajeros')[0]
            $('#select2Origen').select2({
                data: response.origenes,
                placeholder: 'Lugar de Origen',
                theme: 'bootstrap4',
            })
            $('#select2Destino').select2({
                data: response.destinos,
                placeholder: 'Lugar de Destino',
                theme: 'bootstrap4',
            })
            countItems = 0
            response.bean.forEach((element) => {
                openOption1 = '<option value='
                openOption2 = ' >'
                closeOption = '</option>'
                if (countItems == 0) openOption2 = ' selected >'
                cboCantidadPasajeros.innerHTML +=
                    openOption1 +
                    element.index +
                    openOption2 +
                    element.value +
                    closeOption
                countItems++
            })
            $('#search-btn').removeAttr('disabled')
        },
        error: function (err) {
            $('#select2Origen').select2({
                placeholder: '0 Resultados',
                theme: 'bootstrap4',
            })
            $('#select2Destino').select2({
                placeholder: '0 Resultados',
                theme: 'bootstrap4',
            })
            $('#cboCantidadMaximaPasajeros')[0].innerHTML =
                '<option>Cantidad de pasajeros</option>'
        },
    })

    // EVENTO DEL BOTON BUSCAR
    $('#search-btn').on('click', function (event) {
        event.preventDefault()
        $.ajax({
            type: 'POST',
            data: {
                origenCiudad: $('#select2Origen').val(),
                origenCiudadD: $('#select2Origen option:selected').text(),
                destinoCiudad: $('#select2Destino').val(),
                destinoCiudadD: $('#select2Destino option:selected').text(),
                fechaIda: $('#fechaIda').val(),
                fechaVuelta: $('#fechaVuelta').val(),
                cantidadPasajeros: $('#cboCantidadMaximaPasajeros').val(),
            },
            url: 'http://localhost:8080/ventas/api.acuarios/searchitinerarios',
            dataType: 'json',
            success: function (response) {
                console.log('success function')
                console.log(response)
                if (!response.respuesta) {
                    $('#search-message')[0].innerHTML = response.mensaje
                    $('#search-message').removeClass('hidden')
                } else {
                    console.log(response.url)
                    window.location = response.url
                }
            },
            error: function (fail) {
                console.log('fail function')
                console.log(fail)
            },
        })
    })
})
