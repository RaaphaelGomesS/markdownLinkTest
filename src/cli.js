import listaValidada from "./http-validação.js";
import pegaArquivo from "./index.js";
import chalk from "chalk";
import fs from "fs";

const caminho = process.argv;

function imprimeLista(valida, resultado, nomeArquivo = "") {
  if (valida) {
    console.log(
      chalk.yellow("lista validada"),
      chalk.black.bgYellow(nomeArquivo),
      listaValidada(resultado)
    );
  } else {
    console.log(
      chalk.yellow("lista de links"),
      chalk.black.bgYellow(nomeArquivo),
      resultado
    );
  }
}

async function processaTexto(argumentos) {
  const caminho = argumentos[2];
  const valida = argumentos[3] === "--valida";

  try {
    fs.lstatSync(caminho);
  } catch (error) {
    if (error.code == "ENOENT") {
      console.log(chalk.red("Diretório não existe"));
      return;
    }
  }

  if (fs.lstatSync(caminho).isFile()) {
    const resultado = await pegaArquivo(caminho);
    imprimeLista(valida, resultado);
  } else if (fs.lstatSync(caminho).isDirectory()) {
    const arquivos = await fs.promises.readdir(caminho);
    arquivos.forEach(async (nomeDeArquivo) => {
      const lista = await pegaArquivo(`${caminho}/${nomeDeArquivo}`);
      imprimeLista(valida, lista, nomeDeArquivo);
    });
  }
}

processaTexto(caminho);
