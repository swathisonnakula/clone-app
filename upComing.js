const apiKey = `6f584776d7f9c9d7af359da7e827ab71`
const url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}`

const xhr = new XMLHttpRequest();
xhr.open("GET", url);

xhr.onreadystatechange = () => {
    if (xhr.status === 200 && xhr.readyState === 4) {
        const response = JSON.parse(xhr.responseText);
        console.log(response);

        let output = "";
        response.results.forEach(result => {
            output +=
                `
            
                <div class="card mb-3" style="max-width: 540px;background-color: #12122b;"">
  <div class="row g-0 style="background-color: #12122b;"">
    <div class="col-md-4">
      <img src="https://image.tmdb.org/t/p/w500/${result.poster_path}" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8 p-3 " style="background-color: #12122b;>
      <div class="card-body "style="background-color: #12122b;">
        <h5 class="card-title text-white"><b>${result.original_title}</b></h5>
        <p class="card-text"><small class="text-muted">${result.overview}</small></p>
        <p class="card-text"><small class="text-white"><b>${result.vote_average}%</b></small></p>

      </div>
    </div>
  </div>
</div>`

            document.querySelector("#cont").innerHTML += output;
        })
    }
}
xhr.send()

/* <h5 class="card-title text-center text-primary">${result.original_title}</h5>

<div class="cont-item">
                <div class="card border-0 rounded " style="width: 15rem;height:20%">
                    <img class="card-img-top" src="https://image.tmdb.org/t/p/w500/${result.poster_path}" alt="Card image cap">
                    <p class="card-text bg-black text-white p-2">${result.original_title}</p>
                </div>
            </div>
        
        */




