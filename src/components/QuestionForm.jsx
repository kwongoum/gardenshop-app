import { useState } from "react";




function QuestionFault(){
  const  [inputValue, setInputValue]= useState("Entrer ici !")   
  //const isInputError= inputValue.includes('f'); 
  function handleQuestionForm(e){
    e.preventDefault()
}
  function checkValue(value){
    if (!value.includes('f')){

        setInputValue(value)
    }
}
  
    return(<div>
        <form  onSubmit={handleQuestionForm}>
<input placeholder="ENtrer novtre question !" 
  value={inputValue}
  onChange={(e)=> 
       checkValue(e.target.value)
    }
/>  {/*{isInputError && (<p> Pas de lettre f </p>)}*/}
<button type="submit" onClick={()=> alert(inputValue)}> Valider </button>
</form>
  <p>La valeur est:  {inputValue}</p>
    </div>)
}
export default QuestionFault;