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

const Security = () => {
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
          <div style={styles.menuItem}> Secutity</div>
        </div>
        <div className="col" style={{ paddingTop: 115 }}>
          <div style={styles.userInfo}>
            <span>First Name</span>
            <span style={{ paddingLeft: 30 }}> Janet </span>
          </div>
          <div style={styles.userInfo}>
            <span>Last Name</span>
            <span style={{ paddingLeft: 30 }}> Doerby</span>
          </div>

          <div style={styles.userInfo}>
            <span>Username</span>
            <span style={{ paddingLeft: 30 }}> JDoe</span>
          </div>
          <div style={styles.userInfo}>
            <span>Email Address</span>
            <span style={{ paddingLeft: 30 }}> Jdoe@gmail.com</span>
          </div>
          <div style={{ paddingLeft: 20 }}>
            <Button color="secondary">Edit</Button>
          </div>
        </div>
      </Row>
    </Card>
  );
};

export default Security;
