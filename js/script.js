
var alfabeto = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

var nomeSeparado;
var somaNome;
gerarHash('SaoPaulo');

function gerarHash(nome){
	var temEspaco = nome.indexOf(" ");
	nomeSeparado = Array.from(nome.toLowerCase());
	somaNome = 0;
	
	nomeSeparado.forEach(function(x, i) {
	    console.log(alfabeto.indexOf(teste[i]));
		somaNome = somaNome + alfabeto.indexOf(nomeSeparado[i]);
	})
	if(temEspaco >= 0){
		return somaNome + 1;

	}else{
		return somaNome;

	}
}

function placar(forca, hash_nome) {
var min = 1/(forca * hash_nome);
var max = 5/(forca * hash_nome);
var aleatorio;

aleatorio = numAleatorio(min, max);
var placar = forca * hash_nome * aleatorio;

//arredondar placar para o inteiro mais próximo;
return Math.round(placar);
}

function numAleatorio(min, max) {
  return Math.random() * (max - min) + min;
}


var times = 
	[
	 {
		 id: 0,
		 nome: "Gremio",
		 forca: 5,
		 hash_nome: gerarHash("Gremio")
	 },
	 {
		 id: 1,
		 nome: "Internacional",
		 forca: 8,
		 hash_nome: gerarHash("Internacional")
	 },
	 {
		 id: 2,
		 nome: "Sao Paulo",
		 forca: 7,
		 hash_nome: gerarHash("GreSao Paulomio")
	 },
	 {
		 id: 3,
		 nome: "Gremio",
		 forca: 1,
		 hash_nome: gerarHash("Gremio")
	 },
	 {
		 id: 4,
		 nome: "Gremio",
		 forca: 1,
		 hash_nome: gerarHash("Gremio")
	 },
	 {
		 id: 0,
		 nome: "Gremio",
		 forca: 1,
		 hash_nome: gerarHash("Gremio")
	 },
	 {
		 id: 0,
		 nome: "Gremio",
		 forca: 1,
		 hash_nome: gerarHash("Gremio")
	 },
	 {
		 id: 0,
		 nome: "Gremio",
		 forca: 1,
		 hash_nome: gerarHash("Gremio")
	 },
	 {
		 id: 0,
		 nome: "Gremio",
		 forca: 1,
		 hash_nome: gerarHash("Gremio")
	 },
	 {
		 id: 0,
		 nome: "Gremio",
		 forca: 1,
		 hash_nome: gerarHash("Gremio")
	 },
	 {
		 id: 0,
		 nome: "Gremio",
		 forca: 1,
		 hash_nome: gerarHash("Gremio")
	 },
	 {
		 id: 0,
		 nome: "Gremio",
		 forca: 1,
		 hash_nome: gerarHash("Gremio")
	 },
	 {
		 id: 0,
		 nome: "Gremio",
		 forca: 1,
		 hash_nome: gerarHash("Gremio")
	 },
	 {
		 id: 0,
		 nome: "Gremio",
		 forca: 1,
		 hash_nome: gerarHash("Gremio")
	 },
	 {
		 id: 0,
		 nome: "Gremio",
		 forca: 1,
		 hash_nome: gerarHash("Gremio")
	 },
	 {
		 id: 0,
		 nome: "Gremio",
		 forca: 1,
		 hash_nome: gerarHash("Gremio")
	 },
	 {
		 id: 0,
		 nome: "Gremio",
		 forca: 1,
		 hash_nome: gerarHash("Gremio")
	 },
	 {
		 id: 0,
		 nome: "Gremio",
		 forca: 1,
		 hash_nome: gerarHash("Gremio")
	 },
	 {
		 id: 0,
		 nome: "Gremio",
		 forca: 1,
		 hash_nome: gerarHash("Gremio")
	 },
	 {
		 id: 0,
		 nome: "Gremio",
		 forca: 1,
		 hash_nome: gerarHash("Gremio")
	 },
	 
	 
             
	]

console.log(times[0])


