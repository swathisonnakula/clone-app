const apiKey = `6f584776d7f9c9d7af359da7e827ab71`
const url = `https://api.themoviedb.org/3/trending/all/day?api_key=6f584776d7f9c9d7af359da7e827ab71`

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
                <div class="card border-0 rounded " style="width: 10rem;height:20%">
                    <img class="card-img-top" src="https://image.tmdb.org/t/p/w500/${result.poster_path}" alt="Card image cap">
                    
                </div>
            </div>`

            document.querySelector("#cont").innerHTML += output;
        })
    }
}
xhr.send()

{/* <h5 class="card-title text-center text-primary">${result.original_title}</h5> */ }




