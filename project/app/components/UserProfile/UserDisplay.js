import React from 'react';
import { Button, Card, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import ProfileNav from '../Navigation/ProfileNav';

const UserDisplay = () => {
  return (
    <Card className="container">
      <Row style={{ height: 'auto' }}>
        <Col className="col-lg-3">
          <ProfileNav />
        </Col>

        <Col style={{ paddingTop: 115 }}>
          <Card className="shadow p-3 mb-5 bg-white rounded">
            <Form>
              <FormGroup>
                <Row>
                  <Col>
                    <Label>First Name</Label>
                    <Input type="text" value="Janet" />
                  </Col>
                  <Col>
                    <Label>Last Name</Label>
                    <Input type="text" value="Doerby" />
                  </Col>
                </Row>
              </FormGroup>
              <FormGroup>
                <Label>Username</Label>
                <Input type="text" value="jdoe" />
              </FormGroup>
              <FormGroup>
                <Label>Email</Label>
                <Input type="email" value="jdoe@gmail.com" readOnly />
              </FormGroup>
              <FormGroup>
                <Label>Date of Birth</Label>
                <Input type="date" />
              </FormGroup>
            </Form>
            <div style={{ alignSelf: 'center', paddingTop: 50 }}>
              <Button color="secondary">Submit Changes</Button>
            </div>
          </Card>
        </Col>
      </Row>
    </Card>
  );
};

export default UserDisplay;
