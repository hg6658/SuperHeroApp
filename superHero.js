class superHero{
    constructor(searchedElement){
        this.searchedElement = searchedElement;
        this.nameClick();
        this.favoriteClick();
    }

    nameClick(){
        let self = this;
        $(this.searchedElement).find('a').on('click',function(e){
            e.preventDefault();
            let id = $(self.searchedElement).attr('suggestionid');
            localStorage.setItem('SuperHero',id);
            location.href = "./superHero.html";
        });

    }

    favoriteClick(){
        let self = this;
        $(this.searchedElement).find('button').on('click',function(e){
            e.preventDefault();
            let id = $(self.searchedElement).attr('suggestionid');
            let buttonTag = $(self.searchedElement).find('button');
            if(localStorage.getItem('favoriteHeroes')){
                let obj = localStorage.getItem('favoriteHeroes');
                obj = JSON.parse(obj);
                if(obj[id] && obj[id]==true){
                    obj[id]=false;
                    buttonTag.empty();
                    buttonTag.append(`<i class="fa-regular fa-star fa-xl"></i>`);
                }else{
                    obj[id] = true;
                    buttonTag.empty();
                    buttonTag.append(`<i class="fa-solid fa-star fa-xl"></i>`);
                }
                localStorage.setItem('favoriteHeroes',JSON.stringify(obj));
            }else{
                let obj={};
                obj[id]=true;
                buttonTag.empty();
                buttonTag.append(`<i class="fa-solid fa-star fa-xl"></i>`);
                localStorage.setItem('favoriteHeroes',JSON.stringify(obj));
            }
        })
    }
}