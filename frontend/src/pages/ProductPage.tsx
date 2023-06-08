import React from 'react'
import { Helmet } from 'react-helmet-async'
import { useParams } from 'react-router-dom'
import { useGetProductDetailsQuery } from '../hooks/productHooks'
import LoadingBox from '../components/LoadingBox'
import MessageBox from '../components/MessageBox'
import { getError } from '../utils'
import { ApiError } from '../types/ApiError'
import { useGetProductsQuery } from '../hooks/productHooks'
import { Link } from 'react-router-dom'


const ProductPage = () => {

const params = useParams()

const { slug } = params

const {
  data: product,
  isLoading, 
  error,
} = useGetProductDetailsQuery(slug!)

const  { data: products} = useGetProductsQuery()

  return (
    isLoading ?(
      <LoadingBox />
    ) : error ? <MessageBox>{getError(error as ApiError)}</MessageBox> : !product ? (
      <MessageBox>Product not found</MessageBox>
    ) : ( <div className='mx-[10%]'>
     <Helmet>
      <title>Product page</title>
      </Helmet> 
       {/* image and details */}
      <div className='flex  mt-[5%] w-full'>
       <div className='flex w-full'>
        <img className='w-full' src={product.image.desktopProductPage} />
       </div>

       <div className='flex flex-col px-[10%]  items-baseline mt-5 w-full'>
        <span className='text-[#d87d4a] text-[14px] tracking-[10px] leading-[19px] mt-5 '>New Product</span>
        <h2 className='text-[40px] uppercase tracking-[1.428px] leading-[44px] font-bold mt-5'>{product.name}</h2>
        <h3 className='text-[40px] uppercase tracking-[1.428px] leading-[44px] font-bold '>{product.category}</h3>
        <p className='text-[15px] leading-[25px] opacity-50 font-medium w-full mt-5'>{product.description}</p>
        <span className='text-[18px] leading-[25px] tracking-[1.285px] uppercase font-bold mt-5'>$ {product.price}</span>
       {/* mock cart quantity and button */}
       <div className='flex flex-row space-x-5 mt-10'>
         <input className='w-[30%] text-center' type='number' id='quantity' name="quantity" placeholder='1' />
         <button className='bg-[#d87d4a] text-[#fff] uppercase text-[13px] leading-[18px] tracking-[1px] text-center font-bold px-10 h-[48px]'>Add To Cart</button>
       </div>
       </div>
      </div>

      {/* features and details */}

      <div className='flex flex-row mt-[15%] w-full  '>
     <div className='flex flex-col w-full'>
      <h5 className='text-[32px] font-bold leading-[36px] tracking-[1.142px] uppercase'>Features</h5>
      <p className='mt-5 font-medium text-[15px] leading-[25px] opacity-50 w-full'>
        {product.features}
      </p>
     
     </div>
     
     <div className='flex flex-col items-baseline w-full px-[10%] '>
       <h5 className='w-full text-[32px] font-bold leading-[36px] tracking-[1.142px] uppercase mb-5'>In the Box</h5>
        {product.includes.map((item)=> {
         return <div className='flex flex-row space-x-5 pt-2 '>
         <span className='text-[15px] leading-[25px] text-[#d87d4a] font-bold'>{item.quantity}x</span> 
         <p className='text-[15px] leading-[25px] opacity-50 font-medium '>{item.item}</p>

         </div>    
       })}


     </div>


      </div>

   {/* gallery images */}
      <div className='flex  mt-[10%]  space-x-5 '>
      <div className='flex flex-col space-y-6'>
        <img src={product.gallery.first.desktop} alt="gallery image 1" />
        <img src={product.gallery.second.desktop} alt="gallery image 2" />

      </div>
       
      <div className='flex'>
       <img src={product.gallery.third.desktop} alt="gallery image 3" />
      </div>

      </div>

      {/* other products */}
      <div className='flex flex-col mt-[10%]'>

        <h1>You may also like</h1>
       
       <div className='flex w-full space-x-5 mt-[5%]'>
             {products?.slice(2,5).map((product)=> (
              <Link to={'/product/' + product.slug }>
              <img src={product.image.desktop}  /> 
              </Link>
              


             ))   
             
            }
     
         </div>

      </div>

      
      

      
      </div>
           
    )
    
  )
}

export default ProductPage