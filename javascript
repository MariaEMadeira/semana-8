// ==========================
// B.1 - Definição dos dados
// ==========================

const catalogo = [
    { id: 1, titulo: "Interestelar", tipo: "filme", ano: 2014, generos: ["ficção", "drama"], nota: 9.5, assistido: true },
    { id: 2, titulo: "Breaking Bad", tipo: "serie", ano: 2008, generos: ["drama"], nota: 9.7, assistido: true },
    { id: 3, titulo: "Vingadores", tipo: "filme", ano: 2012, generos: ["ação", "aventura"], nota: 8.5, assistido: false },
    { id: 4, titulo: "Stranger Things", tipo: "serie", ano: 2016, generos: ["ficção", "terror"], nota: 8.8, assistido: true },
    { id: 5, titulo: "Titanic", tipo: "filme", ano: 1997, generos: ["romance"], nota: 8.0, assistido: false },
    { id: 6, titulo: "The Office", tipo: "serie", ano: 2005, generos: ["comedia"], nota: 8.9, assistido: true }
];

// ==========================
// B.2 - Acesso e leitura
// ==========================

console.log("Catálogo:", catalogo);

console.log("Primeiro título:", catalogo[0].titulo);

console.log("Ano do último item:", catalogo[catalogo.length - 1].ano);

// terceiro item = índice 2
if (catalogo[2].generos.length > 1) {
    console.log("Segundo gênero do terceiro item:", catalogo[2].generos[1]);
} else {
    console.log("O terceiro item não possui um segundo gênero.");
}

// ==========================
// B.3 - Iterators
// ==========================

// A) forEach
console.log("Lista de títulos:");
catalogo.forEach(item => {
    console.log(`- [${item.tipo}] ${item.titulo} (${item.ano})`);
});

// B) map
const titulosEmCaixaAlta = catalogo.map(item => item.titulo.toUpperCase());
console.log("Títulos em caixa alta:", titulosEmCaixaAlta);

// C) filter
const naoAssistidos = catalogo.filter(item => item.assistido === false);
console.log("Quantidade de não assistidos:", naoAssistidos.length);

// D) find
const notaAlta = catalogo.find(item => item.nota >= 9);

if (notaAlta) {
    console.log("Item com nota >= 9:", notaAlta.titulo, "-", notaAlta.nota);
} else {
    console.log("Nenhum item com nota >= 9 encontrado.");
}

// E) reduce
const mediaGeral = catalogo.reduce((acc, item) => acc + item.nota, 0) / catalogo.length;

const assistidos = catalogo.filter(item => item.assistido);
const mediaAssistidos = assistidos.reduce((acc, item) => acc + item.nota, 0) / assistidos.length;

console.log("Média geral:", mediaGeral.toFixed(2));
console.log("Média dos assistidos:", mediaAssistidos.toFixed(2));

// F) some e every
const temAntigo = catalogo.some(item => item.ano < 2000);
const todosTemGenero = catalogo.every(item => item.generos.length > 0);

console.log("Existe item antes de 2000?", temAntigo);
console.log("Todos têm pelo menos 1 gênero?", todosTemGenero);

// ==========================
// B.4 - Saída na tela
// ==========================

const total = catalogo.length;

const filmes = catalogo.filter(item => item.tipo === "filme").length;
const series = catalogo.filter(item => item.tipo === "serie").length;

// ranking top 3
const ranking = [...catalogo]
    .sort((a, b) => b.nota - a.nota)
    .slice(0, 3);

const output = document.getElementById("output");

output.innerHTML = `
    <p><strong>Total de itens:</strong> ${total}</p>
    <p><strong>Filmes:</strong> ${filmes}</p>
    <p><strong>Séries:</strong> ${series}</p>
    <p><strong>Não assistidos:</strong> ${naoAssistidos.length}</p>
    <p><strong>Média geral:</strong> ${mediaGeral.toFixed(2)}</p>

    <h3>Top 3 melhores notas:</h3>
    <ul>
        ${ranking.map(item => `<li>${item.titulo} - ${item.nota}</li>`).join("")}
    </ul>
`;
