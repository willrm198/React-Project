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

const billing = () => {
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
            <span>Card Number</span>
            <span style={{ paddingLeft: 30 }}> 1234 5678 9101 1121 </span>
          </div>
          <div style={styles.userInfo}>
            <span>Name on Card</span>
            <span style={{ paddingLeft: 30 }}> Janet Doerby</span>
          </div>

          <div style={styles.userInfo}>
            <span>CVV</span>
            <span style={{ paddingLeft: 30 }}> 123</span>
          </div>
          <div style={styles.userInfo}>
            <span>Expiration Date</span>
            <span style={{ paddingLeft: 30 }}> 10/22</span>
          </div>
          <div style={styles.userInfo}>
            <span>Billing Address</span>
            <span style={{ paddingLeft: 30 }}> 1234 Acorn Rd unit 123</span>
          </div>
          <div style={styles.userInfo}>
            <span> Postal Code</span>
            <span style={{ paddingLeft: 30 }}> 32209</span>
          </div>
          <div style={styles.userInfo}>
            <span> City</span>
            <span style={{ paddingLeft: 30 }}> Jacksonville</span>
          </div>
          <div style={styles.userInfo}>
            <span> State</span>
            <span style={{ paddingLeft: 30 }}> Florida</span>
          </div>
          <div style={styles.userInfo}>
            <span> Country</span>
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

export default billing;
