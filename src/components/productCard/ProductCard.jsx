import {
  CartButton,
  PriceRow,
  ProductImage,
  ProductImageMobile,
  ProductSummary,
  Wrapper,
  CurrentPrice,
  OldPrice,
  CartIcon,
} from "./ProductCard.styled";
import productDesktopImage from "../../assets/images/image-product-desktop.jpg";
import productMobileImage from "../../assets/images/image-product-mobile.jpg";
import cartIcon from "../../assets/images/icon-cart.svg";

export default function ProductCard() {
  return (
    <Wrapper>
      <ProductImage src={productDesktopImage} alt="product image" />
      <ProductImageMobile src={productMobileImage} alt="product image" />
      <ProductSummary>
        <h2>PERFUME</h2>

        <h1>Gabrielle Essence Eau De Parfum</h1>

        <p>
          A floral, solar and voluptuous interpretation composed by Olivier
          Polge, Perfumer-Creator for the House of CHANEL.
        </p>

        <PriceRow>
          <CurrentPrice>$149.99</CurrentPrice> <OldPrice>$169.99</OldPrice>
        </PriceRow>

        <CartButton>
          <CartIcon src={cartIcon} alt="cart icon" />
          <p>Add to Cart</p>
        </CartButton>
      </ProductSummary>
    </Wrapper>
  );
}
