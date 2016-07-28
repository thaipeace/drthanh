/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


(function ($, Drupal, window, document) {

  'use strict';

  // To understand behaviors, see https://drupal.org/node/756722#behaviors
  Drupal.behaviors.services = {
    attach: function (context, settings) {

      // Place your code here.
      
    }
  };
  
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

})(jQuery, Drupal, this, this.document);