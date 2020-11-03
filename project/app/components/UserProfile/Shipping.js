import React from 'react';
import { Button, Card, Row } from 'reactstrap';
import defaultAvatar from '../../images/icons/default.png';

const styles = {
  userInfo: {
    padding: '20px',
  },
  menuItem: {
    height: '20px',
    color: '#343a40',
    padding: '20px',
    textAlign: 'center',
  },
  avatar: {
    border: '2px solid #343a40',
    borderRadius: '50%',
    display: 'block',
    height: '75px',
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: '10px',
  },
  userame: {
    textAlign: 'center',
    fontSize: 'auto',
    paddingTop: '10px',
    paddingBottom: '40px',
  },
};

const Shipping = () => {
  return (
    <Card className="container">
      <Row style={{ height: 'auto', padding: 25 }}>
        <div className="col-lg-3">
          <div style={{ paddingTop: 50 }}>
            <img src={defaultAvatar} alt="avatar" style={styles.avatar} />
          </div>
          <div style={styles.userame}>JDoe</div>
          <div style={styles.menuItem}> Personal</div>
          <div style={styles.menuItem}> Billing</div>
          <div style={styles.menuItem}> Shipping</div>
        </div>
        <div className="col" style={{ paddingTop: 115 }}>
          <div style={styles.userInfo}>
            <span>Street Name</span>
            <span style={{ paddingLeft: 30 }}> 1234 Acorn Rd </span>
          </div>
          <div style={styles.userInfo}>
            <span>Apartment/Unit</span>
            <span style={{ paddingLeft: 30 }}> 456</span>
          </div>
          <div style={styles.userInfo}>
            <span>Postal Code</span>
            <span style={{ paddingLeft: 30 }}> 32256</span>
          </div>
          <div style={styles.userInfo}>
            <span>City</span>
            <span style={{ paddingLeft: 30 }}> Jacksonville</span>
          </div>
          <div style={styles.userInfo}>
            <span>State</span>
            <span style={{ paddingLeft: 30 }}> Florida</span>
          </div>
          <div style={styles.userInfo}>
            <span>Country</span>
            <span style={{ paddingLeft: 30 }}> USA</span>
          </div>
          <div style={{ paddingLeft: 20 }}>
            <Button color="secondary">Edit</Button>
          </div>
        </div>
      </Row>
    </Card>
  );
};

export default Shipping;
