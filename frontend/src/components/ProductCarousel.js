import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Carousel, Image } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from './Loader'
import Message from './Message'
import { listTopProducts } from '../action/productAction'

const ProductCarousel = () => {
  const dispatch = useDispatch()

  const productTopRated = useSelector((state) => state.productTopRated)
  const { loading, error, products } = productTopRated

  useEffect(() => {
    dispatch(listTopProducts())
  }, [dispatch])

  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant='danger'>{error}</Message>
  ) : (
    <Carousel pause='hover' className='bg-dark'>
      {products.map((product) => (
        <Carousel.Item key={product._id}>
          <Link style={{ textDecoration: 'none' }} to={`/product/${product._id}`}>
            <Carousel.Caption className='carousel-caption'>
              <h2>
                {product.name} (&#8377;{product.price})
              </h2>
            </Carousel.Caption>
            <Image src={product.image} alt={product.name} fluid className='d-block mt-0 p-1' />

          </Link>
        </Carousel.Item>
      ))}
    </Carousel>
  )
}

export default ProductCarousel