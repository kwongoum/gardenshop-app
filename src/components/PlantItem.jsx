import CareScale from './CareScale'
import '../styles/PlantItem.css'

function PlantItem({ id, cover, name, water, light }) {
	
	 function handleClickItem(name){
		 //alert('item:',e)
		 name.preventDefault();
		 alert('item:',name)
	}
	return (
		<li key={id} className='lmj-plant-item' onClick={handleClickItem}>
			<img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`} />
			{name}
			<div>
				<CareScale scaleType='water' scaleValue={water} />
				<CareScale scaleType='light' scaleValue={light} />
			</div>
		</li>
	)
}
export default PlantItem; 