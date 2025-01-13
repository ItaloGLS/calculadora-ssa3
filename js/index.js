const cursos = {
  // Recife
  medicina_recife: { corte: 78.25, campus: "Recife" },
  engenharia_comp_recife: { corte: 71.53, campus: "Recife" },
  direito_recife: { corte: 70.87, campus: "Recife" },
  odontologia_recife: { corte: 61.65, campus: "Recife" },
  ciencias_biologicas_recife: { corte: 58.5, campus: "Recife" },
  enfermagem_recife: { corte: 55.96, campus: "Recife" },
  saude_coletiva_recife: { corte: 51.52, campus: "Recife" },
  terapia_ocupacional_recife: { corte: 56.42, campus: "Recife" },
  educacao_fisica_recife: { corte: 45.24, campus: "Recife" },
  ciencias_sociais_recife: { corte: 55.14, campus: "Recife" },
  administracao_recife: { corte: 55.28, campus: "Recife" },
  engenharia_civil_recife: { corte: 50.74, campus: "Recife" },
  engenharia_automacao_controle_recife: { corte: 55.68, campus: "Recife" },
  engenharia_eletrica_eletrotecnica_recife: { corte: 48.36, campus: "Recife" },
  engenharia_telecom_recife: { corte: 42.20, campus: "Recife" },
  engenharia_eletrica_recife: { corte: 55.95, campus: "Recife" },
  engenharia_mecanica_recife: { corte: 55.1, campus: "Recife" },
  fisica_material_recife: { corte: 55.41  , campus: "Recife" },

  // Caruaru
  sistemas_informacao_caruaru: { corte: 55.67, campus: "Caruaru" },
  administracao_caruaru: { corte: 47.74, campus: "Caruaru" },

  // Nazré da Mata
  ciencia_computacao_nazare: { corte: 45.89, campus: "Nazré da Mata" },
  ciencias_biologicas_nazare: { corte: 42.44, campus: "Nazré da Mata" },
  geografia_nazare: { corte: 35.85, campus: "Nazré da Mata" },
  historia_nazare: { corte: 47.84, campus: "Nazré da Mata" },
  letras_port_esp_nazare: { corte: 36.42, campus: "Nazré da Mata" },
  letras_port_ing_nazare: { corte: 45.09, campus: "Nazré da Mata" },
  matematica_nazare: { corte: 43.59, campus: "Nazré da Mata" },
  pedagogia_nazare: { corte: 38.84, campus: "Nazré da Mata" },
  tecnologia_logistica_nazare: { corte: 36.66, campus: "Nazré da Mata" },

  // Garanhuns
  medicina_garanhuns: { corte: 74.23, campus: "Garanhuns" },
  psicologia_garanhuns: { corte: 59.70, campus: "Garanhuns" },
  engenharia_software_garanhuns: { corte: 60.3, campus: "Garanhuns" },
  computacao_garanhuns: { corte: 43.96, campus: "Garanhuns" },
  ciencias_biologicas_l_garanhuns: { corte: 43.27, campus: "Garanhuns" },
  geografia_garanhuns: { corte: 22.59, campus: "Garanhuns" },
  historia_garanhuns: { corte: 45.32, campus: "Garanhuns" },
  letras_portuguesa_garanhuns: { corte: 40.23, campus: "Garanhuns" },
  matematica_garanhuns: { corte: 42.50, campus: "Garanhuns" },
  pedagogia_garanhuns: { corte: 36.60, campus: "Garanhuns" },

  // Petrolina
  fisioterapia_petrolina: { corte: 51.25, campus: "Petrolina" },
  enfermagem_petrolina: { corte: 53.80, campus: "Petrolina" },
  nutricao_petrolina: { corte: 52.04, campus: "Petrolina" },
  geografia_petrolina: { corte: 21.57, campus: "Petrolina" },
  historia_petrolina: { corte: 29.15, campus: "Petrolina" },
  letras_port_ingles_petrolina: { corte: 29.12, campus: "Petrolina" },
  letras_port_espanhol_petrolina: { corte: 28.82, campus: "Petrolina" },
  matematica_petrolina: { corte: 31.54, campus: "Petrolina" },
  ciencias_biologicas_l_petrolina: { corte: 43.85, campus: "Petrolina" },
  pedagogia_petrolina: { corte: 25.30, campus: "Petrolina" },

  // Arcoverde
  direito_arcoverde: { corte: 50.07, campus: "Arcoverde" },
  odontologia_arcoverde: { corte: 58.31, campus: "Arcoverde" },

  // Serratalhada
  medicina_serratalhada: { corte: 73.49, campus: "Serratalhada" },

  // Surubim
  engenharia_software_surubim: { corte: 51.21, campus: "Surubim" },
  sistemas_informacao_surubim: { corte: 37.95, campus: "Surubim" },

  // Salgueiro
  administracao_salgueiro: { corte: 33.18, campus: "Salgueiro" },

  // Ouricuri
  enfermagem_ouricuri: { corte: 39.84, campus: "Ouricuri" },

  // Palmares
  administracao_palmares: { corte: 33.85, campus: "Palmares" },
  servico_social_palmares: { corte: 31.96, campus: "Palmares" }
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
      const { corte, campus } = cursos[cursoSelecionado];
      const notaMinima = corte;

      const N1 = notaMinima * 10;
      const N2 = nota1 + nota2;
      const N3 = 3 * N2;
      const N4 = N1 - N3;
      const N5 = N4 - notaRedacao;
      const nota3Necessaria = N5 / 3;

      const mediaFinal = (nota3Necessaria * 0.75) + (notaRedacao * 0.25);
      nota3Input.value = nota3Necessaria.toFixed(2);

      if (nota3Necessaria > 100) {
          resultadoDiv.innerHTML = '<i class="fa-solid fa-triangle-exclamation"></i> Nota necessária no SSA-3: ' + nota3Necessaria.toFixed(2);
          resultadoDiv.style.backgroundColor = "rgb(255, 255, 163)"; 
      } else if (nota3Necessaria < 0) {
          resultadoDiv.innerHTML = '<i class="fa-solid fa-triangle-exclamation"></i> Você já passou!';
          resultadoDiv.style.backgroundColor = "rgb(255, 255, 163)"; 
      } else {
          resultadoDiv.innerHTML = '<i class="fa-solid fa-triangle-exclamation"></i> Nota necessária no SSA-3: ' + nota3Necessaria.toFixed(2);
          resultadoDiv.style.backgroundColor = "rgb(255, 255, 163)";
      }

      resultadoDiv.style.display = "block";

      mostrarDetalhes(nota1, nota2, notaRedacao, parseFloat(nota3Input.value), notaMinima, mediaFinal, campus);
  } else {
      resultadoDiv.innerHTML = "Curso não encontrado.";
      nota3Input.value = "";
      resultadoDiv.style.display = "block";
  }
}

function mostrarDetalhes(nota1, nota2, notaRedacao, nota3, notaCorte, mediaFinal, campus) {
  const detalhesDiv = document.getElementById("detalhes");
  const nota1Detalhe = document.getElementById("nota1Detalhe");
  const nota2Detalhe = document.getElementById("nota2Detalhe");
  const notaRedacaoDetalhe = document.getElementById("notaRedacaoDetalhe");
  const nota3Detalhe = document.getElementById("nota3Detalhe");
  const notaFinalDetalhe = document.getElementById("notaFinal");
  const notaCorteDetalhe = document.getElementById("notaCorteCurso");
  const classificacaoDetalhe = document.getElementById("classificacao");

  const notaFinal = ((nota1 + nota2 + notaRedacao + nota3) / 4).toFixed(2);

  nota1Detalhe.innerText = nota1.toFixed(2);
  nota2Detalhe.innerText = nota2.toFixed(2);
  notaRedacaoDetalhe.innerText = notaRedacao.toFixed(2);
  nota3Detalhe.innerText = nota3.toFixed(2);
  notaCorteDetalhe.innerText = notaCorte.toFixed(2);
  notaFinalDetalhe.innerText = mediaFinal.toFixed(2);

  if (nota3 > 100) {
      classificacaoDetalhe.innerText = "Reprovado (Impossível passar, nota necessária > 100)";
  } else {
      classificacaoDetalhe.innerText = "Aprovado!";
  }

  detalhesDiv.style.display = "block";
}

function limparTudo() {
  document.getElementById("nota1").value = "";
  document.getElementById("nota2").value = "";
  document.getElementById("notaRedacao").value = "";
  document.getElementById("nota3").value = "";
  document.getElementById("resultado").innerHTML = "";
  document.getElementById("resultado").style.display = "none";
  document.getElementById("detalhes").style.display = "none";
}
