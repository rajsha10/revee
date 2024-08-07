import React from "react";
import styles from "./Feed.module.css";
import ProductItem from "../../components/ProductItem/ProductItem";
import ProductReviewCard from "../../components/ProductReviewCard/ProductReviewCard";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectWallet } from "../../features/wallet/walletSlice";

const Feed = () => {
  const wallet = useSelector(selectWallet);
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!wallet.isConnected) {
      navigate("/connect-wallet"); // Redirect to Connect Wallet if not connected
    }
  }, [wallet.isConnected, navigate]);
  return (
    <div className={styles.container}>
      <div className={styles.searchPanel}>
        <input
          type="text"
          className={styles.searchInput}
          placeholder="Check what's hot today"
        />
        <button className={styles.writeReviewButton}>Write Review</button>
      </div>
      <div className={styles.productScroll}>
        {/* Example product item */}

        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        {/* Repeat product items as needed */}
      </div>

      <div className={styles.reviewProductsSection}>
        <h2> some popular reviews </h2>
        <div className={styles.reviewProducts}>
          <ProductReviewCard />
          <ProductReviewCard />
          <ProductReviewCard />
          <ProductReviewCard />
        </div>
      </div>
    </div>
  );
};

export default Feed;
