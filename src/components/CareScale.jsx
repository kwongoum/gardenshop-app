
function  CareScale ({scaleValue, scaleType}){
   const values= [1,2,3]
    const scaleTypeImg =scaleType ==='light'?'🌞':'💧' 
    
    return( 

<div>
       {values.map((v ) => v <= scaleValue? <span key={v.toString()}>{scaleTypeImg}</span> : null)}
        

</div>
    );

}

export default  CareScale; 