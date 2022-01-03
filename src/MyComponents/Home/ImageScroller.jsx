import React, { useEffect } from 'react'
import './ImageScroller.css'
import './Atsvidcss.css'
import SliderImg1 from '../../Images/1.jpg';
import SliderImg2 from '../../Images/2.jpg';
import SliderImg3 from '../../Images/3.jpg';
import SliderImg4 from '../../Images/BESTCOLLEGE1.jpg';
import SliderImg5 from '../../Images/BESTPRINCIPAL1.jpg';
import SliderImg6 from '../../Images/BESTTEACHER1.jpg';
import SliderImg7 from '../../Images/BESTSTUDENT1.jpg';
export default function ImageScroller() {

  useEffect(() => {
    const interval = setInterval(() => {
      nextImg();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // try {
  //   window.clearInterval(sliderInterval)
  // } catch (err) { }
  // window.sliderInterval = setInterval(() => { nextImg() }, 5000);
  // if (window.sliderInterval != undefined && window.sliderInterval != 'undefined') {
  //   // window.clearInterval(sliderInterval)
  //   alert("Alert")
  // }

  let i = 0, sliderPos = 0;
  let sliderImgSrc = [SliderImg1, SliderImg2, SliderImg3, SliderImg4, SliderImg5, SliderImg6, SliderImg7];
  let imgSlider = [];
  for (i = 0; i < sliderImgSrc.length; i++) {
    imgSlider.push(<img src={sliderImgSrc[i]} className="sliderImgs" alt="Slider" />);
  }
  i = 0;
  return (
    <>
      <div id='ImageScroller' className="ImageScroller">
        <div className="container" id='imgSliderContainer'>
          {imgSlider.map((item, index) => {
            return item
          })}
          {/* <img src={SliderImg1} id="sliderImg" alt="Slider" />
          <img src={SliderImg1} id="sliderImgSmall" alt="Inside Slider" /> */}
        </div>
        <button className='prevNextBtn prevBtn' onClick={prevImg}>&#10096;</button>
        <button className='prevNextBtn nextBtn' onClick={nextImg}>&#10097;</button>
      </div>
    </>
  )
  function nextImg() {
    try {
      // var sliderImg = document.getElementById('sliderImg');
      // var sliderImgSmall = document.getElementById('sliderImgSmall');
      let sliderImgs = document.getElementsByClassName('sliderImgs');
      let imgSliderContainer = document.getElementById('imgSliderContainer');
      if (i === (sliderImgSrc.length - 1)) {
        i = 0;
        sliderPos = 0;
        imgSliderContainer.style.left = sliderPos.toString() + 'vw';
        // sliderImgs[i].style.transform = rotateZ()
      } else {
        i = i + 1;
        sliderPos = sliderPos - 80;
        imgSliderContainer.style.left = sliderPos.toString() + 'vw';
      }
      // sliderImg.style.opacity = "0";
      // sliderImgSmall.style.opacity = "0";
      // setTimeout(() => {
      //   sliderImg.src = sliderImgSrc[i];
      //   sliderImgSmall.src = sliderImgSrc[i];
      //   sliderImgSmall.style.opacity = "1";
      //   sliderImg.style.opacity = "0.7";
      // }, 600);
      // console.log(i);
      console.log("Next " + i + " " + sliderPos);
    } catch (err) { }
  }
  function prevImg() {
    try {
      // var sliderImg = document.getElementById('sliderImg');
      // var sliderImgSmall = document.getElementById('sliderImgSmall');
      let imgSliderContainer = document.getElementById('imgSliderContainer');
      if (i === 0) {
        i = sliderImgSrc.length - 1;
        sliderPos = ((sliderImgSrc.length) * -80) + 80;
        imgSliderContainer.style.left = sliderPos.toString() + 'vw';
      } else {
        i = i - 1;
        sliderPos = sliderPos + 80;
        imgSliderContainer.style.left = sliderPos.toString() + 'vw';
      }
      // sliderImg.style.opacity = "0";
      // sliderImgSmall.style.opacity = "0";
      // setTimeout(() => {
      //   sliderImg.src = sliderImgSrc[i];
      //   sliderImgSmall.src = sliderImgSrc[i];
      //   sliderImgSmall.style.opacity = "1";
      //   sliderImg.style.opacity = "0.7";
      // }, 600);
      // console.log(i);
    } catch (err) { }
  }
}