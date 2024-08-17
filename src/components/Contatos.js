import React, { useEffect } from 'react';
import './Contatos.css';

function Contatos() {
  useEffect(() => {
    const btnConfirmar = document.getElementById('confirmarBtn');
    if (btnConfirmar) {
      btnConfirmar.addEventListener('click', function() {
        const valores = obterValoresFormulario();
        const corpoEmail = construirCorpoEmail(valores);
        const assunto = 'Nova mensagem de contato';

        const mailtoLink = `mailto:adoptiide4pezi.arad@yahoo.com?subject=${encodeURIComponent(
          assunto
        )}&body=${encodeURIComponent(corpoEmail)}`;

        window.location.href = mailtoLink;

        switchModal();
      });
    }

    window.onclick = function(event) {
      const modal = document.querySelector('.modal');
      if (event.target === modal) {
        switchModal();
      }
    }

  }, []);
  const switchModal = () => {
    const modal = document.querySelector('.modal');
    if (modal) {
      const actualStyle = modal.style.display;
      modal.style.display = actualStyle === 'block' ? 'none' : 'block';
    }
  }
  const obterValoresFormulario = () => {
    const nome = document.getElementById('texto').value;
    const telefone = document.getElementById('telefone').value;
    const email = document.getElementById('email').value;
    const hora = document.getElementById('hora').value;
    const primeiroContatoSim = document.getElementById('sim').checked;
    const primeiroContatoNao = document.getElementById('nao').checked;
    const mensagem = document.getElementById('mensagem').value;

    return {
      nome,
      telefone,
      email,
      hora,
      primeiroContatoSim,
      primeiroContatoNao,
      mensagem,
    };
  }

  const construirCorpoEmail = (valores) => {
    return `
      Nome: ${valores.nome}
      Telefone: ${valores.telefone}
      E-mail: ${valores.email}
      Horário para entrar em contato: ${valores.hora}
      Primeiro Contato: ${valores.primeiroContatoSim ? 'Sim' : 'Não'}
      Mensagem: ${valores.mensagem}
    `;
  }

  return (
    <section className="contato-container">
      <div>
        <h2>
          Contato:
        </h2>
      </div>
      <form className="contato-form">
        <label htmlFor="texto">Nome: </label>
        <input type="text" name="nome" id="texto" placeholder="Informe o seu nome..." />

        <label htmlFor="telefone">Telefone: </label>
        <input type="text" name="telefone" id="telefone" placeholder="(xx) xxxxx-xxxx" />

        <label htmlFor="email">E-mail: </label>
        <input type="email" name="email" id="email" placeholder="usuario@gmail.com" />

        <label htmlFor="hora">Horário para entrar em contato: </label>
        <input type="time" name="hora" id="hora" />

        <label htmlFor="primeiro-contato">Primeiro Contato: </label>

        <div>
          <label htmlFor="sim">Sim: </label>
          <input type="radio" name="primeiro-contato" id="sim" />
          <label htmlFor="nao">Não: </label>
          <input type="radio" name="primeiro-contato" id="nao" />
        </div>
        <label htmlFor="mensagem">Mensagem:</label>
        <textarea name="mensagem" id="mensagem" cols="50" rows="10"></textarea>
        <button type="button" name="confirmar" id="confirmarBtn">Confirmar</button>
      </form>

      <div className="modal" style={{ display: 'none' }}>
        <div className="modal-content">
          <span className="close" onClick={() => switchModal()}>&times;</span>
          <p>Mensagem enviada com sucesso!</p>
        </div>
      </div>
    </section>
  );
}

export default Contatos;
