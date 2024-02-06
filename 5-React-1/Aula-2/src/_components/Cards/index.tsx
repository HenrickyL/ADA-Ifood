import { CardSty } from './styles'; // Atualize o caminho conforme a sua estrutura de diretórios
import {IProduct } from '../../assets/data'

interface IProps{
    product: IProduct,
}
const Card = ({ product }:IProps) => {
  return (
    <CardSty>
      <figure>
        <img className="card-cover" src={`${product.id}.PNG`} alt={product.name} />
        <span className="title">{product.name}</span>
        <figcaption>{product.description}</figcaption>
      </figure>
      {/* {product.discountPercentage > 0 && (
        <> */}
          <div className="discount">{product.discountPercentage}%</div>
          <div className="price">
            <span>R$ {(product.price * (1 - product.discountPercentage / 100)).toFixed(2)}</span>
            <span>R$ {product.price}</span>
          </div>
        {/* </>)} */}
    </CardSty>
  );
};

export { Card };
