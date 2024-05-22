import { useState } from 'react'
import viteLogo from '/vite.svg'
import Banner from './components/Banner';
import Cart from './components/Cart';
import ShoppingList from './components/ShoppingList';
import logo from './assets/logo.png'

function Description(){
   const text =  "Achetez sur ce site  vos plantes revez !"
   const emojis= "😂😃👍 "

  return <p>{text.slice(0,text.length) + emojis} </p>
}
function App() {
  
  const title= "La maison jungle"

  return (
    <div><h6>Hello Avit</h6> 
<Banner >
      <img src={logo} alt='here a logo' className='lmj-logo'/>
        <h1 className='lmj-title'>{title.toUpperCase()}</h1>
  </Banner>   
<Cart />
<Description />
<ShoppingList />
  </div>   
    
  )
}

export default App
