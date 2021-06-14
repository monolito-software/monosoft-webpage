import styles from '../styles/components/Footer.module.css';

const Footer = () => {
  return (
    <section className={styles.footerContainer}>
      <div className={styles.socialMedia}>
        <a href="https://facebook.com/monolito-software">
          <img src="/icons/facebook.svg" alt="Ícone do Facebook" />
        </a>
        <a href="https://linkedin.com/in/monolito-software">
          <img src="/icons/linkedin.svg" alt="Ícone do LinkedIn" />
        </a>
        <a href="https://instagram.com/monolito-software">
          <img src="/icons/instagram.svg" alt="Ícone do Instagram" />
        </a>
      </div>
      <p className={styles.copyrightText}>
        Copyright © 2021 Monolito Software.
      </p>
      <a href="mailto:contato@monosoft.com.br" className={styles.contactButton}>
        <span className="button-text">
          Contato
        </span>
      </a>
    </section>
  );
};

export default Footer;
