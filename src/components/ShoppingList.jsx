import { plantList } from '../datas/plantList';
import '../styles/ShoppingList.css'
import CareScale from './CareScale';
import PlantItem from './PlantItem'
import Categories from './Categories'
import { useState } from 'react';
/*

const plants =[
    'monstera',
    'ficus lyrata',
    'pothos argenté',
    'yucca',
    'palmier'
]

*/


function ShoppingList({cart, setCart}){

	const [activeCategory, setActiveCategory] = useState('')
	const categories = plantList.reduce(
		(acc, plant) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
		[]
	)
	function addPlantToCart(name,price){
		const currentPlantSaved = cart.find((plant) => plant.name === name)
		if (currentPlantSaved) {
			const cartFilteredCurrentPlant = cart.filter(
				(plant) => plant.name !== name
			)
			setCart([
				...cartFilteredCurrentPlant,
				{ name, price, amount: currentPlantSaved.amount + 1 }
			])
		} else {
			setCart([...cart, { name, price, amount: 1 }])
		}

	}
    return (
     
        <div className='lmj-shopping-list'>
			{/*<ul>
				<h3>Les categories: </h3>
				{categories.map((cat) => (
					<li key={cat}>{cat}</li>
				))}
			</ul>*/}


			<Categories
				categories={categories}
				setActiveCategory={setActiveCategory}
				activeCategory={activeCategory}
			/>

			<ul className='lmj-plant-list'>
				{plantList.map(({ id, cover, name, water, light,price }) => (
					<div key={id}><PlantItem 
						id={id}
						cover={cover}
						name={name}
						water={water}
						light={light}
						price= {price}
					/> 
					{/*<button onClick={()=> setCart( cart+1)}>Ajouter</button>*/}
					<button onClick={()=> addPlantToCart(name,price)}>Ajouter</button>
					</div>
				))}
			</ul>
			    {/* <ul className='lmj-plant-list'>
				{plantList.map((plant) => (
					<li key={plant.id} className='lmj-plant-item'>
						{plant.name}
						{plant.isSpecialOffer && <div className='lmj-sales'>Soldes</div>}
						 <CareScale  key={`${plant.id}'light'`} scaleType='light' scaleValue={plant.light}/>
						 <CareScale  key={`${plant.id}'water'`} scaleType='water' scaleValue={plant.water} />
					</li>
				))}
			</ul> */}
		</div>
    );


}

export default ShoppingList;