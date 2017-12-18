import React, { Component } from 'react';
import { Menu, Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';
import getRouter from 'router/router';

require('./App.css');

export default class App extends Component {
  render() {
    return (
      <div className="ant-layout-top">
        <div className="ant-layout-header">
          <div className="ant-layout-wrapper">
            <Menu
              mode="horizontal"
              defaultSelectedKeys={['2']}
              style={{ lineHeight: '64px' }}
            >
              <Menu.Item key="1"><Link to="/">首页</Link></Menu.Item>
              <Menu.Item key="2"><Link to="/page1">Page1</Link></Menu.Item>
              <Menu.Item key="3"><Link to="/counter">Counter</Link></Menu.Item>
              <Menu.Item key="4"><Link to="/userinfo">UserInfo</Link></Menu.Item>
            </Menu>
          </div>
        </div>
        <div className="ant-layout-wrapper">
          <div className="ant-layout-breadcrumb">
            <Breadcrumb>
              <Breadcrumb.Item>首页</Breadcrumb.Item>
              <Breadcrumb.Item>应用列表</Breadcrumb.Item>
              <Breadcrumb.Item>某应用</Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <div className="ant-layout-container">
            <div style={{ height: 210 }} >
              {getRouter()}
            </div>
          </div>
        </div>
        <div className="ant-layout-footer">
                Ant Design 版权所有 © 2015 由蚂蚁金服体验技术部支持
        </div>
      </div>
    );
  }
}
