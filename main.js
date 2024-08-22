var svgDoc;
var styleSheet;
var countryIndex;
var numCorrect;
var mapZoom = 100;
var startTime;
var endTime;
var timerId;

function shuffleArray(array)
{
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

function focusCountry()
{
	var zoom = countries[countryIndex].zoom || 200;

	// get coordinates
	// TODO: check kiribati, france, russia, netherlands
	var elem = svgDoc.getElementById(countries[countryIndex].id);
	var rect = elem.getBBox();
	var x = rect.x + rect.width / 2;
	var y = rect.y + rect.height / 2;

	// normalize to fraction of map
	x /= 2754;
	y /= 1398;

	// zoom
	mapZoom = zoom;
	e_worldmap.style.width = mapZoom + "%";

	console.log("at " + x + "," + y);

	// center viewport on position
	e_mapscroll.scrollLeft = e_worldmap.offsetWidth * x - e_mapscroll.offsetWidth / 2;
	e_mapscroll.scrollTop = e_worldmap.offsetHeight * y - e_mapscroll.offsetHeight / 2;

	// (re)start blink animation
	styleSheet.rules[countryIndex].style.animation = "none";
	e_worldmap.offsetHeight;
	styleSheet.rules[countryIndex].style.animation = "blink 0.33s step-start 0s 5";
}

function nextCountry()
{
	if (countryIndex >= 0)
	{
		// Cancel animation
		styleSheet.rules[countryIndex].style.opacity = null;
		styleSheet.rules[countryIndex].style.animation = "none";

		// Remove from hint list
		var option = document.querySelector("option[value='" + countries[countryIndex].names[0] + "']");
		option.remove();
	}

	countryIndex++;
	if (countryIndex < countries.length) {
		styleSheet.rules[countryIndex].style.fill = "#A0A0FF";
		styleSheet.rules[countryIndex].style.opacity = "1";
		focusCountry();
		e_progress.innerText = (countryIndex + 1) + " of " + countries.length + ":";
		e_promptflag.src = "https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/" + countries[countryIndex].id + ".svg";
	}
	else {
		stopTimer();
		results.innerText = "You got " + numCorrect + " out of " + countries.length + " correct (" + Math.round(numCorrect * 100 / countries.length) + "%). " +
			"Completed in " + formatTime(endTime - startTime);
	}
}

function checkName(name, list)
{
	for (var i in list) {
		if (name.toLowerCase() == list[i].toLowerCase()) {
			console.log(name.toLowerCase() + " - " + list[i].toLowerCase);
			return true;
		}
	}
	return false;
}

function onSubmit()
{
	var name = e_countrytext.value || e_countrylist.value;

	e_countryform.reset();

	var correct = checkName(name, countries[countryIndex].names);
	if (correct)
		numCorrect++;
	answer.innerText = (correct ? "✔️ " : "❌ ") + countries[countryIndex].names[0];
	styleSheet.rules[countryIndex].style.fill = correct ? "green" : "red";
	nextCountry();
}

function startGame()
{
	// Populate hint list
	var names = [""];
	for (var i in countries)
		names.push(countries[i].names[0]);
	names.sort();
	e_countrylist.innerHTML = "";  // remove all existing
	for (var i in names) {
		var option = document.createElement("option");
		option.value = option.innerText = names[i];
		e_countrylist.appendChild(option);
		console.log(names[i]);
	}

	// shuffle countries
	shuffleArray(countries);

	// CSS rules for each country
	while (styleSheet.rules.length > 0)
		styleSheet.deleteRule(0);
	for (var i in countries) {
		styleSheet.insertRule("." + countries[i].id + " { }", i);
	}

	answer.innerText = "";
	results.innerText = "";

	numCorrect = 0;
	countryIndex = -1;
	nextCountry();

	startTimer();
}

e_hintflags.onchange = function()
{
	e_promptflag.style.display = e_hintflags.checked ? "inline-block" : "none";
}

e_hintlist.onchange = function()
{
	e_countrytext.style.display = e_hintlist.checked ? "none" : "inline-block";
	e_countrylist.style.display = e_hintlist.checked ? "inline-block" : "none";
}

window.onload = function()
{
	// init from checkbox state
	e_hintflags.onchange();
	e_hintlist.onchange();

	// Get SVG document
	svgDoc = e_worldmap.contentDocument;

	// Remove all title elements
	var titles = svgDoc.getElementsByTagName("title");
	while (titles[0]) {
		titles[0].remove();
	}

	// Create empty stylesheet
	var style = svgDoc.createElementNS("http://www.w3.org/2000/svg", "style");
	svgDoc.documentElement.appendChild(style);
	styleSheet = style.sheet;

	// CSS for blinking element
	var style = svgDoc.createElementNS("http://www.w3.org/2000/svg", "style");
	style.textContent = "@keyframes blink { 50% { fill: yellow; } }"
					  + ".circlexx { fill: none; }";
	svgDoc.documentElement.appendChild(style);

	startGame();
}

// Returns a string representing the milliseconds time value in H:MM:SS
function formatTime(msec)
{
	var seconds = Math.floor(msec / 1000);  // total seconds
	var minutes = Math.floor(seconds / 60);  // total minutes
	var hours = Math.floor(minutes / 60);  // total hours

	function pad00(num) { return (num < 10) ? "0" + num : num; }

	return [hours, pad00(minutes % 60), pad00(seconds % 60)].join(":");
}

function timer(start)
{
	e_timer.innerText = formatTime(Date.now() - start);
}

function startTimer()
{
	startTime = Date.now();
	timer(startTime);
	timerId = setInterval(timer, 10, startTime);
}

function stopTimer()
{
	endTime = Date.now();
	clearInterval(timerId);
}

/* Map panning and zooming */
e_mapscroll.onwheel = function(event)
{
	event.preventDefault();

	console.log("scroll");

	var startX = event.offsetX;
	var startY = event.offsetY;
	var scrollX = e_mapscroll.scrollLeft;
	var scrollY = e_mapscroll.scrollTop;

	// point of map under cursor
	var x = scrollX + startX;
	var y = scrollY + startY;
	x /= mapZoom;
	y /= mapZoom;

	if (event.deltaY > 0) {
		mapZoom -= 20;
		if (mapZoom < 100)
			mapZoom = 100;
	} else if (event.deltaY < 0) {
		mapZoom += 20;
		if (mapZoom > 1600)
			mapZoom = 1600;
	}
	e_worldmap.style.width = mapZoom + "%";

	// keep the same part of the map under the cursor
	x *= mapZoom;
	y *= mapZoom;

	e_mapscroll.scrollLeft = x - startX;
	e_mapscroll.scrollTop = y - startY;
}

e_mapscroll.onmousedown = function(event)
{
	var startX = event.pageX;
	var startY = event.pageY;
	var scrollX = e_mapscroll.scrollLeft;
	var scrollY = e_mapscroll.scrollTop;

	e_mapscroll.style.cursor = "grabbing";

	document.onmousemove = function(event)
	{
		var x = event.pageX;
		var y = event.pageY;
		e_mapscroll.scrollLeft = scrollX + startX - x;
		e_mapscroll.scrollTop = scrollY + startY - y;
	}

	document.onmouseup = function(event)
	{
		document.onmousemove = document.onmouseup = null;
		e_mapscroll.style.cursor = null;
	}
}
