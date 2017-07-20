(function() {
			
			this.Plotwheel = function(userDefinedSettings) {
					
				var startPos = 0.15;
					
				var defaultSettings = {
					canvasId: 'canvas',
					radius: 400,
					fontSize: "14px",
					fontAlign: "left",
					pickColor: "#696969",
					arcColors: ["#bebebe", "#d3d3d3"],
					textColors: ["#000"],
					quotes: [
						"Option One", 
						"Option Two",
						"Option Three",
						"Option Four"
					],
				}
					
				if(userDefinedSettings && typeof userDefinedSettings === "object") {
					for(var key in defaultSettings) {
						if(userDefinedSettings.hasOwnProperty(key)) {
							defaultSettings[key] = userDefinedSettings[key];
						}
					}
				}
					
				var canvas = document.getElementById(defaultSettings.canvasId);
				var ctx = canvas.getContext("2d");
				var cx = canvas.width / 2;
				var cy = canvas.height / 2;
				
				function drawSegment(colour, fontColor, start, end, text) {
					ctx.fillStyle = colour;
					ctx.beginPath();
					ctx.moveTo(cx, cy);
					ctx.arc(cx, cy, defaultSettings.radius, start * Math.PI, end * Math.PI);
					ctx.closePath();
					ctx.fill();
					ctx.save();
					
					ctx.translate(cx, cy);
					var angle = (start + (end - start) / 2) * Math.PI;
					ctx.rotate(angle);
					
					ctx.textAlign = defaultSettings.align;
					ctx.fillStyle = fontColor;
					ctx.font = defaultSettings.fontSize + " sans-serif";
					
					// first int is distance from centre
					// second int is related somehow to font height
					ctx.fillText(text, 60, 4);
					renderText(text);
					
					ctx.restore();
				}
				
				function renderText(text) {
					// 400 - 60 = 340
					var maxLineWidth = defaultSettings.radius - 60;
					var letterLength = defaultSettings.fontSize.split("px");
					var letters = text.length;
					if((letters * (letterLength[0] / 2.5)) > maxLineWidth) {
						console.log(text + " too long");
						console.log(letters * (letterLength[0] / 2.3));
					}
				}
				
				function printWheel(distance) {
					var currentPos = startPos + distance;
					var numQuotes = defaultSettings.quotes.length;
					var posInc = 2 / numQuotes;
					var arcColor = 0;
					var textColor = 0;
					
					for(var i=0; i<numQuotes; i++) {
						drawSegment(defaultSettings.arcColors[arcColor], defaultSettings.textColors[textColor], currentPos, currentPos + posInc, defaultSettings.quotes[i]);
						if(arcColor < defaultSettings.arcColors.length-1) {
							arcColor++;
						} else {
							arcColor = 0;
						}
						if(textColor < defaultSettings.textColors.length-1) {
							textColor++;
						} else {
							textColor = 0;
						}
						currentPos += posInc;
					}
					
					// Circle Outline
					ctx.beginPath();
					ctx.arc(cx, cy, defaultSettings.radius, 0, 2 * Math.PI);
					ctx.stroke();
					
					// Picker
					ctx.fillStyle = defaultSettings.pickColor;
					ctx.beginPath();
					ctx.moveTo(cx, cy - defaultSettings.radius + 50);
					ctx.arc(cx, cy - defaultSettings.radius + 50, 80, 1.35 * Math.PI, 1.65 * Math.PI);
					ctx.closePath();
					ctx.fill();
					ctx.save();		
				}
				
				printWheel(0);
				
				this.spin = function() {
					
					var rand = 1000 * Math.random();
					var amt = 1 / 1000;
					
					function spin(amt) {
						printWheel(amt);
					}
					
					var spinning = setInterval(function() { spin(amt += 1 / 100) }, 1);
					setInterval(function() { clearInterval(spinning) }, rand);
					
				}
								
			}
			
})();
		
	// Set up Plot Wheel
		
   var settings = {
			canvasId: 'canvas',
			fontSize: '15px',
			textColors: ["#922B21", "#76448A", "#1F618D", "#117A65"],
			quotes: [
				"First quote", 
				"Another quote goes here",
				"Yet another quote to add to all teh rest",
				"Quotey quoterson",
				"Last quote"
			],
	};
		
	var plotwheel = new Plotwheel(settings);
		
	document.getElementById("canvas").addEventListener('mouseup', function() {
			plotwheel.spin();
	});
		
