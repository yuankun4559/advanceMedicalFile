	
	$("#navbar-toggle-btn").mouseout(function(){
		$(this).css("background-color","#3097D1");
	});
	/*输入框的onfocus事件-start*/
	$("#search").focus(function(){
		$(this).animate({width: "300px"}, 400);
	}).blur(function(){
		$(this).animate({ width: "180px" }, 400);
	});
	/*输入框的onfocus事件-end*/

	/*点击图片，下拉菜单显示与隐藏事件-start*/
	$("#ul-right-cn").click(function(){
		if($("#hidden_enent").css("display")=="none"){
			$("#hidden_enent").show();
		}else{
			$("#hidden_enent").hide();
		}
	});	

	/*点击图片，下拉菜单显示与隐藏事件*/	
	$(".imgList").click(function(){
		var imgSrc = $(this).find('img').attr('src');
		$(".backg img").attr('src',imgSrc);
		$(".backg").fadeTo(800,1);

		$('.backg').click(function() {
			$('.backg').fadeOut(500);
		});
	});	
	/*鼠标滚轮时，图片复原*/
	$('.backg').bind('mousewheel',function(){
		var imgSrc = $(this).find('img').attr('src');
		$(".backg img").attr('src',imgSrc);
			$('.backg').fadeOut(500);
		});

	/*jQuery(window).load(function () {
            jQuery("#test").each(function () {
                DrawImage(this, 200, 200);
            });
        });
        function DrawImage(ImgD, FitWidth, FitHeight) {
            var image = new Image();
            image.src = ImgD.src;
            if (image.width > 0 && image.height > 0) {
                if (image.width / image.height >= FitWidth / FitHeight) {
                    if (image.width > FitWidth) {
                        ImgD.width = FitWidth;
                        ImgD.height = (image.height * FitWidth) / image.width;
                    } else {
                        ImgD.width = image.width;
                        ImgD.height = image.height;
                    }
                } else {
                    if (image.height > FitHeight) {
                        ImgD.height = FitHeight;
                        ImgD.width = (image.width * FitHeight) / image.height;
                    } else {
                        ImgD.width = image.width;
                        ImgD.height = image.height;
                    }
                }
            }
        }*/