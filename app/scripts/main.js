$('.btnNext').click(function(){
    $('.nav-tabs > .active').removeClass('active').next('li').find('a').closest('li').addClass('active');
    $('.tab-content > .active').removeClass('show active').next('div').addClass('show active');
});
$('.btnBack').click(function(){
    $('.nav-tabs > .active').removeClass('active').prev('li').find('a').closest('li').addClass('active');
    $('.tab-content > .active').removeClass('show active').prev('div').addClass('show active');
});
$('#firstName, #lastName').on('keyup', function () {
    var reg = /\d/g;
    if (this.value.search(reg) !=  -1) {
        this.value  =  this.value.replace(reg, '');
    }

});
$('#postalCode').on('keyup', function () {
    var reg = /[a-zA-Zа-яА-Я]/g;
    if (this.value.search(reg) !=  -1) {
        this.value  =  this.value.replace(reg, '');
    }

});
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})
$('#phone').mask('+7(999)999-9999');
$('#cardNumber').mask('9999 9999 9999 9999');
$('#cardDate').mask('99 / 99');
$('#cardCode').mask('999');

