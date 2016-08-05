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
      $(".ubl_img").hover(function(){
        if ($(this).parent().parent().css('z-index') === '0') {
          $('.pnt').css({'opacity': 0});
          $('.points > div').css({'z-index': 0});
          
          $(this).parent().parent().find('.pnt').animate({opacity: 1}, 200);
          $(this).parent().parent().css({'z-index': 1});
        }
      }, function(){
        
      });

      $('.cloud_topLeft').animate({left:"-200", opacity:"0.5"}, 3000);
      $('.cloud_topRight').animate({right:"-600", opacity:"0.5"}, 2000);
      $('.cloud_bottomLeft').animate({left:"-900", opacity:"0.5"}, 4000);
      
      $('.wp_p1').animate({top: screen.height/2.8}, 2100);
      $('.wp_p2').animate({top: screen.height/2.65}, 1800);
      $('.wp_p3').animate({top: screen.height/2.8}, 1500);
      $('.wp_p4').animate({top: screen.height/2.95}, 1300);
      $('.wp_p5').animate({top: screen.height/2.95}, 1100);
      $('.wp_p6').animate({top: screen.height/2.8}, 900);
      $('.wp_p7').animate({top: screen.height/2.95}, 700);
      $('.wp_p8').animate({top: screen.height/3}, 500);
      $('.wp_p9').animate({top: screen.height/2.75}, 300);
      $('.wp_p10').animate({top: screen.height/2.65}, 100);
      
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
      
      $('.wp_experience').append(pathAnimate('M289 500 L100 500 L100 304', style, 768, screen.height));
      $('.wp_experience').append(pathAnimate('M270 540 L232 540 L232 475', style, 768, screen.height));
      $('.wp_experience').append(pathAnimate('M480 500 L548 500 L548 474', style, 768, screen.height));
      $('.wp_experience').append(pathAnimate('M650 350 L667 350 L667 295', style, 768, screen.height));
      $('.wp_experience').append(pathAnimate('M768 330 L667 330 L667 295', style, 768, screen.height));
      
      // Build 360image
      var container = 'three-container';
      var materialPaths = [
        '/thp/sites/default/files/px.jpg',
        '/thp/sites/default/files/nx.jpg',
        '/thp/sites/default/files/py.jpg',
        '/thp/sites/default/files/ny.jpg',
        '/thp/sites/default/files/pz.jpg',
        '/thp/sites/default/files/nz.jpg'

      ];
      build360Img(container, materialPaths);

      // Fix asetic title
      $('article').append($('.field-collection-item-field-parts > div > .field-name-field-title'));
    }
  };

})(jQuery, Drupal, this, this.document);

function build360Img(container, materialPaths) {

	var container1 = document.getElementById(container);

	//------------------------------//
	var camera, scene, renderer;
	var texture_placeholder,
	isUserInteracting = false,
	onMouseDownMouseX = 0,
	onMouseDownMouseY = 0,
	lon = 90,
	onMouseDownLon = 0,
	lat = 0,
	onMouseDownLat = 0,
	phi = 0,
	theta = 0,
	target = new THREE.Vector3();
  if (container1 == null) {
    return false;
  }
  else {
    init(container1, materialPaths);
    animate();
  }

	//-----------------//

	function init(container, materialPaths) {

		var container, mesh;

		camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 1100 );

		scene = new THREE.Scene();

		texture_placeholder = document.createElement( 'canvas' );
		texture_placeholder.width = 128;
		texture_placeholder.height = 128;

		var context = texture_placeholder.getContext( '2d' );
		context.fillStyle = 'rgb( 200, 200, 200 )';
		context.fillRect( 0, 0, texture_placeholder.width, texture_placeholder.height );

		var materials = [];
		for (i = 0; i < materialPaths.length; i++) {
		    materials.push(loadTexture(materialPaths[i]));
		}

		mesh = new THREE.Mesh( new THREE.BoxGeometry( 300, 300, 300, 7, 7, 7 ), new THREE.MultiMaterial( materials ) );
		mesh.scale.x = - 1;
		scene.add( mesh );

		for ( var i = 0, l = mesh.geometry.vertices.length; i < l; i ++ ) {

			var vertex = mesh.geometry.vertices[ i ];

			vertex.normalize();
			vertex.multiplyScalar( 550 );

		}

		renderer = new THREE.CanvasRenderer();
		renderer.setPixelRatio( window.devicePixelRatio );
		renderer.setSize( window.innerWidth, window.innerHeight );
		container.appendChild( renderer.domElement );

		document.addEventListener( 'mousedown', onDocumentMouseDown, false );
		document.addEventListener( 'mousemove', onDocumentMouseMove, false );
		document.addEventListener( 'mouseup', onDocumentMouseUp, false );
		document.addEventListener( 'mousewheel', onDocumentMouseWheel, false );
		document.addEventListener( 'MozMousePixelScroll', onDocumentMouseWheel, false);

		document.addEventListener( 'touchstart', onDocumentTouchStart, false );
		document.addEventListener( 'touchmove', onDocumentTouchMove, false );

		//

		window.addEventListener( 'resize', onWindowResize, false );

	}

	//-----------------//

	function onWindowResize() {

		camera.aspect = window.innerWidth / window.innerHeight;
		camera.updateProjectionMatrix();

		renderer.setSize( window.innerWidth, window.innerHeight );

	}

	function loadTexture( path ) {

		var texture = new THREE.Texture( texture_placeholder );
		var material = new THREE.MeshBasicMaterial( { map: texture, overdraw: 0.5 } );

		var image = new Image();
		image.onload = function () {

			texture.image = this;
			texture.needsUpdate = true;

		};
		image.src = path;

		return material;

	}

	//----------------//

	function onDocumentMouseDown( event ) {

		event.preventDefault();

		isUserInteracting = true;

		onPointerDownPointerX = event.clientX;
		onPointerDownPointerY = event.clientY;

		onPointerDownLon = lon;
		onPointerDownLat = lat;

	}

	//-----------------------//

	function onDocumentMouseMove( event ) {

		if ( isUserInteracting === true ) {

			lon = ( onPointerDownPointerX - event.clientX ) * 0.1 + onPointerDownLon;
			lat = ( event.clientY - onPointerDownPointerY ) * 0.1 + onPointerDownLat;

		}
	}

	//-------------------------------//

	function onDocumentMouseUp( event ) {

		isUserInteracting = false;

	}

	//----------------------------//

	function onDocumentMouseWheel( event ) {

	// WebKit

	if ( event.wheelDeltaY ) {

		camera.fov -= event.wheelDeltaY * 0.05;

		// Opera / Explorer 9

		} else if ( event.wheelDelta ) {

			camera.fov -= event.wheelDelta * 0.05;

		// Firefox

		} else if ( event.detail ) {

			camera.fov -= event.detail * 0.05;

		}

		camera.updateProjectionMatrix();

	}

	//----------------------------//

	function onDocumentTouchStart( event ) {

		if ( event.touches.length == 1 ) {

			event.preventDefault();

			onPointerDownPointerX = event.touches[ 0 ].pageX;
			onPointerDownPointerY = event.touches[ 0 ].pageY;

			onPointerDownLon = lon;
			onPointerDownLat = lat;

		}

	}

	//-----------------------------------------//

	function onDocumentTouchMove( event ) {

		if ( event.touches.length == 1 ) {

			event.preventDefault();

			lon = ( onPointerDownPointerX - event.touches[0].pageX ) * 0.1 + onPointerDownLon;
			lat = ( event.touches[0].pageY - onPointerDownPointerY ) * 0.1 + onPointerDownLat;

		}

	}

	//--------------------------//

	function animate() {

		requestAnimationFrame( animate );
		update();

	}

	//----------------------------------//

	function update() {

		if ( isUserInteracting === false ) {

			lon += 0.1;

		}

		lat = Math.max( - 85, Math.min( 85, lat ) );
		phi = THREE.Math.degToRad( 90 - lat );
		theta = THREE.Math.degToRad( lon );

		target.x = 500 * Math.sin( phi ) * Math.cos( theta );
		target.y = 500 * Math.cos( phi );
		target.z = 500 * Math.sin( phi ) * Math.sin( theta );

		camera.position.copy( target ).negate();
		camera.lookAt( target );

		renderer.render( scene, camera );

	}


	function Panorama360FishEye(container, materials) {

	}

}