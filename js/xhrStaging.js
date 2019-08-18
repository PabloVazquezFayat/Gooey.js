//Need to abstract away XHR so it can be user in data driven compenents
//Need to figure out if I want independent data driven components or one
//monolithic state that drives all data driven components
//Need to integrate promises with XHR 

function getData(method, url, dataType){
    return new Promise((resolve, reject) => {

        const xhr = new XMLHttpRequest();

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

let data = getData('GET', 'https://api.punkapi.com/v2/beers', 'json')
    .then((res)=>{
        console.log(res);
    })
    .catch((err)=>{
        console.log(err);
    });

