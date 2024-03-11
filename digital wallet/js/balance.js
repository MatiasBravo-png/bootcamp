function depositarCantidad(cantidad) {
    var balanceActual = localStorage.getItem('balance');

    if (balanceActual) {
        balanceActual = parseInt(balanceActual);
    } else {
        balanceActual = 0;
     }

    balanceActual += parseInt(cantidad);
    localStorage.setItem('balance', balanceActual);

    // Actualizar el balance en el HTML
    $('.balance-amount').text('CLP ' + balanceActual);
    }
