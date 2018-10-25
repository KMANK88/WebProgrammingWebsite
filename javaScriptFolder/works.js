function readData()
{
	

	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
	
    if (this.readyState == 4 && this.status == 200) {
		//var count = calculateNumber();
		var base = "Name of Episodes from Rick and Morty using a web worker<br>";
        var object = JSON.parse(this.responseText);
		var mainString = base;
		for (g in object)
		{
			mainString += object[g].name + "<br>";
		}
        postMessage(mainString);       
    }
	/*else
	{
		alert(this.status);
	}*/
};
xmlhttp.open("GET", "../jsonFolder/rickandMorty.json", true);
xmlhttp.send();
	
}

readData();