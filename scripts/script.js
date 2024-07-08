'use strict';

/*topへ戻る*/ 
// スクロール用 
$(function(){
    var topBtn=$('#pageTop');
    topBtn.hide();
   
    //ボタンの表示設定
    $(window).scroll(function(){
      if($(this).scrollTop()>800){
        //---- 画面を800pxスクロールしたら、ボタンを表示する
        topBtn.fadeIn();
      }else{
        //---- 画面が800pxより上なら、ボタンを表示しない
        topBtn.fadeOut();
      } 
    });
   
    //ボタンをクリックしたら、スクロールして上に戻る
    topBtn.click(function(){
      $('body,html').animate({
      scrollTop: 0},500);
      return false;
    });
  });


  /*drawer*/
 (function($) {
  const $nav   = $('#navArea');
  const $btn   = $('.toggleBtn');
  const $mask  = $('#mask');
  const $close_btn   = $('.drawercloseBtn');
  const open   = 'open'; // class
  // menu open close
  $btn.on( 'click', function() {
    $nav.addClass( open );
  });
  $close_btn.on( 'click' , function() {
    $nav.removeClass( open );
  });
  // mask close
  $mask.on('click', function() {
    $nav.removeClass( open );
  });
} )(jQuery);



/*ローディング画面*/ 
$(function() {
	setTimeout(function(){
		$('.loading img').fadeIn(3000);
	},500);
	setTimeout(function(){
		$('.loading img').fadeOut(800);
	},2000);
  setTimeout(function(){
		$('.loading').fadeOut(800);
	},6000);
});

/*カルーセル*/