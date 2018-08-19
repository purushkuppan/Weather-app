const request = require('request');

var getCode = (address) => {
    return new Promise( (resolve, reject) => {
        var encodedAddress = encodeURIComponent(address);
        request({
            url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
            json: true
        }, (error, response, body) => {
            if (error) {
                reject('Unable to connect to Google servers.');
            } else if (body.status === 'ZERO_RESULTS') {
                reject('Unable to find that address.');
            } else if (body.status === 'OK') {
                resolve( {
                    address: body.results[0].formatted_address,
                    latitude: body.results[0].geometry.location.lat,
                    longitude: body.results[0].geometry.location.lng
                });
            }
        });
        }

    )
}

//6262 home port dr fort worth texas 76131
//00000


getCode('kjasdjk').then(
    (result) => {
        console.log(JSON.stringify(result, undefined, 2))
    }, (error) => {
        console.log('Error :1', error)

    }
)