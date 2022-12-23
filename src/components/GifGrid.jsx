

import React, { useEffect, useState} from 'react'
import { useFetchImage } from '../hooks/useFetchImage'
import { GifItem } from './GifItem'

export const GifGrid = ({ category }) => {
    const {img, isLoading} = useFetchImage(category)
    
  return (
    <>
      <h3>{category}</h3>
      {
        isLoading&&
        <h2>cargando...</h2>
      }
      
      <div className='card-grid'>
      {img.map( (image) =>(
        <GifItem id={image.id} {...image}/>
      ))}
      </div>
    </>
  )
}
