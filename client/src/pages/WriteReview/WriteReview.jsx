import React, { useState } from 'react';
import styles from './WriteReview.module.css';

const WriteReview = () => {
  const [productName, setProductName] = useState('');
  const [brand, setBrand] = useState('');
  const [link, setLink] = useState('');
  const [stars, setStars] = useState(0);
  const [review, setReview] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the submit logic here
  };

  return (
    <div className={styles.container}>
      <div className={styles.leftSide}>
        <form onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <label htmlFor="productName">Product Name</label>
            <input
              id="productName"
              type="text"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="brand">Brand</label>
            <input
              id="brand"
              type="text"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="link">Product Link</label>
            <input
              id="link"
              type="text"
              value={link}
              onChange={(e) => setLink(e.target.value)}
            />
          </div>
        </form>
      </div>
      <div className={styles.rightSide}>
        <div className={styles.stars}>
          <label>Rating</label>
          <select value={stars} onChange={(e) => setStars(e.target.value)}>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <div className={styles.review}>
          <label htmlFor="reviewText">Review</label>
          <textarea
            id="reviewText"
            rows="5"
            value={review}
            onChange={(e) => setReview(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </div>
    </div>
  );
};

export default WriteReview;
