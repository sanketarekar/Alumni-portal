import React from 'react'
import SliderImg1 from '../Images/1.jpg';
import SliderImg2 from '../Images/2.jpg';
import SliderImg3 from '../Images/3.jpg';
import SliderImg4 from '../Images/BESTCOLLEGE1.jpg';
import SliderImg5 from '../Images/BESTPRINCIPAL1.jpg';
import SliderImg6 from '../Images/BESTTEACHER1.jpg';
import SliderImg7 from '../Images/BESTSTUDENT1.jpg';

export default function SliderFrame() {
  // try {
  //   setInterval(nextImg, 5000);
  // } catch (err) { }
  let i = 0, sliderPos = 15;
  let sliderImgSrc = [SliderImg1, SliderImg2, SliderImg3, SliderImg4, SliderImg5, SliderImg6, SliderImg7];
  let imgSlider = [];
  for (i = 0; i < sliderImgSrc.length; i++) {
    imgSlider.push(<img src={sliderImgSrc[i]} className="sliderImgs" alt="Slider" />);
  }
  i = 0;
  return (
    <div className='sliderFrame'>
      <div className="container" id='imgSliderContainer'>
        {imgSlider.map((item, index) => {
          return item
        })}
        {/* <img src={SliderImg1} id="sliderImg" alt="Slider" />
          <img src={SliderImg1} id="sliderImgSmall" alt="Inside Slider" /> */}
      </div>
    </div>
  )
  function nextImg() {
    try {
      let sliderImgs = document.getElementsByClassName('sliderImgs');
      let imgSliderContainer = document.getElementById('imgSliderContainer');
      if (i === (sliderImgSrc.length - 1)) {
        i = 0;
        sliderPos = 0;
      } else {
        i = i + 1;
        sliderPos = sliderPos - 70;
      }
      imgSliderContainer.style.left = sliderPos.toString() + 'vw';
    } catch (err) { }
  }
  function prevImg() {
    try {
      let imgSliderContainer = document.getElementById('imgSliderContainer');
      if (i === 0) {
        i = sliderImgSrc.length - 1;
        sliderPos = ((sliderImgSrc.length) * -70) + 70;
      } else {
        i = i - 1;
        sliderPos = sliderPos + 70;
      }
      imgSliderContainer.style.left = sliderPos.toString() + 'vw';
    } catch (err) { }
  }
}
