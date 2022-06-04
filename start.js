var video = document.getElementById("video")
const searchButton = document.getElementById('search-btn')

searchButton.addEventListener('click', (e) => {
    e.preventDefault()
    // console.log('clicked');

    const searchText = document.getElementById('search-text').value
    // console.log(searchText)
    if (searchText == '') {
        alert("Enter the movie name")
    }
    else {

        const apiKey = `6f584776d7f9c9d7af359da7e827ab71`
        const url1 = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchText}`
        const xhr = new XMLHttpRequest();
        xhr.open("GET", url1);

        xhr.onreadystatechange = () => {
            if (xhr.status === 200 && xhr.readyState === 4) {
                const response = JSON.parse(xhr.responseText);
                console.log(response);

                let output = "";
                response.results.forEach(result => {
                    output +=
                        `<div class=" container d-flex flex-row p-2 justify-content-between">

                <div class="">
                    <img src="https://image.tmdb.org/t/p/w500/${result.poster_path}" height="65%"alt="">
                </div>

                <div class="text-white">

                    <h3>Movie name : <span class=" h4 text-primary">${result.title}</span></h3>
                    <h3>Original name : <span class=" h4 text-primary">${result.original_title}</span></h3>
                    <h3>Release date : <span class="h4 text-primary">${result.release_date}</span></h3>
                    <h3 class="text-white">Overview :</h3>
                    <p class="h5 text-primary">${result.overview}</p>
                    <h3 class="text-white">Original Language : <span class="h4 text-primary">${result.original_language}</span></h3>
                    <h3>Average voting : <span class="h4 text-primary">${result.vote_average * 10}%</span></h3>


                </div>
            </div>`
                    const movieId = `${result.id}`
                    document.querySelector("#movie-view").innerHTML += output;
                    document.getElementById('search-text').value = ''
                    getvideo(movieId)


                })



            }
        };
        xhr.send();
    }
});


function getvideo(movieId) {
    console.log(movieId)
    let xhr4 = new XMLHttpRequest()
    let url4 = `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=abdca3eea1b7fb0c1f10423e2fc33135`
    xhr4.open("GET", url4)
    xhr4.onreadystatechange = function () {
        if (xhr4.status == 200 && xhr4.readyState == 4) {
            var data4 = JSON.parse(xhr4.responseText)
            console.log(data4)
            data4.results.forEach(item => {
                video.setAttribute(
                    "src",
                    "https://www.youtube.com/embed/" + item.key + "?autoplay=1&controls=0"
                )
            })
        }
    }


    xhr4.send()
}





