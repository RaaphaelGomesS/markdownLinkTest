function extrairLinks(arr){
    return arr.map((objeto) => {
        return Object.values(objeto).join();
    })
}

function listaValidada(listaDeLinks){
    return extrairLinks(listaDeLinks);
}

export default listaValidada;