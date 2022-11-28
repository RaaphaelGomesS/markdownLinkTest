function extrairLinks(arr) {
  return arr.map((objeto) => {
    return Object.values(objeto).join();
  });
}

async function checaStatus(urlLista) {
  const arrStatus = await Promise.all(
    urlLista.map(async (url) => {
      try {
        const response = await fetch(url);
        return `${response.status} - ${response.statusText}`;
      } catch (error) {
        return manejaErros(error);
      }
    })
  );
  return arrStatus;
}

function manejaErros(error) {
  if (error.cause.code === "ENOTFOUND") {
    return "link não encontrado";
  } else {
    return "Ocorreu algum erro";
  }
}

async function listaValidada(listaDeLinks) {
  const links = extrairLinks(listaDeLinks);
  const status = await checaStatus(links);

  return listaDeLinks.map((obj, indice) => 
    ({
      ...obj,
      status: status[indice],
    })
  );
}

export default listaValidada;
