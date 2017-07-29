Objetos Nativos: Oficiais da linguagem, m�todos prontos.
Objetos Hospedeiros: M�todos criados pelo desenvolvedor.

-------------------------------------------------------------
Mudar o conte�do de uma tag HTML com base em IDS ou Classes

document.getElementById('title').innerHTML = 'TreinaWeb';

-------------------------------------------------------------

Trocar os atributos de um HTML

var logo = document.getElementById('logo');
logo.src = "TreinaWebLogo.png";

-------------------------------------------------------------


Validar valores de Inputs em formul�rios

var login = document.getElementById('login');
if(login.value === 'TreinaWeb'){
  //Restante da l�gica
}

------------------------------------------------------------

Trocar o estilo da sua p�gina

document.getElementById('TreinaWeb').style.fontSize = '100px';

-------------------------------------------------------------

Abstra��o: Processo em que retiramos o essencial de algo, para
poder criar uma estrutura que contenha as caracter�sticas
necess�rias. No contexto em que estamos trabalhando. Tomando
como base uma cadeira, podemos abstrair a quantidade de pernas
que ela cont�m.

Heran�a: Como filhos herdamos caracter�sticas de nossos pais,
cor de cabelo, tamanho, manias desagrad�veis ou at� mesmo
comportamentos gestuais. Com objetos, dentro da programa��o
Orientada a Objetos podemos fazer o mesmo, tornando um objto,
pai e fazendo com que seus objetos filhos herdem comportamentos
ou caracter�sticas.

Polimorfismo: Caracter�stica de seres que podem assumir mais de
uma forma, sendo assim objetos que cont�m n�veis mais altos de
abstra��o e instanciam n�veis mais baixos de abstra��o. Como
exemplo, uma classe imposto que pode ser instanciada como ISS ou
COFINS.

Encapsulamento: Um objeto deve expor somente o necess�rio, sem
a necessidade de contar como algo foi realizado, desde que esse
algo seja feito.
--------------------------------------------------------------

Tipos Primitivos: strings, number, boolean, null e undefined

parseInt/parseFloat: Converte tipos de vari�veis 
--------------------------------------------------------------

Aula7: Literais

� a forma real como a qual nos referimos a algo, em javascript 
quando n�s criamos a strings, n�meros e booleanos estamos
criando valores literais.

Objetos do tipo String, Number e Boolean, ent�o seus valores 
literais n�o est�o acess�veis a primeiro momento, para isso 
precisaremos utilizar o m�todo valueOf. Esse m�todo retira
os valores dos objetos.
-------------------------------------------------------------

Heran�a em javascript, todo objeto criado cont�m um prot�tipo
que pode ser acessado pela chave prototype, � a partir dos 
prot�tipos que podemos criar heran�as em javascript.
-------------------------------------------------------------

Operadores new e instanceOf

instanceOf: quando criamos uma ins�ncia de um objeto podemos
em algum momento nos perguntar quem o criou, para isso podemos
utilizar o operador INSTANCEOF que verifica se um objeto � 
instancia de outro. Exemplo:

function Veiculo(){}

function Carro(){}

Carro.prototype = new Veiculo();

var gol = new Carro();

console.log(gol instanceof Carro);//true
console.log(gol instanceof Veiculo);//true
---------------------------------------------

O que � DOM

Document Object Model � uma conven��o para
representa��o e intera��o com objetos em 
documentos HTML, XHTML e XML, todos os n�s
de um documento s�o organizados em uma estrutura
de �rvore que chamamos de DOM tree, esses objetos que 
est�o dentro do DOM tree podem ser acessados e manipulados 
atrav�s de identifica��es que criamos (Ids,Classes,Nomes).
-----------------------------------------------------------

O Objeto Window

� a representa��o da janela de um navegador aberta, se o 
documento carregado conter frames(<iframe> tags), o navegador
criar� um objeto window e um objeto para cada uma das frames
que o documento tiver.
------------------------------------------------------------

Document

� a representa��o do documento aberto na janela, � atrav�s dele
que conseguimos ter acesso a elemento do DOM, para isso iremos
utilizar alguns m�todos que este objeto nos disponibiliza.

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
o evento ao elemento. Isso ir� ser feito com o m�todo
addEventListener

<input type="button" id="treinaweb" value="TreinaWeb">
	<script type="text/javascript">
		var treinawebBtn = document.getElementById('treinaweb');
			treinawebBtn.addEventListener('click', function(e){
  
				alert('TreinaWeb');

			})
	</script>

onclick: Com o click no objeto
oncontextmenu: Quando ocorre um click de bot�o direito para abrir o menu de op��es
ondblclick: Quando ocorre duplo click
onmousedown: Ocorre quando clicamos no elemento
onload: Ocorre no carregamento da p�gina
onkeypress: Con o click de uma tecla
onscroll: Quando a barra de rolagem � ativada
onchange: Quando o valor de um objeto muda