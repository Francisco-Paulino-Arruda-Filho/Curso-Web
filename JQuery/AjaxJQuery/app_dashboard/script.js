$(document).ready(() => {
	$('#documentacao').on('click', () => {
        $('#pagina').load('documentacao.html')
    })
    $('#suportte').on('click', () => {
        $('#pagina').load('suporte.html')
    })
})