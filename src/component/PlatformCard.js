import React from 'react';
import './PlatformCard.css';

const PlatformCard = () => {

  const solutions = [
    {
      icon: '📦', // Replace this with actual icon components if needed
      title: 'Solution 1',
      description: 'This is the description for solution 1.',
    },
    {
      icon: '⚙️',
      title: 'Solution 2',
      description: 'This is the description for solution 2.',
    },
    {
      icon: '🚀',
      title: 'Solution 3',
      description: 'This is the description for solution 3.',
    },
  ];

  // const image="https://www.klipfolio.com/sites/all/themes/klipfolio_theme/img/kvo-dashboards/dashboard-command-centre.png";

  return (
    <>
      

      <div className="bg-white pt-8 pb-0 mb-0 w-full flex flex-col items-center" style={{height:'100%'}}>
  {/* Title Section */}
  <h2 className="text-center text-3xl md:text-4xl font-semibold mb-8 text-[#062E3D] container2">
    The Sprih <span className="text-[#53FFB3]">Platform</span>
  </h2>

  {/* Image Section */}
  <div className="flex justify-center video container1">
    <div className="wave">
      <video src="https://www.sprih.com/wp-content/uploads/2024/02/home-page-1.mp4" className="max-w-5xl w-full rounded-md shadow-lg" autoPlay loop muted />
    </div>
  </div>
  {/* Features Section */}
  <div
    className="w-full flex flex-col items-center bg-[#062E3D] text-white px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24"
    style={{ paddingTop: '250px', paddingBottom: '150px' }}
  >
    <h3 className="text-center text-2xl md:text-3xl lg:text-4xl font-medium mb-8">
      What you can do with <span className="text-[#53FFB3]">Sprih</span>
    </h3>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 md:gap-8 text-center">
      {/* Card 1 */}
      <div className="card glass-effect bg-white text-black p-4 md:p-6 rounded-lg shadow-lg">
        <div className="card__content">
          <p className="card__title font-semibold text-base md:text-lg mb-4 sm:text-sm md:text-base lg:text-lg xl:text-xl">
            Card Title
          </p>
          <p className="card__description text-sm sm:text-xs md:text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>

      {/* Repeat for more cards */}
      <div className="card glass-effect bg-white text-black p-4 md:p-6 rounded-lg shadow-lg">
        <div className="card__content">
          <p className="card__title font-semibold text-base md:text-lg mb-4 sm:text-sm md:text-base lg:text-lg xl:text-xl">
            Card Title
          </p>
          <p className="card__description text-sm sm:text-xs md:text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>

      <div className="card glass-effect bg-white text-black p-4 md:p-6 rounded-lg shadow-lg">
        <div className="card__content">
          <p className="card__title font-semibold text-base md:text-lg mb-4 sm:text-sm md:text-base lg:text-lg xl:text-xl">
            Card Title
          </p>
          <p className="card__description text-sm sm:text-xs md:text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>

      <div className="card glass-effect bg-white text-black p-4 md:p-6 rounded-lg shadow-lg">
        <div className="card__content">
          <p className="card__title font-semibold text-base md:text-lg mb-4 sm:text-sm md:text-base lg:text-lg xl:text-xl">
            Card Title
          </p>
          <p className="card__description text-sm sm:text-xs md:text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>

      <div className="card glass-effect bg-white text-black p-4 md:p-6 rounded-lg shadow-lg">
        <div className="card__content">
          <p className="card__title font-semibold text-base md:text-lg mb-4 sm:text-sm md:text-base lg:text-lg xl:text-xl">
            Card Title
          </p>
          <p className="card__description text-sm sm:text-xs md:text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </div>
  </div>

  {/* Tailored Solutions Section */}
  <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md md:max-w-2xl lg:max-w-3xl md:p-6 lg:p-8">
    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Tailored Solutions</h1>
    <h2 className="text-lg md:text-xl lg:text-2xl">by Sprih</h2>
    <div className="flex flex-wrap justify-center md:justify-between">
      {solutions.map((solution, index) => (
        <div key={index} className="w-full md:w-1/2 lg:w-1/3 p-4">
          <div className="mb-4">{solution.icon}</div>
          <h3 className="text-lg font-bold mb-2">{solution.title}</h3>
          <p className="text-sm">{solution.description}</p>
        </div>
      ))}
    </div>
  </div>
</div>



    </>
  );
};

export default PlatformCard;
