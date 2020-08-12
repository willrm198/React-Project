import React from 'react';
import { Card, Row, Col, Button } from 'reactstrap';
import NavBar from '../Navigation/NavBar';
import Carousel from '../Navigation/Carousel';

const Home = ({ history }) => {

    const onProfileClick = () => {
        return history.push('/profile');
    }

    return (
        <Card className='m-8'>
            <NavBar />
            <Card className='m-4'>
                <Carousel />
            </Card>
        </Card>
    );
}

export default Home;