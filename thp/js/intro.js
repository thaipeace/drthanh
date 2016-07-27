/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


(function ($, Drupal, window, document) {

  'use strict';

  // To understand behaviors, see https://drupal.org/node/756722#behaviors
  Drupal.behaviors.intro = {
    attach: function (context, settings) {
			$('#btn_skip').click(function(){

				console.log('a');
				document.getElementById('videoskip1').pause();
				
				$('#videoskip1').hide();
				$('#btn_skip').hide();
				$('#logo').hide();
				$('.img_logoDr').hide();
				$('#line_skip').hide();
				document.getElementById('videoskip2').play();
				function timeOut(){
					$(window).attr('location','home');
					};
				setTimeout(timeOut,5000);
			});
		}
  }

})(jQuery, Drupal, this, this.document);