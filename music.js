const audio = document.querySelector('#audio')
const searchButton = document.querySelector('#search-btn')
searchButton.addEventListener('click', (e) => {
    e.preventDefault()
    console.log('clicked')
    const searchText = document.querySelector('#search-text').value
    console.log(searchText);


    const url = `https://api.spotify.com/v1/search?q=${searchText}f&type=track&market=IN&limit=7&offset=5`
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url);

    xhr.setRequestHeader("Authorization", "Bearer BQDQISTQ1Bx_qucpvgNu76r3lnVKvrMGJ54NLoJK7jvguV36p6KTIRD0_TwQ9_yrjwqOoYjMF6pDNQA5sTA")
    xhr.setRequestHeader("Accept", "application/json")
    xhr.setRequestHeader("Content-Type", "application/json")

    xhr.onreadystatechange = () => {
        if (xhr.status === 200 && xhr.readyState === 4) {
            const response = JSON.parse(xhr.responseText);
            console.log(response);

            let output = "";
            response.tracks.items.forEach(item => {
                output +=

                    `<div class="cont-item">
                    <div class="card border-0 rounded " style="width: 13rem;height:20%">
                        <a href="${item.external_urls.spotify}" target="_blank"><img class="card-img-top" src="${item.album.images[0].url}" alt="Card image cap"></a>
                        <p class="h6 card-body text-success">${item.name}</p>

                       

                    </div>
                </div>`

                document.querySelector("#cont").innerHTML += output;
                const searchText = document.querySelector('#search-text').value = ""
            })



        };
    }
    xhr.send();

})



