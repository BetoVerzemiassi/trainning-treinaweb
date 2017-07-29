/*var txtNome = document.getElementById('txtNome');
var txtPassword = document.getElementById('txtPassword');

txtNome.style['background-color'] = '#c3c3c3';
txtPassword.style['background-color'] = '#c3c3c3';

console.log(txtNome.value);//value vai recuperar o valor digitado
console.log(txtPassword.value);//value vai recuperar o valor digitado
*/

//var inputs = document.getElementsByTagName('input');
//console.log(inputs);

//var inputs = document.getElementsByClassName('login-input');
//console.log(inputs);

/*
var div = document.getElementById('text');

//var html = '<h1>TreinaWeb</h1>';
//div.innerHTML = html;

var p = document.createElement('P');
var pTexto = document.createTextNode('Aprendendo a criar elementos');

p.appendChild(pTexto);
div.appendChild(p);
*/

/*
//funcionava para o onsubmit
function logar(){
	var txtNome = document.getElementById('txtNome');
	var txtPassword = document.getElementById('txtPassword');

	alert(txtNome.value+' '+txtPassword.value);

	return false;	
}*/

/*
var form = document.forms[0];

form.addEventListener('submit',function(event){
	var txtNome = document.getElementById('txtNome');
	var txtPassword = document.getElementById('txtPassword');

	alert(txtNome.value+' '+txtPassword.value);
	
	event.preventDefault();
});

console.log(form);
*/

//desafio login
var form = document.forms[0];

var usuarios = [
	{
		nome: 'TreinaWeb',
		login: 'treinaweb',
		senha: '123456'
	},
	{
		nome: 'Joao',
		login: 'joao',
		senha: 'joao123'
	}
];

var validarUsuario = function(login, senha){
	for(indice in usuarios){
		var usuario = usuarios[indice];
		if(usuario.login === login && usuario.senha === senha){
			return true;
		}
	}
	return false;
}

var mostrarMensagem = function(tipo){
	var message = document.getElementById(tipo);
		message.style.display = 'block';
		var limparMensagem = function(){
			message.style.display = 'none';
			clearInterval(tempoDeVisibilidade);//destroi um setTimeout
		}
		var tempoDeVisibilidade = setTimeout(limparMensagem,5000);
}

form.addEventListener('submit', function(event){
	event.preventDefault();

	//lógica para validar se o usuário existe ou não
	var login = document.getElementById('txtLogin').value;
	var senha = document.getElementById('txtPassword').value;

	if(validarUsuario(login, senha)){
		mostrarMensagem('success');
	}else{
		mostrarMensagem('error');
	}
});



