

var verde = {
    cor :'rgb(0, 128, 0)',
    classe : 'green'}
var vermelho = {
    cor : 'rgb(255, 0, 0)',
    classe : 'red'}
var amarelo = {
    cor : 'rgb(255, 255, 0)',
    classe : 'yellow'}
var azul = {
    cor : 'rgb(0, 0, 255)',
    classe : 'blue'}



var contacertos = 0
var listaRotas = []
var audioerro = new Audio('sounds/wrong.mp3')

var elementos = [verde, vermelho, amarelo, azul]
function randomele(){
    listaRotas.push(elementos[Math.floor(Math.random()*4)])
    //alert(listaRotas[listaRotas.length -1].classe)
    animaBu(listaRotas[listaRotas.length -1].cor)
    
}


$('h1').click(function(){
    
    listaRotas = []
    listaclicks = []
    randomele()
   
})

var listaclicks = []
function pegaCor(){
    var cor = $(this).css('background-color')
    listaclicks.push(cor)
    
    if (listaclicks[listaclicks.length -1] == listaRotas[listaclicks.length -1].cor){
        //acerto
        animaBu(listaclicks[listaclicks.length -1])
        
        if (listaclicks.length === listaRotas.length){
            //acertou o último
            contacertos++
            $('h1').text('Acertos: ' + contacertos)
            setTimeout(randomele, 1000)
            listaclicks = []
        }
    }
    else {
        //erro
        $('h1').text('Game over. Score: ' + contacertos)
        listaRotas = []
        listaclicks = []
        $('body').addClass('game-over')
        audioerro.play();
        setTimeout(function(){
            $('body').removeClass('game-over')
        },500)
        
    }
}

function animaBu(cor){
    switch (cor) {
        case 'rgb(0, 128, 0)':
            $('.green').addClass('pressed')
            var audverde = new Audio('sounds/green.mp3')
            audverde.play();
            setTimeout(function(){
                $('.green').removeClass('pressed')
            },500)
            
            break;
        case 'rgb(255, 0, 0)':
            $('.red').addClass('pressed')
            var audverm = new Audio('sounds/red.mp3')
            audverm.play();
            setTimeout(function(){
                $('.red').removeClass('pressed')
            },500)
            
            break;
        
        case 'rgb(255, 255, 0)':
            $('.yellow').addClass('pressed')
            var audamar = new Audio('sounds/yellow.mp3')
            audamar.play();
            setTimeout(function(){
                $('.yellow').removeClass('pressed')
            },500)
            
            break;
        
        case 'rgb(0, 0, 255)':
            $('.blue').addClass('pressed')
            var audazul = new Audio('sounds/blue.mp3')
            audazul.play();
            setTimeout(function(){
                $('.blue').removeClass('pressed')
            },500)
            
            break;
    
        default:
            break;
    }

}

$('.btn').click(pegaCor)
