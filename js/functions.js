/* Variaveis Globais */
var totalQuestoes = 25;
var acertos = 0;
var erros = 0;

/* Funções para verificar o resultado do aluno */
function result(){

	var notaFinal = 0;			
	var postAlternat;

	/* Percorre por todas as questoes */
	for(var posQuest = 1; posQuest <= totalQuestoes; posQuest++){

		var concatena = 'quest_' + posQuest; 					//pega o numero da questao
		var pegaNota = parseInt(getRadio(concatena));			//verifica se o radio esta marcado ou nao		
		var radsPos = document.getElementsByName(concatena);	//pega o nome do radio
		var concId = 'quest_' + posQuest + '_';					//pega a alternativa da questao

		notaFinal = notaFinal + pegaNota;	

		if(getRadio(concatena) == 1){

			for(postAlternat = 0; postAlternat < radsPos.length; postAlternat++){

				if(radsPos[postAlternat].checked){
					/* Caso esteja marcado a resposta correta, o bkg dela sera verde */
					concId = 'quest_' + posQuest + '_' + postAlternat;				//define o ID que sera mudado o bkg
					document.getElementById(concId).style.background = "#378140"; 	//Alternativa certa	

				}//if

			}//for

		} else {	

			for(postAlternat = 0; postAlternat < radsPos.length; postAlternat++){

				if(radsPos[postAlternat].checked){
					/* Caso esteja marcado a resposta correta, o bkg dela sera vermelha */
					concId = 'quest_' + posQuest + '_' + postAlternat;				//define o ID que sera mudado o bkg
					document.getElementById(concId).style.background = "#c54f34"; 	//Alternativa Errada

				}//if

			}//for
			
		}//if-else

		concatena = 'quest_';	//redefine a string para concatenar com o novo numero da questao
		
	}//for

	acertos = notaFinal;
	notaFinal = (notaFinal * 100) / totalQuestoes;	//define a nota do aluno
	var notaArredondada = parseInt(notaFinal.toFixed(0));
	verificaNota(notaArredondada);

}//result

/* Verifica qual o radio selecionado */
function getRadio(name){

	var rads = document.getElementsByName(name);

	for(var i = 0; i < rads.length; i++){

		if(rads[i].checked){

			return rads[i].value;	//verifica se esta marcado o radio e pega o valor dele(0[incorreta] ou 1[correta])

		}//if

	}//for

	return null;

}//getRadio

/* Verifica a nota do aluno e coloca cor no texto de acordo com a nota*/
function verificaNota(nota){

	if(nota >= 70){

		imprimeNota(nota);
		document.getElementById('resultado').style.color = "#378140"; //Nota > 7

	} else {

		imprimeNota(nota);
		document.getElementById('resultado').style.color = "#c54f34"; //Nota < 7

	}//if-else

	scrollDown();
	return null;

}//verificaNota

/* Função para imprimir a nota */
function imprimeNota(nota){

	/* Caso a nota nao esteja definida, significa que alguma alternativa esta em branco */
	if(!nota){

		alert('Você ainda não respondeu todas as atividades.');	//mensagem para preencher a pergunta que esta faltando

	} else {
		
		erros = totalQuestoes - acertos;
		document.getElementById('resultado').innerHTML = "Você acertou " + nota + "% das questões";	//imprime a nota do aluno no rodape do navegador
		document.getElementById('acertos').innerHTML = "Acertou: " + acertos;
		document.getElementById('erros').innerHTML = "Errou: " + erros;
	
	}//if-else
	
	return null;

}//imprimeNota

/* Desce a pagina para exibir o resultado */
function scrollDown() {

	var scrollDown = document.getElementById('resultado');
	scrollDown.scrollIntoView();
	return null;

}//scrollIntro

/* Sobe a pagina para exibir o topo */
function scrollUp() {

	var scrollUp = document.getElementById('topo');
	scrollUp.scrollIntoView();
	return null;

}//scrollIntro