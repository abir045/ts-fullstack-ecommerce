import { Link } from 'react-router-dom'
import { sampleProducts } from '../data'
import { Product } from '../types/Product'
import { useReducer, useEffect  } from 'react'
import axios from 'axios'
import { getError } from '../utils'
import { ApiError } from '../types/ApiError'
import LoadingBox from '../components/LoadingBox'
import MessageBox from '../components/MessageBox'
import { Helmet } from 'react-helmet-async'
import { useGetProductsQuery } from '../hooks/productHooks'

// type State = {
//   products: Product[]
//   loading: boolean
//   error: string
// }

// type Action = 

// | {type : 'FETCH_REQUEST'}

// | {
//      type:"FETCH_SUCCESS"
//       payload: Product[]
// }

// | { type:'FETCH_FAIL'; payload: string}

// const initialState: State = {
//   products: [] ,
//   loading: true ,
//   error: ''
// }

// const reducer = ( state: State, action: Action) => {
//   switch(action.type) {
//     case 'FETCH_REQUEST': 
//     return { ...state, loading: true} 
//     case "FETCH_SUCCESS": 
//     return  {...state, loading:false , products: action.payload} 
//     case  "FETCH_FAIL":
//      return {...state, loading:false, error: action.payload}  
//     default: 
//     return state
  
//   }
// }

const Home = () => {
  const  { data: products, isLoading, error} = useGetProductsQuery()

  return isLoading? (
    <LoadingBox />
  ) : error ? (
    <MessageBox>
      {getError(error as ApiError)}
    </MessageBox>
  ) :  (
    <div>
      <Helmet>
        <title> audiophile</title>
      </Helmet>
      <div className='flex flex-row bg-[#0E0E0E]'>
         
         <div className='flex flex-col  space-y-5  my-[5%] mx-[10%] '>
          <h3 className='uppercase opacity-50 text-sm leading-[19px] tracking-[10px] text-[#fff]'>
             New Product
             </h3>

                {
          products?.slice(0,1).map((product)=> (
            <div className='text-[#ffffff] '>
            <h1 className='font-bold text-[56px] uppercase leading-[58px] tracking-[2px] mt-5 w-full'>
              {product.name}
            </h1>
            <span className='font-bold text-[56px] uppercase leading-[58px] tracking-[2px]'>{product.category}</span>
            <p className='text-[15px]  opacity-75 leading-[25px] font-medium mt-5'>
              {/* {product.description} */}
              Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.
              </p>

            <button className='mt-10 bg-[#D87D4A] h-[48px] px-6 text-[13px] uppercase leading-[18px] tracking-[1px] font-bold'> See Product</button>
            </div>
            
          ) )
        }
        
        </div>

         <div className='w-full'>
             {products?.slice(0,1).map((product)=> (
              <Link to={'/product/' + product.slug }>
              <img src={product.image.desktop}  /> 
              </Link>
              


             ))   
             
            }
     
         </div>

        </div>

    </div>

      )
}

export default Home