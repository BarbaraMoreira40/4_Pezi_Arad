import React, { useState } from 'react';
import './AjudeACausa.css';

function AjudeACausa() {
  const [formType, setFormType] = useState('');
  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    email: '',
    idade: '',
    valor: '',
    tempoDisponivel: '',
    tipoAnimal: '',
    motivoAdocao: '',
    metodoPagamento: ''
  });

  const openForm = (type) => {
    setFormType(type);
    document.querySelector('.modal').style.display = 'block';
  };

  const closeForm = () => {
    document.querySelector('.modal').style.display = 'none';
    setFormType('');
    setFormData({
      nome: '',
      telefone: '',
      email: '',
      idade: '',
      valor: '',
      tempoDisponivel: '',
      tipoAnimal: '',
      motivoAdocao: '',
      metodoPagamento: ''
    });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    let assunto = '';
    let mensagem = '';

    switch (formType) {
      case 'Adoção':
        assunto = 'Interesse em Adoção - 4_Pezi_Arad';
        mensagem = `Nome: ${formData.nome}\nTelefone: ${formData.telefone}\nEmail: ${formData.email}\nIdade: ${formData.idade}\nTipo de Animal: ${formData.tipoAnimal || 'Não especificado'}\nMotivo da Adoção: ${formData.motivoAdocao || 'Não especificado'}`;
        break;
      case 'Doação':
        assunto = 'Interesse em Doação - 4_Pezi_Arad';
        mensagem = `Nome: ${formData.nome}\nTelefone: ${formData.telefone}\nEmail: ${formData.email}\nValor da Doação: ${formData.valor}\nMétodo de Pagamento: ${formData.metodoPagamento || 'Não especificado'}`;
        break;
      case 'Voluntariado':
        assunto = 'Interesse em Voluntariado - 4_Pezi_Arad';
        mensagem = `Nome: ${formData.nome}\nTelefone: ${formData.telefone}\nEmail: ${formData.email}\nIdade: ${formData.idade}\nTempo Disponível: ${formData.tempoDisponivel}\nÁreas de Interesse: ${formData.areasInteresse || 'Não especificado'}`;
        break;
      default:
        return;
    }

    const mailtoLink = `mailto:adoptiide4pezi.arad@yahoo.com?subject=${encodeURIComponent(assunto)}&body=${encodeURIComponent(mensagem)}`;
    window.location.href = mailtoLink;
    closeForm();
  };

  return (
    <section className="ajude-a-causa">
      <h1>Resgatando corações peludos, salvando vidas..</h1>
      <br />
      <h2>Como Você Pode Fazer a Diferença</h2>
      <p>
        A 4_Pezi_Arad depende do apoio de pessoas generosas como você para continuar seu trabalho vital com os animais abandonados. Aqui estão algumas maneiras de você ajudar:
      </p>
      <div className="botoes-ajuda">
        <button className="botao-adocao" onClick={() => openForm('Adoção')}>Adoção</button>
        <button className="botao-doacao" onClick={() => openForm('Doação')}>Doação</button>
        <button className="botao-voluntariado" onClick={() => openForm('Voluntariado')}>Voluntariado</button>
      </div>

      <div className="modal" style={{ display: 'none' }}>
        <div className="modal-content">
          <span className="close" onClick={closeForm}>&times;</span>
          <h2>Formulário de {formType}</h2>
          <form>
            <label htmlFor="nome">Nome:</label>
            <input type="text" name="nome" id="nome" value={formData.nome} onChange={handleChange} placeholder="Informe seu nome..." required />

            <label htmlFor="telefone">Telefone:</label>
            <input type="text" name="telefone" id="telefone" value={formData.telefone} onChange={handleChange} placeholder="(xx) xxxxx-xxxx" required />

            <label htmlFor="email">Email:</label>
            <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} placeholder="Seu email" required />

            {formType === 'Doação' && (
              <>
                <label htmlFor="valor">Valor da Doação:</label>
                <input type="text" name="valor" id="valor" value={formData.valor} onChange={handleChange} placeholder="Informe o valor..." required />

                <label htmlFor="metodoPagamento">Método de Pagamento:</label>
                <select name="metodoPagamento" id="metodoPagamento" value={formData.metodoPagamento} onChange={handleChange}>
                  <option value="">Selecione um método</option>
                  <option value="transferencia">Transferência Bancária</option>
                  <option value="cartao">Cartão de Crédito</option>
                  <option value="paypal">PayPal</option>
                </select>
              </>
            )}

            {formType === 'Adoção' && (
              <>
                <label htmlFor="idade">Idade:</label>
                <input type="text" name="idade" id="idade" value={formData.idade} onChange={handleChange} placeholder="Sua idade..." required />

                <label htmlFor="tipoAnimal">Tipo de Animal (opcional):</label>
                <input type="text" name="tipoAnimal" id="tipoAnimal" value={formData.tipoAnimal} onChange={handleChange} placeholder="Cachorro, gato, etc." />

                <label htmlFor="motivoAdocao">Motivo da Adoção (opcional):</label>
                <textarea name="motivoAdocao" id="motivoAdocao" value={formData.motivoAdocao} onChange={handleChange} placeholder="Por que deseja adotar um animal?"></textarea>
              </>
            )}

            {formType === 'Voluntariado' && (
              <>
                <label htmlFor="idade">Idade:</label>
                <input type="text" name="idade" id="idade" value={formData.idade} onChange={handleChange} placeholder="Sua idade..." required />

                <label htmlFor="tempoDisponivel">Tempo Disponível (horas por semana):</label>
                <input type="text" name="tempoDisponivel" id="tempoDisponivel" value={formData.tempoDisponivel} onChange={handleChange} placeholder="Horas disponíveis" required />

                <label htmlFor="areasInteresse">Áreas de Interesse (opcional):</label>
                <textarea name="areasInteresse" id="areasInteresse" value={formData.areasInteresse} onChange={handleChange} placeholder="Ex: cuidados com os animais, eventos, administração"></textarea>
              </>
            )}

            <button type="button" onClick={handleSubmit}>Enviar</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default AjudeACausa;
