document.getElementById('quizForm').addEventListener('submit', function (event) {
        event.preventDefault();

        const respostasCorretas = {
            p1: 'b', p2: 'b', p3: 'a',
            p4: 'c', p5: 'd', p6: 'b'
        };

        let pontuacao = 0;
        const totalPerguntas = 6;
        const form = event.target;

        for (const pergunta in respostasCorretas) {
            const respostaSelecionada = form.elements[pergunta].value;
            if (respostaSelecionada === respostasCorretas[pergunta]) {
                pontuacao++;
            }
        }

        const resultadoDiv = document.getElementById('resultado');
        resultadoDiv.style.display = 'block';

        let mensagem = `Você acertou **${pontuacao}** de **${totalPerguntas}** perguntas.`;
        let corBorda = '#28a745';
        let corFundo = '#e2f0e8';

        if (pontuacao === totalPerguntas) {
            mensagem += `<br>Parabéns! Você gabaritou o questionário! 🎉`;
        } else if (pontuacao >= totalPerguntas / 2) {
            mensagem += `<br>Bom desempenho! Continue praticando!`;
            corBorda = '#ffc107';
            corFundo = '#fff3cd';
        } else {
            mensagem += `<br>Você pode melhorar. Reveja os conceitos!`;
            corBorda = '#dc3545';
            corFundo = '#f8d7da';
        }

        resultadoDiv.style.borderColor = corBorda;
        resultadoDiv.style.backgroundColor = corFundo;

        resultadoDiv.innerHTML = `<h2>Resultado</h2>${mensagem.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')}`;

        // Move o foco para a área de resultado para usuários de teclado/leitores de tela
        resultadoDiv.tabIndex = -1;
        resultadoDiv.focus();
    });
