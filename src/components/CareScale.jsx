import Sun from '../assets/sun.svg'
import Water from '../assets/water.svg'
function  CareScale ({scaleValue, scaleType }){
   const values= [1,2,3]
    const scaleTypeImg = scaleType ==='light' ? (
        <img src={Sun} alt='sun-icon' />) :
        (<img src={Water}  alt='water-icon' />)
       
    
    return( 

<div>
       {values.map((v ) => v <= scaleValue? <span key={v.toString()}>{scaleTypeImg}</span> : null)}
        

</div>
    );

}

export default  CareScale; 