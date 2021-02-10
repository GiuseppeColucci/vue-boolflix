new Vue({
    el:'#app',
    data:{
        boxListFilms:[],
        boxSerieTv:[],
        search:'',
        imgLink:'https://image.tmdb.org/t/p/w500/'
    },
    methods:{
        totalSearch:function(){
            this.cercaFilms();
            this.cercaSerieTV();
        },
        //parte Films
        cercaFilms:function(){
            let self=this
            axios.get(' https://api.themoviedb.org/3/search/movie?api_key=4950e05cc9431b58c3a17d768d6eea1b&query=' + this.search)
                  .then(function(element) {
                   const arrayVideo=element.data.results;
                   self.boxListFilms=arrayVideo;  
                  });
        },
        //parte serie tv
        cercaSerieTV:function(){
            let self=this
            axios.get(' https://api.themoviedb.org/3/search/tv?api_key=4950e05cc9431b58c3a17d768d6eea1b&language=it_IT&query=' + this.search)
                  .then(function(element) {
                   const arraySerieTv=element.data.results;
                   self.boxSerieTv=arraySerieTv;  
                  });
        },
        //parte voto
        Voto(element){
            return Math.ceil(element / 2);
        }
    },
    mounted() {

       
      }



})//fine di vue