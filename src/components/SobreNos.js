import React from 'react';
import image from '../assets/image-inicial.png';  


function SobreNos() {
  return (
    <section>
      <div className='imagem-inicial'>
        <img src={image} alt="Imagem de Fundo"/>
      </div>
      
      <div className='conteudo'>
        <h1>Bem-vindo ao 4_Pezi_Arad</h1>
        <p>
          4_Pezi_Arad, temos um compromisso inabalável com o bem-estar dos animais. Resgatamos e cuidamos de animais abandonados, proporcionando a eles um lar temporário seguro e acolhedor. Nossa equipe dedicada trabalha incansavelmente para garantir que cada animal receba cuidados médicos de qualidade, alimentação adequada e muito carinho durante sua estadia conosco.
          <br /><br />
          Nosso principal objetivo é encontrar famílias amorosas e responsáveis que estejam dispostas a oferecer um lar permanente para esses animais. Acreditamos que cada bichinho merece uma chance de ser feliz e amado, e fazemos tudo ao nosso alcance para que isso se torne realidade.
          <br /><br />
          Além do resgate e reabilitação, também nos empenhamos em educar a comunidade sobre a importância da adoção responsável e do cuidado adequado com os animais. Promovemos campanhas de conscientização e eventos comunitários para envolver as pessoas em nossa causa e encorajar a adoção e o voluntariado.
          <br /><br />
          Nossa missão vai além de salvar vidas; queremos criar um mundo onde todos os animais sejam tratados com respeito e dignidade. Na 4_Pezi_Arad, cada ato de bondade faz a diferença, e juntos, podemos transformar a vida de muitos animais necessitados.
        </p>
      </div>
    </section>
  );
}

export default SobreNos;
