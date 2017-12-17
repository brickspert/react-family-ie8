import React, {Component} from 'react';
import { Row, Col } from 'antd';

import Nav from 'components/Nav/Nav';
import getRouter from 'router/router';

export default class App extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col xs={2} sm={4} md={6} lg={8} >col</Col>
                    <Col xs={20} sm={16} md={12} lg={8} >col</Col>
                    <Col xs={2} sm={4} md={6} lg={8} >col</Col>
                </Row>
            </div>
        )
    }
}