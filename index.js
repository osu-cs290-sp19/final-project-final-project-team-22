/*$("#heroe-search-input").on("keyup",function(){
	var g = $(this).val();
	$(".herors-card.fix lable").each(function(){
		var s = &(this).text().lowerCase();
		if(s.indexOf(g)!=-1){
			$(this).parent().parent().show();
		}
		else{
			$(this).parent().parent().hide();
		}
	});
});

$("#heroe-search-input").on("keyup", function() {
    var g = $(this).val().toLowerCase();
    $(".heros-card .heroes-name").each(function() {
        var s = $(this).text().toLowerCase();
        $(this).closest('.heroes-container')[ s.indexOf(g) !== -1 ? 'show' : 'hide' ]();
    });
});
*/
var allheroes[];

function search(){
	document .getElementById('heroe-search-input').value = "";
	var s = document.getElementByClassName('')[0];
	var heroContainer = document.querySelector('.heroes-container');
	if(heroContainer){
		while(heroContainer.lastChild){
			heroContainer.removeChild(heroContainer.lastChild);
		}
	}
	allheroes.forEach(function(heroes-card){
		if(herosearch(heroes-card,s)){
			insertNewhero(heroes-card.heriesPhoto,heroes-card.heroes-name);
		}
	}
}

window.addEventListener('DOMContentLoaded', function () {
var searchButton = document.getElementById('heroe-search-input');
  if (searchButton) {
    searchButton.addEventListener('click', doSearchUpdate);
  }

  var searchInput = document.getElementById('heroe-search-input');
  if (searchInput) {
    searchInput.addEventListener('input', doSearchUpdate);
  }
}

//document,getElementByClassName('
