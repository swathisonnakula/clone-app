var request = require('request')
var client_id = 'a8e658f28736410182467dd071179804';
var client_secret = '9ed331e45b414f3dafaf02be21a6a300';

var authOptions = {
    url: 'https://accounts.spotify.com/api/token',
    headers: {
        'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
    },
    form: {
        grant_type: 'client_credentials'
    },
    json: true
};

request.post(authOptions, function (error, response, body) {
    if (!error && response.statusCode === 200) {
        console.log(body)
    }
});