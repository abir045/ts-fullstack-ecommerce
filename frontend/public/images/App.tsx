import { Outlet } from 'react-router-dom'
import cart from './assets/shared/desktop/icon-cart.svg'
import logo from '../public/images/logo.svg'

function App() {
  

  return (
    <div>
      <header className="bg-[#0E0E0E] text-[#fff] h-[50px] flex flex-row items-center justify-around"> 
       
    <img src={logo} alt="logo" />

    <ul className="flex justify-around space-x-5 text-[13px] font-bold tracking-[2px] uppercase leading-[25px]">
      
      <li>
        <a href="/home">Home</a>
      </li>
      <li>
        <a href="/headphones">Headphones</a>
      </li>
      <li>
        <a href="/speakers">Speakers</a>
      </li>
      <li>
        <a href="/earphones">Earphones</a>
      </li>


      

    </ul>
    <li className='justify-end'>
        <img src={cart} alt="cart logo" />
      </li>

      </header>
      
      <main >
        <div className=''>
         <Outlet />

        </div>
        
        

      

       
      </main>

      <footer>
        <div className='flex flex-col bg-[#101010] h-[365px] pt-[5%]'>
          <div className='flex justify-between mx-[10%]'>
          
          <img src={logo} alt="logo" />


       <ul className="flex  space-x-5 text-[13px] font-bold tracking-[2px] uppercase leading-[25px]">
      
      <li>
        <a href="/home">Home</a>
      </li>
      <li>
        <a href="/headphones">Headphones</a>
      </li>
      <li>
        <a href="/speakers">Speakers</a>
      </li>
      <li>
        <a href="/earphones">Earphones</a>
      </li>
    </ul>           
      </div>
      
      <div className='flex'>
        <div className='flex flex-col'>

        <p className='font-medium text-[15px] leading-[25px] opacity-50'>
         Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.
        </p>

        <span className='font-bold text-[15px] leading-[25px] opacity-50'>Copyright 2021. All Rights Reserved</span>

      </div>

      <div className='flex'>
        
        
        </div> 

      </div>

      



        </div>
      </footer>
        
    </div>
  )
}

export default App
