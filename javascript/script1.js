// JavaScript Document
//for part 1

//change header for part 1
document.querySelector('header').innerHTML = "<h1>Welcome to the End of Winter</h1>";


function createTable() {
	var sect = document.querySelector('section');
	var tab = document.createElement('table');
	tab.innerHTML = `<tr>
						<td><a class="part1"><img></a></td>
						<td><a class="part1"><img></a></td>
					</tr>
					<tr>
						<td><a class="part1"><img></a></td>
						<td><a class="part1"><img></a></td>
					</tr>

`
	sect.appendChild(tab);
}
//spring,summer,summer,spring in image order
var images = [
	"arno-smit-sKJ7zSylUao-unsplash.jpg",
	"ethan-robertson-SYx3UCHZJlo-unsplash.jpg",
	"raphael-biscaldi-7RQf2X6aXXI-unsplash.jpg",
	"sergey-shmidt-koy6FlCCy5s-unsplash.jpg"
];

//garden, flower, garden, flower
var shopLinks = [
	"https://www.nicheplantshop.com/south-end",
	"https://robinsflowershop.com/",
	"https://bonnysgardencenter.wixsite.com/bonnysgardencenter",
	"https://www.olympiaflower.net/"
];

function setupImg() {
	var aLinks = document.querySelectorAll('a.part1');
	var imgLinks = document.querySelectorAll('img');
	for (var num=0; num<=3 ; num++) {
		aLinks[num].href = shopLinks[num];
		aLinks[num].target = "_blank";
		imgLinks[num].src = "image/" + images[num];
	}
}

createTable();
setupImg();