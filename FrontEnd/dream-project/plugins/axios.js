export default function ({ $axios, $toasted, redirect }) {
    $axios.onRequest(config => {
        console.log('Making request to ' + config.url)
    })

    $axios.onResponse(response => {
        var error = response.data.Error;
        if(error != null)
            $toasted.show(error.Message);
        else
            return response.data.Data;
    })

    $axios.onRequestError(error => {
        const code = parseInt(error.response && error.response.status)
        
        switch(code){
            case 400: 
                redirect('/400');
                return;
            case 404:
                console.log('not found');
                return;
        }
    })

    $axios.onResponseError(error => {
        const code = parseInt(error.response && error.response.status)
    
        switch (code) {
            case 400:
                redirect('/400');
                return;
            case 404:
                console.log('Has error ', code);
                return;
        }
    })
}