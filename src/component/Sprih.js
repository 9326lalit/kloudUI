import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 70px;

  @media (max-width: 768px) { /* Adjust breakpoint as needed */
    flex-direction: column;
    align-items: center;
  }
`;

const Card = styled.div`
  width: 300px;
  margin: 20px;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #f8f8f8; /* Light background */

  @media (max-width: 768px) {
    width: 90%;
    margin: 10px 0;
  }
`;

const Title = styled.h2`
  font-size: 1.5em;
  margin-bottom: 10px;
  color: #333; /* Darker text color */
`;

const Text = styled.p`
  font-size: 1em;
  line-height: 1.5;
  color: #555; /* Slightly lighter text color */
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 100px; /* Adjust height as needed */
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
`;


const Sprih = () => {
  const cards = [
    {
      title: 'Attract Conscious Investors',
      text: 'Attract and retain investment by showcasing your commitment to sustainable growth, transparent practices, and robust sustainability planning.',
     image: 'https://www.sprih.com/wp-content/uploads/2024/01/Attract-Conscious-Investors.svg' 
    },
    {
      title: 'Drive Market Success',
      text: 'Turn your sustainability initiatives into a model of sustainable efficiency, outperform competitors and meet the demands of a sustainability-conscious market.',
      image: 'https://www.sprih.com/wp-content/uploads/2024/01/Drive-Market-Success.svg'
    },
    {
      title: 'Value with Sustainability',
      text: 'Make data-driven decisions to optimize sustainability investments. Maximize environmental impact and business outcomes.',
      image: 'https://www.sprih.com/wp-content/uploads/2024/01/Profit-from-Sustainability.svg'
    },
    {
      title: 'Be Future-ready',
      text: 'Stay agile and ahead of regulatory changes. Sprih equips you to effortlessly adapt, reducing compliance risks and business uncertainties.',
      image: 'https://www.sprih.com/wp-content/uploads/2024/01/Be-Future-ready-2.svg'
    },
  ];

  return (
    <div>
      <h1 style={{textAlign:"center"}}>Why Choose <span style={{fontFamily:"IBM Plex Sans", color:"pink" , fontWeight:"bold"}}>Sprih?</span></h1>
      <Container>
        {cards.map((card, index) => (
          <Card key={index}>
            <ImageContainer>
              <Image src={card.image} alt={card.title} />
            </ImageContainer>
            <Title>{card.title}</Title>
            <Text>{card.text}</Text>
          </Card>
        ))}
      </Container>
    </div>
  );
};

export default Sprih;