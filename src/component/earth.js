import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 50vh;
  background-color: #f8f8f8; /* Light gray background */
`;

const EarthIcon = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 2px solid #4CAF50; /* Green border */
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;

  svg { /* Example using inline SVG, replace with your actual SVG */
    width: 60px;
    height: 60px;
  }
`;


const Heading = styled.h2`
  font-family: 'Arial', sans-serif; /* Or your preferred font */
  font-size: 1.5rem;
  color: #333; /* Dark gray text */
  margin-bottom: 20px;
  font-weight: 400;
  text-align: center;
`;

const Subtitle = styled.h3`
  font-style: italic;
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 30px;
  font-weight: 300;
  text-align: center;

`;

const Button = styled.button`
  background-color: #4CAF50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #45a049; /* Darker green on hover */
 }
`;

const Earth = () => {
  return (
    <Container>
      <EarthIcon>
        {/* Your SVG icon here */}
      </EarthIcon>
      <Heading>Heading Text</Heading>
      <Subtitle>Subtitle Text</Subtitle>
      <Button>Call to Action</Button>
    </Container>
  );
};

export default Earth;