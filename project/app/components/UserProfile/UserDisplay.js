import React from 'react';
import { Row, Col, Card} from 'reactstrap';

const UserDisplay = () => {
    return (
        <Card>
            <Row>
                <Col sm='2' >
                    <div >
                        User Avatar
                    </div>
                    <div class="badge badge-light badge-block">
                        <a href="#" class="badge badge-light">Billing</a>
                    </div>
                    <div class="badge badge-light badge-block">
                        <a href="#" class="badge badge-light">Shipping</a>
                    </div>
                    <div class="badge badge-light badge-block">
                        <a href="#" class="badge badge-light">Security</a>
                    </div>
                </Col>
                <Col sm='10'>
                    <div>
                        First Name: James
                    </div>
                    <div>
                        Last Name: Baldwin
                    </div>
                    <div>
                        Email: JBaldwin@gmail.com
                    </div>
                </Col>
            </Row>
            <Row>
                <div>
                    <Button>Edit Profile</Button>
                </div>
            </Row>
        </Card>
    );
}

export default UserDisplay;