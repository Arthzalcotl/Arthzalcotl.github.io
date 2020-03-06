$(document).ready((e) => {
	listSort(data)

	let data_str = ''
	for(item of data) {
		data_str += '<div class="col-sm-3">';
		data_str += item.name
		data_str += '</div>';
	}
	$('.container .row').html(data_str);
});

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