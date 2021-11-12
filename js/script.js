
var alfabeto = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var nomeSeparado;
var somaNome;

function start() {
	controle();
	todosPlacares();
}

function todosPlacares() {
	times.forEach(function(time, i) {
		document.getElementById(i).innerHTML = placar(time.forca, time.hash_nome);
	})
}

function gerarHash(nome){
	var temEspaco = nome.indexOf(" ");
	nomeSeparado = Array.from(nome.toLowerCase());
	somaNome = 0;
	
	nomeSeparado.forEach(function(x, i) {
		somaNome = somaNome + alfabeto.indexOf(nomeSeparado[i]);
	})
	if(temEspaco >= 0){
		return somaNome + 1;

	}else{
		return somaNome;

	}
}

function placar(forca, hash_nome) {
	var min = 1 / (forca * hash_nome);
	var max = 5 / (forca * hash_nome);
	var aleatorio;

	aleatorio = numAleatorio(min, max);
	var placar = forca * hash_nome * aleatorio;

	// arredondar placar para o inteiro mais próximo;
	return Math.round(placar);
}

function numAleatorio(min, max) {
	return Math.random() * (max - min) + min;
}

function controle() {
	document.getElementById("result").focus();

	// add eventListener for keydown
	document.addEventListener('keydown', function(e) {
		switch (e.keyCode) {
		case 37: // LEFT arrow
			break;
		case 38:
			if (document.activeElement === document
					.getElementById("exit")) {
				document.getElementById("result").focus()
			} else if (document.activeElement === document
					.getElementById("result")) {
				document.getElementById("exit").focus()
			} else {
				document.getElementById("result").focus()
			} // UP arrow
			break;
		case 39: // RIGHT arrow
			break;
		case 40:
			if (document.activeElement === document.getElementById("result")) {
				document.getElementById("exit").focus()
			} else if (document.activeElement === document
					.getElementById("exit")) {
				document.getElementById("result").focus()
			} else {
				document.getElementById("exit").focus()
			}// DOWN arrow
			break;
		case 13:
			document.activeElement.click() // OK button
			break;
		case 10009: // RETURN button
			sair();
			break;
		default:
			console.log('Key code : ' + e.keyCode);
			break;
		}
	});
}

var times = [

{
	id: 0,
    nome: "Gremio",
    forca: 3,
    hash_nome: gerarHash("Gremio")
}, {
    id: 1,
    nome: "Internacional",
    forca: 8,
    hash_nome: gerarHash("Internacional")
}, {
    id: 2,
    nome: "Sao Paulo",
    forca: 7,
    hash_nome: gerarHash("Sao Paulo")
}, {
    id: 3,
    nome: "Corinthians",
    forca: 7,
    hash_nome: gerarHash("Corinthians")
}, {
    id: 4,
    nome: "Atleico MG",
    forca: 10,
    hash_nome: gerarHash("Atleico MG")
}, {
    id: 5,
    nome: "Cruzeiro",
    forca: 2,
    hash_nome: gerarHash("Cruzeiro")
}, {
    id: 6,
    nome: "Flamengo",
    forca: 9,
    hash_nome: gerarHash("Flamengo")
}, {
    id: 7,
    nome: "Vasco",
    forca: 2,
    hash_nome: gerarHash("Vasco")
}, {
    id: 8,
    nome: "Botafogo",
    forca: 3,
    hash_nome: gerarHash("Botafogo")
}, {
    id: 9,
    nome: "Fluminense",
    forca: 7,
    hash_nome: gerarHash("Fluminense")
}, {
    id: 10,
    nome: "Palmeiras",
    forca: 9,
    hash_nome: gerarHash("Palmeiras")
}, {
    id: 11,
    nome: "Santos",
    forca: 6,
    hash_nome: gerarHash("Santos")
}, {
    id: 12,
    nome: "Sport",
    forca: 3,
    hash_nome: gerarHash("Sport")
}, {
    id: 13,
    nome: "Nautico",
    forca: 3,
    hash_nome: gerarHash("Nautico")
}, {
    id: 14,
    nome: "Ponte Preta",
    forca: 3,
    hash_nome: gerarHash("Ponte Preta")
}, {
    id: 15,
    nome: "Portuguesa SP",
    forca: 2,
    hash_nome: gerarHash("Portuguesa SP")
}, {
    id: 16,
    nome: "Atletico GO",
    forca: 5,
    hash_nome: gerarHash("Atletico GO")
}, {
    id: 17,
    nome: "Bahia",
    forca: 5,
    hash_nome: gerarHash("Bahia")
}, {
    id: 18,
    nome: "Figueirense",
    forca: 3,
    hash_nome: gerarHash("Figueirense")
}, {
    id: 19,
    nome: "Curitiba",
    forca: 4,
    hash_nome: gerarHash("Curitiba")
}
];

function sair() {
	tizen.application.getCurrentApplication().exit();
}