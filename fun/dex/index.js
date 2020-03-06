$(document).ready((e) => {
	let data_str = ''
	for(item of data) {
		data_str += '<div class="col-sm-3">';
		data_str += item.name
		data_str += '</div>';
	}
	$('.container .row').html(data_str);
});