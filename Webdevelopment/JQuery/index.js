//$('h1').css('color', 'red')

// $('h1').addClasse('classe')
// $('h1').removeClass('classe')
// $('h1').hasClasse('Classe') = true ou false
// $('button').text('texto')
// $('button').html('<> texto</>')
// $('a').attr('href', 'https://www.yahoo.com')


//Event li
// $('h1').click(function() {
    //$('h1').css('color', 'red')
//})

// $('input').keypress(function(event){
    //console.log(event.key)
//})

$(document).keypress(function(event){
    $('h1').text(event.key)
})


// $('h1').on('mouseover', )

// criar elementos
// before() after() prepend() append()
//.remove()

//  .hide().show().toggle().fadOut() fadIn() fadToggle() .slideUp()
//.animate({opacity:, margin:})