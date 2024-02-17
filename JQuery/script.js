//Função de callBack, executada após a chamada de outra
$(document).ready(function () {
    function teste() {
        console.log($('#exemplo'))
    }
    teste()
})