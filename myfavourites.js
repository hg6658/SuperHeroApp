var publicKey = '6f4d1bd7507d9dae8517f635f3a8d1c2';
var timestamp = '1672326452988';
var hash = 'd98f977976f1da7c8c6c3a8802b3ea78';

let obj = localStorage.getItem('favoriteHeroes');
if(obj){
    obj = JSON.parse(obj);
    let isOneTrue = Object.keys(obj).some(function(key){
        return obj[key]==true;
    })
    if(isOneTrue){
        $('#listHeroes').empty();
        for(let key of Object.keys(obj)){
            if(obj[key]==true){
                let string = `https://gateway.marvel.com:443/v1/public/characters/${key}?ts=${timestamp}&apikey=${publicKey}&hash=${hash}`;
                fetch(string)
                    .then(response => response.json())
	                .then(function(data){
                        data = data.data.results[0] 
                        let element;
                        if(data){
                            element = $(`<div class="model" suggestionid=${key}>
                            <div class="modelPicture">
                                <img src=${data.thumbnail.path+"."+data.thumbnail.extension} alt/>
                            </div>
                            <div class="modelName"><a href="./superHero.html">${data.name}</a></div>
                            <div class="favButton"><button><i class="fa-solid fa-star fa-xl"></i></button></div>
                        </div>`);
                        $('#listHeroes').append(element);
                        }
                        return element;
                    }).then(function(element){
                        //console.log("HERO added");
                        new individualHero(element);
                    }
                    )
                    .catch(err => console.error(err));
            }    
        }
    }else{
        $('body').empty();
        $('body').append(`<div id="page404">
        <h1>No Super Hero in Favourite List</h1>
         </div>`);
    }
}else{
    $('body').empty();
    $('body').append(`<div id="page404">
        <h1>No Super Hero in Favourite List</h1>
         </div>`);
}
//

$('#back').on('click',function(e){
    e.preventDefault();
    location.href = "./index.html";

})