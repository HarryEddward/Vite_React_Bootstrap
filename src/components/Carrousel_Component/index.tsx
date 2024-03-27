import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

export default function Carrousel_Component() {
  const [index, setIndex] = useState(0);

  const handleSelect = ({ selectedIndex } : { selectedIndex: number }) => {
    setIndex(selectedIndex);
  };

  const style_img_carousel = {
    width: '100%',
  }

  const style_carousel = {
    
  }

  return (
    <Carousel style={style_carousel}>
      <Carousel.Item>
        <img src='carousel_3.png' style={style_img_carousel}/>
      </Carousel.Item>
      <Carousel.Item>
        <img src='carousel_4.png' style={style_img_carousel}/>
      </Carousel.Item>
    </Carousel>
  );
}