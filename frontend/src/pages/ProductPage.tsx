import React from 'react'
import { Helmet } from 'react-helmet-async'
import { useParams } from 'react-router-dom'
import { useGetProductDetailsQuery } from '../hooks/productHooks'
import LoadingBox from '../components/LoadingBox'
import MessageBox from '../components/MessageBox'
import { getError } from '../utils'
import { ApiError } from '../types/ApiError'

const ProductPage = () => {

const params = useParams()

const { slug } = params

const {
  data: product,
  isLoading, 
  error,
} = useGetProductDetailsQuery(slug!)


  return (
    isLoading ?(
      <LoadingBox />
    ) : error ? <MessageBox>{getError(error as ApiError)}</MessageBox> : !product ? (
      <MessageBox>Product not found</MessageBox>
    ) : ( <div>
     <Helmet>
      <title>Product page</title>
      </Helmet> 
       {/* image and details */}
      <div className='flex  mx-[5%] mt-[5%]'>
       <div>
        <img className='w-[70%]' src={product.image.desktopProductPage} />
       </div>

       <div className='flex flex-col items-baseline mt-5'>
        <span className='text-[#d87d4a] text-[14px] tracking-[10px] leading-[19px] mt-5 '>New Product</span>
        <h2 className='text-[40px] uppercase tracking-[1.428px] leading-[44px] font-bold mt-5'>{product.name}</h2>
        <h3 className='text-[40px] uppercase tracking-[1.428px] leading-[44px] font-bold '>{product.category}</h3>
        <p className='text-[15px] leading-[25px] opacity-50 font-medium w-[60%] mt-5'>{product.description}</p>
        <span className='text-[18px] leading-[25px] tracking-[1.285px] uppercase font-bold mt-5'>${product.price}</span>
       {/* mock cart quantity and button */}
       <div className='flex flex-row space-x-5 mt-10'>
         <input className='w-[30%] text-center' type='number' id='quantity' name="quantity" placeholder='1' />
         <button className='bg-[#d87d4a] text-[#fff] uppercase text-[13px] leading-[18px] tracking-[1px] text-center font-bold px-10 h-[48px]'>Add To Cart</button>
       </div>
       </div>
      </div>

      {/* features and details */}

      <div className='flex mt-[15%] mx-[5%]'>
     <div className='flex flex-col'>
      <h5 className='text-[32px] font-bold leading-[36px] tracking-[1.142px] uppercase'>Features</h5>
      <p className='mt-5 font-medium text-[15px] leading-[25px] opacity-50 w-[40%]'>
        {product.features}
      </p>
     
     </div>
     
     <div className='flex flex-col items-baseline'>
       <h5 className='w-full text-[32px] font-bold leading-[36px] tracking-[1.142px] '>In the Box</h5>



     </div>


      </div>
      
      </div>
           
    )
    
  )
}

export default ProductPage