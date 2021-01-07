import React from 'react';
import { Col, Form, FormGroup, Input, Label, Row } from 'reactstrap';

const Shipping = () => {
  return (
    <div className="container ml-2">
      <a id="shipping">
        <hr />
      </a>
      <h4>Shipping</h4>
      <Form>
        <FormGroup>
          <Label>Name</Label>
          <Input type="text" value="Janet Doerby" />
        </FormGroup>
        <FormGroup>
          <Label>Address Line 1</Label>
          <Input type="text" value="1234 Jurassic pk" />
        </FormGroup>
        <FormGroup>
          <Label>Address Line 2</Label>
          <Input type="text" value="1234 Jurassic pk" />
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
      </Form>
    </div>
  );
};

export default Shipping;
