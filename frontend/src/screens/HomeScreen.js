import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import axios from "axios";
import Product from "../components/Product";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../action/productAction";
import Message from "../components/Message";
import Loader from "../components/Loader";
import Loading from "../components/Loading";

const HomeScreen = () => {
  // const [products,setProducts] = useState([])
  // useEffect(()=>{
  //   const fetchProducts = async()=>{
  //     // const {data} = await axios.get('/api/products')

  //     setProducts(data)
  //   }
  //   fetchProducts()
  // },[])

  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <>
      <h1>Latest Products</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row>
          {products.map((product) => {
            return (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            );
          })}
        </Row>
      )}
      {/* <Row>
        {products.map((product) => {
          return (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          );
        })}
      </Row> */}
    </>
  );
};

export default HomeScreen;
