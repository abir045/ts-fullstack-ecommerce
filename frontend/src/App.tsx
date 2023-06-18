import { Outlet } from 'react-router-dom'
import cart from './assets/shared/desktop/icon-cart.svg'
import logo from '../public/images/logo.svg'
import facebook from  '../public/images/icon-facebook.svg' ;
import twitter from  '../public/images/icon-twitter.svg' ;
import  insta from  '../public/images/icon-instagram.svg' ;
import { useContext } from 'react';
import { Store } from './Store';
import DarkModeToggle from './components/DarkModeToggle';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { toggleDarkMode } from './features/theme/themeSlice';

function App() {
  const isDarkMode = useAppSelector((state) => state.darkMode.isDarkMode )

  return (
       
      
    //  className={`App ${isDarkMode ? 'dark' : 'light'}` } 
      
      
     <div className={`${isDarkMode ? 'dark-theme'  : 'light-theme'} `}>
     
      <header 
      className="bg-[#0E0E0E]  text-[#fff] h-[50px] flex flex-row items-center justify-around py-10 dark:bg-[#000]"> 
       
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
       <li>
         <DarkModeToggle />
       </li>


      

    </ul>
    <li className='flex justify-end items-center'>
        <img src={cart} alt="cart logo" />
      </li>

      </header>
      
      <main >
        <div className=''>
         <Outlet />

        </div>
        
        

      

       
      </main>


      {/* footer */}

      <footer >
        <div className='flex flex-col bg-[#101010] h-[365px] pt-[5%] text-[#ffffff]'>
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
      
      <div className='flex flex-row mx-[10%] '>
        <div className='flex flex-col'>

        <p className='font-medium text-[15px] leading-[25px] opacity-50 mt-10 w-[50%]' >
         Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.
        </p>

        <span className='font-bold text-[15px] leading-[25px] opacity-50 mt-[5%]'>Copyright 2021. All Rights Reserved</span>

      </div>

      <div className='flex flex-row space-x-5 justify-end mt-[10%]'>
        <img className='w-[24px] h-[24px]' src={facebook} alt="facebook logo" />
        <img className='w-[24px] h-[24px]' src={twitter} alt="twitter logo" />
        <img className='w-[24px] h-[24px]' src={insta} alt="insta logo" />
        
        </div> 

      </div>

        </div>
      </footer>
        
    </div>
  )
}

export default App
