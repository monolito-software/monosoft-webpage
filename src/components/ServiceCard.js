import styles from '../styles/components/ServiceCard.module.css';

const ServiceCard = ({title, description, iconSrc}) => {
  return (
    <div className={styles.card}>
      <a className={styles.cardIcon}><img src={iconSrc} alt="Ícone do serviço" /></a>
      <h1 className="heading-3">{title}</h1>
      <p className="smaller-text">{description}</p>
    </div>
  );
};

export default ServiceCard;
