import styles from '../styles/components/Header.module.css';

const Header = () => {
  return (
    <>
      <div className={styles.headerContainer}>
        <div className={styles.brandContainer}>
          <img
            src="/images/monolito.svg"
            alt="Ilustração de um Monolito como logomarca."
          />
        </div>
        <div className={styles.linksContainer}>
          <a href="#intro">Início</a>
          <a href="#services">Serviços</a>
          <a href="#products">Produtos</a>
          <a href="#techs">Tecnologias</a>
        </div>
        <a
          href="mailto:contato@monosoft.com.br"
          className={styles.contactButton}
        >
          <span className="button-text" id={styles.contact}>
            Contato
          </span>
        </a>
      </div>
      <div className={styles.separator} />
    </>
  );
};

export default Header;
