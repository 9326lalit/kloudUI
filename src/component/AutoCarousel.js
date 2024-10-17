import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap CSS for the layout
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css'; // Import Swiper's core styles

function AutoCarousel() {
  return (
    <div className="my-4">
      <Swiper
        autoplay={{
          delay: 2000, // Delay between slides in milliseconds
          disableOnInteraction: false, // Keep autoplaying even after user interaction
        }}
        loop={true}
        className="w-100"
      >
        <SwiperSlide className="d-flex justify-content-center align-items-center">
        <div className="bg-dark text-white py-5 px-3 d-flex flex-column align-items-center w-100">
  <div className="container text-center">
    <div className="d-flex align-items-start flex-column flex-md-row">
      <img
        style={{ width: "150px", height: "150px", borderRadius: "50%" }}
        src="https://www.sprih.com/wp-content/uploads/2024/02/Dhruv-Chadda.png"
        alt="Profile"
        className="mb-4 me-3 mb-md-0"
      />
      <div className="text-start ms-4 w-100">
        <p className="lead mb-3 position-relative">
          <span className="display-1 text-success position-absolute" style={{ left: "-40px", top: "-25px" }}>
            &ldquo;
          </span>
          Espi's partnership with Sprih has empowered us to lead the sustainability transformation in our sector, leveraging their robust sustainability planning tools to enhance our strategic vision. Their expert guidance is currently instrumental in our journey towards effectively measuring and surpassing global compliance benchmarks.
        </p>
        <h3 className="fw-bold mb-2">DHRUV CHADDA</h3>
        <p className="text-secondary">Director</p>
        <p className="text-secondary">Espi Industries</p>
      </div>
    </div>
  </div>
</div>
        </SwiperSlide>

        {/* Repeat for other slides */}
        <SwiperSlide className="d-flex justify-content-center align-items-center">
        <div className="bg-dark text-white py-5 px-3 d-flex flex-column align-items-center w-100">
  <div className="container text-center">
    <div className="d-flex align-items-start flex-column flex-md-row">
      <img
        style={{ width: "150px", height: "150px", borderRadius: "50%" }}
        src="https://www.sprih.com/wp-content/uploads/2024/02/Dhruv-Chadda.png"
        alt="Profile"
        className="mb-4 me-3 mb-md-0"
      />
      <div className="text-start ms-4 w-100">
        <p className="lead mb-3 position-relative">
          <span className="display-1 text-success position-absolute" style={{ left: "-40px", top: "-25px" }}>
            &ldquo;
          </span>
          Espi's partnership with Sprih has empowered us to lead the sustainability transformation in our sector, leveraging their robust sustainability planning tools to enhance our strategic vision. Their expert guidance is currently instrumental in our journey towards effectively measuring and surpassing global compliance benchmarks.
        </p>
        <h3 className="fw-bold mb-2">DHRUV CHADDA</h3>
        <p className="text-secondary">Director</p>
        <p className="text-secondary">Espi Industries</p>
      </div>
    </div>
  </div>
</div>
        </SwiperSlide>
        
        <SwiperSlide className="d-flex justify-content-center align-items-center">
        <div className="bg-dark text-white py-5 px-3 d-flex flex-column align-items-center w-100">
  <div className="container text-center">
    <div className="d-flex align-items-start flex-column flex-md-row">
      <img
        style={{ width: "150px", height: "150px", borderRadius: "50%" }}
        src="https://www.sprih.com/wp-content/uploads/2024/02/Dhruv-Chadda.png"
        alt="Profile"
        className="mb-4 me-3 mb-md-0"
      />
      <div className="text-start ms-4 w-100">
        <p className="lead mb-3 position-relative">
          <span className="display-1 text-success position-absolute" style={{ left: "-40px", top: "-25px" }}>
            &ldquo;
          </span>
          Espi's partnership with Sprih has empowered us to lead the sustainability transformation in our sector, leveraging their robust sustainability planning tools to enhance our strategic vision. Their expert guidance is currently instrumental in our journey towards effectively measuring and surpassing global compliance benchmarks.
        </p>
        <h3 className="fw-bold mb-2">DHRUV CHADDA</h3>
        <p className="text-secondary">Director</p>
        <p className="text-secondary">Espi Industries</p>
      </div>
    </div>
  </div>
</div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default AutoCarousel;
