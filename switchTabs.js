class switchTabs{
    constructor(data,statsElement){
        this.statsElement = statsElement;
        this.data = data;
        this.run();
    }
    ontabClick(id,localData){
        let self =  this;
        $(self.statsElement).find('.list-group').empty();
        for(let datum of localData.items.slice(0,Math.min(7,localData.items.length))){
            $(self.statsElement).find('.list-group').append(`
            <a href="#" class="list-group-item">${datum.name.substring(0,Math.min(65,datum.name.length))}</a>
            `);
        }
    }


    run(){
        let self = this;
        console.log("Simply Runned");
        $(self.statsElement).find("#comics").find('button').on('click',function(e){
            self.ontabClick("comics",self.data.comics);
        });
        $(self.statsElement).find("#events").find('button').on('click',function(e){
            self.ontabClick("events",self.data.events);
        });
        $(self.statsElement).find("#series").find('button').on('click',function(e){
            self.ontabClick("series",self.data.series);
        });    
        $(self.statsElement).find("#stories").find('button').on('click',function(e){
            self.ontabClick("stories",self.data.stories);
        });

        self.ontabClick("comics",self.data.comics);
    }
}