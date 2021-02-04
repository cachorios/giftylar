import React, { useState } from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GiftGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

      const {data: images, loading} = useFetchGifs(category);

      return (
            <>
            <h3 className="animate__animated animate__fadeIn">{ category }</h3>
            { loading && <p className="card-grid animate__animated animate__flash">Cargando</p>}
            <div className="card-grid">
                  { images.map( img => 
                  <GiftGridItem  
                        key = { img.id}
                        {...img} />)}
            </div>
            </>
      )
}
