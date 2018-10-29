var movies = [
    {
       title: "Titanic",
        hasWatched: true,
        rating: 6
    },
    {
        title: "Saving private ryan",
        hasWatched: false,
        rating: 7
    },
    {
        title: "Fast and furious 3",
        hasWatched: false,
        rating: 5
    }
] 
movies.forEach(function(movie){
    var result = "You have ";
    if(movie.hasWatched){
        result = result + "watched";

    }else{
        result = result + "not seen";
    }
    result = result  + "\"" + movie.title + "\" - ";
    result = result + movie.rating + "stars";
    alert(result);
    //console.log()
})
