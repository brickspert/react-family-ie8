import React, { Component } from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import getRouter from 'router/router';

require('./App.css');

export default class App extends Component {
  render() {
    return (
      <div className="ant-layout-ceiling">
        <div className="ant-layout-ceiling">
          <div className="ant-layout-wrapper">
            <ul className="right">
              <li>服务邮箱：service@changan.com</li>
              <li>|</li>
              <li>帮助中心</li>
              <li>|</li>
              <li>客服电话：长安汽车(乘用车、新能源)：400-888-6677</li>
              <li>长安欧尚(商用车)：023-6759-1407 023-6759-1471</li>
            </ul>
          </div>
        </div>
        <div className="ant-layout-header">
          <div className="ant-layout-wrapper">
            <div className="ant-layout-logo" >
              <img src="http://iov.changan.com.cn/cs/static/img/logoAndTitle.png" />
            </div>
            <Menu
              mode="horizontal"
              defaultSelectedKeys={['2']}
              style={{ lineHeight: '64px' }}
            >
              <Menu.Item key="1"><Link to="/">首页</Link></Menu.Item>
              <Menu.Item key="2"><Link to="/device">设备查询</Link></Menu.Item>
            </Menu>
          </div>
        </div>
        <div className="ant-layout-container">
          <div style={{ minHeight: 600 }} >
            <div className="align-middle-center">
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
