import '../styles/Cart.css'

function Cart(){
    const carts =[{name: "monstera", price:8 },
          {name:"lierre" , price: 10}, {name: "bouquet de fleurs", price: 15} ]
          const price1=8; 
          const price2=10; 
          const price3=15; 
        return (<div className='lmj-cart'>  
         <h3> Mes achats - Mon panier:</h3>      
             <ul >
          <li>
          "monstera", {price1} €

          </li>
          <li>
          "lierre" , {price2} €

          </li>
          <li>
          "bouquet de fleurs", {price3} €

          </li>
          
         </ul>
         <p>Total:{price1+price2+price3} €</p> 
         
         </div>
        );
        }

        export default Cart