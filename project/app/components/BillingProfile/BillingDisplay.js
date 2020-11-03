import React from 'react';
import { Button, Card, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import ProfileNav from '../Navigation/ProfileNav';

const BillingDisplay = () => {
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
                <Label>Name on Card</Label>
                <Input type="text" value="Janet Doerby" />
              </FormGroup>
              <FormGroup>
                <Label>Billing Address Line 1</Label>
                <Input type="text" value="1234 Jurassic pk" />
              </FormGroup>
              <FormGroup>
                <Label>Billing Address Line 2</Label>
                <Input type="text" value="Unit 423" />
              </FormGroup>
              <FormGroup>
                <Row>
                  <Col>
                    <Label>City</Label>
                    <Input type="text" value="Jacksonville" />
                  </Col>
                  <Col>
                    <Label>State</Label>
                    <Input type="text" value="Florida" />
                  </Col>
                  <Col>
                    <Label>Postal Code</Label>
                    <Input type="number" value="32245" />
                  </Col>
                </Row>
              </FormGroup>
              <FormGroup>
                <Label>Card Number</Label>
                <Input type="number" value="1234567890123456" />
              </FormGroup>
              <FormGroup>
                <Row>
                  <Col>
                    <Label>Card Expiration Month/Year</Label>
                    <Input type="month" />
                  </Col>
                  <Col>
                    <Label>CVV</Label>
                    <Input type="number" />
                  </Col>
                </Row>
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

export default BillingDisplay;
