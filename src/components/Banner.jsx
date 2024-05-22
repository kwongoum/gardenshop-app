import { Children } from 'react';
import logo from '../assets/logo.png'
import '../styles/Banner.css'


function Banner({Children}){

    const title= "La maison jungle"
    return <div   className='lmj-banner'>
{Children}
        
    </div>
   /* return (<div   className='lmj-banner'>

       <img src={logo} alt='here a logo' className='lmj-logo'/>
        <h1 className='lmj-title'>{title.toUpperCase()}</h1>
    </div>) */
}
export default Banner;