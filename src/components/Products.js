import ProductsCarousel from './ProductsCarousel';

import styles from '../styles/components/Products.module.css';

const Products = () => {
  return (
    <section id="products" className={styles.productsContainer}>
      <h1 className="heading-1">Nossos produtos.</h1>
      <p>
        Esses são alguns dos produtos desenvolvidos pela Monosoft, será que
        algum soluciona seus problemas?
      </p>
      <ProductsCarousel />
    </section>
  );
};

export default Products;
