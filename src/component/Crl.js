

import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



function Crl()
 {
  const settings = {
    dots: false, // Show dots or not
    infinite: true, // Loop infinitely
    speed: 500, // Animation speed
    slidesToShow: 6, // Number of slides to show at once
    slidesToScroll: 1, // Number of slides to scroll at a time
    autoplay: true, // Autoplay the carousel
    autoplaySpeed: 1100, // Autoplay speed (milliseconds)
    responsive: [ // Responsive settings for different screen sizes
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <section className="trusted-by">
      <div className="container" style={{padding:"50px"}}>
        <p className="text-center mb-4" style={{color:"blue"}}>TRUSTED BY ...........</p>
        <Slider {...settings}>
          <div>
            <img src={"https://www.sprih.com/wp-content/uploads/2024/01/Enpro.svg"} alt="Espi" className="img-fluid" />
          </div>
          <div>
            <img src={"https://www.sprih.com/wp-content/uploads/2024/01/INDIGO.svg"} alt="Vindhya" className="img-fluid" />
          </div>
          <div>            
            <img src={"https://www.sprih.com/wp-content/uploads/2024/01/InfoBeans.svg"} alt="Krishnaa Diagnostics" className="img-fluid" />

          </div>
          <div>
            <img src={"https://www.sprih.com/wp-content/uploads/2024/01/Arvind.svg"} alt="Arvind SmartSpaces" className="img-fluid" />
          </div>
          <div>
            <img src={"https://www.sprih.com/wp-content/uploads/2024/01/IIT-Bombay.svg"} alt="Enpro" className="img-fluid" />
          </div>
          <div>
            <img src={"https://www.sprih.com/wp-content/uploads/2024/01/Qualitykiosk.svg"} alt="Government" className="img-fluid" />
          </div>
          <div>
            <img src={"https://www.sprih.com/wp-content/uploads/2024/01/INDIGO.svg"} alt="Indigo" className="img-fluid" />
          </div>
          <div>
            <img src={"https://www.sprih.com/wp-content/uploads/2024/01/Vindhya-e-InfoMedia.svg"} alt="ITI" className="img-fluid" />
          </div>
          <div>
            <img src={"https://www.sprih.com/wp-content/uploads/2024/01/Enpro.svg"} alt="Infosys" className="img-fluid" />
          </div>
        </Slider>
      </div>
    </section>
  );
}

export default Crl;