//Need to abstract away XHR so it can be user in data driven compenents
//Need to figure out if I want independent data driven components or one
//monolithic state that drives all data driven components
//Need to integrate promises with XHR 


// function getData(method, url, dataType){
//     let xhr = new XMLHttpRequest();

//     xhr.open(method, url);
//     xhr.responseType = dataType;
//     xhr.send();
//     xhr.onload = ()=>{
//         if(xhr.status !== 200){
//             return `Error: ${xhr.status}: ${xhr.statusText}`;
//         }else{
//             return xhr.response;
//         }
//     };
    
//     xhr.onprogress = (event)=>{
//         if(event.lengthComputable){
//             return `Received ${event.loaded} of ${event.total} bytes`;
//         }else{
//             return `Received ${event.loaded} bytes`;
//         }
//     };
    
//     xhr.onerror = ()=>{
//         return 'Request failed';
//     };
// }

function getData(method, url, dataType){
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.responseType = dataType;
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

