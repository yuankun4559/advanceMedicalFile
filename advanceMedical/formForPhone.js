/* 表单，手机端 */ 

$(document).ready(function() {
  var $sectionsPhone = $('.form-section');//表单的三个部分
  var $indicators = $('.form-indi');//表单的三个菜单
  
  console.log('$indicators'+$indicators); 
  console.log($indicators); 

  function navigateToPhone(phoneIndex) {
    $sectionsPhone
      .removeClass('active')
      .eq(phoneIndex)
        .addClass('active');
    $indicators
      .removeClass('completed')
      .each(function(i) {
        if (i < phoneIndex) {
          $(this).addClass('completed');
        }
      });
    $indicators
      .removeClass('optionActive')
      .eq(phoneIndex)
      .addClass('optionActive');

    $('.back-to-home').toggle(phoneIndex==0);
    $('.btnBack').toggle(phoneIndex != 0);
    // var atTheEnd = index_p >= $sections_p.length - 1;
    $('.btnNext').toggle(phoneIndex != $indicators.length-1)
    $('.btnSubmit').toggle(phoneIndex == $indicators.length-1);
    // $('.checkbox-wrapper').toggle(atTheEnd);
    $('.relation-between').trigger('click');
  }

  navigateToPhone(0);
  // console.log(index_p);
  function curIndexPhone() {
    // return $options.index($options.filter('.optionActive'));
    return $indicators.index($indicators.filter('.optionActive'));
  }

  $('.btnBack').click(function() {
    console.log('btnBack'+curIndexPhone());
    navigateToPhone(curIndexPhone());

  });

  $('.btnNext').click(function() {
    console.log('btnNext'+curIndexPhone());
    navigateToPhone(curIndexPhone());
  });

  if (window.location.hash) {
    var hash_val = window.location.hash.substr(1);
    if (hash_val === 'pressure') {
      $(".medical-form").addClass("medical-form-3");


      // $('.m-form-step-indicator').addClass('m-form-step-indicator2');
      // $('.medical-form').addClass('medical-form2');
      // $('.contract-context').addClass('contract-context2');
      // $('#form-type').val(2);
      // $('.form-feedback-wrapper').addClass('form-feedback-wrapper2');
    }
    else if (hash_val === 'private') {
      $(".medical-form").addClass("medical-form-2");

      $('.m-form-step-indicator').addClass('m-form-step-indicator3');
      $('.medical-form').addClass('medical-form3');
      $('.contract-context').addClass('contract-context3');
      $('#form-type').val(3);
      $('.form-feedback-wrapper').addClass('form-feedback-wrapper3');
    }
    else if (hash_val === 'medical') {
      $(".medical-form").addClass("medical-form-4");

      $('.m-form-step-indicator').addClass('m-form-step-indicator4');
      $('.medical-form').addClass('medical-form4');
      $('.contract-context').addClass('contract-context4');
      $('#form-type').val(4);
      $('.form-feedback-wrapper').addClass('form-feedback-wrapper4');
    }
    else{
      $(".medical-form").addClass("medical-form-1");
    }
  }
