import React from 'react';
import { shallow } from "enzyme"
import { GiftGridItem } from "../../Components/GifGridItem"

describe('Pruebas de <GifGridItem />', () => {
      const title = "El tutulo";
      const url = "http://img.com/elm.jpg";

      test('debe mostrar el componente correctamente', () => {
            
            const wrapper = shallow( <GiftGridItem title={title} url={url}/>);
            expect( wrapper).toMatchSnapshot();
            
      })
      
})
