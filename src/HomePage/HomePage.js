import React from 'react';
import { Container } from 'react-bootstrap';
import SearchBar from '../0_Components/SearchBar';

export default function HomePage() {

  return (

    <>
      <Container>

        {/* For the image */}
        <div>

        </div>

        <div>
          <SearchBar/>
        </div>
        
        <div>
          <p>
                ClimateSmart is a beautiful and simple weather application that displays the weather information, gives travel and clothing recommendations, personalized recommendations weather alerts, and more.  
          </p>  
        </div>
      </Container>
      
    </>
  )
}
