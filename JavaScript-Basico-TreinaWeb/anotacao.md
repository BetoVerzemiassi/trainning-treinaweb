Objetos Nativos: Oficiais da linguagem, métodos prontos.
Objetos Hospedeiros: Métodos criados pelo desenvolvedor.

-------------------------------------------------------------
Mudar o conteúdo de uma tag HTML com base em IDS ou Classes

document.getElementById('title').innerHTML = 'TreinaWeb';

-------------------------------------------------------------

Trocar os atributos de um HTML

var logo = document.getElementById('logo');
logo.src = "TreinaWebLogo.png";

-------------------------------------------------------------


Validar valores de Inputs em formulários

var login = document.getElementById('login');
if(login.value === 'TreinaWeb'){
  //Restante da lógica
}

------------------------------------------------------------

Trocar o estilo da sua página

document.getElementById('TreinaWeb').style.fontSize = '100px';

-------------------------------------------------------------

Abstração: Processo em que retiramos o essencial de algo, para
poder criar uma estrutura que contenha as características
necessárias. No contexto em que estamos trabalhando. Tomando
como base uma cadeira, podemos abstrair a quantidade de pernas
que ela contém.

Herança: Como filhos herdamos características de nossos pais,
cor de cabelo, tamanho, manias desagradáveis ou até mesmo
comportamentos gestuais. Com objetos, dentro da programação
Orientada a Objetos podemos fazer o mesmo, tornando um objto,
pai e fazendo com que seus objetos filhos herdem comportamentos
ou características.

Polimorfismo: Característica de seres que podem assumir mais de
uma forma, sendo assim objetos que contém níveis mais altos de
abstração e instanciam níveis mais baixos de abstração. Como
exemplo, uma classe imposto que pode ser instanciada como ISS ou
COFINS.

Encapsulamento: Um objeto deve expor somente o necessário, sem
a necessidade de contar como algo foi realizado, desde que esse
algo seja feito.
--------------------------------------------------------------

Tipos Primitivos: strings, number, boolean, null e undefined

parseInt/parseFloat: Converte tipos de variáveis 
--------------------------------------------------------------

Aula7: Literais

É a forma real como a qual nos referimos a algo, em javascript 
quando nós criamos a strings, números e booleanos estamos
criando valores literais.

Objetos do tipo String, Number e Boolean, então seus valores 
literais não estão acessíveis a primeiro momento, para isso 
precisaremos utilizar o método valueOf. Esse método retira
os valores dos objetos.
-------------------------------------------------------------

Herança em javascript, todo objeto criado contém um protótipo
que pode ser acessado pela chave prototype, é a partir dos 
protótipos que podemos criar heranças em javascript.
-------------------------------------------------------------

Operadores new e instanceOf

instanceOf: quando criamos uma insância de um objeto podemos
em algum momento nos perguntar quem o criou, para isso podemos
utilizar o operador INSTANCEOF que verifica se um objeto é 
instancia de outro. Exemplo:

function Veiculo(){}

function Carro(){}

Carro.prototype = new Veiculo();

var gol = new Carro();

console.log(gol instanceof Carro);//true
console.log(gol instanceof Veiculo);//true
---------------------------------------------

O que é DOM

Document Object Model é uma convenção para
representação e interação com objetos em 
documentos HTML, XHTML e XML, todos os nós
de um documento são organizados em uma estrutura
de árvore que chamamos de DOM tree, esses objetos que 
estão dentro do DOM tree podem ser acessados e manipulados 
através de identificações que criamos (Ids,Classes,Nomes).
-----------------------------------------------------------

O Objeto Window

É a representação da janela de um navegador aberta, se o 
documento carregado conter frames(<iframe> tags), o navegador
criará um objeto window e um objeto para cada uma das frames
que o documento tiver.
------------------------------------------------------------

Document

É a representação do documento aberto na janela, é através dele
que conseguimos ter acesso a elemento do DOM, para isso iremos
utilizar alguns métodos que este objeto nos disponibiliza.

var elementoId = document.getElementById('elementoId');
var elementosClasse = document.getElementsByClassName('elementoClasse');
var elementosNome = document.getElementsByName('elementoNome'); 
var elementosTag = document.getElementsByTagName('div');

podemos acessar usando window.document... mesmo resultado

Criando Elementos

<div id="titulo"></div>
<script type="text/javascript">
	var tituloH1 = document.createElement("H1");
	var titulo = document.createTextNode('TreinaWeb');
	var tituloDiv = document.getElementById('titulo');

	tituloH1.appendChild(titulo);
  
	tituloDiv.appendChild(tituloH1);
</script>

Eventos

Podemos criar eventos a partir de arquivos externos, associando
o evento ao elemento. Isso irá ser feito com o método
addEventListener

<input type="button" id="treinaweb" value="TreinaWeb">
	<script type="text/javascript">
		var treinawebBtn = document.getElementById('treinaweb');
			treinawebBtn.addEventListener('click', function(e){
  
				alert('TreinaWeb');

			})
	</script>

onclick: Com o click no objeto
oncontextmenu: Quando ocorre um click de botão direito para abrir o menu de opções
ondblclick: Quando ocorre duplo click
onmousedown: Ocorre quando clicamos no elemento
onload: Ocorre no carregamento da página
onkeypress: Con o click de uma tecla
onscroll: Quando a barra de rolagem é ativada
onchange: Quando o valor de um objeto muda