var altura = 0;
var largura = 0;
var vidas = 1;
var tempo = 0;


var nivel = window.location.search;
nivel = nivel.replace('?', '');
determinaDificuldade();

function determinaDificuldade(){
    if(nivel === 'facil') {
        tempo = 10;
    }else if(nivel === 'medio') {
        tempo = 20;
    }else {
        tempo = 30;
    }   
}

var cronometro = setInterval(
    function(){
        tempo -= 1;
        document.getElementById('tempo').innerHTML = tempo;
        checaEstadoJogo();
    }
, 1000)

function atualizarAltura(){
    altura = window.innerHeight;
    largura = window.innerWidth;
    //console.log(altura, largura);
}

atualizarAltura();

function removeMosquito(){
    if(document.getElementById('mosquito')){
        document.getElementById('mosquito').remove();
        tiraVida();
    }
}

function tiraVida(){
    document.getElementById('v' + vidas).src = 'imagens/coracao_vazio.png';
    vidas += 1;
    checaEstadoJogo();
}

function checaEstadoJogo(){
    if(vidas > 3){
        clearInterval(cronometro);
        alert('Você perdeu');
        window.location.href="fim_de_jogo.html";
    }
    if(tempo <= 0){
        clearInterval(cronometro);
        alert('Você ganhou');
        window.location.href="Vitoria.html";
    }
}

function geraPosicao(){
    removeMosquito();
    var posicaoX =  Math.floor(Math.random() * largura);
    var posicaoY = Math.floor(Math.random() * altura);

    //Criar elemento HTML
    var mosquito = document.createElement('img');
    mosquito.src = 'imagens/mosca.png';
    mosquito.classList.add(gerarLadoAleatorio(), gerarTamanhoMosquito());
    mosquito.style.left = posicaoX + 'px';
    mosquito.style.top = posicaoY + 'px';
    mosquito.style.position = 'absolute';
    mosquito.id = 'mosquito';
    mosquito.onclick = function () {
       this.remove();
    }
    document.body.appendChild(mosquito);
}

function gerarTamanhoMosquito(){
    const tamanhos = ['mosquito1', 'mosquito2', 'mosquito3'];
    var aux = Math.floor(Math.random() * tamanhos.length);
    return tamanhos[aux];
}

function gerarLadoAleatorio() {
    const lados = ['ladoEsquerdo', 'ladoDireito'];
    var aux = Math.floor(Math.random() * lados.length);
    return  lados[aux];
}