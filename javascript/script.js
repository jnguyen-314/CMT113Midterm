// JavaScript Document
//Learning javascript DOM with this website:
//https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents
var docWrite="<h1>Hello World</h1>";

function docLayOut() {
	docWrite= `

<header><h1>CMT 113 Midterm</h1></header>
	
<aside>	
<nav>
	<ul>
		<a href="index.html"><li>Home</li></a>
		<a href="part1.html"><li>Part 1</li></a>
		<a href="part2.html"><li>Part 2</li></a>
		<a href="part3.html"><li>Part 3</li></a>
		<a href="part4.html"><li>Part 4</li></a>
	</ul>
</nav>
</aside>
<main>
	<p>
		&emsp;This midterm project is for CMT 113 of Bunker Hill Community College. There are four parts into this midterm. <br>
		&emsp;The first part of the project involves making a 2x2 table of image of the spring/summer season. They are to have images that are linked to a Boston flower or nursery page. <br>
		&emsp;The second part of the project involves making a table that converts dollars to either Euros, Francs, or Pesos. They are to be interval by user's request. <br>
		&emsp;The third part of the project involves making a menu for a hotel. The menu must tailor to the timing (morning, afternoon, evening) the user is in. <br>
		&emsp;The fourth part of the project involves having ten buttons for ten ski resorts of New England. They are to be styled and array-based.
	</p>
</main>	
	
<footer>
	<br>James Nguyen &copy;2022	
</footer>
	
	
`
document.getElementsByTagName('body')[0].innerHTML = docWrite;
}

docLayOut();

//New Edits for Responsive Website
var smallMedia = document.createElement('link');
smallMedia.rel = 'stylesheet';
smallMedia.href = 'css/stylesmall.css';
smallMedia.media = 'screen and (max-width: 600px)';

document.querySelector('head').append(smallMedia);





