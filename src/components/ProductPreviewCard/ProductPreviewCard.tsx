import styles from "./ProductPreviewCard.module.css";

export default function ProductPreviewCard() {
  return (
    <article className={styles.ProductCard}>
      <img
        className={styles.ProductImage}
        src="/image-product-desktop.jpg"
        alt="Eau De Parfum by Gabrielle Essense. Perfume Bottle."
      />
      <section className={styles.ProductContent}>
        <div className={styles.TextContainer}>
          <p className={`TextPresetFour ${styles.ProductTag}`}>PERFUME</p>
          <h2 className={`TextPresetOne ${styles.ProductTitle}`}>
            Gabrielle Essence Eau De Parfum
          </h2>
          <p className={`TextPresetThree ${styles.ProductDescription}`}>
            A floral, solar and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of CHANEL.
          </p>
        </div>
        <div className={styles.Pricings}>
          <p className={`TextPresetOne ${styles.ProductPrice}`}>$149.99</p>
          <p className={`TextPresetFive ${styles.ProductDiscount}`}>
            <del>$169.99</del>
          </p>
        </div>
        <button
          className={styles.AddToCartBtn}
          aria-label="Add Gabrielle Essence to cart"
        >
          <img src="/icon-cart.svg" alt="Add to cart icon" />
          <p className={`TextPresetTwo ${styles.AddCartText}`}>Add to Cart</p>
        </button>
      </section>
    </article>
  );
}
