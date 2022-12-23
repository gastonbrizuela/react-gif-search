import React, { useState } from "react";
import { AddCategory, GifGrid} from "./components";

const API_KEY = "T2IqWNaymX7FnHjsKv3PveEp0FNZFhJt"
export const GifExpertApp = () =>{
    const [categories, setCategories] = useState([])

    const handlerInsert = (value)=>{
        if (categories.includes(value)){
            console.log('ya existe')
            return
        }
        setCategories([...categories, value])
    }

    return(
        <>
        <h1>GiExpertApp</h1>
        <AddCategory 
            handlerInsert={handlerInsert}/>
        {categories.map((category)=>(
                <GifGrid category={category} key={category}></GifGrid>
            )

            )}

        </>
        
    )
}