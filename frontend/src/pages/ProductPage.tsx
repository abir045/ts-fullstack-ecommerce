import React from 'react'
import { Helmet } from 'react-helmet-async'
import { useParams } from 'react-router-dom'
import { useGetProductDetailsQuery } from '../hooks/productHooks'
import LoadingBox from '../components/LoadingBox'

const ProductPage = () => {

const params = useParams()

const {slug} = params

const {
  data: product,
  isLoading, 
  error,
} = useGetProductDetailsQuery(slug!)


  return (
    isLoading ?(
      <LoadingBox />
    ) : 
    <div>
     <Helmet>
      <title>Product page</title>
      </Helmet> 
      
      ProductPage</div>
  )
}

export default ProductPage