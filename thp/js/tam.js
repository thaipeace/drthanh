/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


(function ($, Drupal, window, document) {

  'use strict';

  // To understand behaviors, see https://drupal.org/node/756722#behaviors
  Drupal.behaviors.home = {
    attach: function (context, settings) {

      // Place your code here.

      $("#btn_wapper").hover(function(){
      	$('#img_exper').attr('src','http://localhost/thp/sites/default/files/button_02.svg');
      },
      function(){
      	$('#img_exper').attr('src','http://localhost/thp/sites/default/files/button_01.svg');
      });

      $(".ubl").hover(function(){
        $(this).css('z-index',6);

      },
      function(){
        $(this).css('z-index',0);
      });

      $(".ubl").hover(function(){
        $(".pnt").css('z-index',4);

      },
      function(){
        $(".pnt").css('z-index',0);
      });



      $(".wp_p1").hover(function(){
        $("#pnt1").css('display','block');

      },
      function(){
        $("#pnt1").css('display','none');
      });

      $(".wp_p2").hover(function(){
        $("#pnt2").css('display','block');
      },
      function(){
        $("#pnt2").css('display','none');
      });

      $(".wp_p3").hover(function(){
        $("#pnt3").css('display','block');
      },
      function(){
        $("#pnt3").css('display','none');
      });

      $(".wp_p4").hover(function(){
        $("#pnt4").css('display','block');
      },
      function(){
        $("#pnt4").css('display','none');
      });

      $(".wp_p5").hover(function(){
        $("#pnt5").css('display','block');
      },
      function(){
        $("#pnt5").css('display','none');
      });

      $(".wp_p6").hover(function(){
        $("#pnt6").css('display','block');
      },
      function(){
        $("#pnt6").css('display','none');
      });

      $(".wp_p7").hover(function(){
        $("#pnt7").css('display','block');
      },
      function(){
        $("#pnt7").css('display','none');
      });

      $(".wp_p8").hover(function(){
        $("#pnt8").css('display','block');
      },
      function(){
        $("#pnt8").css('display','none');
      });

      $(".wp_p9").hover(function(){
        $("#pnt9").css('display','block');
      },
      function(){
        $("#pnt9").css('display','none');
      });

      $(".wp_p10").hover(function(){
        $("#pnt10").css('display','block');
      },
      function(){
        $("#pnt10").css('display','none');
      });

    $('.cloud_topLeft').animate({left:"-200", opacity:"0.5"},10000);
    $('.cloud_topRight').animate({right:"-600", opacity:"0.5"},10000);
    $('.cloud_bottomLeft').animate({left:"-900", opacity:"0.5"},10000);
    $('#ubl1').animate({top:"111%"},10501);
    $('#ubl2').animate({top:"125%"},10502);
    $('#ubl3').animate({top:"116%"},10503);
    $('#ubl4').animate({top:"112%"},10504);
    $('#ubl5').animate({top:"125%"},10505);
    $('#ubl6').animate({top:"128%"},10506);
    $('#ubl7').animate({top:"127%"},10507);
    $('#ubl8').animate({top:"119%"},10508);
    $('#ubl9').animate({top:"129%"},10509);
    $('#ubl10').animate({top:"145%"},10510);

    //node-4
    /*
   * width Int, height Int: offset of container
   * path String: html5 path format. Ex. M200 0 L40 25 L100 200
   * style Array: svg path style colection
   *  EX: 
   *  style = [
        "fill:none",
        "stroke:black",
        "stroke-width:1",
        "stroke-linejoin:round",
        "stroke-linecap:round",
        "stroke-dasharray:1000",
        "animation: dash 3s 1 linear forwards",
        "stroke:#000000"
      ];
   */
   function pathAnimate(path, style, width, height) {
    var svg = '';
    svg = "<svg width='" + width + "' height='" + height + "' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xml:space='preserve'>";
    svg += "<path d='" + path + "' style='" + style.join(";") + "' />";
    svg += "</svg>";

    return svg;
   }
   var style = [
        "fill:none",
        "stroke:black",
        "stroke-width:1",
        "stroke-linejoin:round",
        "stroke-linecap:round",
        "stroke-dasharray:1000",
        "animation: dash 5s 1 linear forwards",
        "stroke:#ffffff"
      ];
    $('.wp_experience').append(pathAnimate('M100 304 L100 500 L289 500', style, 768, screen.height));
    $('.wp_experience').append(pathAnimate('M232 475 L232 540 L270 540', style, 768, screen.height));
    $('.wp_experience').append(pathAnimate('M548 474 L548 500 L480 500', style, 768, screen.height));
    $('.wp_experience').append(pathAnimate('M667 295 L667 350 L650 350', style, 768, screen.height));
    $('.wp_experience').append(pathAnimate('M667 295 L667 330 L768 330', style, 768, screen.height));

    
    
   


    }
  };

})(jQuery, Drupal, this, this.document);