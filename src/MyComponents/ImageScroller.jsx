import React from 'react'
import './ImageScroller.css'
import SliderImg1 from '../Images/1.jpg';
import SliderImg2 from '../Images/2.jpg';
import SliderImg3 from '../Images/3.jpg';
import SliderImg4 from '../Images/BESTCOLLEGE1.jpg';
import SliderImg5 from '../Images/BESTPRINCIPAL1.jpg';
import SliderImg6 from '../Images/BESTTEACHER1.jpg';
import SliderImg7 from '../Images/BESTSTUDENT1.jpg';
export default function ImageScroller() {
  setInterval(nextImg, 5000);
  let i = 0;
  let sliderImgSrc = [SliderImg1, SliderImg2, SliderImg3, SliderImg4, SliderImg5, SliderImg6, SliderImg7];
  return (
    <div className="ImageScroller">
      <div className="container">
        <img src={SliderImg1} id="sliderImg" alt="Slider" />
        <img src={SliderImg1} id="sliderImgSmall" alt="Inside Slider" />
        <button className='prevNextBtn prevBtn' onClick={prevImg}>&#10096;</button>
        <button className='prevNextBtn nextBtn' onClick={nextImg}>&#10097;</button>
      </div>
    </div>
  )
  function nextImg() {
    var sliderImg = document.getElementById('sliderImg');
    var sliderImgSmall = document.getElementById('sliderImgSmall');
    if (i === (sliderImgSrc.length - 1)) {
      i = 0;
    } else {
      i = i + 1;
    }
    sliderImg.style.opacity = "0";
    sliderImgSmall.style.opacity = "0";
    setTimeout(() => {
      sliderImg.src = sliderImgSrc[i];
      sliderImgSmall.src = sliderImgSrc[i];
      sliderImgSmall.style.opacity = "1";
      sliderImg.style.opacity = "0.7";
    }, 600);
    // console.log(i);
  }
  function prevImg() {
    var sliderImg = document.getElementById('sliderImg');
    var sliderImgSmall = document.getElementById('sliderImgSmall');
    if (i === 0) {
      i = sliderImgSrc.length - 1;
    } else {
      i = i - 1;
    }
    sliderImg.style.opacity = "0";
    sliderImgSmall.style.opacity = "0";
    setTimeout(() => {
      sliderImg.src = sliderImgSrc[i];
      sliderImgSmall.src = sliderImgSrc[i];
      sliderImgSmall.style.opacity = "1";
      sliderImg.style.opacity = "0.7";
    }, 600);
    // console.log(i);
  }
}