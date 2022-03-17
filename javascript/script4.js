// JavaScript Document
//Ten ski resorts

//change header
document.querySelector('header').innerHTML = "<h1>New England Ski Resorts</h1>";

//create a 2 by 5 table for the ten buttons
function createTable() {
	var t = "<table>";
	for (num = 0; num <5; num +=1) {
		t += "<tr><td>&nbsp;</td><td>&nbsp;</td></tr>";
	}
	t += "</table>";
	document.querySelector('section').innerHTML = t;
}

createTable();

//Now for the buttons

var skiResorts = [
	"Berkshire East",
	"Jiminy Peak",
	"Bousquet",
	"Catamount",
	"Crotched Mountain",
	"Whaleback",
	"Mohawk Mountain",
	"Attitash Mountain",
	"Black Mountain",
	"Camden Snow Bowl"
];

var buttonLinks = [
	"https://www.berkshireeast.com/",
	"https://www.jiminypeak.com/",
	"https://www.bousquetmountain.com/",
	"https://www.catamountski.com/",
	"https://www.crotchedmtn.com/",
	"https://www.whaleback.com/",
	"https://www.mohawkmtn.com/",
	"https://www.attitash.com/",
	"https://www.blackmt.com/",
	"https://www.camdensnowbowl.com/"
]

function makeButtons() {
	var b = document.querySelectorAll("td");
	for (num=0; num <10; num++) {
		b[num].innerHTML = "<a href='" + buttonLinks[num] + "' target='_blank'>" + "<button>"
		+ skiResorts[num] + "</button></a>";
	}
}
makeButtons();

//Create navbar for sorting
function navCreate() {
	var m = document.querySelector('aside');
	var nav2 = document.createElement('nav');
	nav2.className += "skiNav";
	nav2.innerHTML = `<ul>
						<li onClick='sort1()'>Sort Alphabetically</li>
						<li onClick='sort2()'>Reverse Alphabetically</li>
					  </ul>
`
	m.appendChild(nav2);
}
navCreate();


//Sorts them alphabetically
function sort1() {
	skiResorts.sort();
	buttonLinks.sort();
	makeButtons();
}
//Sorts them reverse alphabetically
function sort2() {
	sort1(); //in order
	skiResorts.reverse();
	buttonLinks.reverse();//now in reverse
	makeButtons();
}

//Description Paragraph Creation
function pCreate() {
	var m = document.querySelector('aside');
	var p = document.createElement('p');
	p.className += "pDescription";
	m.appendChild(p);
	p.innerHTML = `Based on Location: <br>
<span class='bu'>Massachusetts:</span> Berkshire East, Jiminy Peak, Bousquet, Catamount  <br>
<span class='bu'>New Hampshire:</span> Crotched Mountain, Whaleback, Attitash Mountain, Black Mountain <br>
<span class='bu'>Connecticut:</span> Mohawk Mountain <br>
<span class='bu'>Maine:</span> Camden Snow Bowl

`;
}

pCreate();
//I would have created a hover effect on description and buttons, but that would
//take a longer time since I would have to create a class based on the ski resorts

