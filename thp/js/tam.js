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
    }
  };

})(jQuery, Drupal, this, this.document);