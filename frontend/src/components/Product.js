import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "./Rating";

// Instead of atag we used Link to  This prevents reloading of webpage
// The href attribute would trigger a page refresh which would reset the application states.
//However the link and navlink of react-router doesn't trigger a page refresh.
//Since React is used to create single page applications most of the time make sure you choose Link or Navlink when working with routing

const Product = ({ product }) => {
  return (
    <Card className="my-3 p-0 rounded">
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} variant="top" />
      </Link>

      <Card.Body>
        {/* redirect to ProductScreen  */}
        <Link to={`/product/${product._id}`}>
          <Card.Title as='div'>
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>

        <Card.Text as="div">
          <Rating
            value={product.rating}
            text={` ${product.numReviews} reviews`}
          />
         
        </Card.Text>
        <Card.Text as="h3">&#8377; {product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
