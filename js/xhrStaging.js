//Need to abstract away XHR so it can be user in data driven compenents
//Need to figure out if I want independent data driven components or one
//monolithic state that drives all data driven components
//Need to integrate promises with XHR 

let xhr = new XMLHttpRequest();

xhr.open('GET', 'https://api.punkapi.com/v2/beers');
xhr.responseType = 'json';
xhr.send();
xhr.onload = ()=>{
    if(xhr.status !== 200){
        console.log(`Error: ${xhr.status}: ${xhr.statusText}`);
    }else{
        console.log(xhr.response);
    }
};

xhr.onprogress = (event)=>{
    if(event.lengthComputable){
        console.log(`Received ${event.loaded} of ${event.total} bytes`);
    }else{
        console.log(`Received ${event.loaded} bytes`);
    }
};

xhr.onerror = ()=>{
    console.log('Request failed');
};