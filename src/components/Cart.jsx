import { useState, useEffect} from 'react';
import '../styles/Cart.css'

function Cart({cart, setCart}){

   const total= cart.reduce((acc,plant) =>acc+ plant.amount*plant.price,0)

  const[isOpen,setIsOpen]=useState(true)
  useEffect(()=> {

  //  alert(`J'aurai ${total} à payer !`)
    document.title=` J'aurai ${total} à payer ! `
} , [total])

      function clearCart(){
          setCart([])

      }

      {console.log(`Le total DEVIENT: ${total}`)}
return isOpen ?(<div className='lmj-cart'>  
<button onClick={()=> {setIsOpen(false); } }>Fermer le panier </button> 
  
 <h3> Mes achats - Mon panier:</h3>   
       { cart.map(({name,price,amount},index) =>
        (<div key={`${name}-${index}`}> {name}: {price}€ *{amount}</div>)
        )

       }       
    <ul>
  
 </ul>
 
<h3>Total :{total}€</h3>

<button onClick={clearCart}>Vider le panier </button>
 {/*<button onClick={setIsOpen(true)}>Ouvrir</button> */}
  </div>

): (<div><button onClick={() => setIsOpen(true)}>Voir le panier/cart</button> </div>);
  }

        export default Cart



        //==============

        
//=============================
    {/*const carts =[{name: "monstera", price:8 },
          {name:"lierre" , price: 10}, {name: "bouquet de fleurs", price: 15} ]
          const price1=8; 
         
    const[cart,setCart]= useState(1)      
    const[isOpen,setIsOpen]=useState(true)
        function clearCart(){
            setCart(0)

        }
        
        return isOpen ?(<div className='lmj-cart'>  
        {console.log({isOpen})}
          <button onClick={()=> {setIsOpen(false);  console.log({isOpen})} }>Fermer le panier </button> 
          <button onClick={clearCart}>Vider le panier </button>
         <h3> Mes achats - Mon panier:</h3>   
                      
            
            <ul>
          <li>
          "monstera : " {price1} € "- quantite:"{cart}

          </li>
         
         </ul>
         <button onClick={(e)=> setCart(cart+1)}>Ajouter </button>
         <p>Total:{price1 * cart} €</p> 
         {/*<button onClick={setIsOpen(true)}>Ouvrir</button> */}
        {/*
         </div>
        ): (<button onClick={() => setIsOpen(true)}>Voir le panier/cart</button>);
      */}