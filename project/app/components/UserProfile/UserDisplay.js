import React from 'react';
import { Col, FormGroup, Row } from 'reactstrap';
import { Form, Field } from '@availity/form';
import * as yup from 'yup';
import { avDate } from '@availity/yup';
import { DateField } from '@availity/date';

const UserDisplay = () => {
  return (
    <div className="container ml-2">
      <a id="profile"></a>
      <h4>Profile</h4>
      <Form
        initialValues={{
          fname: 'Janet',
          lname: 'Doerby',
          username: 'jdoe',
          email: 'jdoe@gmail.com',
          dob: '2020-11-17',
        }}
        validationSchema={yup.object().shape({
          fname: yup.string().required(),
          lname: yup.string().required(),
          username: yup.string().required(),
          email: yup.string().required(),
          dob: avDate().required(),
        })}
      >
        <FormGroup>
          <Row>
            <Col>
              <Field name="fname" type="text" label="First Name" />
            </Col>
            <Col>
              <Field name="lname" type="text" label="Last Name" />
            </Col>
          </Row>
        </FormGroup>

        <Field name="username" type="text" label="Username" />

        <FormGroup>
          <Field name="email" type="email" label="Email" readOnly />
        </FormGroup>

        <DateField name="dob" label="Date of Birth" />
      </Form>
    </div>
  );
};

export default UserDisplay;
