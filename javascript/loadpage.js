// JavaScript Document
//This script will create the document needed for all parts of the project
//Includes the navbar

var docWrite;

function docLayOut() {
	docWrite = `
<header><h1>The header of this part</h1></header>
	
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
	<section>
		<!--Javascript will code this part (1,2,3,4) -->
	</section>
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
smallMedia.media = 'screen and (max-device-width: 600px), screen and (max-width:600px)';


document.querySelector('head').append(smallMedia);
