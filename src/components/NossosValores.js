import React from "react";
import image from '../assets/image.png';  
import image3 from '../assets/image3.png';  
import image2 from '../assets/image2.png';  

function NossosValores(){
  return(
    <section>
      <div className='conteudo'>
        <h1>
          Empatia e Respeito
        </h1>
        <div className="valores">
          <p>
            Tratamos todos os animais com amor, compaixão e respeito, reconhecendo seu direito a uma vida digna e feliz. Acreditamos que cada ser vivo merece cuidado e consideração, e nossa abordagem se baseia na empatia para entender e atender às necessidades de cada animal que resgatamos.
          </p>
          <img className="valores-imagem" src={image} alt="Imagem de Fundo"/>
        </div>
        <h1>Transparência</h1>
        <div className="valores">
          <img className="valores-imagem" src={image3} alt="Imagem de Fundo"/>
          <p>
          Mantemos operações transparentes e responsáveis, garantindo que nossos recursos sejam usados da melhor maneira possível para o benefício dos animais. Acreditamos que a honestidade e a abertura são fundamentais para ganhar a confiança de nossos apoiadores e da comunidade, e nos esforçamos para manter todos informados sobre nossas atividades e finanças.
          </p>

        </div>
        <h1>
          Compromisso e Dedicação
        </h1>
        <div className="valores">
          <p>
          Estamos comprometidos em fazer a diferença na vida dos animais e nos dedicamos incansavelmente à nossa missão. Nossa equipe é composta por indivíduos apaixonados e dedicados que trabalham arduamente todos os dias para garantir que cada animal resgatado tenha uma chance de um futuro melhor. Este compromisso se reflete em cada ação que realizamos, desde o resgate até a reabilitação e adoção.
          </p>
          <img className="valores-imagem" src={image2} alt="Imagem de Fundo"/>
        </div>
      </div>
    </section>

  )
   
}
export default NossosValores;