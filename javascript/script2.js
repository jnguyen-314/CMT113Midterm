// JavaScript Document
//for part 2 of the project
//which is conversion of dollars to something
//the conversion will be into a table.

//change header name for part 2
document.querySelector('header').innerHTML = `
<h1>
<i class="fa fa-money"></i>
Dollar Conversion Table
<i class="fa fa-money"></i>
</h1>
`;

//formatting the page to tailor part 2
function formatPage() {
	var part2Page = document.querySelector('section');
	part2Page.innerHTML = `
		<form></form>
		<br>
		<table></table>
`
}


//create Form for user input
function UserForm() {
	var createForm = document.querySelector('form');
	createForm.innerHTML = `
		<input type="radio" name="conversionType" value="0">Euros <br>
		<input type="radio" name="conversionType" value="1">Francs <br>
		<input type="radio" name="conversionType" value="2">Pesos <br><br>
		
		Place increment value: <br>
		<input type="number" min=1 max=100 name="tableInterval" value="1"> <br><br>

		<input type="button" onClick="conversionMath(conversionType,tableInterval)" value="Submit">
`
}

//Troubleshoots the table increment value. Has to be in range (1-100)
function troubleShoot(num) {
	if (num <= 0 || num >100) {
		alert("Choose a number in range of 1-100.");
		return false;
	}
	else {
		return true;
		//do nothing, proceeds to conversionMath function
	}
}



//Do conversion math and create table
function conversionMath(conversionType, tableInterval) {
	var cT = parseInt(conversionType.value);
	var tI = parseInt(tableInterval.value);
	
	var typeName = ["Euro", "Franc", "Peso"];
	var typeConversion = [.93, 1.035, 15.63];//Dollar to Euro/Franc/Peso
	var createTable = document.querySelector('table');
	
	
	//troubleshoots the interval value
	if (troubleShoot(tI)==false) {
		return;
	}
	
	var tableString;
	tableString = "<tr><th>Dollar</th><th>"+typeName[cT]+"</th></tr>";
	
	for (var num=tI ;num <=100; num+= tI) {
		tableString += "<tr><td>"+num+"</td><td>";//Dollar value
		tableString += (num * typeConversion[cT]).toFixed(2);//Conversion value
		tableString += "</td></tr>";	
	}
	createTable.innerHTML = tableString;
}

formatPage();
UserForm();