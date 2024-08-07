import React from "react";
import styles from "./ProductItem.module.css";

const ProductItem = () => {
  return (
    <div className={styles.productItem}>
      <img
        src="https://m.media-amazon.com/images/I/61Bh8QlwzWL._SL1500_.jpg"
        alt="Product"
        className={styles.productImage}
      />
      <div className={styles.productInfo}>
        <p className={styles.productName}>Product Name</p>
        <div className={styles.productStars}>
          {/* Example stars */}
          ★★★★☆
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
