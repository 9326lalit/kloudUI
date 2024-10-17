// import React from 'react';
// import './Insight.css';

// const Insights = () => {
//   const insightsData = [
//     {
//       title: 'Sustainability',
//       subtitle: 'GHG Basics: What You Should Know',
//       image: '/path/to/ghg-image.svg', // Replace with actual image path
//       readTime: '6 min read',
//     },
//     {
//       title: 'Carbon Accounting',
//       subtitle: 'A Strategic Checklist for Carbon Accounting',
//       image: '/path/to/tree-image.svg', // Replace with actual image path
//       readTime: '7 min read',
//     },
//     {
//       title: 'Sustainability',
//       subtitle: "Breaking Down CSRD's Double Materiality Assessment",
//       image: '/path/to/csrd-image.svg', // Replace with actual image path
//       readTime: '6 min read',
//     },
//   ];

//   return (
//     <div className="insights-container">
//       <div className="insights-header">
//         <h1>Insights</h1>
//         <button className="view-all-btn">View All</button>
//       </div>

//       <div className="insights-grid">
//         {insightsData.map((insight, index) => (
//           <div key={index} className="insight-card">
//             <img
//               style={{ width: "auto", height: "281px", backgroundColor: "pink" , padding:"10px" }}
//               src={insight.image}
//               alt={insight.subtitle}
//             />
//             <div className="insight-text">
//               <span className="insight-category" style={{backgroundColor:"yellow"}}>{insight.title}</span>
//               <h3 style={{fontSize:"22px"}}>{insight.subtitle}</h3>
//               <span className="read-time">{insight.readTime}</span>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Insights;



import React from 'react';
import './Insight.css';

const Insights = () => {
  const insightsData = [
    {
      title: 'Sustainability',
      subtitle: 'GHG Basics: What You Should Know',
      image: 'https://www.sprih.com/wp-content/uploads/2024/09/GHG-Basics-jpeg.webp', // Replace with actual image path
      readTime: '6 min read',
    },
    {
      title: 'Carbon Accounting',
      subtitle: 'A Strategic Checklist for Carbon Accounting',
      image: 'https://www.sprih.com/wp-content/uploads/2024/09/a-minimalist-illustration-of-a-tree-with-green-lea-aQI2yf2-TIWSOlgrSKRc9A-NBr_SJ0ASCayxbPNeagNeQ-jpeg.webp', // Replace with actual image path
      readTime: '7 min read',
    },
    {
      title: 'Sustainability',
      subtitle: "Breaking Down CSRD's Double Materiality Assessment",
      image: 'https://www.sprih.com/wp-content/uploads/2024/09/a-minimal-illustration-of-a-double-materiality-ass-bBr0Yvw2Rp2t6I1lx0qfBQ-ldswMJuFT1-t3Fu9SQP9Og-jpeg.webp', // Replace with actual image path
      readTime: '6 min read',
    },
  ];

  return (
    <div className="insights-container">
      <div className="insights-header">
        <h1>Insights</h1>
        <button className="view-all-btn">View All</button>
      </div>

      <div className="insights-grid">
        {insightsData.map((insight, index) => (
          <div key={index} className="insight-card">
            <img
              className="insight-image"
              src={insight.image}
              alt={insight.subtitle}
            />
            <div className="insight-text">
              <span className="insight-category">{insight.title}</span>
              <h3>{insight.subtitle}</h3>
              <span className="read-time">{insight.readTime}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Insights;
