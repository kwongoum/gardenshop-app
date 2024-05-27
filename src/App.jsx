import { useState, useEffect } from 'react'
import viteLogo from '/vite.svg'
import Banner from './components/Banner';
import QuestionForm from './components/QuestionForm';
import Cart from './components/Cart';
import ShoppingList from './components/ShoppingList';
import logo from './assets/logo.png'
import Footer from './components/Footer';

function Description(){
   const text =  "Achetez sur ce site  vos plantes revez !"
   const emojis= "😂😃👍 "

  return <p>{text.slice(0,text.length) + emojis} </p>
}
function App() {
  
  const title= "La maison jungle"
  //const [cart, setCart] = useState([]) //{name, price}
  const savedCart = localStorage.getItem('cart')
	const [cart, setCart] = useState(savedCart ? JSON.parse(savedCart) : [])
	useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(cart))
	}, [cart])
  
  return (
    <div><h6>Hello Avit</h6> 
<Banner >
      <img src={logo} alt='here a logo' className='lmj-logo'/>
        <h1 className='lmj-title'>{title.toUpperCase()}</h1>
  </Banner>   
<Cart cart={cart} setCart={setCart} />
<Description />
<ShoppingList cart={cart} setCart={setCart} />
<QuestionForm/> <br /><br /><br /><br />
<Footer />

  </div>   
    
  )
}

export default App
