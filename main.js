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

function flagURL(id)
{
	return "https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/" + id + ".svg";
}

// centers map on the specified point
function centerMap(x, y)
{
	// transform point into screen coordinates based on the current zoom level
	var scale = e_mapscroll.clientWidth /* width at 100% zoom */ * mapZoom / 100 / 2000;
	e_mapscroll.scrollLeft = x * scale - e_mapscroll.clientWidth / 2;
	e_mapscroll.scrollTop = y * scale - e_mapscroll.clientHeight / 2;
}

// 1051, 234

function focusCountry()
{
	// Get bounding box of entire country
	var elems = svgDoc.querySelectorAll(countries[countryIndex].selector);
	var rect = { left: Infinity, right: 0, top: Infinity, bottom: 0 };
	for (var i = 0; i < elems.length; i++) {
		var box = elems[i].getBBox();
		rect.left   = Math.min(rect.left, box.x);
		rect.right  = Math.max(rect.right, box.x + box.width);
		rect.top    = Math.min(rect.top, box.y);
		rect.bottom = Math.max(rect.bottom, box.y + box.height);
	}

	// choose an appropriate zoom level (make it so the country takes up 1/25th of the width)
	var size = (rect.right - rect.left) / 2000;
	mapZoom = 100 * (1 / size) / 25;
	mapZoom = Math.max(100, Math.min(600, mapZoom));
	e_worldmap.style.width = mapZoom + "%";

	// center view on country
	centerMap((rect.left + rect.right) / 2, (rect.top + rect.bottom) / 2);

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
		styleSheet.rules[countryIndex].style.fill = "yellow";
		styleSheet.rules[countryIndex].style.opacity = "1";
		focusCountry();
		e_progress.innerText = (countryIndex + 1) + " of " + countries.length + ":";
		e_promptflag.src = flagURL(countries[countryIndex].id);
	}
	else {
		stopTimer();
		e_results.innerText = "You got " + numCorrect + " out of " + countries.length + " correct (" + Math.round(numCorrect * 100 / countries.length) + "%). " +
			"Completed in " + formatTime(endTime - startTime);
	}
}

function checkName(name, list)
{
	for (var i in list) {
		if (name.toLowerCase() == list[i].toLowerCase()) {
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

	var li = document.createElement("li");
	li.className = correct ? "correct" : "";
	li.innerHTML = countries[countryIndex].names[0] + " <img src='" + flagURL(countries[countryIndex].id) + "'>";
	e_answers.appendChild(li);

	answer.innerText = (correct ? "✔️ " : "❌ ") + countries[countryIndex].names[0];
	answer.style.backgroundColor = correct ? "rgba(0,128,0,0.66)" : "rgba(128,0,0,0.66)";
	styleSheet.rules[countryIndex].style.fill = correct ? "green" : "red";
	nextCountry();
}

function startGame()
{
	e_answers.innerHTML = "";

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
	}

	// shuffle countries
	shuffleArray(countries);

	// CSS rules for each country
	while (styleSheet.rules.length > 0)
		styleSheet.deleteRule(0);
	for (var i in countries)
		styleSheet.insertRule(countries[i].selector + "{}", i);

	answer.innerText = "";
	answer.style.backgroundColor = "transparent";
	e_results.innerText = "";

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
	// CSS selectors for each country (may be an id or class)
	for (var i in countries)
		countries[i].selector = "." + countries[i].id.toUpperCase() + ",#" + countries[i].id.toUpperCase();

	// init from checkbox state
	e_hintflags.onchange();
	e_hintlist.onchange();

	// Get SVG document
	svgDoc = e_worldmap.contentDocument;

	// Create empty stylesheet
	var style = svgDoc.createElementNS("http://www.w3.org/2000/svg", "style");
	svgDoc.documentElement.appendChild(style);
	styleSheet = style.sheet;

	// CSS for blinking element
	var style = svgDoc.createElementNS("http://www.w3.org/2000/svg", "style");
	style.textContent = "@keyframes blink { 50% { fill: orange; } }"
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
	timerId = setInterval(timer, 1000, startTime);
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
		//mapZoom -= 50;
		mapZoom /= 1.1;
		if (mapZoom < 100)
			mapZoom = 100;
	} else if (event.deltaY < 0) {
		//mapZoom += 50;
		mapZoom *= 1.1;
		if (mapZoom > 20000)
			mapZoom = 20000;
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
	if (event.button != 0)
		return;

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
