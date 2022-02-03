
// $('#titulo').text('Hello World');
//? Acordeón
$('.acordeon-cabecera').css({ 'color': 'red', 'font-size': '20px', 'font-weight': 'bold', 'border': '1px solid red' });
$('.acordeon-contenido').css('display', 'none');


$('.acordeon-cabecera').click((e) => {
    $(e.currentTarget).next().slideToggle(1000);
    //console.log(e);
});

//? Show y Hide
$('#texto').css('display', 'none');

$('#btn-show').click(() => {
    $('#texto').show(2000);

})

$('#btn-hide').click(() => {
    $('#texto').hide(2000);

})

//? FadeIn y FadeOut   
$('#btn-fadeIn').click(() => {
    $('#texto').fadeIn(2000);

})

const time = 300;

const titilar = () => {
    $('h2').fadeOut(time, () => {
        $('h2').fadeIn(time, () => titilar());
    });
}

//titilar();

//? Animate
$('#card').css({ 'width': '200px', 'height': '200px' });

$('#card').click(() => {
    $('#card').animate({
        'margin-left': '100px',
        'margin-top': '100px',
        'width': '200px',
        'height': '200px'
    }, 1000);
})

$('#irAbajo').click(() => {
    $('html, body').animate({
        scrollTop: $('#card').offset().top
    }, 2500);
})