import React from 'react';
import { Col, Form, FormGroup, Input, Label, Row } from 'reactstrap';

const billing = () => {
  return (
    <div className="container ml-2">
      <a id="billing">
        <hr />
      </a>
      <h4>Billing</h4>
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
    </div>
  );
};

export default billing;
