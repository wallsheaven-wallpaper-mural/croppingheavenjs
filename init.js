
	(function() {

		window.dimensions = function() {


			return { dim : dim, init: init };

		};
		var dim = {

			'1px': {
				cm: 1500,
				inch: 1500/2.5,
				ft: 1500/2.5/12,
			},

			sizetype: 'cm',
			now : {w:0, h:0 }

		}

		var init = {

			callbackAfter : function(e) {

				//console.log(e.inputSizes);

				console.log(e);
				
			}

		};

	})();
		


	(function () {

		this.products = function() {


			function inputEnter(e) {


					
					getprice(e.xy);
			

			}
			

			function getprice(xyz) {

				console.log('GETPRICE');

			}

			function initDimensions(e) { 

				//cropping.setWH( { w: 100, h:100, type:'cm' } );

			}

			var setting = {};
			var cropping = {};
			var dim = {};



			(new _('croppingheavenjs.min.js', function() {

			

				dim = new dimensions();	

				setting = { 
					//cropp : {x:100, w: 100, h: 300, y:0, step: 0 }, 
					//cropp: { step: 50 },
					inputWH : { w: 600, h:500, type: 'cm'},
					callbackAfterInit: initDimensions,
					callbackAfter: dim.init.callbackAfter, 
					callbackInput: inputEnter,
					bigImagePreview: 'https://as1.ftcdn.net/jpg/00/51/03/64/1000_F_51036433_xmQ53OSQDalSiOhNPlgRkprd9xQ9pDQc.jpg',

					callbackInsertHtml: function(e) {

						//e.Work.insertAdjacentHTML("beforeend", '<img src="sheet-draw-01.png" id="preview-ex1" />');
						//e.Ex1 = document.getElementById('preview-ex1');

					}, 
					callbackCanvas: function(e, xy) {
						//console.log(xy);
						/*
						if(xy.h!=0) {
							if(xy.w<xy.h) {
								if(xy.w<200) {
									
									e.Ex1.style.width = "80%"; 

									
								} else {
									e.Ex1.style.width = "auto"; 
								}

							} else {
									if(xy.h<100) {
										e.Ex1.style.width = "10%"; 
										
									} else if(xy.h<200) {
										e.Ex1.style.width = "40%"; 
										
									} else {
										
										e.Ex1.style.width = "auto"; 
										
									}
							}
						}
						*/
						//console.log(xy);
						//e.Ex1.width = xy.w>251? e.Ex1.width/2 : x.w;

						

					},

				};
				
				cropping = new cropped(setting);
				


			}));

		};



	})();

	
	/*
	(new _('https://cdnjs.cloudflare.com/ajax/libs/Snowstorm/20131208/snowstorm-min.js', function() {

		 snowStorm.snowColor = '#99ccff';

	}));
	*/


	(new products());


	function initLib(eid, type) {
		

			if(initLib.test==undefined) {
					initLib.test = {};
			}

			if(initLib.test[eid]==undefined) {
				initLib.test[eid] = true;
			}  else {
				initLib.test[eid] = false;
			}

			if(initLib.test[eid]) {
					
					(new _('https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js', function() {

						$(document).ready(function() {
							
							console.log('load jq');
						
							 jq_fancybox(eid);



						 });

					}));
			}


			function jq_fancybox() {

				$('#preview-canvas, #preview-zoomicon').on('click', function(e) {
							
					$('#preview-canvas, #preview-zoomicon').off('click');

					console.log('click');


					$('body').append('<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.3.5/jquery.fancybox.min.css">');

					//$('body').append('<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.3.5/jquery.fancybox.min.js" async>');
					(new _('https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.3.5/jquery.fancybox.min.js', function() {
						console.log('loadfacnybox');
						$("#preview-work").fancybox( {  
							buttons: [ "zoom",  "share", "slideShow",  "fullScreen",   "download",   "thumbs", "close"  ],
					 	smallBtn:false,  
					 	beforeLoad: window.cropped().fancybox('open'), afterClose: window.cropped().fancybox('close') }).trigger('click');
						
					}));


				});
				
				 $('#preview-canvas').trigger('click');
				
			}
	 



	}
