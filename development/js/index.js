const cursos = {
    direito: 70,
    medicina: 76,
    engenharia_comp: 65
};

function calcularNota3() {
    const nota1Input = document.getElementById("nota1");
    const nota2Input = document.getElementById("nota2");
    const notaRedacaoInput = document.getElementById("notaRedacao");
    const nota3Input = document.getElementById("nota3");
    const cursoSelecionado = document.getElementById("curso").value;
    const resultadoDiv = document.getElementById("resultado");

    const nota1 = parseFloat(nota1Input.value) || 0;
    const nota2 = parseFloat(nota2Input.value) || 0;
    const notaRedacao = parseFloat(notaRedacaoInput.value) || 0;

    if (cursos.hasOwnProperty(cursoSelecionado)) {
        const notaMinima = cursos[cursoSelecionado];


        const N1 = notaMinima * 10;
        const N2 = nota1 + nota2;
        const N3 = 3 * N2;
        const N4 = N1 - N3;
        const N5 = N4 - notaRedacao;
        const nota3Necessaria = N5 / 3;


        const mediaFinal = (nota3Necessaria * 0.75) + (notaRedacao * 0.25);
        nota3Input.value = nota3Necessaria.toFixed(2);

        if (nota3Necessaria > 100) {
            resultadoDiv.innerHTML = "Nota necessária no SSA-3: " + nota3Necessaria.toFixed(2);
        } else if (nota3Necessaria < 0) {
            resultadoDiv.innerHTML = "Você já passou!";
        } else {
            resultadoDiv.innerHTML = "Nota necessária no SSA-3: " + nota3Necessaria.toFixed(2);
        }

        resultadoDiv.style.display = "block";

        mostrarDetalhes(nota1, nota2, notaRedacao, parseFloat(nota3Input.value), mediaFinal);
    } else {
        resultadoDiv.innerHTML = "Curso não encontrado.";
        nota3Input.value = "";
        resultadoDiv.style.display = "block";
    }
}

function mostrarDetalhes(nota1, nota2, notaRedacao, nota3, mediaFinal) {
    const detalhesDiv = document.getElementById("detalhes");
    const nota1Detalhe = document.getElementById("nota1Detalhe");
    const nota2Detalhe = document.getElementById("nota2Detalhe");
    const notaRedacaoDetalhe = document.getElementById("notaRedacaoDetalhe");
    const nota3Detalhe = document.getElementById("nota3Detalhe");
    const notaFinalDetalhe = document.getElementById("notaFinal");
    const classificacaoDetalhe = document.getElementById("classificacao");

    const notaFinal = ((nota1 + nota2 + notaRedacao + nota3) / 4).toFixed(2);

    nota1Detalhe.innerText = nota1.toFixed(2);
    nota2Detalhe.innerText = nota2.toFixed(2);
    notaRedacaoDetalhe.innerText = notaRedacao.toFixed(2);
    nota3Detalhe.innerText = nota3.toFixed(2);
    notaFinalDetalhe.innerText = mediaFinal.toFixed(2);

    if (nota3 > 100) {
        classificacaoDetalhe.innerText = "Reprovado (Impossível passar, nota necessária > 100)";
    } else {
        classificacaoDetalhe.innerText = "Aprovado!";
    }

    detalhesDiv.style.display = "block";
}
