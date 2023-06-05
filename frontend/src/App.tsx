import { Outlet } from 'react-router-dom'
import cart from './assets/shared/desktop/icon-cart.svg'
// import { sampleProducts } from './data'

function App() {
  

  return (
    <div>
      <header className="bg-[#0E0E0E] text-[#fff] h-[50px] flex flex-row items-center justify-around"> 
       
    <p>audiophile</p>
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

      <footer>All rights reserved</footer>
        
    </div>
  )
}

export default App
