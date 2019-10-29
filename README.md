# croppingheavenjs

VERSIONS BETA 1.0
-----------------

Example implemented: https://www.jjwalls.com/home-design/home-design-panoramic-sunny-forest-in-autumn-E847327333


The demo exactly two files: init.js and test2.html to showing how it works!

Framework cropping using CANVAS HTML to generate preview small and biggest after zoom. 

We using for demo 3rd part js : jquery and fancybox, as lightbox to presentation zoom in. You can use any zoom software to implement for yourself.

--------

In this project we used another script : helperRequired.js to called files once required after event like fancbox, or jquery. This is also our simply js to loading step by step files needed later loaded after callable.

CROPPINGHEAVENJS

How to use?

JS: 
      
        function inputEnter(e) {}
			
				cropping = new cropped({ 
					//cropp : {x:100, w: 100, h: 300, y:0, step: 0 }, 
					//cropp: { step: 50 },
					inputWH : { w: 600, h:500, type: 'cm'},
					//callbackAfterInit: {},
					//callbackAfter: {}, 
					callbackInput: inputEnter,
					bigImagePreview: 'https://as1.ftcdn.net/jpg/00/51/03/64/1000_F_51036433_xmQ53OSQDalSiOhNPlgRkprd9xQ9pDQc.jpg',

					callbackInsertHtml: function(e) {
					}, 
					callbackCanvas: function(e, xy) {					
						console.log(xy);					
					},

				});
				
        
        console.log(cropping);
        //return two function setXYZ, fancybox
        
        DEFAULT SETTING
        			var defaults = {

                id : 'product',
                previewId : 'preview-box',
                typeObjEventWorks: 'box-crop',

                cropp: {x:0, w: 300, h: 300, y:0 },

                inputWH: {},

                callbackAfter: function() { },

                bgcolor: 'rgba(0, 0, 0, 0.8)',

                previewScale: 1.5,
                previewMaxWH: 200,
                previewBigMaxWH: 1000,
                showPreview: true,
                input: { idX: 'x', idY:'y', idZ:'sizetype', type:'cm', keep1To1: 'keep1to1' },
                inputEnabled: true,
                showPreviewLabel: true,		

                ownboxpreviewzoom: '<div id="prb"><canvas style="zoom:90%" id="preview-canvas-big"></canvas></div>',

                bigImagePreview : '',
                typePreview: 'canvas',
                rangeZoom : true,
                step: 0,

                callbackInsertHtml: function() {},
                callbackCanvas: function() {},
                callbackInput: function() {},
                callbackAfterInit: function() {},

              }
              
              
HTML

	<html>

	
	<div style="position:fixed; left:0px; top:0px; width:10px; height:10px; background-color: yellow"></div>
	<div id="box-crop" style="padding:10px;">

			<div id="crop" style="width:100%; max-width:500px;">
																															
					<img src="https://as1.ftcdn.net/jpg/00/51/03/64/500_F_51036433_xmQ53OSQDalSiOhNPlgRkprd9xQ9pDQc.jpg" id="product" itemprop="image" class="noselect" />
																					
			</div>	
			
	</div>
	

<div>
	<select  type="sizetype" class="b_r brd" id="sizetype">
		<option>cm</option>
		<option>inch</option>
		<option>ft</option>
	</select>

	<sel class="customsize2">
		<span>	
			Width
		</span>
		<span>
			<input  class="in-design" id="x"  type="number" step="0.1" name="x" value="222" size="3" min = "0.1" max="6666" style="width: 65px;" />
											
			<span class="maxsize">
				max
				<span id="max-w">22</span> cm		
				
			</span>											
	
		</span>
	</sel>
	<sel class="customsize2">
		<span>	
			Height
		</span>
		<span>
			<input  class="in-design" id="y" type="text" step="0.1"  name="y" value="222" size="3"  min = "0.1"  style="width: 65px;" />
											
				<span  class="maxsize">
					max
					<span id="max-h">22</span> cm	
					
				</span>											
		
		</span>	
	</sel>	
	<input type="text" name="product[crop]" value=""  id="product-crop">

	<sel class="customsize2">
		<input type="checkbox" name="keep1to1" value="0" id="keep1to1" />
		<label for="keep1to1">product.Keep the entire image</label>
	</sel>
</div>

<hr>

<div id="preview-box">


</div>



</html>

------------------

CSS

<style>
	#box-crop {
		-webkit-user-drag: none;
		touch-action: none;
	}
	#crop-lt {
		cursor: n-resize;
		position:absolute;
		height:8px;
		width:100%;
		left:0px;
		top:0px;
		z-index:5000;
	}
	#crop-lb {
		cursor: n-resize;
		position:absolute;
		height:8px;
		width:100%;
		left:0px;
		bottom:0px;
		z-index:5000;
	}
	#crop-ll {
		cursor: w-resize;
		position:absolute;
		height:100%;
		width:8px;
		left:0px;
		top:0px;
		z-index:5000;
	}
	#crop-lr {
		cursor: w-resize;
		position:absolute;
		height:100%;
		width:8px;
		right:0px;
		top:0px;
		z-index:5000;
	}
	#croppped {

	}
	#canvas { position:relative; display:block; margin:0 auto; }
	#preview-box #preview-img {
		margin: 0 auto;
	}
	#preview-w {
		display:block;
	}
	#preview-h {
		display:block;
	}
	.sliderZoom {
		margin:8px auto;
		width:50%; display:block;

	  -webkit-appearance: none;
	
	  height: 15px;
	  border-radius: 5px;   
	  background: #d3d3d3;
	  outline: none;
	  opacity: 0.7;
	  -webkit-transition: .2s;
	  transition: opacity .2s;
	}

	.sliderZoom::-webkit-slider-thumb {
	  -webkit-appearance: none;
	  appearance: none;
	  width: 25px;
	  height: 25px;
	  border-radius: 50%; 
	  background: #4CAF50;
	  cursor: pointer;
	}

	.sliderZoom::-moz-range-thumb {
	  width: 25px;
	  height: 25px;
	  border-radius: 50%;
	  background: #4CAF50;
	  cursor: pointer;
	}
	#preview-ex1{
		position: absolute;right: 0px;bottom:0px;display:none;
		max-width:98px;
		width:80%;


	}
	#preview-work:hover #preview-ex1 {
		display:block;
	}
	#preview-zoomicon { 

		position:absolute; 
		right:10;
		bottom:10;
		cursor:pointer;
		zoom: 70%;

	 }
	</style>
	
------------------


The MIT License (MIT)

Copyright (c) 2019 WallsHeaven LTD. (WallsHeaven.com) Contact Support: camilo@wallsheaven.com

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

        
        
