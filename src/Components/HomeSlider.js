import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import '../SCSS/Slider.scss'
import ImgComp from '../Components/ImgComp'
import i1 from '../SliderImg/hero.png'
import i2 from '../SliderImg/hero2.png'
import i3 from '../SliderImg/hero3.png'


function Slider () {
       // create an array for components to show inside the slider
       let sliderArr = [
       <ImgComp src={i1} />,
       <ImgComp src={i2} />,
       <ImgComp src={i3} />,
    
       ];
       const [x, setX] = useState(0);
       const goLeft = () => {
        // sliderArr.length used so the input can be dynamic
        x === 0 ? setX(-100 * (sliderArr.length - 1)) : setX(x + 100);
       };
       const goRight = () => {
        // sliderArr.length used so the input can be dynamic
        x === -100 * (sliderArr.length - 1) ? setX(0) : setX(x - 100);
        };

    return (
       <div className="slider">
           {sliderArr.map((item, index) => {
               return (
               <div key={index} className="slide" style={{transform: `translateX(${x}%)`}}>
                   {item}
                </div>
           );   
           })};
         {/* add buttons to naviagte slider */}
         <button id="goLeft" onClick={goLeft}>
         <i class="fas fa-arrow-circle-left"></i>
         </button>
         <button id="goRight" onClick={goRight}>
         <i class="fas fa-arrow-circle-right"></i>
         </button>
       </div>
    );
}

export default Slider;