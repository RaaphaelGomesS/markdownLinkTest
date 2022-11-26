import fs from "fs";
import chalk from "chalk";

function extrairLinks(texto) {
  const regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm;
  const capturas = [...texto.matchAll(regex)];
  const resultados = capturas.map((captura) => ({ [captura[1]]: captura[2] }));
  return resultados.length !== 0 ? resultados : chalk.red("Não possui links");
}

function trataErro(erro) {
  console.log(erro);
  throw new Error(chalk.red(erro.code, "Não há arquivo no diretório"));
}

async function pegaArquivo(caminho) {
  try {
    const encoding = "utf-8";
    const texto = await fs.promises.readFile(caminho, encoding);
    return extrairLinks(texto);
  } catch (erro) {
    trataErro(erro);
  }
}

pegaArquivo("./arquivos/texto.md");

export default pegaArquivo;
