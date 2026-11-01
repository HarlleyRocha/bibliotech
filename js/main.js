// Marca o perfil selecionado (Aluno / Servidor / Professor)
document.addEventListener("DOMContentLoaded", () => {
  const botoesPerfil = document.querySelectorAll('.perfil-opcao');

  botoesPerfil.forEach((botao) => {
    botao.addEventListener('click', () => {
      // Remove a classe 'ativo' e o aria-selected de todos
      botoesPerfil.forEach((b) => {
        b.classList.remove('ativo');
        b.setAttribute('aria-selected', 'false');
      });
      
      // Adiciona no botão clicado
      botao.classList.add('ativo');
      botao.setAttribute('aria-selected', 'true');
    });
  });

  // --- Lógica Genérica de Modais ---
  // Abrir modal (qualquer botão com a classe .btn-abrir-modal)
  document.querySelectorAll('.btn-abrir-modal').forEach(botao => {
    botao.addEventListener('click', () => {
      const idModal = botao.getAttribute('data-modal'); // Descobre qual modal abrir
      document.getElementById(idModal)?.classList.add('ativo');
    });
  });

  // Fechar modal (botões com .modal-fechar ou .btn-cancelar-modal, ou clicar fora)
  document.querySelectorAll('.modal-overlay').forEach(overlay => {
    // Fecha ao clicar no X ou no Cancelar
    overlay.querySelectorAll('.modal-fechar, .btn-cancelar-modal').forEach(btn => {
      btn.addEventListener('click', () => overlay.classList.remove('ativo'));
    });

    // Fecha ao clicar no fundo escuro
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) overlay.classList.remove('ativo');
    });
  });
});