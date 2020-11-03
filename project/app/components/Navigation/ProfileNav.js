import React from 'react';
import { Card, Col, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import defaultAvatar from '../../images/icons/default.png';

const styles = {
  avatar: {
    border: '2px solid #343a40',
    borderRadius: '50%',
    display: 'block',
    height: '100px',
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: '10px',
  },
};
function addColor(e) {
  e.target.style.color = 'grey';
}
function removeColor(e) {
  e.target.style.color = 'black';
}
const ProfileNav = () => {
  return (
    <Card style={{ border: 'none' }}>
      <Row style={{ paddingTop: 125, paddingBottom: 10 }}>
        <img src={defaultAvatar} alt="avatar" style={styles.avatar} />
      </Row>
      <Row>
        <Col className="text-center mt-8">JDoe</Col>
      </Row>
      <Row>
        <div className="btn-group-vertical" role="group" style={{ paddingTop: 50, width: 270 }}>
          <Link to="/profile" className="btn btn-block" onMouseOver={addColor} onMouseLeave={removeColor}>
            Profile
          </Link>
          <Link to="/billing" className="btn btn-block" onMouseOver={addColor} onMouseLeave={removeColor}>
            Billing
          </Link>
          <Link to="/shipping" className="btn btn-block" onMouseOver={addColor} onMouseLeave={removeColor}>
            Shipping
          </Link>
        </div>
      </Row>
    </Card>
  );
};
export default ProfileNav;
