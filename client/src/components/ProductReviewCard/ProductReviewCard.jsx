import React from "react";
import styles from "./ProductReviewCard.module.css"; // Ensure the path is correct

const ProductReviewCard = ({
  imageUrl,
  productLink,
  price,
  review = "There is a review",
  name,
  category,
}) => {
  const trimmedReview =
    review.length > 120 ? review.substring(0, 120) + "..." : review;

  return (
    <div className={styles.card}>
      <img
        src="https://redtape.com/cdn/shop/files/RSO4065_1.jpg?v=1711715382"
        alt="Product"
        className={styles.image}
      />
      <div className={styles.info}>
        <h3 className={styles.productName}>{name} product name</h3>
        <p className={styles.category}>{category} product category</p>
        <a
          href={productLink}
          className={styles.productLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          {productLink} www.amazon.com
        </a>
        <p className={styles.price}>{price} $500 </p>
        <p className={styles.review}>
          {trimmedReview} Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,
          quisquam minima vitae aspernatur itaque quibusdam nam voluptatibus
          voluptate ipsa! Fugiat.
        </p>
      </div>
    </div>
  );
};

export default ProductReviewCard;
