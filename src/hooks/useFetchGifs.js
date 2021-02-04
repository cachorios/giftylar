
import React, { useEffect, useState } from 'react'
import { getGifts } from '../helpers/getGift';

export const useFetchGifs = (category) => {
      const [state, setstate] = useState({
            data: [],
            loading: true
      });

      useEffect( () =>{
            getGifts(category).then( imgs => {
                  setstate({
                        data: imgs,
                        loading: false
                  })
            });
      }, [category])

      return state;
}
