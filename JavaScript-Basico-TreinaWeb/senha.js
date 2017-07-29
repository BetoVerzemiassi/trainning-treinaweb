var senhas,
	gerarSenha,
	imprimirNoTerminal,
	senha,
	form,
	tentativas = 1,
	verificarCaracteresSenha;

senhas = [
	'treinaweb',
	'javascript',
	'cursos',
	'internet'
];

gerarSenha = function(){
	var numeroRandomico = Math.floor(Math.random() * senhas.length);
	return senhas[numeroRandomico];
}

impimirNoTerminal = function(mensagem, tempo){
	var mensgemTerminal = 'root/>_: ',
		terminal = document.getElementById('terminal'),
		paragrafo = document.createElement('P'),
		texto = document.createTextNode(mensgemTerminal.concat(mensagem));

		paragrafo.appendChild(texto);
		setTimeout(function(){
			terminal.appendChild(paragrafo);
		},tempo)
		
}

senha = gerarSenha();
imprimirNoTerminal('Entre com a senha de '+senha.length+' digitos',0);

verificarCaracteresSenha = function(senhaDigitada){
	var contador = 0;
	for(var i=0; i<senha.length;i++){
		if(senha.charAt(i) === senhaDigitada.charAt(i)){
			contador++;
		}
	}
	return contador;
}

form = document.forms[0];

form.addEventListener('submit', function(event){
	event.preventDefault();
	var senhaDigitada = document.forms[0].elements[0].value;
	if(tentativas <= 20){
		if(senhaDigitada){
			document.forms[0].elements[0].value = '';
			tentativas++;
			var quantidadeDeAcertos = verificarCaracteresSenha(senhaDigitada);
			if(quantidadeDeAcertos === senha.length){
				imprimirNoTerminal('Senha correta, carregando configuracoes do servidor...',0);
				imprimirNoTerminal('Parabens voce acaba de concluir o curso de JavaScript',3000);
			}else{
				imprimirNoTerminal(senhaDigitada.concat(': Senha errada,',quantidadeDeAcertos),0)
			}
		}
	}else{
		imprimirNoTerminal('Reinicie o server, suas tentativas acabaram.',0);
	}
});