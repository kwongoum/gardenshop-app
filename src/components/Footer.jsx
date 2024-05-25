import { useState } from "react";
import '../styles/Footer.css'
function Footer(){
    const [inputValue, setInputValue]=useState("Entrer votre email !")
    const [error, setError]=useState('')
    
     function handleEmail(e){
        e.preventDefault();
           // alert('il faut arobase !')
            var error= ''

        if (!inputValue.includes('@')){
           // alert('il faut arobase !')
           error= 'il faut arobase !'
        }
        <p> {error}</p>
      }
      function handleInput(e) {
		setInputValue(e.target.value)
	}

	function handleBlur() {
		if (!inputValue.includes('@')) {
			//alert("Attention, il n'y a pas d'@, ceci n'est pas une adresse valide 😥")
            setError('Email invalid !')
		} else{
            setError('')
        }
    }
return (<div>

		<footer className='lmj-footer'>
			<div className='lmj-footer-elem'>
            <p>&copy; 2024 Mon Site Web. Tous droits réservés.</p>
				Pour les passionné·e·s de plantes 🌿🌱🌵
			</div>
			<div className='lmj-footer-elem'>Laissez-nous votre mail :</div>
			<input
				placeholder='Entrez votre mail'
				onChange={handleInput}
				value={inputValue}
				onBlur={handleBlur}
			/> {error && <span style={ {color:'red'}}>{error}</span>}
             <h1 style={{ color: 'red' }}>Titre de l'en-tête</h1>
            <button type="submit" onClick={handleBlur}>Envoyer</button>
		</footer>
	

</div>)

}
export default Footer;