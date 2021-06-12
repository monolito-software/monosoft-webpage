import styles from '../styles/components/Intro.module.css';

const Intro = () => {
  const monosoftPhoneNumber = '5521999999999';
  const messageToSend =
    'Olá, me chamo ... e gostaria de saber mais sobre os serviços oferecidos da Monosoft para ... .';

  return (
    <div className={styles.intro}>
      <section className={styles.introTextContainer}>
        <h1 className="heading-1">Modernize agora mesmo seu negócio!</h1>
        <p className="normal-text">
          Desenvolvemos soluções modernas para o sua empresa, diga-nos seu
          problema e lhe entregaremos a solução.
        </p>
        <div className={styles.socialMediaButtons}>
          <a href="https://facebook.com/monolito-software">
            <img src="/icons/facebook.svg" alt="Ícone do Facebook" />
          </a>
          <a href="https://linkedin.com/in/monolito-software">
            <img src="/icons/linkedin.svg" alt="Ícone do LinkedIn" />
          </a>
          <a href="https://instagram.com/monolito-software">
            <img src="/icons/instagram.svg" alt="Ícone do Instagram" />
          </a>
          <a
            id={styles.whatsappButton}
            href={`https://wa.me/${monosoftPhoneNumber}?text=${messageToSend}`}
          >
            <img src="/icons/whatsapp.svg" alt="Ícone do WhatsApp" />
            <span className="button-text">Fale conosco</span>
          </a>
        </div>
      </section>
      <section className={styles.illustration}>
        <img
          src="/images/illustration.svg"
          alt="Ilustração de aparelhos eletrônicos"
        />
      </section>
    </div>
  );
};

export default Intro;
