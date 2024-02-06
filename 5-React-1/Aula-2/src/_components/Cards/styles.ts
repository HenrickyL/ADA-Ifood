import styled from 'styled-components';
import { Colors } from '../../middleware/Colors';

const CardSty = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  background: ${Colors.backgroundSnd};
  padding: 8px;
  border-radius: 12px;
  width: 12rem;
  border: 2px solid transparent;
  transition: 500ms;

  &:hover {
    border: 2px solid gray;
  }

  figure {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    justify-content: center;
  }

  .title {
    font-size: larger;
    font-weight: bold;
    margin: 4px 0;
  }

  img {
    width: 100%;
    border-radius: 8px;
  }

  .discount {
    background-color: ${Colors.secondary};
    color: ${Colors.white2};
    padding: 5px;
    border-radius: 4px;
    opacity: 95%;
    margin-top: 8px;

    &::after {
      content: "off";
      text-transform: uppercase;
    }
  }

  .price {
    display: flex;
    justify-content: center;
    font-weight: bold;
    font-size: 20px;
    gap: 5px;
    margin-top: 8px;

    span:nth-child(2) {
      text-decoration: line-through;
      color: ${Colors.black3};
      font-size: 16px;
      opacity: 75%;
    }
  }

  /* Estilos de CardImage */
  position: relative;
  overflow: hidden;
  transition: box-shadow 0.3s ease, transform 0.3s ease;
  transform: perspective(100vw) translateZ(0) rotateX(0);
  box-shadow: 0 3px 9px #0003;
  cursor: pointer;

  &:hover {
    transform: perspective(100vmax) translateZ(20px) rotateX(8deg);
    box-shadow: 0 5px 12px #0004;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: transform 0.3s ease;
    background: linear-gradient(#fff0 70%, #fff3 72%, #fff2 100%);
    transform: rotate(-135deg) scale(2);
  }

  &:hover::before {
    transform: rotate(-135deg) scale(3) translateY(-20%);
  }

  .product {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    background: ${Colors.backgroundSnd};
    padding: 8px;
    border-radius: 12px;
    width: 12rem;
    border: 2px solid transparent;
    transition: 500ms;

    &:hover {
      border: 2px solid gray;
    }
  }

  .product figure {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    justify-content: center;
  }

  .product .title {
    font-size: larger;
    font-weight: bold;
    margin: 4px 0;
  }

  .product img {
    width: 100%;
    border-radius: 8px;
  }

  .product .discount {
    background-color: ${Colors.secondary};
    color: ${Colors.white2};
    padding: 5px;
    border-radius: 4px;
    opacity: 95%;
    margin-top: 8px;
  }

  .product .discount::after {
    content: "off";
    text-transform: uppercase;
  }

  .product .price {
    display: flex;
    justify-content: center;
    font-weight: bold;
    font-size: 20px;
    gap: 5px;
    margin-top: 8px;
  }

  .product .price span:nth-child(2) {
    text-decoration: line-through;
    color: ${Colors.black3};
    font-size: 16px;
    opacity: 75%;
  }

  .card-img {
    position: relative;
    overflow: hidden;
    transition: box-shadow 0.3s ease, transform 0.3s ease;
    transform: perspective(100vw) translateZ(0) rotateX(0);
    box-shadow: 0 3px 9px #0003;
    cursor: pointer;

    &:hover {
      transform: perspective(100vmax) translateZ(20px) rotateX(8deg);
      box-shadow: 0 5px 12px #0004;
    }

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      transition: transform 0.3s ease;
      background: linear-gradient(#fff0 70%, #fff3 72%, #fff2 100%);
      transform: rotate(-135deg) scale(2);
    }

    &:hover::before {
      transform: rotate(-135deg) scale(3) translateY(-20%);
    }
  }

  .card-cover {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export { CardSty };
