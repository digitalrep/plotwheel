# Plotwheel
Javascript spinning plot wheel

# Use
Include file:
<script type="text/javascript" src="plotwheel.js"></script>

Make a HTML Canvas:
<canvas id="myWheel" width="1000" height="900">
	Your browser doesn't support the HTML5 canvas tag
</canvas>

Javascript Setup:
<script>
		// Set up Wheel Settings
		var settings = {
			canvasId: 'myWheel',
			fontSize: '15px',
			textColors: ["#922B21", "#76448A", "#1F618D", "#117A65"],
			quotes: [
				"Every rose has its thorn", 
				"Every night has its dawn",
				"Every cowboy sings a sad, sad song",
				"Just like every rose has its thorn"
			],
		};
		
    // Create Plotwheel object with settings
		var wheel = new Plotwheel(settings);
		
    // Set wheel up to spin whenever someone clicks inside the wheel
		document.getElementById("myWheel").addEventListener('mouseup', function() {
			wheel.spin();
		});
</script>

# Example
https://www.thinkplanwrite.com/#/plotwheel
