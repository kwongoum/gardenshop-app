import { plantList } from '../datas/plantList';
import '../styles/ShoppingList.css'
import CareScale from './CareScale';
import PlantItem from './PlantItem'

/*

const plants =[
    'monstera',
    'ficus lyrata',
    'pothos argenté',
    'yucca',
    'palmier'
]

*/


function ShoppingList(){
    const categories = plantList.reduce(
		(acc, plant) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
		[]
	)

    return (
     
        <div>
			<ul>
				<h3>Les categories: </h3>
				{categories.map((cat) => (
					<li key={cat}>{cat}</li>
				))}
			</ul>

			<ul className='lmj-plant-list'>
				{plantList.map(({ id, cover, name, water, light }) => (
					<PlantItem key={id}
						id={id}
						cover={cover}
						name={name}
						water={water}
						light={light}
					/>
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