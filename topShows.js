const apiKey = `6f584776d7f9c9d7af359da7e827ab71`
const url = `https://api.themoviedb.org/3/tv/top_rated?api_key=${apiKey}`

const xhr = new XMLHttpRequest();
xhr.open("GET", url);

xhr.onreadystatechange = () => {
    if (xhr.status === 200 && xhr.readyState === 4) {
        const response = JSON.parse(xhr.responseText);
        console.log(response);

        let output = "";
        response.results.forEach(result => {
            output +=
                `<div class="cont-item">
                <div class="card border-0 mb-2 rounded " style="width: 15rem;height:20%">
                    <img class="card-img-top" src="https://image.tmdb.org/t/p/w500/${result.poster_path}" alt="Card image cap">
                    <h5 class="card-title text-black bg-white"><b>${result.name}</b></h5>

                </div>
            </div>



            
                `

            document.querySelector("#cont").innerHTML += output;
        })
    }
}
xhr.send()


{/* <div class="card mb-3" style="max-width: 540px";background-color: #b3b3b3;">
  <div class="row g-0 style="background-color:#b3b3b3;">
    <div class="col-md-4" >
      <img src="https://image.tmdb.org/t/p/w500/${result.poster_path}" style="background-color:#b3b3b3;"class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8 p-3 " style="background-color:  #b3b3b3;">
      <div class="card-body "style="background-color: #b3b3b3;">
        <h5 class="card-title text-black"><b>${result.name}</b></h5>
        <p class="card-text"><small class="text-white">${result.overview}</small></p>
        <p class="card-text"><small class="text-black"><b>${result.vote_average}%</b></small></p>

      </div>
    </div>
  </div>
</div> */}



