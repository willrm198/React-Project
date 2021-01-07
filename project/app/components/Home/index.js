import React from 'react';
import { Card } from 'reactstrap';
import Carousel from '../Navigation/Carousel';

const Home = () => {
  return (
    <Card className="m-8">
      <Card className="m-4">
        <Carousel />
      </Card>
    </Card>
  );
};

export default Home;
