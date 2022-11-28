
# Checador de links Markdown

Biblioteca para acessar arquivos de texto em Markdown, capturar os links espalhados pelo texto e checar se estão funcionando.


## 🚀 Tecnologias utilizadas

O projeto foi desenvolvido utilizando as seguintes tecnologias:

- [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- [Node.JS](https://nodejs.org/en/)

## ♟️ Dependências:

São as dependências necessárias para o funcionamento do projeto

```
  "dependencies": {
    "chalk": "5.0.1"
  }
```

## 🎫 Como instalar:

Clone o projeto

```bash
  git clone https://github.com/RaaphaelGomesS/markdownLinkTest.git

```

Entre no diretório do projeto

```bash
  cd markdownLinkTest
```

Instale as dependências

```bash
  npm i
```

**Adcione os arquivos que deseja checar dentro da pasta arquivos**

Para executar use "npm run cli" e após passe o diretório

```bash
  npm run cli ./arquivos/texto.md                   (passando o diretório do arquivo)
  npm run cli ./arquivos/                  (passando a pasta para mais de um arquivo)
```

Para checar os links use "npm run cli", passe o diretório e coloque a palavra "valida"

```bash
  npm run cli ./arquivos/texto.md valida            (passando o diretório do arquivo)
  npm run cli ./arquivos/ valida           (passando a pasta para mais de um arquivo)
```


## 👣 Retorno:

Usando ***npm run cli ./arquivos/texto.md*** será retornado um array de objetos com o nome do diretorio do link e o próprio link em sequencia.

Usando ***npm run cli ./arquivos/*** será retornado a mesma coisa, porém com o nome do arquivo que foram retirado os links.

Usando ***npm run cli ./arquivos/texto.md valida*** será retornado os links com o status do teste.

Usando ***npm run cli ./arquivos/ valida*** será retornado a mesma coisa, porém com o nome do arquivo que foram retirado os links..


## 🕹️ Exemplos 

***npm run cli ./arquivos/texto.md***

será retornado o nome do link e o link

## Resposta: 

```
lista de links  [
  {
    FileList: 'https://developer.mozilla.org/pt-BR/docs/Web/API/FileList'
  },
  {
    '<input>': 'https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/Input'
  },
  {
    DataTransfer: 'https://developer.mozilla.org/pt-BR/docs/Web/API/DataTransfer'
  },
  {
    HTMLCanvasElement: 'https://developer.mozilla.org/pt-BR/docs/Web/API/HTMLCanvasElement'
  },
  {
    'Implementation notes': 'https://developer.mozilla.org/pt-BR/docs/Web/API/File#implementation_notes'
  },
  { 'Teste de retorno 400': 'https://httpstat.us/404' },
  { 'gatinho salsicha': 'http://gatinhosalsicha.com.br/' }
]

```

***npm run cli ./arquivos/ valida***

será retornado o link e o status

## Resposta:

```
lista validada texto.md [
  {
    FileList: 'https://developer.mozilla.org/pt-BR/docs/Web/API/FileList',
    status: '200 - OK'
  },
  {
    '<input>': 'https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/Input',
    status: '200 - OK'
  },
  {
    DataTransfer: 'https://developer.mozilla.org/pt-BR/docs/Web/API/DataTransfer',
    status: '200 - OK'
  },
  {
    HTMLCanvasElement: 'https://developer.mozilla.org/pt-BR/docs/Web/API/HTMLCanvasElement',
    status: '200 - OK'
  },
  {
    'Implementation notes': 'https://developer.mozilla.org/pt-BR/docs/Web/API/File#implementation_notes',
    status: '200 - OK'
  },
  {
    'Teste de retorno 400': 'https://httpstat.us/404',
    status: '404 - Not Found'
  },
  {
    'gatinho salsicha': 'http://gatinhosalsicha.com.br/',
    status: 'link não encontrado'
  }
]
```

## 🕹️ Erros

Caso o diretorio passado não exista ou estiver incorreto: 

## Resposta: 

```
{
	"erro": "diretorio não existente"
}
```
Caso o arquivo chamado esteja errado ou não está no diretorio: 

## Resposta: 
 
```
{
	"erro": "não há arquivo no diretório"
}
```

Caso não possua links no arquivo markdown: 

## Resposta: 
 
```
{
	"erro": "não possui links"
}
```

Caso algum falhe na verificação dos links:

## Resposta: 
 
```
  {
    'testoDoLink': 'http://linkaleatorio.com.br/',
    status: 'link não encontrado'
  }
```