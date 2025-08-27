function rolarDado(notacao) {
      let regex = /(\d*)d(\d+)([+-]\d+)?/i;
      let match = notacao.match(regex);
      
      if (!match) return "❌ Notação inválida!";
      
      let qtd = parseInt(match[1]) || 1;
      let lados = parseInt(match[2]);
      let modificador = parseInt(match[3]) || 0;

      let total = 0;
      let resultados = [];

      for (let i = 0; i < qtd; i++) {
        let roll = Math.floor(Math.random() * lados) + 1;
        resultados.push(roll);
        total += roll;
      }

      total += modificador;

      return `${notacao.toUpperCase()} → [${resultados.join(", ")}] ${modificador ? (modificador > 0 ? "+" : "") + modificador : ""} = <b>${total}</b>`;
    }

    function rolar() {
      let notacao = document.getElementById("notacao").value.trim();
      if (!notacao) return;

      let resultado = rolarDado(notacao);
      document.getElementById("resultado").innerHTML = resultado;

      // Adicionar ao histórico
      let lista = document.getElementById("listaHistorico");
      let novo = document.createElement("div");
      novo.classList.add("roll");
      novo.innerHTML = resultado;
      lista.prepend(novo); // adiciona no topo
    }