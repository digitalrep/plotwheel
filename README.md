# Plotwheel
Javascript spinning plot wheel

# Use
Include file:
```html
<script type="text/javascript" src="plotwheel.js"></script>
```

Make a HTML Canvas:
```html
<canvas id="myWheel" width="1000" height="900"></canvas>
```

Javascript Setup:
```javascript
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
		
    // Set wheel up to spin whenever someone clicks inside it
	document.getElementById("myWheel").addEventListener('mouseup', function() {
		wheel.spin();
	});
</script>
```

# Example
https://www.thinkplanwrite.com/#/plotwheel
