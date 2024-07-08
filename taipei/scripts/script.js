'use strict'

// ドロワーナビ
$(document).ready(function(){
  $('#openNav').on('click', function(){
      $('#nav') .toggleClass('show');
  });
});

// モーダル
// modal1
// モーダルを開く
$('.modalOpen1').click(function(){
  $('.modalContainer1').fadeIn();
});
//モーダルを閉じる
$('.modalClose1, .modalContainer1').click(function(){
  $('.modalContainer1').fadeOut();
});
// modal2
// モーダルを開く
$('.modalOpen2').click(function(){
  $('.modalContainer2').fadeIn();
});
//モーダルを閉じる
$('.modalClose2, .modalContainer2').click(function(){
  $('.modalContainer2').fadeOut();
});
//modal3
// モーダルを開く
$('.modalOpen3').click(function(){
  $('.modalContainer3').fadeIn();
});
//モーダルを閉じる
$('.modalClose3, .modalContainer3').click(function(){
  $('.modalContainer3').fadeOut();
});
//modal4
// モーダルを開く
$('.modalOpen4').click(function(){
  $('.modalContainer4').fadeIn();
});
//モーダルを閉じる
$('.modalClose4, .modalContainer4').click(function(){
  $('.modalContainer4').fadeOut();
});
// モーダル

//臼井さんからの提供
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
//臼井さんからの提供終わり

