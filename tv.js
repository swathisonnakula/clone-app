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
    const url1 = `https://api.themoviedb.org/3/search/tv?api_key=${apiKey}&query=${searchText}`
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url1);

    xhr.onreadystatechange = () => {
      if (xhr.status === 200 && xhr.readyState === 4) {
        const response = JSON.parse(xhr.responseText);
        console.log(response);

        let output = "";
        response.results.forEach(result => {
          output +=
            `
                        <div class="card mb-3" style="max-width: 840px";background-color: #b3b3b3;">
          <div class="row g-0 style="background-color:#b3b3b3;">
            <div class="col-md-4" >
              <img src="https://image.tmdb.org/t/p/w500/${result.poster_path}" style="background-color:#b3b3b3;class="img-fluid rounded-start" alt="...">
            </div>
            <div class="col-md-8 p-3 " style="background-color:  #b3b3b3;">
              <div class="card-body "style="background-color: #b3b3b3;">
                <h5 class="card-title text-black"><b>${result.name}</b></h5>
                <p class="card-text"><small class="text-white">${result.overview}</small></p>
                <p class="card-text"><small class="text-black"><b>${result.vote_average}%</b></small></p>
        
              </div>
            </div>
          </div>
        </div>`
          const genreId = `${result.id}`
          // console.log(genreId);
          document.querySelector("#show-view").innerHTML += output;
          document.getElementById('search-text').value = ''
          // document.getElementById("#movie-view").display = ""
          // getvideo(movieId)


        })



      }
    };
    xhr.send();
  }
});
{/* <div class=" container d-flex flex-row p-2 justify-content-between">

<div class="">
    <img src="https://image.tmdb.org/t/p/w500/${result.poster_path}" height="60%"alt="">
</div>

<div class="text-white">
    <h3>Movie name : <span class=" h4 text-dark">${result.name}</span></h3>
    <h3 class="text-white">Overview :</h3>
    <p class="h5 text-dark">${result.overview}</p>
    <h3 class="text-white">Original Language : <span class="h4 text-dark">${result.original_language}</span></h3>
    <h3 class="text-white">Origin country : <span class="h4 text-dark">${result.origin_country}</span></h3>
    <h3>Average voting : <span class="h4 text-dark">${result.vote_average * 10}%</span></h3>
</div>
</div> */}