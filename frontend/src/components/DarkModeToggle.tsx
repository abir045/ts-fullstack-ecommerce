
// import  {useDispatch , useSelector} from 'react-redux'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { toggleDarkMode } from '../features/theme/themeSlice'



const DarkModeToggle = () => {
    const dispatch = useAppDispatch()
    const isDarkMode = useAppSelector((state) => state.darkMode.isDarkMode )
  
    const handleToggle = () => {
        dispatch(toggleDarkMode())
    }
  
  
    return (
    <div 
     className={`theme-container ${isDarkMode ? 'dark-theme' && 'height:100vh' : 'light-theme' && 'height:100vh'} `}
    
    >
      <button onClick={handleToggle} >
         {isDarkMode? 'Light Mode' : 'Dark Mode'}
      </button>

    </div>
  )
}

export default DarkModeToggle