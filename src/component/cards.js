import React from 'react';
import './cards.css'; // Import your custom styles

const Cards = () => {
  return (
    <div className="spri-container">
      <div className="spri-header">
        <h2>What you can do with <span>Spri</span></h2>
      </div>
      
      <div className="spri-cards row">
        {/* MEASURE Card */}
        <div className="col-6 col-md-2 offset-md-1 card-item">
        <h4>MEASURE</h4>
          <img src="/path-to-icon/measure-icon.png" alt="Measure" className="icon" />
          
          <div className="card-content">
            <img src="/path-to-card-image/measure-card.png" alt="Measure" />
          </div>
        </div>

        {/* BENCHMARK Card */}
        <div className="col-6 col-md-2 card-item">
        <h4>BENCHMARK</h4>
          <img src="/path-to-icon/benchmark-icon.png" alt="Benchmark" className="icon" />
          
          <div className="card-content">
            <img src="/path-to-card-image/benchmark-card.png" alt="Benchmark" />
          </div>
        </div>

        {/* PLAN Card */}
        <div className="col-6 col-md-2 card-item">
        <h4>PLAN</h4>
          <img src="/path-to-icon/plan-icon.png" alt="Plan" className="icon" />        
          <div className="card-content">
            <img src="/path-to-card-image/plan-card.png" alt="Plan" />
          </div>
        </div>

        {/* REPORT Card */}
        <div className="col-6 col-md-2 card-item">
        <h4>REPORT</h4>
          <img src="/path-to-icon/report-icon.png" alt="Report" className="icon" />
          
          <div className="card-content">
            <img src="/path-to-card-image/report-card.png" alt="Report" />
          </div>
        </div>

        {/* EXCHANGE Card */}
        
        <div className="col-6 col-md-2 card-item">
        <h4>EXCHANGE</h4>
          <img src="/path-to-icon/exchange-icon.png" alt="Exchange" className="icon" />
          <div className="card-content">
            <img src="/path-to-card-image/exchange-card.png" alt="Exchange" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
