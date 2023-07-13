
import "./ProductCard.css";
import { Link } from "react-router-dom";

const ProductCard = ({ item }) => {
  return (
    <div>
    
    <div className="divCard">
      <div className="divImgCard">
        <img src={item.img} alt="imagen" className="imgCard" width={125} height={125}/>
      </div>
      <div className="divInfo">
        <h2 className="h2Card">{item.title}</h2>
        <p className="pCard">{item.description}</p>
      </div>
      <div className="divLinkCard">
      <Link to={`/itemDetail/${item.id}`}>
          <button className="buttonCard">
            Ver detalle
          </button>
        </Link>
      </div>
    </div>
  
  
  </div>
  );
};

export default ProductCard;
