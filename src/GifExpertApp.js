import userEvent from '@testing-library/user-event';
import React, { useState } from 'react';
import { AddCategory } from './Components/AddCategory';
import { GifGrid } from './Components/GifGrid';

export const GigExpertApp = () =>{

     // const categorias = ['Uno', 'Dos', 'tre']
     const [categorias, setCategorias] = useState(['One Punch'])

//      const handleAdd = () =>{
           
//            //setCategorias( [...categorias,'Cuatro']);
//            setCategorias( cats => [...cats,'cuatro'])
//      }

      return (
            <>
                  <h2>GifExpertApp</h2>
                  <AddCategory setCategorias = { setCategorias }/>
                  <hr />

                  
                  <ol>
                        {
                              categorias.map(cat => 
                                    <GifGrid 
                                    key={cat}
                                    category = {cat}
                                     />
                              )
                        }
                  </ol>
            </>
      );
}