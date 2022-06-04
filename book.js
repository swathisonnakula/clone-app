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

        const url1 = `https://itunes.apple.com/search?country=us&term=${searchText}&media=ebook&entity=ebook`
        const xhr = new XMLHttpRequest();
        xhr.open("GET", url1);

        xhr.onreadystatechange = () => {
            if (xhr.status === 200 && xhr.readyState === 4) {
                const response = JSON.parse(xhr.responseText);
                console.log(response);

                let output = "";
                response.results.forEach(result => {
                    output +=
                        `<div class=" container d-flex flex-row p-3 justify-content-between ">

                        <div class="p-4">
                            <img src="${result.artworkUrl100}" width="200px" height ="250px" alt="">
                        </div>

                        <div class="">

                            <h3 class="text-black">${result.trackName}</h3>
                            <h3 class="text-black">Genres : <span class="h4 text-warning">${result.genres}</span></h3>

                            <h3 class="text-black">Overview :<span class="text-warning">${result.description}</span>
                            </h3>
                            <h3 class="text-black">Author Name : <span class="h4 text-warning">${result.artistName}</span></h3>
                            <h3 class="text-black">price : <span class="h4 text-warning">${result.formattedPrice}</span></h3>

                            <a href="${result.trackViewUrl}" target=_"blank"><button class="btn btn-warning">Buy now</button></a>
                            <br><br><hr>

                        </div>
                    </div>
                        `


                    document.querySelector("#book-view").innerHTML += output;
                    document.getElementById('search-text').value = ''



                })



            }
        };
        xhr.send();
    }
});
