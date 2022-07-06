$(".crisis.sucess .checkBox").on('click',function() {
    $('.crisis.sucess .checkBox').addClass('active')
    $('.crisis.warning .checkBox').removeClass('active')
})
$(".crisis.warning .checkBox").on('click',function() {
    $('crisis.sucess .checkBox').removeClass('active')
    $('.crisis.warning .checkBox').addClass('active')
})
