var publicKey = '6f4d1bd7507d9dae8517f635f3a8d1c2';
var timestamp = '1672326452988';
var hash = 'd98f977976f1da7c8c6c3a8802b3ea78';
var currentHero = localStorage.getItem('SuperHero');
let string = `https://gateway.marvel.com:443/v1/public/characters/${currentHero}?ts=${timestamp}&apikey=${publicKey}&hash=${hash}`;
fetch(string)
    .then(response => response.json())
	.then(function(data){
            data = data.data.results[0]
            if(data){
                let maxwidth = Math.min(30,data.name.length);
                $('#modelName').empty().append(`${data.name.substring(0,maxwidth)}`);
                $('#description').find('p').empty().append(`${data.description}`);
                $('#modelPicture').empty().append(`<img src="${data.thumbnail.path+"."+data.thumbnail.extension}"/>`);
                new switchTabs(data,$('#stats'));
            }
    })
    .catch(err => console.error(err));     

$('#back').on('click',function(e){
    e.preventDefault();
    location.href = "./index.html";
    
})
                