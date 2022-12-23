import { useState } from "react"


export const AddCategory = ({handlerInsert}) => {
    const [ inputValue, setInputValue] = useState('')
    const  handlerOnChange = ({target}) =>{
        setInputValue(target.value)
    }
    const handlerSubmit = (e)=>{
        //verifica que tenga al menos 2 caracteres para buscar
        e.preventDefault();
        if (inputValue.trim().length <= 1) return;
        /**por defecto el set de un usestate tiene un callback el cual
         * le pasa el valor del mismo use state
         * esto ayuda a que no tenga que pasarlo entre propiedades
         */
         handlerInsert(inputValue)
        //setCategories(categories=>([...categories, inputValue]))
        setInputValue('')
    }
return (
    <form
    onSubmit={handlerSubmit}>
        <input
        type='text'
        placeholder='buscar gif'
        onChange={handlerOnChange}
        value={inputValue}/>
    </form>
  )
}
