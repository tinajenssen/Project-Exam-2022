import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Col from "react-bootstrap/Col";
import placeholder from "../../img/placeholder.png";
import cart from "../../img/cart.png";

function GameItem({ id, name }) {
  return (
    <Col xs={12} sm={6} md={4} lg={3}>
      <div className="game__card">
        <img src={placeholder} alt="cover" className="game__cover" />
        <div className="game__info">
          <div className="game__title">{name}</div>
          <Link to={`cart`} className="cart">
            <img src={cart} alt="add to cart" />
          </Link>
        </div>
        <Link to={`detail/${id}`}>
          <button className="btn--primary">More</button>
        </Link>
      </div>
    </Col>
  );
}

GameItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};

export default GameItem;
