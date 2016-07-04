/* 查询当前窗口大小 */
function viewport() {
  var e = window,
    t = "inner";
  return "innerWidth" in window || (t = "client", e = document.documentElement || document.body), {
    width: e[t + "Width"],
    height: e[t + "Height"]
  }
}
/* 查询当前窗口大小 */
/*菜单的鼠标动作*/
$("#nav-lt1").mouseenter(function() {
  $(this).css("color", "white");
  $(".nav-back1").animate({
    width: "100%"
  }, 1);
}).mouseleave(function() {
  $(".nav-back1").animate({
    width: "10px"
  }, 1);
  $(this).css("color", "black");
});

$("#nav-lt2").mouseenter(function() {
  $(this).css("color", "white");
  $(".nav-back2").animate({
    width: "100%"
  }, 1);
}).mouseleave(function() {
  $(".nav-back2").animate({
    width: "10px"
  }, 1);
  $(this).css("color", "black");
});

$("#nav-lt3").mouseenter(function() {
  $(this).css("color", "white");
  $(".nav-back3").animate({
    width: "100%"
  }, 1);
}).mouseleave(function() {
  $(".nav-back3").animate({
    width: "10px"
  }, 1);
  $(this).css("color", "black");
});

$("#nav-lt4").mouseenter(function() {
  $(this).css("color", "white");
  $(".nav-back4").animate({
    width: "100%"
  }, 1);
}).mouseleave(function() {
  $(".nav-back4").animate({
    width: "10px"
  }, 1);
  $(this).css("color", "black");
});
/*菜单的鼠标动作*/

/* 一键咨询 */
$(".diagnose").click(function() {
  /* Act on the event */
  $(".diagnose-mask").fadeIn();
  $(".diagnose-backgCont").animate({
    width: "100%",
    left: "0"
  }, 200);
});
$(".diagnoseClose").click(function() {
  $(".diagnose-mask").fadeOut();
});


/* 一键咨询 */

/* 手机一键咨询 */
$(".diagnose-btn").click(function() {
  /* Act on the event */
  $(".backg").fadeIn();
});

$(".close").click(function() {
  $(".backg").fadeOut();
});
/* 手机一键咨询 */

$('.dtBox').DateTimePicker({
  language: "zh-CN",
  addEventHandlers: function() {
    var oDTP = this;
    oDTP.settings.minDate = oDTP.getDateTimeStringInFormat("Date", "yyyy-MM-dd", new Date(1890, 1, 1));
    oDTP.settings.maxDate = oDTP.getDateTimeStringInFormat("Date", "yyyy-MM-dd", new Date());
  }
});
/* 日历插件 */
/*  表单事件 */
$(document).ready(function() {
  $(".btn-expert").click(function() {
    $(".form-mask").fadeIn().addClass("form-mask1");
    $(".form-mask .medical-form").addClass("medical-form-1");

    $(".medical-form-1").find(".diagClose").click(function() {
      $(".form-mask").removeClass("form-mask1").fadeOut();
      $(".form-mask .medical-form").removeClass("medical-form-1");
    });
    $(".diagClose").click(function() {
      $(".diagnose-mask").hide("fast");
    });
  });

  $(".btn-health").click(function() {
    $(".form-mask").fadeIn().addClass("form-mask2");
    $(".form-mask .medical-form").addClass("medical-form-2");

    $(".medical-form-2").find(".back-to-home,.diagClose").click(function() {
      $(".form-mask").removeClass("form-mask2").fadeOut();
      $(".form-mask .medical-form").removeClass("medical-form-2");
    });

    $(".diagClose").click(function() {
      $(".diagnose-mask").hide("fast");
    });
  });

  $(".btn-pressure").click(function() {
    $(".form-mask").fadeIn().addClass("form-mask3");
    $(".form-mask .medical-form").addClass("medical-form-3");
  });

  $(".medical-form-3").find(".back-to-home,.diagClose").click(function() {
      $(".form-mask").removeClass("form-mask3").fadeOut();
      $(".form-mask .medical-form").removeClass("medical-form-3");
    });

  $(".btn-resource").click(function() {
    $(".form-mask").fadeIn().addClass("form-mask4");
    $(".form-mask .medical-form").addClass("medical-form-4");
  });
  $(".medical-form-4").find(".back-to-home,.diagClose").click(function() {
    $(".form-mask").removeClass("form-mask4").fadeOut();
    $(".form-mask .medical-form").removeClass("medical-form-4");
  });

  $("#backGd").click(function(){
    $('.timeSelect_phone').css({'opacity': 1, 'left': 0});
  });

    $('#timeSure').click(function(e) {
    var time = [];
    $('.timeSelect_phone').find('input[type="checkbox"]').filter(':checked').each(function () {
      time.push($(this).val());
    });
    console.log(time);
    if (time.length > 0) {
      var time_text = time.join(', ');
    }
    else {
      var time_text = '选择时间';
    }
    console.log(time_text);
    $('#backGd').html(time_text);
    $('.timeSelect_phone').css({'opacity': 0, 'left': '-9999em'});
  });
});
/*  表单事件 */
/* 省份、城市插件 */
$(function() {
  $('#province, #city').citylist({
    data: data,
    id: 'id',
    children: 'cities',
    name: 'name',
    metaTag: 'name'
  });
});
/* 省份、城市插件 */
/* 医生信息 */
$(document).ready(function() {
  $("#doctorInfo").click(function(e) {
    if ($('#doctor-checkbox').is(':checked')) {
      $("#doctor-info").slideDown();
    } else {
      $("#doctor-info").slideUp();
    }
  });

  $(".lince").click(function() {
    $(".LiceAccept-mask").fadeIn();
    $(".LiceAccept-cont-header .lincesClose").click(function() {
      $(".LiceAccept-mask").fadeOut();
    });
  });
});
/* 医生信息 */
/* 表单，非手机端 */
$(document).ready(function() {
  var $options = $('.form-indi');//表单的菜单项
  var $sections = $('.form-section');//表单的三部分
  var $sex =$('.patientSex');//病人性别
  var $relative =$('.relative');//与病人关系
  var $selectTime =$('.selectTime');//可选时间按钮
  console.log($selectTime);//长度是2

  function curIndex() {
    return $options.index($options.filter('.optionActive'));
  }

  function sexSelect(index) {
    //仅给当前选中的性别的index值添加响应类
     $sex.removeClass('patientSexActive')
      .eq(index)
      .addClass('patientSexActive');
  }
  $('.patientSex-M').click(function(e) {
    e.preventDefault();
    sexSelect(0);
  });
  $('.patientSex-F').click(function(e) {
    e.preventDefault();
    sexSelect(1);
  });

  function timeSelect(index) {
    //仅给当前选中的性别的index值添加响应类
     $selectTime
      .eq(index)
      .addClass('selecTimeActive');
  }
  // $selectTime.click(function() {
  //   $(this).toggleClass('selecTimeActive');
  // });

  function relativeSelect(index) {
    //仅给当前选中的关系的index值添加响应类
     $relative.removeClass('patientSexActive')
      .eq(index)
      .addClass('patientSexActive');
  }
  $('.relaYes').click(function(e) {
    $('#other-relation').prop("disabled", true);
    e.preventDefault();
    relativeSelect(0);
  });
  $('.relaNo').click(function(e) {
    e.preventDefault();
    relativeSelect(1);
    $('#other-relation').prop("disabled", false);
  });


  function navigateTo(index) {

    // console.log('index')
    // console.log(index)  

    $sections.removeClass('active')
      .eq(index)
      .addClass('active');

    $options.removeClass('optionActive')
      .eq(index)
      .addClass('optionActive');

    $options.removeClass('completed')
      .each(function(i) {
        if (i < index) {
          $(this).addClass('completed')
        }
      });

    $('.back-to-home').toggle(index == 0)
    $('.btnBack').toggle(index != 0)
    $('.btnNext').toggle(index != $options.length - 1)
    $('.btnSubmit').toggle(index == $options.length - 1)

  }

  $('.btnBack').click(function(e) {
    e.preventDefault();
    navigateTo(curIndex() - 1);
  })

  $('.btnNext').click(function(e) {
    e.preventDefault();
    if ($(".medical-form").valid()) {
      navigateTo(curIndex() + 1);//}
    }
  })

  $('.btnSubmit').click(function(e) {
  
    
  })

  $('.back-to-home').click(function(e) {
    $(".form-mask").fadeOut().removeClass("form-mask1").removeClass("form-mask2").removeClass("form-mask3").removeClass("form-mask4");
    $(".form-mask .medical-form").removeClass("medical-form-1").removeClass("medical-form-2").removeClass("medical-form-3").removeClass("medical-form-4");
  });
  $('.btn-expert,.btn-health,.btn-pressure,.btn-resource').click(function() {
      navigateTo(0);
    })
    /* 表单，手机端 */
  navigateTo(0); //默认表单的第一部分显示
  if (window.location.hash) {
    var hash_val = window.location.hash.substr(1);
    if (hash_val === 'pressure') {
      $(".medical-form").addClass("medical-form-3");
    } else if (hash_val === 'private') {
      $(".medical-form").addClass("medical-form-2");
    } else if (hash_val === 'medical') {
      $(".medical-form").addClass("medical-form-4");
    } else if (hash_val === 'advice') {
      $(".medical-form").addClass("medical-form-1");
    }
  }
});

  $(function() {
  $(".medical-form").validate({
    rules: {
      "patientName": {
        required: !0
      },
      "patientBirth": {
        required: !0,
        date: !0
      },
      "patient_gender": {
        required: !0
      },
      "appliName": {
        required: !0
      },
      province: {
        valueNotEquals: "省"
      },
      "address_details": {
        required: !0
      },
      "user_zip": {
        required: !0
      },
      "tellOne": {
        required: !0
      },
      "email": {
        required: !0,
        email: !0
      },
      "user_time": {
        required: !0
      },
      "aux_file": {
        extension: "jpg|png|bmp|doc|docx|pdf|txt",
        filesize: 3e3
      },
      "contract-checkbox": {
        required: !0
      }
    },
    messages: {
      "patientName": {
        required: "此项为必填项"
      },
      "patientBirth": {
        required: "此项为必填项",
        date: "请填写正确的日期格式"
      },
      "patient_gender": {
        required: "此项为必填项"
      },
      "appliName": {
        required: "此项为必填项"
      },
      province: {
        valueNotEquals: "此项为必填项"
      },
      "address_details": {
        required: "此项为必填项"
      },
      "user_zip": {
        required: "此项为必填项"
      },
      "tellOne": {
        required: "此项为必填项"
      },
      "email": {
        required: "此项为必填项",
        email: "请填写合法的email地址"
      },
      "user_time": {
        required: "此项为必填项"
      },
      "aux_file": {
        extension: "文件格式不符合要求",
        filesize: "文件大小应小于3KB"
      },
      "contract-checkbox": {
        required: "请接受服务条款"
      }
    },
    errorPlacement: function(e, t) {
      if ("aux-file" == t.attr("name")) e.appendTo(".file-error");
      else if ("patient_gender" == t.attr("name")) e.appendTo(".gender-error");
      else if ("contract-checkbox" == t.attr("name")) e.appendTo(".contract-check-error");
      else {
        if ("user_time" != t.attr("name")) return !1;
        e.appendTo(".user-time-error")
      }
    }
    });
    $.validator.addMethod("valueNotEquals", function(e, t, r) {
      if ($(t).hasClass('not-mandatory')) {
        return true;
      } else {
        return r != e;
      }
    });
    $.validator.addMethod("extension", function(e, t, r) {
      return r = "string" == typeof r ? r.replace(/,/g, "|") : "png|jpe?g|gif", this.optional(t) || e.match(new RegExp("\\.(" + r + ")$", "i"))
    });
    $.validator.addMethod("filesize", function(e, t, r) {
      return this.optional(t) || t.files[0].size <= r
    })
  });
$(function() {
  $('.medical-form').submit(function(event) {
    event.preventDefault()
    if (!$('.medical-form').valid()) {
      return;
    }
    $('.form-feedback-wrapper').fadeIn();
  });
});