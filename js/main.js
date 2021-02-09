new Vue({
    el:'#app',
    data:{
        boxListFilms:[],
        search:'',
    },
    methods:{
        
        cerca:function(){
            let self=this
            axios.get(' https://api.themoviedb.org/3/search/movie?api_key=4950e05cc9431b58c3a17d768d6eea1b&query=' + this.search)
                  .then(function(element) {
                   const arrayVideo=element.data.results;
                   self.boxListFilms=arrayVideo;  
                  });
        }
    },
    mounted() {

       
      }



})//fine di vue