import styles from '../styles/components/ProductsCarousel.module.css';

const ProductsCarousel = () => {
  return(
    <div className={styles.carouselContainer}>
      <h1 className="heading-2">Monogarçom</h1>
      <div className={styles.content}>
        <img src="/images/products/monogarcom.png" alt="Imagem do MonoGarçom" />
        <p>Duis quis quam non metus mollis congue. Nulla pharetra lectus at mollis rhoncus. Donec vehicula nisl et lacus placerat, vel tincidunt turpis condimentum. Cras elementum ex non massa eleifend laoreet ac ut urna. Aenean quis suscipit massa.</p>
        <button>Saiba mais</button>
      </div>
      <div className={styles.indicator}>. . .</div>
    </div>
  );
}

export default ProductsCarousel;
