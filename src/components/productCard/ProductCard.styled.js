import styled from "styled-components";
import { NEUTRAL, PRIMARY } from "../../constants";

export const Wrapper = styled.section`
  display: flex;
  width: 600px;
  height: 450px;
  background-color: ${NEUTRAL.white};
  border-radius: ${10 / 16}rem;

  @media (max-width: 400px) {
    width: 100%;
    flex-direction: column;
    height: auto;
    margin: 1rem;
  }
`;

export const ProductImage = styled.img`
  width: 300px;
  height: 450px;

  @media (max-width: 400px) {
    display: none;
  }
`;

export const ProductImageMobile = styled.img`
  display: none;
  width: auto;
  height: 240px;
  object-fit: cover;
  border-radius: ${10 / 16}rem ${10 / 16}rem 0 0;

  @media (max-width: 400px) {
    display: block;
  }
`;

export const ProductSummary = styled.div`
  margin: ${32 / 16}rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h1 {
    font-family: "Fraunces";
    font-style: normal;
    font-weight: 700;
    color: ${NEUTRAL.veryDarkBlue};
    font-size: ${32 / 16}rem;
    line-height: ${32 / 16}rem;
  }

  h2 {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 500;
    color: ${NEUTRAL.darkGrayishBlue};
    font-size: ${12 / 16}rem;
    line-height: ${15 / 16}rem;
    letter-spacing: 5px;
  }

  p {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 500;
    color: ${NEUTRAL.darkGrayishBlue};
    font-size: ${14 / 16}rem;
    line-height: ${23 / 16}rem;
  }

  @media (max-width: 400px) {
    gap: 1rem;
  }
`;

export const PriceRow = styled.div`
  display: flex;
  align-items: center;
  gap: ${20 / 16}rem;
`;

export const CurrentPrice = styled.h3`
  font-family: "Fraunces";
  font-style: normal;
  font-weight: 700;
  color: ${PRIMARY.darkCyan};
  font-size: ${32 / 16}rem;
  line-height: ${32 / 16}rem;
`;
export const OldPrice = styled.p`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  color: ${NEUTRAL.darkGrayishBlue};
  font-size: ${13 / 16}rem;
  line-height: ${23 / 16}rem;
  text-decoration: line-through;
`;
export const CartButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${12 / 16}rem;
  background-color: ${PRIMARY.darkCyan};
  width: 236px;
  height: 48px;
  border-radius: ${8 / 16}rem;

  p {
    color: ${NEUTRAL.white};
    font-family: "Montserrat";
    font-style: normal;
    font-size: ${14 / 16}rem;
    font-weight: 700;
    line-height: ${17 / 16}rem;
  }
`;

export const CartIcon = styled.img`
  height: 1rem;
`;
