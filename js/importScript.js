function importComponent(path){
    let newScript = document.createElement('script');
    newScript.setAttribute('src', path);
    document.head.appendChild(newScript);
}