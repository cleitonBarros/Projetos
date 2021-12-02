const API_URL= 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=4a30462da34502c7f363da19f1f6a92b&page=1'
const IMG_PATH ='https://image.tmdb.org/t/p/w1280'
const SEARCH_API= 'https://api.themoviedb.org/3/search/movie?api_key=4a30462da34502c7f363da19f1f6a92b&query="'
const main = document.getElementById('main')
const form = document.getElementById('form')
const search = document.getElementById('search')

// get movies
async function getMovies(url){
    const res = await fetch(url)
    const data = await res.json()
    showMovies(data.results)


}
form.addEventListener('submit',(e)=>{
    e.proventDefault()

    const searchTerm = search.value
    if(searchTerm && searchTerm !== '' ){
        getMovies(SEARCH_API + searchTerm)
         search.value=''
    }else{
        window.location.reload()
    }
})
//show movies
function showMovies(movies){
    main.innerHTML=''
    movies.forEach((movie)=>{
        const{ title,poster_path, vote_average, overview} = movie

        const movieEl = document.createElement('div')
        movieEl.classList.add('movie')
        movieEl.innerHTML = `

        <img src="${IMG_PATH + poster_path}" alt="${title}">
        <div class="movie-info">
             <h3>${title}</h3>
            <span class="${getclassByRate(vote_average)}">${vote_average}</span>
        </div>
        <div class="overview">
            <h3>overview</h3>
            ${overview}
        
        </div>
    
        
        `
        main.appendChild(movie)
    })

}
function getclassByRate(vote){
    if(vote >= 8){
        return 'green'
        
    }else if(vote >=6){
        return 'orange'
    }else{
        return 'red'
    }
}