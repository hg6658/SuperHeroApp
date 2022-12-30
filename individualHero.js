class individualHero{
    constructor(favoriteHero){
        this.favoriteHero = favoriteHero;
        this.nameClick();
        this.favoriteClick();
    }

    nameClick(){
        let self = this;
        //console.log($(self.favoriteHero).attr('suggestionid'));
        $(this.favoriteHero).find('a').on('click',function(e){
            e.preventDefault();
            let id = $(self.favoriteHero).attr('suggestionid');
            localStorage.setItem('SuperHero',id);
            location.href = "./superHero.html";
        });
    }

    favoriteClick(){
        let self = this;
        $(this.favoriteHero).find('button').on('click',function(e){
            e.preventDefault();
            let id = $(self.favoriteHero).attr('suggestionid');
            let buttonTag = $(self.favoriteHero).find('button');
            let obj = localStorage.getItem('favoriteHeroes');
            obj = JSON.parse(obj);
            obj[id]=false;
            localStorage.setItem('favoriteHeroes',JSON.stringify(obj));
            $(self.favoriteHero).remove();
        })
    }
}