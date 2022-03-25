// JavaScript Document

var timeOfDay = new Date();
var t = timeOfDay.getHours();

//morning is 0:00 to 12:59
//afternoon is 13:00 to 17:59
//night is 18:00 to 23:59

function theDay() {
	if (t < 13) {
		document.querySelector('main').className = "morning";
		return 0;//morning
	}
	else if (t < 18) {
		document.querySelector('main').className = "afternoon";
		return 1;//afternoon
	}
	else {
		document.querySelector('main').className = "night";
		return 2;//night
	}
}

var headerTitle = [
	"Morning Menu",
	"Afternoon Menu",
	"Night Menu"
];
//Change Header
function changeHeader() {
	document.querySelector('header').innerHTML ="<h1>" + headerTitle[theDay()] + "</h1>";
}

changeHeader();

//The menus for morning, afternoon, and night

var morningMenu = `
<p>
	<span class="bold underline">Fried Eggs</span>: Six fried eggs that are fried in vegetable oil. Can come in as overeasy, well done, or raw. &emsp; $6.95 <br><br>
	<span class="bold underline">Bacon and Eggs</span>: Six fried eggs and six strip of bacons that are fried in vegetable oil. Can come in as overeasy, well done, or raw. &emsp; $10.95 <br><br>
	<span class="bold underline">French Toast</span>: Six french toast that are cooked in salted butter. The bread can plain, whole wheat, or italian. &emsp; $6.95 <br><br>
	<span class="bold underline">Breakfast Sandwich</span>: A breakfast sandwich. Meat can be ham, egg, or sausage. Buns can be muffins, toasts, or biscuits. &emsp; $4.95 <br><br>
	<span class="bold underline">Breakfast King</span>: A combination of the breakfast menu. Comes with six fried eggs, six strips of bacon, six french toasts, and a breakfast sandwich. &emsp; $20.95
</p>
<div>
	<img src="image/food/christian-coquet-p1sdBSnS3Qc-unsplash.jpg"> &nbsp;
	<img src="image/food/crystal-jo-Q58N5cBKDZ8-unsplash.jpg">
</div>

`;

var afternoonMenu = `
<p>
	<span class="bold underline">Cheeseburger</span>: Grilled circular steak, topped with sesame bun, tomatos, iceberg lettuce, onions, and Mac Sauce. Can come in as medium-rare, well done, or raw. &emsp; $8.95 <br><br>
	<span class="bold underline">Grill Cheese Sandwich</span>: A sandwich that is grilled with the cheese inside. Bread can be plain, whole wheat, or italian. &emsp; $4.95 <br><br>
	<span class="bold underline">Tuna Salad Sandwich</span>: A sub stuffed with tuna salad. &emsp; $6.95 <br><br>
	<span class="bold underline">Spaghetti and Meatball</span>: Yellow spaghetti with Angus beef meatballs, topped with tomato sauce. &emsp; $8.95 <br><br>
	<span class="bold underline">French Fries</span>: Yellow potato deep fried in vegetable oil. &emsp; $3.95
</p>
<div>
	<img src="image/food/amirali-mirhashemian-sc5sTPMrVfk-unsplash.jpg"> &nbsp;
	<img src="image/food/jason-leung-AUAuEgUxg5Q-unsplash.jpg">
</div>
`;

var nightMenu = `
<p>
	<span class="bold underline">Steak</span>: Two pound steak with a medley of vegetable. Steak can be medium rare, well done, or raw. &emsp; $16.95 <br><br>
	<span class="bold underline">Fish and Chips</span>: Battered Cod that is fried in vegetable oil as well with fries, also deep fried in vegetable oil. &emsp; $10.95 <br><br>
	<span class="bold underline">Clam Chowder</span>: A soup containing clams and bread. Can be styled as New England or Manhatten. &emsp; $12.95 <br><br>
	<span class="bold underline">Pizza</span>: Pizza topped with cheese and tomato and choice of topping. Topping includes extra cheese, pepperoni, vegetable, or steak. &emsp; $9.95 <br><br>
	<span class="bold underline">Philly Steak Sandwich</span>: A sub stuffed with steak and cheese. &emsp; $11.95
</p>
<div>
	<img src="image/food/meelan-bawjee-A_tPBct4tz8-unsplash.jpg"> &nbsp;
	<img src="image/food/vladimir-gladkov-oSZ8WBaCbcg-unsplash.jpg">
</div>
`;

var menu = [
	morningMenu,
	afternoonMenu,
	nightMenu];

document.querySelector('section').innerHTML = menu[theDay()];

