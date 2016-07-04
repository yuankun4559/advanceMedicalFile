$(".form-section1 .back-to-home").click(function() {
    $(".form-mask").removeClass("form-mask1").fadeOut();
    $(".form-mask .medical-form").removeClass("medical-form-1");
  });
$(".form-section2 .btnBack").click(function() {
  // form-section2的上一步
  $(".form-section1").show();// form-section1显示
  $(".form-section2").hide();// form-section2隐藏
});
$(".form-section3 .btnBack").click(function() {
  // form-section3的上一步
  $(".form-section2").show();// form-section2显示
  $(".form-section3").hide();// form-section3隐藏
  });
