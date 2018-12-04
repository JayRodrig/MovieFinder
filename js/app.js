/* 
API KEY OMDb - d07c779a
*/

const getMovieData = (movieTitle, cb, API_KEY = "d07c779a") => {

    const url = `http://www.omdbapi.com/?t=${movieTitle}&apikey=${API_KEY}`

    const request = new XMLHttpRequest();
    
        request.open('GET', url);
        request.addEventListener('load', e => {
            const data = JSON.parse(e.currentTarget.response);
            cb(data);
        });
        request.send();
}

getMovieData('Shrek', data => {
    console.log(data)
})