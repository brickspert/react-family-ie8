import React, { Component } from 'react';
import { Button, Form, Input } from 'antd';

const createForm = Form.create;
const FormItem = Form.Item;

class Index extends Component {
  handleReset(e) {
    e.preventDefault();
    this.props.form.resetFields();
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.form.validateFields((errors, values) => {
      if (errors) {
        console.log('Errors in form!!!');
        return;
      }
      console.log('Submit!!!');
      console.log(values);
    });
  }

  render() {
    const { getFieldProps } = this.props.form;
    const vinProps = getFieldProps('vin', {
      rules: [
        {
          required: true, min: 17, max: 17, message: 'VIN号为17位',
        },
      ],
    });
    return (
      <Form
        inline
        onSubmit={this.handleSubmit}
        style={{
            width: '300px',
            height: '100px',
            margin: 'auto',
            top: '0',
            left: '0',
            right: '0',
            bottom: '0',
            position: 'absolute',
        }}
      >
        <FormItem wrapperCol={{ span: 24 }}>
          <Input
            addonBefore="VIN"
            size="default"
            placeholder="请输入17位车架号"
            {...vinProps}
          />
        </FormItem>
        <FormItem wrapperCol={{ span: 24, offset: 10 }}>
          <Button type="primary" htmlType="submit">查询</Button>
        </FormItem>
      </Form>
    );
  }
}

export default createForm({})(Index);
