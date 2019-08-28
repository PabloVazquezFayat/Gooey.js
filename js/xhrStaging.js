//Need to abstract away XHR so it can be user in data driven compenents
//Need to figure out if I want independent data driven components or one
//monolithic state that drives all data driven components
//Need to integrate promises with XHR 

function getData(method, url, dataType){
    return new Promise((resolve, reject) => {

        let xhr = new XMLHttpRequest();

        if(!method){
            return console.log('Request METHOD must be set');
        }

        if(!url){
            return console.log('Request URL must be set');
        }

        xhr.open(method, url);
        
        if(!dataType){
            xhr.responseType = 'json';
        }else{
            xhr.responseType = dataType;
        }

        xhr.onload = () => resolve(xhr.response);
        xhr.onerror = () => reject(xhr.status);
        xhr.send();

    });
}

let data = getData('GET', 'http://localhost:3000/', 'json')
    .then((res)=>{
        console.log(res);
    })
    .catch((err)=>{
        console.log(err);
    });

