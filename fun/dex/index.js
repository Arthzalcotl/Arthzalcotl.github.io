$(document).ready((e) => {
	let data;
	loadJSON((response) => {
		data = JSON.parse(response);
	});

	listSort(data)

	let data_str = ''
	for(item of data) {
		data_str += '<div class="col-sm-3">';
		data_str += item.name
		data_str += '</div>';
	}
	$('.container .row').html(data_str);
});

function loadJSON(callback) {   
	var xobj = new XMLHttpRequest();
	xobj.overrideMimeType("application/json");
	xobj.open('GET', './data.json', true);
	xobj.onreadystatechange = () => {
		if (xobj.readyState == 4 && xobj.status == "200") {
			callback(xobj.responseText);
		}
	};
	xobj.send(null);  
}

function listSort(list_data) {
	list_data.sort(function(a, b) {
    var text_a = a.group.toLowerCase();
    var text_b = b.group.toLowerCase();
    if(text_a < text_b) return -1;
		if(text_a > text_b) return 1;
		
    if(a.name < b.name) return -1;
		if(a.name > b.name) return 1;
		
    return 0;
  });
}