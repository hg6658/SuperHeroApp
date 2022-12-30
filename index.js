var publicKey = '6f4d1bd7507d9dae8517f635f3a8d1c2';
var timestamp = '1672326452988';
var hash = 'd98f977976f1da7c8c6c3a8802b3ea78';
var createdebounce  = function(){
    let interIndice;
    return function(string,timeLapse){
        //console.log(interIndice);
        if(interIndice){
            clearTimeout(interIndice);
        }
        interIndice = setTimeout(
            function(){
                fetch(string)
                .then(response => response.json())
	            .then(function(data){
                    $('#searchSuggestions').show().empty();
                    for(let datum of data.data.results){
                        let child = $('<div/>')
                        .attr("suggestionid", `${datum.id}`)
                        .addClass("superHero")
                        .append($('<div/>').addClass("heroName").append($(`<a href='./superHero.html'>${datum.name}</a>`)))
                        let favoriteHeroes = localStorage.getItem('favoriteHeroes');
                        if(favoriteHeroes){
                            favoriteHeroes = JSON.parse(favoriteHeroes);
                            if(favoriteHeroes[`${datum.id}`] && favoriteHeroes[`${datum.id}`]==true){    
                                child.append(`<div class="favButton">
                            <button>
                                <i class="fa-solid fa-star fa-xl"></i>
                            </button>
                        </div>`);
                            }else{
                                child.append(`<div class="favButton">
                            <button>
                                <i class="fa-regular fa-star fa-xl"></i>
                            </button>
                        </div>`);
                            }
                        }else{
                            child.append(`<div class="favButton">
                            <button>
                                <i class="fa-regular fa-star fa-xl"></i>
                            </button>
                        </div>`);
                        }
                        
                        $('#searchSuggestions').append(child);
                    }
                    $('#searchSuggestions').children().each(function(){
                        let self = this;
                        new superHero(self);
                    })
                })
	            .catch(err => console.error(err));
            },timeLapse);
    }
}
var debounce = createdebounce();    


$("input#name").keyup(function(e){
    if(e.target.value!=""){
        let string = `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${e.target.value}&ts=${timestamp}&apikey=${publicKey}&hash=${hash}`;
        debounce(string,500);
    }else{
        $('#searchSuggestions').hide()
    }
  });

$('#favoritesList').on('click',function(e){
    e.preventDefault();
    location.href = "./myfavourites.html";
})



