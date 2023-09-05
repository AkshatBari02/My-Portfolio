import "./productCard.css";
import { useState } from "react";

function ProductCard() {
  const [isLiked, setIsLiked] = useState(false);

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div class="shop-container">
      <div class="shop-item">
        <img
          class="shop-photo"
          src={require(`../projectImages/t-shirt.jpg`)}
          alt="t-shirt"
        />
        <div class="shop-txt">
          <h3>
            <b>HRX by Hritik Roshan</b>
          </h3>
          <div class="shop-mid">
            <span class="shop-mid-txt">Training Rapid Dry</span>
            <span
              class={isLiked ? "shop-like-filled" : "shop-like"}
              onClick={handleLikeClick}
            >
              {isLiked ? (
                <img
                  src={require(`../projectImages/wish-removebg-preview.png`)}
                  className="shop-red-heart"
                  alt="liked"
                />
              ) : (
                "\u2661"
              )}
            </span>
            <br />
          </div>
          <br />
          <span>
            <b class="shop-price">Rs.265</b>{" "}
            <strike class="shop-prev-price">Rs.699</strike>
          </span>
          <span class="shop-discount">(52% OFF)</span>
        </div>
        <div class="shop-now">
          <button class="shop-btn">Shop Now!</button>
        </div>
      </div>
    </div>
  );
}
export default ProductCard;
