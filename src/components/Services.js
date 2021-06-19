import ServiceCard from './ServiceCard';

import styles from '../styles/components/Services.module.css';

import services from '../../services.json';

const Services = () => {
  return (
    <section id="services" className={styles.servicesContainer}>
      <h1 className="heading-1">Serviços que prestamos.</h1>
      <p id={styles.description} className="normal-text">
        A monosoft irá lhe entregar serviços de qualidade por preços acessíveis
        e garantia de manutenção de até 1 ano.
      </p>
      <div className={styles.servicesCardsContainer}>
        {services.map((service, index) => {
          return (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              iconSrc={service.iconSrc}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Services;
