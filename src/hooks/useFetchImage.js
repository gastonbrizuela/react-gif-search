
import React, { useEffect, useState } from 'react'
import { getgif } from '../services/gifService'

export const useFetchImage = (category) => {
    const [img, setImg] = useState([])
    const [isLoading, setIsloading] = useState(true)
    
    const getimage = async() =>{
      const result = await getgif(category);
      setImg(result)
      setIsloading(false)
    }
    useEffect(()=>{
      getimage()
    }, [] )
  return {
    img,
    isLoading
  }
}
